'use strict'

// Condicional if

/*
Igual: ==
Distinto: !=

*/

var edad = 19;
var nombre = 'David'

if(edad >= 18){
	console.log(nombre + " es mayor de edad")
	if (edad <=33){
		console.log('Todavia eres Milenial')
	} else if(edad >= 70) {
		console.log('Eres anciano')
		}
} else {
	console.log(nombre + " es menor de edad")
	}

var year = 2018
//Negación


if(year != 2016){
	console.log("el año no es 2016")
}

// AND
if (year >= 2000 && year <=2020){
	console.log("Estamos en la era actual")
} else {
	console.log("El año es " + year)
}

// OR

if (year == 2018 || year == 2008){
	console.log("El año acaba en 8")

}