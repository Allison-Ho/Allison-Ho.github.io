'use strict';

const NORMAL_CHOICES = ['rock', 'paper', 'scissors'];
(function(){
  window.addEventListener('load', init);

  function init(){
    let imgs = qsa('img');
    imgs.forEach((img) => {
      img.addEventListener('click', playGame);
    });

    qs('button').addEventListener('click', playAgain);
  }

  function playGame() {
    id('gameboard').classList.add('hidden');
    id('gameview').classList.remove('hidden');
    let chosen = NORMAL_CHOICES[Math.floor(Math.random() * NORMAL_CHOICES.length)];
    id('player').src = 'img/' + this.alt + '.jpg';
    id('player').alt = this.alt;
    id('computer').src = 'img/' + chosen + '.jpg';
    id('computer').alt = chosen;

    findWinner(this.alt, chosen);
  }

  function findWinner(player, computer) {
    let win = true;
    if(player === 'rock' && computer === 'paper' ||
      player === 'paper' && computer === 'scissors' ||
      player === 'scissors' && computer === 'rock') {
      win = false;
      id('result').textContent = 'YOU LOSE';
    } else if(player === computer) {
      win = false;
      id('result').textContent = 'DRAW';
    } else {
      win = true;
      id('result').textContent = 'YOU WIN';
    }

    updateScore(win);
  }

  function updateScore(win) {
    if(win) {
      let newScore = parseInt(id('score').textContent) + 1;
      id('score').textContent = newScore;
    }
  }

  function playAgain() {
    id('gameboard').classList.remove('hidden');
    id('gameview').classList.add('hidden');
  }

  /**
   * shorthand for querySelector function
   * @param {string} selector - selector to query for
   * @return first dom object matching passed selector
   */
  function qs(selector) {
    return document.querySelector(selector);
  }

  function id(selector) {
    return document.getElementById(selector);
  }

  /**
   * shorthand for querySelectorAll function
   * @param {string} selector - selector to query for
   * @return array of dom objects matching passed selector
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  function gen(el) {
    return document.createElement(el);
  }
})();