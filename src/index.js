import "./style.css";
import { generateHomepage } from "./home";
import { generateNav } from "./home";
import { generateMenu } from "./menu";
import { generateAbout } from "./about";

let content = document.querySelector("#content");
let home = document.querySelector(".home");

generateNav();
generateHomepage();
generateMenu();
generateAbout();

let homeImg = document.querySelector(".home-img");
