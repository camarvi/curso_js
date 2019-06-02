'use strict'

// Transformacion de cadenas

var numero = 444;
var texto1 = "Bienvenido al curso Java";
var texto2 = "es muy buen curso";

//buscar una cadena dentro de otra
var busqueda = texto1.indexOf("curso");
console.log(busqueda);

//buscar la ultima coincidencia
busqueda = texto1.lastIndexOf("o");
console.log(busqueda);

busqueda = texto1.search("curso");
console.log(busqueda);

busqueda = texto1.match(/e/g);
console.log(busqueda);

busqueda = texto1.substr(14,5);
console.log(busqueda);

busqueda = texto1.replace("Java", "php");
console.log(busqueda);

busqueda = texto1.slice(14);
console.log(busqueda);

busqueda = texto1.split(" ");
console.log(busqueda);

busqueda = texto1.trim();
console.log(busqueda);