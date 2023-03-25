export const generateAbout = function () {
  let about = document.querySelector(".about");

  about.addEventListener("click", () => {
    content.innerHTML = "";
    let card = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    card.appendChild(img);
    card.appendChild(p);

    let rows = [];

    for (let i = 0; i < 3; i++) {
      rows[i] = document.createElement("div");
      rows[i].classList.add("about-" + i);
      rows[i].appendChild(card.cloneNode(true));
      content.appendChild(rows[i]);
    }
  });
};
