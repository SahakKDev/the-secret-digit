'use strict';

let SECRET_NUMBER = null;
let HIGH_SCORE = 0;
let SCORE = 20;

const secretBox = document.querySelector('.secret-box');
const secretNumberInput = document.querySelector('.secret-number-input');
const infoLabel = document.querySelector('.info-label');
const scoreLabel = document.querySelector('.score');
const highScoreLabel = document.querySelector('.high-score');

const checkButton = document.querySelector('.check-button');
const restartButton = document.querySelector('.restart');

checkButton.addEventListener('click', function () {
  const selectedNumber = +secretNumberInput.value;

  if (SECRET_NUMBER === selectedNumber) {
    // WIN GAME
    displayMessage('🎉 You Won!');
    secretBox.textContent = SECRET_NUMBER;
    secretNumberInput.disabled = true;
    checkButton.disabled = true;
    document.body.style.backgroundColor = '#548325';
    secretBox.style.width = '14rem';

    if (HIGH_SCORE < SCORE) {
      highScoreLabel.textContent = SCORE;
      HIGH_SCORE = SCORE;
    }

    return;
  }

  if (!selectedNumber) {
    displayMessage('⛔ No Number!');
    return;
  }

  SCORE--;

  if (SCORE === 0) {
    // LOSE GAME
    displayMessage('💣 You Lose!');
    secretBox.textContent = SECRET_NUMBER;
    secretNumberInput.disabled = true;
    checkButton.disabled = true;
    scoreLabel.textContent = SCORE;
    return;
  }

  scoreLabel.textContent = SCORE;

  if (selectedNumber !== SECRET_NUMBER) {
    displayMessage(
      selectedNumber > SECRET_NUMBER ? '📈 Too High' : '📉 Too Low',
    );
  }
});

restartButton.addEventListener('click', startNewGame);

function startNewGame() {
  SECRET_NUMBER = Math.trunc(Math.random() * 20) + 1;
  secretBox.textContent = '?';
  infoLabel.textContent = 'Start guessing...';
  secretNumberInput.disabled = false;
  checkButton.disabled = false;
  secretNumberInput.value = '';
  SCORE = 20;
  scoreLabel.textContent = SCORE;
  document.body.style.backgroundColor = '#3e3e3e';
  secretBox.style.width = '7rem';
}

startNewGame();

function displayMessage(message) {
  document.querySelector('.info-label').textContent = message;
}
