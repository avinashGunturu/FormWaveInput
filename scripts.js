'use strict';
const again = document.querySelector('.again');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreText = document.querySelector('.score');
const highscoreText = document.querySelector('.highscore');
let guessNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
console.log(guessNumber);

check.addEventListener('click', function () {
  const input = Number(document.querySelector('.guess').value);
  if (input == 0) {
    message.textContent = '⛔️ No number!';
  } else if (input > 20) {
    message.textContent = '⛔️ number Should be in range!';
  } else if (input > guessNumber) {
    if (score > 1) {
      message.textContent = 'Value is too hight...';
      score--;
      scoreText.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreText.textContent = 0;
    }
  } else if (input < guessNumber) {
    if (score > 1) {
      message.textContent = 'Value is too low...';
      score--;
      scoreText.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreText.textContent = 0;
    }
  } else if (input === guessNumber) {
    highscore = score;
    message.textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = guessNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    highscoreText.textContent = highscore;
  }
});
again.addEventListener('click', function () {
  message.textContent = 'Start guessing...';
  scoreText.textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.reset').addEventListener('click', () => {
  message.textContent = 'Start guessing...';
  scoreText.textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  highscoreText.textContent = 0;
});
