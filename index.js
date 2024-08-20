for (let i = 0; i < 9; i++) {
  let huvin = document.createElement("div");
  huvin.style.width = "230px";
  huvin.style.height = "230px";
  huvin.style.backgroundImage = "url('image3.png')";
  huvin.style.backgroundSize = "cover";
  huvin.id = i.toString();
  document.getElementById("board").appendChild(huvin);
}

function generateRandomNumber() {
  let num = Math.floor(Math.random() * 9);
  return num.toString();
}
let sohornomin = document.createElement("img");
sohornomin.src = "./image1.png";
sohornomin.style.height = "140px";
sohornomin.style.width = "140px";
sohornomin.style.marginLeft = "45px";
let number1 = 0;
function renderMole() {
  const randomNumber = generateRandomNumber();
  const box = document.getElementById(randomNumber);
  number1 = randomNumber;
  box.appendChild(sohornomin);
}
renderMole();
const interval1 = setInterval(renderMole, 1000);

let urgamal = document.createElement("img");
urgamal.src = "./image2.png";
urgamal.style.height = "140px";
urgamal.style.width = "140px";
urgamal.style.marginLeft = "45px";
function render() {
  const randomNumber = generateRandomNumber();
  const box = document.getElementById(randomNumber);
  if (randomNumber === number1) {
    randomNumber = randomNumber + 1;
  }
  box.appendChild(urgamal);
}
render();
const interval2 = setInterval(render, 1000);

function addingScore() {
  const score = document.getElementById("score");
  score.innerHTML = Number(score.innerHTML) + 10;
}
sohornomin.onclick = addingScore;
function gameOver() {
  const score = document.getElementById("score");
  score.innerHTML = "Game over";
  clearInterval(interval1);
  clearInterval(interval2);
}
urgamal.onclick = gameOver;

// const randomNumber = generateRandomNumber();
// const box = document.getElementById(Math.floor(randomNumber));
// console.log(Math.random() * 9);
// let sohornomin = document.createElement("img");
// sohornomin.src = "./image1.png";
// sohornomin.style.height = "140px";
// sohornomin.style.width = "140px";
// sohornomin.style.marginLeft = "45px";
// box.appendChild(sohornomin);
