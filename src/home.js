export const generateHomepage = function () {
  let restaurantTitle = document.createElement("h1");
  let restaurantImg = document.createElement("img");
  let restaurantDesc = document.createElement("p");

  let x = [restaurantTitle, restaurantImg, restaurantDesc];

  let container = document.createElement("div");
  container.classList.add("home-content");

  restaurantTitle.innerText = "My stupid restaurant";
  restaurantImg.src = "http://unsplash.it/300/300?random&gravity=center";
  restaurantDesc.innerText =
    "Lorem ipsum dolor sist amet consectetur adipisicing elit. Estinventore assumenda in animi eum cupiditate incidunt, sequi aut libero";

  content.appendChild(container);

  for (let item of x) {
    container.appendChild(item);
  }
};

export const generateNav = () => {
  let body = document.querySelector("body");

  let container = document.createElement("div");
  let home = document.createElement("p");
  let menu = document.createElement("p");
  let about = document.createElement("p");

  home.innerText = "Home";
  menu.innerText = "Menu";
  about.innerText = "About";

  container.classList.add("nav");
  home.classList.add("home");
  menu.classList.add("menu");
  about.classList.add("about");

  let nav = [home, menu, about];

  for (let item of nav) {
    container.appendChild(item);
  }

  body.insertBefore(container, content);
};
