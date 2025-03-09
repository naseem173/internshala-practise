


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




//spider Effect
  

const spider = document.querySelector(".spider");
const canvas = document.getElementById("dotCanvas");
const ctx = canvas.getContext("2d");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

const dots = Array.from({ length: 100 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  size: Math.random() * 2 + 3,
  color: ["#eee", "#545454", "#596d91", "#bb5a68", "#696969"][
    Math.floor(Math.random() * 5)
  ],
}));

const drawDots = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots.forEach(({ x, y, size, color }) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fill();
  });
};

const drawConnections = (mouse = null) => {
  dots.forEach((d1, i) => {
    dots.slice(i + 1).forEach((d2) => {
      const distance = Math.hypot(d1.x - d2.x, d1.y - d2.y);
      if (distance < 100) {
        ctx.strokeStyle = d1.color;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(d1.x, d1.y);
        ctx.lineTo(d2.x, d2.y);
        ctx.stroke();
      }
    });

    if (mouse && Math.hypot(mouse.x - d1.x, mouse.y - d1.y) < 250) {
      ctx.strokeStyle = d1.color;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(d1.x, d1.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.stroke();
    }
  });
};

const updateCanvas = (mouse = null) => {
  drawDots();
  drawConnections(mouse);
};
updateCanvas();

spider.addEventListener("mousemove", ({ pageX, pageY }) => {
  updateCanvas({ x: pageX - spider.offsetLeft, y: pageY - spider.offsetTop });
});

spider.addEventListener("mouseout", () => updateCanvas());

//nav bar

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  const halfway = window.innerHeight *2; // Half of the viewport height

  if (window.scrollY > halfway) {
    navbar.style.transform = "translateY(-100%)"; // Move navbar out of view
  } else {
    navbar.style.transform = "translateY(0)"; // Bring navbar back
  }
});
