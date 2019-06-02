'use strict'

/*
Mostrar todos los numeros divisores de un numero

*/

var numero = parseInt(prompt('Introduce un numero:',1));

var divisor = 1;

do {

	if (numero%divisor == 0)
	{
		console.log('Divisor : ' + divisor)
	}

	divisor++;

} while (divisor<=numero)