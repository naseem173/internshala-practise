


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

  let ctx = canvas.getContext('2d');
  let dots = [];

  let arrayColors = ['#eee', ' #545454', ' #596d91', '#bb5a68', ' #696969'];

  for (let index = 0; index < 90; index++) {
    dots.push({
      x: Math.floor(Math.random() * canvas.width),
      y: Math.floor(Math.random() * canvas.height),
      size: Math.random() * 2 + 5,
      color: arrayColors[Math.floor(Math.random() * 5)],
    });

    const drawDots = () => {
      dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      })
    }
    drawDots();
    
    spider.addEventListener('mousemove', (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
      
      let mouse = {
        x: event.pageX - spider.getBoundingClientRect().left,
        y: event.pageY - spider.getBoundingClientRect().top
      }
      dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      })
    })
  spider.addEventListener("mouseout", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
  });

  }



