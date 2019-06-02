'use strict'

/*
Ver  si un numero es par o impar.
ventana promt, comprobar si es valido
si introcudes 0 entonces fin

*/

var numero;

while (isNaN(numero)){

	numero = parseInt(prompt('Introduce un numero : ',0));
}

if (numero & 2 ==0){
    alert (numero + " es par");
	console.log (numero + " es par");
} else {
    alert (numero + " es impar");
	console.log(numero + " es impar");
}