import { generateHomepage } from "./home";

let content = document.querySelector("#content");

window.addEventListener("load", (event) => {
  generateHomepage();
});
