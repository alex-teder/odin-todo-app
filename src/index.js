import "./scss/index.scss";
const allImages = require.context(
  "./img/",
  true,
  /\.(png|jpe?g|gif|svg|webp)$/
);
const allFonts = require.context("./fonts/", true, /\.(woff2|ttf)$/);

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
    return Math.round((numberOfTasksDone / this.tasks.length) * 100);
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
  },
};
