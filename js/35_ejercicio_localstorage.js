'use strict'

window.addEventListener('load', function(){

	var formulario = document.querySelector("#formpeliculas");

	formulario.addEventListener('submit', function(){
		
		var titulo = document.querySelector("#addpelicula").value;

		if (titulo.length>0){
			localStorage.setItem(titulo, titulo );
		}
		

	});

	var caja_peliculas = document.querySelector("#peliculas-list");

	for (var i in localStorage) {

		if (typeof localStorage[i] == 'string') {
			var li = document.createElement('li');
			li.append(localStorage[i]);
			caja_peliculas.append(li);
		}
	
	}


});