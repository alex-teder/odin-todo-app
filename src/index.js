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
