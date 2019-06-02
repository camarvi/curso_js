'use strict'

//plantillas de texto

var nombre = prompt("Nombre :");
var apellidos = prompt("Apellidos :");

//var texto = "Mi nombre es " + nombre + ", y el apellido es " + apellidos;

var texto = `
  <h1>Entrada</h1>
  <h3>Mi nombre es ${nombre}</h3>
  <h3>el apellidos es ${apellidos}</h3>

`;

document.write(texto);