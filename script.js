'use strict';
let score = 20;
let number = Math.trunc(Math.random() * 20) + 1;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  let guess = document.querySelector('.guess').value;
  if (!guess) {
    displayMessage('please enter Num');
  } else if (number == guess) {
    displayMessage('🏆 Correct Number');
    document.querySelector('.highscore').textContent = score;
    document.querySelector('.number').textContent = number;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  } else if (number !== guess) {
    if (score > 1) {
      displayMessage(guess > number ? 'too high📈' : 'too low 📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lose game 😱');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
