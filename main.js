"use strict";

let SECRET_NUMBER = null;
let SCORE = 20;

const secretBox = document.querySelector(".secret-box");
const secretNumberInput = document.querySelector(".secret-number-input");
const infoLabel = document.querySelector(".info-label");
const scoreLabel = document.querySelector(".score");
const highScoreLabel = document.querySelector(".high-score");

const checkButton = document.querySelector(".check-button");
const restartButton = document.querySelector(".restart");

checkButton.addEventListener("click", function () {
  const selectedNumber = +secretNumberInput.value;

  if (SECRET_NUMBER === selectedNumber) {
    // WIN GAME
    infoLabel.textContent = "🎉 You Won!";
    secretBox.textContent = SECRET_NUMBER;
    secretNumberInput.disabled = true;
    checkButton.disabled = true;
    highScoreLabel.textContent = SCORE;

    return;
  }

  SCORE--;

  if (SCORE === 0) {
    // LOSE GAME
    infoLabel.textContent = "😢 You Lose! Try Again...";
    secretBox.textContent = SECRET_NUMBER;
    secretNumberInput.disabled = true;
    checkButton.disabled = true;
    return;
  }

  scoreLabel.textContent = SCORE;

  if (selectedNumber > SECRET_NUMBER) {
    infoLabel.textContent = "📈 Too High";
  }

  if (selectedNumber < SECRET_NUMBER) {
    infoLabel.textContent = "📉 Too Low";
  }
});

restartButton.addEventListener("click", startNewGame);

function startNewGame() {
  SECRET_NUMBER = Math.trunc(Math.random() * 20) + 1;
  console.log(SECRET_NUMBER);
  secretBox.textContent = "?";
  infoLabel.textContent = "Start guessing...";
  secretNumberInput.disabled = false;
  checkButton.disabled = false;
  secretNumberInput.value = "";
  SCORE = 20;
  scoreLabel.textContent = SCORE;
}

startNewGame();
