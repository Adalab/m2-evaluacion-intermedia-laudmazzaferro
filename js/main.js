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
//console.log(`Mi número aleatorio es ${myRandomNumber}`);

function clickbtn() {
  const numberValue = parseInt(number.value);
  //console.log(number.value);
  cont = cont + 1;
  lost.innerHTML = cont;

  if (myRandomNumber === numberValue) {
    text.innerHTML = '¡HAS GANADO, CAMPEONA!';
    console.log('ganador');
  } else if (number.value === ''){
    console.log('vacio');
    text.innerHTML = 'Campo vacio, escribir un numero';
  }else if (numberValue>100 | numberValue< 0){
    text.innerHTML = 'El numero tiene que estar entre 0 y 100,Te has salido del rango';
    console.log('raango');
  }else if (myRandomNumber > numberValue) {
    text.innerHTML = 'Demasiado bajo';
    console.log('bajo');
  } else {
    text.innerHTML = 'Demasiado alto';
    console.log('alto');
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
  console.log(myRandomNumber );
}

console.log(myRandomNumber );

btn.addEventListener('click', clickbtn);
number.addEventListener('keyup',enter);
resetBtn.addEventListener('click',reset);