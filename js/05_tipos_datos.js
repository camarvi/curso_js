'use strict'

var numero1 = 7;
var numero2 = 23;
var resultado

resultado = numero1 + numero2;
console.log(resultado);

resultado = numero1 - numero2;
alert("El resultado es:" + resultado);

resultado = numero2 / numero1;
console.log(resultado);

var numero_falso = "25";
console.log(numero_falso);

var numero_verdadero = Number(numero_falso);
console.log(numero_verdadero+5);
console.log(parseInt(numero_falso)+5);
numero_falso = "25.8";
console.log(parseFloat(numero_falso)+9);

console.log(String(numero_verdadero)+8) //258
console.log(typeof numero_verdadero);
console.log(typeof numero_falso);