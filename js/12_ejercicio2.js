'use strict'

/*
Utilizando un bucle, mostrar la suma y la media de 
los numeros introducidos, hasta meter un negativo
*/


var suma = 0;
var contador = 0;

do {
	var numero = parseInt(prompt('introduce numeros :'));
	if (isNaN(numero)){
		numero = 0;
	} else if (numero >=0) {
		suma = suma + numero;
		//suma += numero;
		contador++;

	}
} while (numero>=0)

alert ("la suma es :" + suma);
alert("la media es :" + (suma/contador));
