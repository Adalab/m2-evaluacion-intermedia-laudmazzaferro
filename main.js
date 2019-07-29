'use strict';
const number= document.querySelector(('.field__fill-number'));

console.log('number.value');

function fillNumber(event) {
    const numberadd= event.currentTarget.value;
    console.log(numberadd)
}

number.addEventListener('keyup', fillNumber);


//generar un número aleatorio con la ayuda de Math.random y Math.ceil, y mostrarlo por la consola

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }
  
  // Anda, chacho, píntame en la consola un número random hasta 100;
  const myRandomNumber = getRandomNumber(100);
  
  console.log(`Mi número aleatorio es ${myRandomNumber}`);
