


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




//spider
  

let spider = document.querySelector(".spider");
let canvas = document.getElementById("dotCanvas");
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let ctx = canvas.getContext("2d");
let dots = [];

let arrayColors = ["#eee", "#545454", "#596d91", "#bb5a68", "#696969"];

for (let index = 0; index < 100; index++) {
  dots.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 2,
    color: arrayColors[Math.floor(Math.random() * arrayColors.length)],
  });
}

// Function to draw dots
const drawDots = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  dots.forEach((dot) => {
    ctx.fillStyle = dot.color;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
    ctx.fill();
  });
};

// Function to draw web-like connections
const drawConnections = (mouse = null) => {
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      let dx = dots[i].x - dots[j].x;
      let dy = dots[i].y - dots[j].y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 100) {
        // Adjust for web density
        ctx.strokeStyle =  dots[i].color;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(dots[i].x, dots[i].y);
        ctx.lineTo(dots[j].x, dots[j].y);
        ctx.stroke();
      }
    }
  }

  if (mouse) {
    dots.forEach((dot) => {
      let dx = mouse.x - dot.x;
      let dy = mouse.y - dot.y;
      let distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 250) {
        ctx.strokeStyle = dot.color;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(dot.x, dot.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    });
  }
};

// Initial draw
drawDots();
drawConnections();

spider.addEventListener("mousemove", (event) => {
  let mouse = {
    x: event.pageX - spider.getBoundingClientRect().left,
    y: event.pageY - spider.getBoundingClientRect().top,
  };

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDots();
  drawConnections(mouse);
});

spider.addEventListener("mouseout", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawDots();
  drawConnections();
});


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
