'use strict'

/*

Tabla de multiplicar de un numero introducido 

*/

var numero = parseInt(prompt('Introduce un numero: '));

document.write("<h2> Tabla de Multiplicar del : " + numero + "</h2>");
for (var i=1;i<=10; i++){
    document.write(numero + " x " + i + " = " + (numero*i) + "<br/>"); 
	console.log (numero + "*" + i + "= " + numero*i); 
}

// Todas las tablas

var contador = 1;

do {
	document.write("<h2> Tabla de Multiplicar del : " + contador + "</h2>");
	for (var i=1;i<=10; i++){
    	document.write(contador + " x " + i + " = " + (contador*i) + "<br/>"); 
		console.log (contador + "*" + i + "= " + contador*i); 
	}
	contador++;
} while (contador<=10)