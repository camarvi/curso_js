'use strict'

// JSON - Notacion de Objetos JS

var pelicula = {
	titulo : 'Batman',
	year : 2017,
	pais : 'Estados Unidos'

}

var peliculas = [
	{titulo: 'Superman', year: 1986, pais: 'Francia'},
	pelicula
]

console.log(peliculas)

window.addEventListener('load',function(){

	var caja_peliculas = document.querySelector("#peliculas");
	var index;
	for (index in peliculas){
		var p = document.createElement("p");
		p.append(peliculas[index].titulo + " Año :" + peliculas[index].year);
		caja_peliculas.append(p);

	}



});