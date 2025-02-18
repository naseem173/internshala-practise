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

//contact form

document
  .getElementById("contact")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Construct mailto link
    const mailtoLink = `mailto:md.naseem0978@gmail.com?subject=New%20Message%20from%20${encodeURIComponent(
      name
    )}&body=Name:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;

    // Open default email client
    window.location.href = mailtoLink;
  });





console.log("JavaScript file loaded successfully!");
