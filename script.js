'use strict';

//Definindo os elementos
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNovo = document.querySelector('.btn--new');
const btnGira = document.querySelector('.btn--roll');
const btnFica = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, jogando;

//definindo as condiçoes iniciais

const init = function () {
  score1El.textContent = 0;
  score0El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  jogando = true;
};

init();

const trocaPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//jogar o dado
btnGira.addEventListener('click', function () {
  if (jogando) {
    //criando os numeros aleatorios
    const dice = Math.trunc(Math.random() * 6) + 1;
    //mostrando as imagens do dado
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //verificando se é 1
    if (dice !== 1) {
      //adicionando ao score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //resetando o valor
      trocaPlayer();
    }
  }
});

btnFica.addEventListener('click', function () {
  if (jogando) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      jogando = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    }
    //troca o jogador
    else trocaPlayer();
  }
});

btnNovo.addEventListener('click', init);
