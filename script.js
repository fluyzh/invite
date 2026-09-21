const NICK="fluym";

const question = document.getElementById("question");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const main = document.getElementById("main");
const success = document.getElementById("success");
const tg = document.getElementById("tg");

let noCount=0;

tg.href="https://t.me/Fluym" + NICK + "&text="+
    encodeURIComponent("Я согласна ! Давай выберем день");

no.addEventListener("click", function () {
    noCount++;
    if (noCount === 1) {
        question.textContent= "По моему ты не то нажала 😡"
    }
});

function runAway() {
    const maxX = window.innerWidth - no.offsetWidth;
    const maxY = window.innerHeight - no.offsetHeight;
    no.style.position ="fixed";
    no.style.left = Math.random() * maxX + "px";
    no.style.top = Math.random() * maxY + "px" ;
}

no.addEventListener("mouseover", function () {
  if (noCount >= 1) runAway();
});

no.addEventListener("touchstart", function (e) {
  if (noCount >= 1) {
    e.preventDefault(); 
    runAway();
  }
});

yes.addEventListener("click", function () {
  main.style.display = "none";
  success.style.display = "block";
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