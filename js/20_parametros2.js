'use strict'

//parametros REST y SPREAD

function listadoFrutas(fruta1, fruta2, ...resto){

	console.log("Fruta1 :" , fruta1);
	console.log("Fruta2 : ", fruta2);
	console.log(resto)
}

listadoFrutas("Manzana", "Peras","melon","sandia","kiwi");

var fruta =["Manzana", "Peras"];

listadoFrutas(...fruta,"melon","sandia","kiwi");
