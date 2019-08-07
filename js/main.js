'use strict';
let number = document.querySelector('.field__fill-number');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const lost = document.querySelector('.lost');
const resetBtn =document.querySelector('.reset-button');
let cont = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let myRandomNumber = getRandomNumber(100);

function clickbtn() {
  const numberValue = parseInt(number.value);
 
  cont = cont + 1;
  lost.innerHTML = cont +' Intentos';
  if (myRandomNumber === numberValue) {
    text.innerHTML = 'HAS GANADO, CON TAN SOLO';
  } else if (number.value === ''){
    text.innerHTML = 'Campo vacío, escribir un número';
  }else if (numberValue>100 | numberValue< 0){
    text.innerHTML = 'El número tiene que estar entre 0 y 100,Te has salido del rango';
  }else if (myRandomNumber > numberValue) {
    text.innerHTML = 'Demasiado bajo';
  } else {
    text.innerHTML = 'Demasiado alto';
  }
}
function enter(event){
  if (event.keyCode === 13){
    clickbtn();
  }
}
function reset(){
  cont=0;
  number.value='';
  text.innerHTML = 'Escribe un numero y Prueba';
  lost.innerHTML = cont;
  myRandomNumber = getRandomNumber(100);
}


btn.addEventListener('click', clickbtn);
number.addEventListener('keyup',enter);
resetBtn.addEventListener('click',reset);