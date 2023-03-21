export const generateHomepage = function () {
  let restaurantTitle = document.createElement("h1");
  let restaurantImg = document.createElement("img");
  let restaurantDesc = document.createElement("p");

  let homeContent = [restaurantTitle, restaurantImg, restaurantDesc];

  restaurantTitle.innerText = "My stupid restaurant";
  restaurantImg.src = "http://unsplash.it/300/300?random&gravity=center";
  restaurantDesc.innerText =
    "Lorem ipsum dolor sist amet consectetur adipisicing elit. Estinventore assumenda in animi eum cupiditate incidunt, sequi aut libero";

  for (let item of homeContent) {
    content.appendChild(item);
  }
  return;
};
