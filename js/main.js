'use strict';
const number = document.querySelector('.field__fill-number');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const lost = document.querySelector('.lost');
let cont = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

function clickbtn() {
  
  const numberValue = parseInt(number.value);
  console.log(numberValue);

  if (myRandomNumber === numberValue) {
    text.innerHTML = '¡HAS GANADO, CAMPEONA!';
    console.log(cont);
    cont = cont + 1;
  } else if (numberValue>100 | numberValue< 0){
    text.innerHTML = 'El numero tiene que estar entre 0 y 100,Te has salido del rango';
    cont = cont + 1;
  }else if (myRandomNumber > numberValue) {
    text.innerHTML = 'Demasiado bajo';
    cont = cont + 1;
    lost.innerHTML = cont;
    console.log(cont);
  } else {
    text.innerHTML = 'Demasiado alto';
    cont = cont + 1;
    lost.innerHTML = cont;
    console.log(cont);
  }
}

btn.addEventListener('click', clickbtn);