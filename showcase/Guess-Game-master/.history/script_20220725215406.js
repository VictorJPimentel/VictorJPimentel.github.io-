let score = document.getElementById("score");
let high_score = document.getElementById("high_score");
// const guess = document.getElementById("guess").textContent;
const check_btn = document.getElementById("check_btn");
let guess_text = document.getElementById("guess_text");
let your_score = document.getElementById("your_score");
let your_high_score = document.getElementById("your_high_score");
let secret_num_win = document.getElementById("secret_num_win");
let secret_num_lose = document.getElementById("secret_num_lose");
const score_box = document.getElementById("score_box");
const reset = document.getElementById("reset");
const modal_win = document.getElementById("modal_win");
const modal_lose = document.getElementById("modal_lose");
const try_again_btn_win = document.getElementById("try_again_btn_win");
const try_again_btn_lose = document.getElementById("try_again_btn_lose");
let target = Math.floor(Math.random() * 100 + 1);

console.log(target);
// console.log(high_score);

check_btn.addEventListener("click", function () {
  let guess = +document.getElementById("guess").value;
  // console.log(guess);
  // score.textContent = Number(score.textContent) - 1;

  if (score.textContent == 1 && guess != target) {
    console.log("you're out of tries!");
    score.textContent = 0;
    secret_num_lose.textContent = target;
    document.getElementById("btn-gameLost").click();
    modal_lose.classList.add("show");
    score_box.classList.add("hide");
    reset.classList.add("hide");
  } else if (score.textContent == 0) {
    // The modal window
    console.log("You're out of tries!");
  } else if (guess > 100 || guess < 1) {
    score.textContent = score.textContent - 1;
    guess_text.textContent = "You can only enter numbers between 1 and 100";
  } else if (guess < target) {
    score.textContent = score.textContent - 1;
    guess_text.textContent = "Your guess is too low";
    let node = document.createElement("li");
    node.appendChild(document.createTextNode(guess));
    document.querySelector("ul").appendChild(node);
  } else if (guess > target) {
    score.textContent = score.textContent - 1;
    guess_text.textContent = "Your number is too high";
    let node = document.createElement("li");

    node.className = "border";
    node.appendChild(document.createTextNode(guess));
    document.querySelector("ul").appendChild(node);
  } else {
    // Guess is found
    secret_num_win.textContent = target;
    if (score.textContent > high_score.textContent) {
      high_score.textContent = score.textContent;
    }
    your_score.textContent = score.textContent;
    your_high_score.textContent = high_score.textContent;
    document.getElementById("btn-gameWin").click();
    modal_win.classList.add("show");
    score_box.classList.add("hide");
    reset.classList.add("hide");
  }
});

reset.addEventListener("click", function () {
  score.textContent = 10;
  let guessList = document.getElementById("guess_list");
  guessList.innerHTML = "";
  target = Math.floor(Math.random() * 100 + 1);
  guess_text.textContent = "Guess a number";
});

try_again_btn_win.addEventListener("click", function () {
  modal_win.classList.remove("show");
  score.textContent = 10;
  let guessList = document.getElementById("guess_list");
  guessList.innerHTML = "";
  score_box.classList.remove("hide");
  reset.classList.remove("hide");
  target = Math.floor(Math.random() * 100 + 1);
  guess_text.textContent = "Guess a number";
});

try_again_btn_lose.addEventListener("click", function () {
  modal_lose.classList.remove("show");
  score.textContent = 10;
  let guessList = document.getElementById("guess_list");
  guessList.innerHTML = "";
  score_box.classList.remove("hide");
  reset.classList.remove("hide");
  target = Math.floor(Math.random() * 100 + 1);
  guess_text.textContent = "Guess a number";
});
