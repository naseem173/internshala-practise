let sliders = document.querySelector(".sliders");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.onclick = () => {
  sliders.append(sliders.querySelector("img:first-child"));
};

prevBtn.onclick = () => {
  sliders.prepend(sliders.querySelector("img:last-child"));
};


let cards = document.querySelector(".cards");
let nextBtn1 = document.getElementById("next2");
let prevBtn1 = document.getElementById("prev2");

nextBtn1.onclick = () => {
  cards.append(cards.querySelector(".project-card:first-child"));
};

prevBtn1.onclick = () => {
  cards.prepend(cards.querySelector(".project-card:last-child"));
};





console.log("JavaScript file loaded successfully!");
