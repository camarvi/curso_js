'use strict'

// Pruebas con var y let

var numero = 40;
console.log(numero); // valor 40

if (true){

	var numero = 50;
	console.log(numero); //valor 50
}

console.log(numero) //valor 50

//Ejemplo con let

var texto = "Curso JS"
console.log(texto)  // Curso JS

if (true){

	let texto = "Curso Php"
	console.log(texto)  //Curso php
}

console.log(texto)  //Curso JS