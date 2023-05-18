import "./scss/index.scss";
const allImages = require.context(
  "./img/",
  true,
  /\.(png|jpe?g|gif|svg|webp)$/
);
const allFonts = require.context("./fonts/", true, /\.(woff2|ttf)$/);

import { format } from "date-fns";

function toggleMenuOn() {
  if (document.querySelector(".aside").dataset.shown === "false") {
    document.querySelector(".aside").setAttribute("data-shown", "true");
    document.querySelector("#transparent-background").style.display = "block";
  }
}
function toggleMenuOff() {
  if (document.querySelector(".aside").dataset.shown === "true") {
    document.querySelector(".aside").setAttribute("data-shown", "false");
    document.querySelector("#transparent-background").style.display = "none";
  }
}

document.querySelector("#menu-btn").addEventListener("click", toggleMenuOn);
document
  .querySelector("#transparent-background")
  .addEventListener("click", toggleMenuOff);

function toggleTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");
}

document.querySelector("#theme-toggle").addEventListener("click", toggleTheme);

class Task {
  constructor(text) {
    this.text = text;
    this.isDone = false;
  }

  toggle() {
    this.isDone = !this.isDone;
  }
}

class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
    this.datetime = new Date();
  }

  changeName(newName) {
    this.name = newName;
  }

  addTask(text) {
    const t = new Task(text);
    this.tasks.push(t);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }

  get tasksUnfinished() {
    let result = 0;
    for (let task of this.tasks) {
      if (task.isDone === false) {
        result++;
      }
    }
    return result;
  }

  get percentComplete() {
    let numberOfTasksDone = 0;
    for (let task of this.tasks) {
      if (task.isDone === true) {
        numberOfTasksDone++;
      }
    }
    return Math.round((numberOfTasksDone / this.tasks.length) * 100) || 0;
  }
}

const filesystem = {
  projects: [],
  logbook: {
    projects: [],
    deleteProject: function (index) {
      this.projects.splice(index, 1);
    },
  },
  createProject: function (name) {
    const p = new Project(name);
    this.projects.push(p);
    return p;
  },
  deleteProject: function (index) {
    this.projects.splice(index, 1);
  },
  renameProject: function (index, newName) {
    this.projects[index].changeName(newName);
  },
  moveToLogbook: function (index) {
    const p = this.projects.splice(index, 1)[0];
    this.logbook.projects.push(p);
    return p;
  },
};

const user = {
  createNewProject: function (name) {
    const p = filesystem.createProject(name);
    const i = filesystem.projects.indexOf(p);
    renderSidebar();
    renderMain(i);
  },
  createNewTask: function (indexOfProject, text) {
    filesystem.projects[indexOfProject].addTask(text);
    renderSidebar();
    replaceProject(indexOfProject, renderProject(indexOfProject));
  },
};

function renderSidebar() {
  const aside = document.querySelector(".aside");
  const myProjects = aside.querySelector(".my-projects");
  let totalTasksUnfinished = 0;

  myProjects.innerHTML = "";
  myProjects.innerHTML += `<h6 class="my-projects-heading">My projects</h6>`;
  for (let project of filesystem.projects) {
    if (project.tasksUnfinished > 0) {
      myProjects.innerHTML += `
        <button class="button aside__item" data-index="${filesystem.projects.indexOf(
          project
        )}">
        <p>${project.name}</p>
        <div class="aside__indicator">${project.tasksUnfinished}</div>
        </button>
      `;
    } else {
      myProjects.innerHTML += `
        <button class="button aside__item" data-index="${filesystem.projects.indexOf(
          project
        )}">
        <p>${project.name}</p>
        </button>
      `;
    }
    totalTasksUnfinished += project.tasksUnfinished;
  }
  myProjects.innerHTML += `
    <button class="button aside__item" id="new-project-btn">
    <p>New project</p>
    <div class="aside__indicator"></div>
    </button>
  `;

  aside.querySelector(".aside__indicator").textContent = totalTasksUnfinished;
}

function renderProject(i, flag) {
  let project = filesystem.projects[i];
  if (flag === "log") {
    project = filesystem.logbook.projects[i];
  }

  const section = document.createElement("section");
  section.classList.add("section");
  section.dataset.index = i;
  section.innerHTML += `
    <div class="section__header">
      <h3 class="section__title">${project.name}</h3>
      <button class="button section__opt section--add-task">
        <p>New task</p>
        <div class="icon section__opt__icon"></div>
      </button>
      <button class="button section__opt section--delete">
        <p>Delete project</p>
        <div class="icon section__opt__icon"></div>
      </button>
    </div>
  `;

  for (let task of project.tasks) {
    const i = project.tasks.indexOf(task);

    let selector = "task";
    if (task.isDone === true) {
      selector = "task task--checked";
    }

    section.innerHTML += `
      <div class="${selector}" data-index="${i}">
        <div class="button task__tick"></div>
        <p class="button task__text">${task.text}</p>
      </div>
    `;
  }

  section.innerHTML += `
    <div class="section__subtext">
      <p class="section__subtext__completion">${
        project.percentComplete
      }% completed</p>
      <p class="section__subtext__date">${
        "Created on " + format(project.datetime, "EEE dd-MM-yyyy HH:mm")
      }</p>
    </div>
  `;
  return section;
}

function replaceProject(i, newProject) {
  const oldProject = document.querySelector(`.section[data-index="${i}"]`);
  oldProject.replaceWith(newProject);
}

function renderMain(flag) {
  const mainContainer = document
    .querySelector(".main")
    .querySelector(".container");
  mainContainer.innerHTML = "";

  if (typeof flag === "number") {
    document
      .querySelector(".main")
      .querySelector(".container")
      .appendChild(renderProject(flag));
  } else if (flag === "all") {
    mainContainer.innerHTML += `<h2 class="main__title">My tasks</h2>`;
    for (let i = 0; i < filesystem.projects.length; i++) {
      document
        .querySelector(".main")
        .querySelector(".container")
        .appendChild(renderProject(i));
    }
  } else if (flag === "log") {
    mainContainer.innerHTML += `<h2 class="main__title">Logbook</h2>`;
    for (let i = 0; i < filesystem.logbook.projects.length; i++) {
      document
        .querySelector(".main")
        .querySelector(".container")
        .appendChild(renderProject(i, "log"));
    }
  }
}

function renderNewProject() {
  const mainContainer = document
    .querySelector(".main")
    .querySelector(".container");
  mainContainer.innerHTML = "";
  mainContainer.innerHTML += `<h2 class="main__title">New project</h2>`;
  const section = document.createElement("section");
  section.classList.add("section");
  section.innerHTML += `
    <div class="section__header">
      <form autocomplete="off">
        <input class="section__title" type="text" id="project-name-field" maxlength="30" placeholder="Enter name">
        <button type="submit" id="project-submit-btn" class="button section__opt section--add-task">
          <p>Create new project</p>
          <div class="section__opt__icon icon"></div>
        </button>
      </form>
    </div>
  `;
  mainContainer.appendChild(section);
}

filesystem.createProject("Chores");
filesystem.projects[0].addTask("Do laundry");
filesystem.projects[0].addTask("Wash the dishes");
filesystem.projects[0].addTask("Feed the cat");
filesystem.projects[0].tasks[1].toggle();
filesystem.createProject("Super project!!!");
filesystem.projects[1].addTask("Make tea");
filesystem.projects[1].addTask("Drink tea");
filesystem.projects[1].tasks[0].toggle();

renderSidebar();
renderMain("all");

function asideClickHandler(event) {
  const theButton = event.target.closest(".button");

  if (theButton.dataset.index) {
    const i = parseInt(theButton.dataset.index);
    renderMain(i);
  } else if (theButton.id === "all-tasks-btn") {
    renderMain("all");
  } else if (theButton.id === "logbook-btn") {
    renderMain("log");
  }

  if (theButton.id === "theme-toggle") {
    const text = theButton.querySelector("p").innerHTML;
    if (text === "Switch to Dark theme") {
      theButton.querySelector("p").innerHTML = "Switch to Light theme";
    } else {
      theButton.querySelector("p").innerHTML = "Switch to Dark theme";
    }
  }

  if (theButton.id === "new-project-btn") {
    renderNewProject();
  }

  toggleMenuOff();
}

document.querySelector(".aside").addEventListener("click", (event) => {
  if (
    event.target.classList.contains("button") ||
    event.target.parentElement.classList.contains("button")
  ) {
    asideClickHandler(event);
  }
});

function clearTrash() {
  document.querySelectorAll(".task__delete-button").forEach((btn) => {
    btn.remove();
  });
  document.querySelectorAll("form.task").forEach((el) => {
    el.remove();
  });
}

function mainClickHandler(event) {
  const theButton = event.target.closest(".button");

  if (theButton.classList.contains("task__text")) {
    clearTrash();
    const trashIcon = document.createElement("div");
    trashIcon.classList.add("task__delete-button", "button");
    theButton.parentElement.appendChild(trashIcon);
  } else if (
    theButton.getAttribute("type") === "submit" ||
    theButton.classList.contains("new-task")
  ) {
    // don't clear trash
  } else {
    clearTrash();
  }

  if (theButton.id === "project-submit-btn") {
    event.preventDefault();
    const name = document.querySelector(".main").querySelector("input").value;
    const regex = /^\S.*\S$/;
    if (regex.test(name)) {
      user.createNewProject(name);
    }
  }

  if (
    theButton.classList.contains("section--add-task") &&
    theButton.id !== "project-submit-btn"
  ) {
    const newTask = document.createElement("form");
    newTask.classList.add("task", "new-task", "button");
    newTask.setAttribute("autocomplete", "off");
    newTask.innerHTML = `
      <div class="button task__tick"></div>
      <input type="text" maxlength="99" id="new-task-text" placeholder="Enter task">
      <button type="submit" class="button section__opt" id="task-submit-btn"></button>
    `;
    const theSection = theButton.closest("section");
    theSection.insertBefore(newTask, theSection.querySelector(".task"));
    theSection.querySelector("input").select();
  }

  if (theButton.id === "task-submit-btn") {
    event.preventDefault();
    const tasktext = document.querySelector("#new-task-text").value;
    const regex = /^\S.*\S$/;
    if (regex.test(tasktext)) {
      const indexOfProject = parseInt(
        theButton.closest(".section").dataset.index
      );
      user.createNewTask(indexOfProject, tasktext);
    }
  }
}

document.querySelector(".main").addEventListener("click", (event) => {
  if (
    event.target.classList.contains("button") ||
    event.target.parentElement.classList.contains("button")
  ) {
    mainClickHandler(event);
  } else {
    clearTrash();
  }
});
