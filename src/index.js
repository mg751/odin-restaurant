import { generateHomepage } from "./home";
import "./style.css";
import { generateNav } from "./home";

let content = document.querySelector("#content");

generateHomepage();
generateNav();
