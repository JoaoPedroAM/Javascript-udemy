'use strict';

//Definindo os elementos
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNovo = document.querySelector('.btn--new');
const btnGira = document.querySelector('.btn--roll');
const btnFica = document.querySelector('.btn--hold');

//definindo as condiçoes iniciais
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//jogar o dado
btnGira.addEventListener('click', function () {
  //criando os numeros aleatorios
  const dice = Math.trunc(Math.random() * 6) + 1;
  //mostrando as imagens do dado
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //verificando se é 1
  if (dice !== 1) {
    //adicionando ao score
    currentScore += dice;
    current0El.textContent = currentScore
  } else {
  }
});
