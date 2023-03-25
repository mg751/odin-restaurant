export const generateMenu = function () {
  let menu = document.querySelector(".menu");

  menu.addEventListener("click", () => {
    content.innerHTML = "";
    let card = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    card.appendChild(img);
    card.appendChild(p);

    let rows = [];

    for (let i = 0; i < 3; i++) {
      rows[i] = document.createElement("div");
      rows[i].classList.add("menu-" + i);
      rows[i].appendChild(card.cloneNode(true));
      content.appendChild(rows[i]);
    }
  });
};
