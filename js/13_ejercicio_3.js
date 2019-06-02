'use strict'

/*
Mostrar todos los numeros entre dos
*/

var numero1 = parseInt(prompt("Numero 1 :",0));
var numero2 = parseInt(prompt("Numero 3 : ",0));

document.write("<h1>De " + numero1 + " a " + numero2 + " van :</h1>");

for (var contador = numero1;contador<numero2; contador++){

	document.write(contador + "<br/>");
}