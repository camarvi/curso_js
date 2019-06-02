'use strict'

// LOCALSTORAGE

// Comprobar que el navegador es compatible con LocalStorage

if (typeof(Storage) !== 'undefined'){

	console.log("LocalStorage Disponible");
} else {
	console.log("LocalStorage NO Disponible");
}

// Guardar un dato en LocalStorage

localStorage.setItem("titulo", "curso de laravel 5");

// Recuperar Elementos
console.log(localStorage.getItem("titulo"));

var caja_peliculas = document.querySelector("#peliculas");

var p = document.createElement("p");

p.append(localStorage.getItem("titulo"));

caja_peliculas.append(p);

// Guardar Objetos Json , hay que pasar el objeto a un JSON STRING

var usuario = {
	nombre : "antonio flores",
	email : "antonio@aflores.com",
	web : "antonioflores.com"

}

localStorage.setItem("usuario", JSON.stringify(usuario));

//Recuperar objetos del localStorage
var userJson = JSON.parse(localStorage.getItem("usuario"));

console.log(userJson);

document.querySelector("#peliculas").append(userJson.web);

//Eliminar Elementos del LocalStorage

localStorage.removeItem("usuario");

//Borrar todo el contenido del localStorage

localStorage.clear();


