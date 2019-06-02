'use strict'

/*

1- Pedir 6 numeros y meter en un array
2 - Mostrar el array en el cuerpo dela pagina y consola
3 - Ordenar el array y mostralo
4 - Invertir orden array y mostralo
5 - Mostrar numero elementos del array
6 - Buscar un valor introducido en el array, si lo encuntra indicar la posicion

*/

function mostrar_array(array,textocustom = ""){
	document.write ("<h1> Contenido del array " + textocustom + "</h1>");
	document.write("<ul>")
	array.forEach((elemento,index)=>{
	document.write("<li>" + index + "-"  + elemento + "</li>");
    console.log(elemento)
});

document.write("</ul>");

}


var numeros = [];
var leer_numero;

// 1 Pedir 6 numeros

for (var i=0;i<6;i++){
	leer_numero = parseInt(prompt("Introduce un numero : "));
	numeros.push(leer_numero);
}

mostrar_array(numeros)


// 2 - Ordenar el array y mostrarlo

numeros.sort(function(a,b){return a-b});
console.log(numeros);

mostrar_array(numeros,"Ordenado");

// 3 - Invertir el orden
numeros.reverse();
mostrar_array(numeros,"Invertido");

// 4- Mostrar Elementos array

console.log("Elementos array " + numeros.length);

// Buscar elementos

var buscar = parseInt(prompt("Numero a buscar",0));

var posicion = numeros.findIndex(numero => numero == buscar); 

if (posicion && posicion != -1){
	document.write("<h1>Encontrado</h1>");
	document.write("<h1>Posicion de la busqueda : " + posicion + "</h1>");
} else {
	document.write("<h1>NO Encontrado</h1>");
}


