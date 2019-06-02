'use strict'

// Funciones anonimas : Funciones que no tienen nombre

var pelicula = function(nombre){

	return "la pelicula es :" + nombre;
}

function suma(numero1, numero2,sumaYmuestra,sumaPorDos){

	var resultado = numero1 + numero2;
	sumaYmuestra(resultado);
	sumaPorDos(resultado);
}


suma(5,10,function(dato){
	console.log("La suma es : " + dato);
},(dato) => {  // llama funcion fecha es igual que un anonima
	console.log("La suma por dos es: " + dato*2);
});