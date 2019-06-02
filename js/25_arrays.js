'use strict'

//Arrays

var nombres = ["paco", "manolo","lucia"];
var lenguajes = new Array("Php","Js","Python");

console.log(nombres);
console.log(lenguajes);

// acceso a un elemento del array

console.log(nombres[0]);
console.log(lenguajes[2]);

//longitud array
console.log(nombres.length);

document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");

/*
for (var i=0; i<lenguajes.length; i++){
	document.write("<li>" + lenguajes[i] + "</li>");
}

*/

lenguajes.forEach((elemento,index,data)=>{
  document.write("<li>" +index + " " + elemento + "</li>");
  console.log(data)
});

document.write("</ul>");

var busqueda = lenguajes.find(function(lenguaje){

	return lenguaje="Php"	
});

// Este codigo es igual que el de arriba
var busqueda = lenguajes.find(lenguaje => lenguaje == "Php");
var posicion = lenguajes.findIndex(lenguaje => lenguaje == "Php"); //busca la posicion en el array


console.log(busqueda) // devuelve si true si encuenta el elemento
console.log(posicion)