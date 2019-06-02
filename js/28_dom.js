'use strict'

// DOM

function cambiaColor(color){

	caja.style.background = color;
}


// Captura en una variable un elemento de la pagina


// CONSEGUIR ELEMENTOS CON ID CONCRETO

//var caja = document.getElementById("micaja");


// Esto es igual que lo de arriba, solo que hace uso de querySelector
var caja = document.querySelector("#micaja")

// Modifico las propiedades de ese objeto
caja.innerHTML = "Texto modificado desde JS";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "miclase1 miclase2";

// Conseguir elementos por su etiqueta

var todosLosDiv = document.getElementsByTagName('div');

console.log(todosLosDiv);

console.log(todosLosDiv[2].innerHTML);

//todosLosDiv[2].innerHTML = "Segundo Div modificado desde JS";

var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");



var valor;

for (valor in todosLosDiv){
	if (typeof todosLosDiv[valor].innerHTML == 'string'){
		var parrafo = document.createElement('p');
		var texto = document.createTextNode(todosLosDiv[valor].innerHTML);
		parrafo.append(texto);
		seccion.append(parrafo);
	}
}	

seccion.append(hr);

// Conseguir elementos por su clase

var divsRojos = document.getElementsByClassName('rojo');
console.log(divsRojos);

var indice;
for (indice in divsRojos){
	if (divsRojos[indice].className == "rojo"){
		divsRojos[indice].style.background = "red";		
	}
	
}
