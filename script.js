const NICK="Fluym";

const question = document.getElementById("question");
const sound = document.getElementById("sound");
const meme = document.getElementById("meme");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const main = document.getElementById("main");
const success = document.getElementById("success");
const tg = document.getElementById("tg");

let noCount=0;

tg.href = "https://t.me/" + NICK + "?text=" +
    encodeURIComponent("Я согласна ! я выбираю ... день");

const noTexts = [
  "По моему ты не то нажала 🥺",
  "Точно? Подумай ещё разок 👀",
  "Ну полиз, нажми на другую 🙏",
  "Я же старался 😡",
  "Последний шанс передумать 😳",
  "Ладно, я надеялся что ты согласишься😢",
  "ну попробуй поймай <нет>😏"
];
const noImages = [
  "images/no 1.gif",
  "images/no 2.gif",
  "images/no 3.gif",
  "images/no 4.webp",
  "images/no 5.gif",
  "images/no 6.gif",
  "images/no 7.webp"
];

no.addEventListener("click", function () {
  noCount++;
  const index = Math.min(noCount - 1, noTexts.length - 1);
  question.textContent = noTexts[index];
  meme.src = noImages[index];
});
function runAway() {
    const maxX = window.innerWidth - no.offsetWidth;
    const maxY = window.innerHeight - no.offsetHeight;
    no.style.position ="fixed";
    no.style.left = Math.random() * maxX + "px";
    no.style.top = Math.random() * maxY + "px" ;
}

no.addEventListener("mouseover", function () {
  if (noCount >= 7) runAway();
});

no.addEventListener("touchstart", function (e) {
  if (noCount >= 7) {
    e.preventDefault(); 
    runAway();
  }
});

yes.addEventListener("click", function () {
  main.style.display = "none";
  success.style.display = "block";
  sound.play();
});

const flowers = ["🌸", "🌷", "🌹", "🌼", "💐","🌺"];

function createFlower() {
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
  flower.style.left = Math.random() * 95 + "vw";
  flower.style.fontSize = 16 + Math.random() * 25 + "px";
  flower.style.animationDuration = 5 + Math.random() * 5 + "s";
  document.body.appendChild(flower);

  setTimeout(function () {
    flower.remove();
  }, 12000);
}

setInterval(createFlower, 500);