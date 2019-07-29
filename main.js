'use strict';
const number= document.querySelector('.field__fill-number');
const btn= document.querySelector('.btn');


//generar un número aleatorio con la ayuda de Math.random y Math.ceil, y mostrarlo por la consola
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}


function clickbtn (){

// Anda, chacho, píntame en la consola un número random hasta 100;
const myRandomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es ${myRandomNumber}`);

// al pulsar el botón de "prueba", acceder al contenido del input y mostrarlo en la consola
const numberValue= parseInt(number.value);
console.log(numberValue);

//comparar el número que el usuario ha escrito en el input con el número aleatorio, y pintar el feedback correspondiente en la pantalla ("demasiado alto", "demasiado bajo", "¡HAS GANADO, CAMPEONA!")


}

  btn.addEventListener('click',clickbtn);