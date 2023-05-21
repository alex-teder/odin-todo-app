import "./scss/index.scss";
const allImages = require.context(
  "./img/",
  true,
  /\.(png|jpe?g|gif|svg|webp)$/
);
const allFonts = require.context("./fonts/", true, /\.(woff2|ttf)$/);
import { format } from "date-fns";

const menu = {
  toggleMenuOn() {
    if (document.querySelector(".aside").dataset.shown === "false") {
      document.querySelector(".aside").setAttribute("data-shown", "true");
      document.querySelector("#transparent-background").style.display = "block";
    }
  },

  toggleMenuOff() {
    if (document.querySelector(".aside").dataset.shown === "true") {
      document.querySelector(".aside").setAttribute("data-shown", "false");
      document.querySelector("#transparent-background").style.display = "none";
    }
  },
};

document
  .querySelector("#menu-btn")
  .addEventListener("click", menu.toggleMenuOn);
document
  .querySelector("#transparent-background")
  .addEventListener("click", menu.toggleMenuOff);

class Task {
  constructor(text, isDone = false) {
    this.text = text;
    this.isDone = isDone;
  }

  toggle() {
    this.isDone = !this.isDone;
  }
}

class Project {
  constructor(name, tasks = [], datetime) {
    this.name = name;
    this.tasks = tasks;
    this.datetime = datetime || format(new Date(), "EEE dd-MM-yyyy HH:mm");
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
  createProject: function (name, tasks, datetime) {
    const p = new Project(name, tasks, datetime);
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

const storage = {
  clear: function () {
    localStorage.clear();
  },
  save: function () {
    let acc = [];
    for (const project of filesystem.projects) {
      const p = {
        name: project.name,
        datetime: project.datetime,
        tasks: [],
      };
      for (const task of project.tasks) {
        const t = {
          text: task.text,
          isDone: task.isDone,
        };
        p.tasks.push(t);
      }
      acc.push(p);
    }
    localStorage.setItem("data", JSON.stringify(acc));
    acc = [];
    for (const project of filesystem.logbook.projects) {
      const p = {
        name: project.name,
        datetime: project.datetime,
        tasks: [],
      };
      for (const task of project.tasks) {
        const t = {
          text: task.text,
        };
        p.tasks.push(t);
      }
      acc.push(p);
    }
    localStorage.setItem("logbook", JSON.stringify(acc));
  },
  load: function () {
    const arr =
      JSON.parse(localStorage.getItem("data")) ||
      JSON.parse(
        `[{"name":"Chores","datetime":"Thu 18-05-2023 21:30","tasks":[{"text":"Do laundry","isDone":false},{"text":"Wash the dishes","isDone":true},{"text":"Feed the cat","isDone":false}]},{"name":"Super project!!!","datetime":"Thu 18-05-2023 21:30","tasks":[{"text":"Make tea","isDone":true},{"text":"Drink tea","isDone":false}]}]`
      );
    for (const p of arr) {
      const tasks = [];
      for (const task of p.tasks) {
        tasks.push(new Task(task.text, task.isDone));
      }
      filesystem.createProject(p.name, tasks, p.datetime);
    }
    const logArr = JSON.parse(localStorage.getItem("logbook")) || [];
    for (const p of logArr) {
      const tasks = [];
      for (const task of p.tasks) {
        tasks.push(new Task(task.text, true));
      }
      filesystem.logbook.projects.push(new Project(p.name, tasks, p.datetime));
    }
  },
};

const user = {
  createNewProject: function (name) {
    const p = filesystem.createProject(name);
    const i = filesystem.projects.indexOf(p);
    storage.save();
    display.renderSidebar();
    display.renderMain(i);
  },
  deleteProject: function (indexOfProject) {
    filesystem.deleteProject(indexOfProject);
    storage.save();
    display.renderSidebar();
    display.renderMain("all");
  },
  createNewTask: function (indexOfProject, text) {
    filesystem.projects[indexOfProject].addTask(text);
    storage.save();
    display.renderSidebar();
    display.rerenderProject(
      indexOfProject,
      display.renderProject(indexOfProject)
    );
  },
  deleteTask: function (indexOfProject, indexOfTask) {
    filesystem.projects[indexOfProject].deleteTask(indexOfTask);
    storage.save();
    display.renderSidebar();
    display.rerenderProject(
      indexOfProject,
      display.renderProject(indexOfProject)
    );
  },
  toggleTask: function (indexOfProject, indexOfTask) {
    filesystem.projects[indexOfProject].tasks[indexOfTask].toggle();
    storage.save();
    display.renderSidebar();
    display.rerenderProject(
      indexOfProject,
      display.renderProject(indexOfProject)
    );
  },
  pushToLogbook: function (indexOfProject) {
    filesystem.moveToLogbook(indexOfProject);
    storage.save();
    display.renderSidebar();
    display.renderMain("all");
  },
  deleteFromLogbook: function (indexOfProject) {
    filesystem.logbook.deleteProject(indexOfProject);
    storage.save();
    display.renderSidebar();
    display.renderMain("log");
  },
};

const display = {
  renderSidebar: function () {
    const aside = document.querySelector(".aside");
    const namechanger = document.querySelector(".aside__namechanger");
    if (localStorage.getItem("username")) {
      namechanger.innerHTML = `
        <p class="button" id="username"><b>Hello, ${localStorage.getItem(
          "username"
        )}!</b></p>
      `;
    } else {
      namechanger.innerHTML = `
        <form autocomplete="off">
          <input type="text" id="username-field" placeholder="Enter your name..." style="display: inline">
          <button type="submit" class="button" id="username-submit-btn">Save</button>
        </form>
      `;
    }

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
  },

  renderProject: function (i, flag) {
    let project = filesystem.projects[i];
    if (flag === "log") {
      project = filesystem.logbook.projects[i];
    }

    const section = document.createElement("section");
    section.classList.add("section");
    section.dataset.index = i;
    if (flag === "log") {
      section.dataset.islogged = "true";
      section.innerHTML += `
        <div class="section__header">
          <h3 class="section__title">${project.name}</h3>
          <button class="button section__opt section--delete">
            <p>Delete project</p>
            <div class="icon section__opt__icon"></div>
          </button>
        </div>
      `;
    } else if (project.percentComplete !== 100) {
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
    } else {
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
          <button class="button section__opt section--log">
            <p>Add to Logbook</p>
            <div class="section__opt__icon icon"></div>
          </button>
        </div>
      `;
    }

    for (let task of project.tasks) {
      const i = project.tasks.indexOf(task);

      let selector = "task";
      if (task.isDone === true) {
        selector = "task task--checked";
      }

      if (flag === "log") {
        section.innerHTML += `
          <div class="task task--checked" data-index="${i}">
            <div class="task__tick"></div>
            <p class="task__text">${task.text}</p>
          </div>
        `;
      } else {
        section.innerHTML += `
          <div class="${selector}" data-index="${i}">
            <div class="button task__tick"></div>
            <p class="button task__text">${task.text}</p>
          </div>
        `;
      }
    }

    if (project.tasks.length === 0) {
      section.innerHTML += `
        <div class="grey-text-smaller">
          <p>No tasks</p>
        </div>
      `;
    }

    section.innerHTML += `
      <div class="section__subtext">
        <p class="section__subtext__completion">${
          project.percentComplete
        }% completed</p>
        <p class="section__subtext__date">${
          "Created on " + project.datetime
        }</p>
      </div>
    `;
    return section;
  },

  rerenderProject(i, newProject) {
    const oldProject = document.querySelector(`.section[data-index="${i}"]`);
    oldProject.replaceWith(newProject);
  },

  renderMain: function (flag) {
    const mainContainer = document
      .querySelector(".main")
      .querySelector(".container");
    mainContainer.innerHTML = "";

    if (typeof flag === "number") {
      mainContainer.appendChild(display.renderProject(flag));
    } else if (flag === "all") {
      mainContainer.innerHTML += `<h2 class="main__title">My tasks</h2>`;
      for (let i = 0; i < filesystem.projects.length; i++) {
        mainContainer.appendChild(display.renderProject(i));
      }
      if (filesystem.projects.length === 0) {
        mainContainer.innerHTML += `
          <div class="grey-text">
            <p>No projects yet...</p>
            <button id="go-to-new-project" class="button section__opt section--add-task">
              <p>New project</p>
              <div class="section__opt__icon icon"></div>
            </button>
          </div>
        `;
      }
    } else if (flag === "log") {
      mainContainer.innerHTML += `<h2 class="main__title">Logbook</h2>`;
      for (let i = 0; i < filesystem.logbook.projects.length; i++) {
        mainContainer.appendChild(display.renderProject(i, "log"));
      }
      if (filesystem.logbook.projects.length === 0) {
        mainContainer.innerHTML += `
          <div class="grey-text">
            <p>No projects yet...</p>
          </div>
        `;
      }
    }
  },

  renderNewProject: function () {
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
        <input class="section__title" type="text" id="project-name-field" maxlength="30" placeholder="Enter project name...">
        <button type="submit" id="project-submit-btn" class="button section__opt section--add-task">
          <p>Create new project</p>
          <div class="section__opt__icon icon"></div>
        </button>
      </form>
    </div>
  `;
    mainContainer.appendChild(section);
  },

  renderHelp() {
    const mainContainer = document
      .querySelector(".main")
      .querySelector(".container");
    mainContainer.innerHTML = "";
    mainContainer.innerHTML += `<h2 class="main__title">Help</h2>`;
    const section = document.createElement("section");
    section.classList.add("section", "help-section");
    section.innerHTML = `
      <p>All projects and tasks are saved to your browser's local storage.</p>
      <p><span class="button" id="reset-btn">Click here</span> to reset the local storage.<br>(Deletes everything!)</p>
    `;
    mainContainer.appendChild(section);
  },

  toggleTheme() {
    document.body.classList.toggle("light");
    document.body.classList.toggle("dark");
  },

  clearTrash() {
    document.querySelectorAll(".task__delete-button").forEach((btn) => {
      btn.remove();
    });
    document.querySelectorAll("form.task").forEach((el) => {
      el.remove();
    });
  },
};

// Initial render
if (localStorage.getItem("prefferedTheme") === "dark") {
  display.toggleTheme();
  document.querySelector("#theme-toggle p").innerHTML = "Switch to Light theme";
}
storage.load();
display.renderSidebar();
display.renderMain("all");

const events = {
  asideClickHandler(event) {
    const theButton = event.target.closest(".button");

    if (theButton.dataset.index) {
      const i = parseInt(theButton.dataset.index);
      display.renderMain(i);
    } else if (theButton.id === "all-tasks-btn") {
      display.renderMain("all");
    } else if (theButton.id === "logbook-btn") {
      display.renderMain("log");
    }

    if (theButton.id === "theme-toggle") {
      display.toggleTheme();
      const text = theButton.querySelector("p").innerHTML;
      if (text === "Switch to Dark theme") {
        theButton.querySelector("p").innerHTML = "Switch to Light theme";
        localStorage.setItem("prefferedTheme", "dark");
      } else {
        theButton.querySelector("p").innerHTML = "Switch to Dark theme";
        localStorage.setItem("prefferedTheme", "light");
      }
    }

    if (theButton.id === "new-project-btn") {
      display.renderNewProject();
    }

    if (theButton.id === "username-submit-btn") {
      event.preventDefault();
      const input = document.querySelector("#username-field").value;
      localStorage.setItem("username", input);
      display.renderSidebar();
    }

    if (theButton.id === "username") {
      localStorage.removeItem("username");
      display.renderSidebar();
      document.querySelector("#username-field").select();
    }

    if (theButton.id === "help-btn") {
      display.renderHelp();
    }

    if (
      theButton.id !== "theme-toggle" &&
      theButton.id !== "username-submit-btn" &&
      theButton.id !== "username"
    ) {
      menu.toggleMenuOff();
    }
  },

  mainClickHandler(event) {
    const theButton = event.target.closest(".button");

    if (theButton.classList.contains("task__text")) {
      display.clearTrash();
      const trashIcon = document.createElement("div");
      trashIcon.classList.add("task__delete-button", "button");
      theButton.parentElement.appendChild(trashIcon);
    } else if (
      theButton.getAttribute("type") === "submit" ||
      theButton.classList.contains("new-task") ||
      theButton.classList.contains("task__delete-button")
    ) {
      // don't clear trash
    } else {
      display.clearTrash();
    }

    if (theButton.id === "project-submit-btn") {
      event.preventDefault();
      const name = document.querySelector(".main").querySelector("input").value;
      const regex = /^\s*\S.*$/; // not empty / not all whitespaces
      if (regex.test(name)) {
        user.createNewProject(name);
      }
    }

    if (
      theButton.classList.contains("section--add-task") &&
      theButton.id !== "project-submit-btn" &&
      theButton.id !== "go-to-new-project"
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
      if (theSection.querySelector(".task")) {
        theSection.insertBefore(newTask, theSection.querySelector(".task"));
      } else if (theSection.querySelector(".grey-text-smaller")) {
        theSection.insertBefore(
          newTask,
          theSection.querySelector(".grey-text-smaller")
        );
      }
      theSection.querySelector("input").select();
    }

    if (theButton.id === "task-submit-btn") {
      event.preventDefault();
      const tasktext = document.querySelector("#new-task-text").value;
      const regex = /^\s*\S.*$/; // not empty / not all whitespaces
      if (regex.test(tasktext)) {
        const indexOfProject = parseInt(
          theButton.closest(".section").dataset.index
        );
        user.createNewTask(indexOfProject, tasktext);
      }
    }

    if (theButton.classList.contains("task__delete-button")) {
      const indexOfProject = parseInt(
        event.target.closest(".section").dataset.index
      );
      const indexOfTask = parseInt(event.target.parentElement.dataset.index);
      user.deleteTask(indexOfProject, indexOfTask);
    }

    if (theButton.classList.contains("section--delete")) {
      const indexOfProject = parseInt(
        theButton.closest(".section").dataset.index
      );
      if (theButton.closest(".section").dataset.islogged === "true") {
        user.deleteFromLogbook(indexOfProject);
      } else {
        user.deleteProject(indexOfProject);
      }
    }

    if (theButton.classList.contains("task__tick")) {
      const indexOfProject = parseInt(
        event.target.closest(".section").dataset.index
      );
      const indexOfTask = parseInt(event.target.parentElement.dataset.index);
      user.toggleTask(indexOfProject, indexOfTask);
    }

    if (theButton.id === "go-to-new-project") {
      display.renderNewProject();
    }

    if (theButton.classList.contains("section--log")) {
      const indexOfProject = parseInt(
        theButton.closest(".section").dataset.index
      );
      user.pushToLogbook(indexOfProject);
    }

    if (theButton.id === "reset-btn") {
      storage.clear();
      location.reload();
    }
  },
};

document.querySelector(".aside").addEventListener("click", (event) => {
  if (
    event.target.classList.contains("button") ||
    event.target.parentElement.classList.contains("button")
  ) {
    events.asideClickHandler(event);
  }
});

document.querySelector(".main").addEventListener("click", (event) => {
  if (
    event.target.classList.contains("button") ||
    event.target.parentElement.classList.contains("button")
  ) {
    events.mainClickHandler(event);
  } else {
    display.clearTrash();
  }
});
