const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const success = document.getElementById("success");
const card = document.querySelector(".card");
const imageBox = document.getElementById("imageBox");
const bgMusic = document.getElementById("bgMusic");
const messageBtn = document.getElementById("messageBtn");
const fullMessage = document.getElementById("fullMessage");

const images = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png",
  "img6.png",
  "img7.png",
  "img8.png",
  "img9.png",
  "img10.png",
  "img11.png",
];


let index = 0;
const slider = document.getElementById("slider");

// Start slider only when YES is clicked
function startSlider() {
  setInterval(() => {
    index++;
    if (index >= images.length) index = 0;
    slider.src = images[index];
  }, 3000);
}

/* NO button move */
function moveButton() {
  const maxX = card.clientWidth - noBtn.offsetWidth - 20;
  const maxY = card.clientHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);

/* YES button click */
yesBtn.addEventListener("click", () => {
  success.style.display = "block";
  imageBox.style.display = "block";
  noBtn.style.display = "none";
  messageBtn.style.display = "inline-block";

  yesBtn.innerText ="Sheraz & Naghma"
  document.querySelector("h1").innerText = "Happy Valentine Day";
  document.querySelector(".msg").innerText = "Sweet Memories of";
  document.querySelector(".msg").style = "opacity: 0.4";
  bgMusic.play();
  startSlider();
  createHearts();
});

/* Floating hearts */
function createHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }, 200);
}

messageBtn.addEventListener("click", () => {
  fullMessage.style.display = "flex";
});

function closeMessage() {
  fullMessage.style.display = "none";
}

