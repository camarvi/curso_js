'use strict'

window.addEventListener('load',function(){
	console.log("Dom Cargado");

	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none"

	var boton_captura = document.querySelector("#captura");

	function captura_datos(){

		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var edad = parseInt(document.querySelector("#edad").value);
		
		if (nombre.trim() == null || nombre.trim().length ==0){
			alert("El nombre no es valido");
			return false;
		}

		if (apellidos.trim() == null || apellidos.trim().length ==0){
			alert("Los apellidos no son validos");
			return false;
		}

		if (edad == null || isNaN(edad)){
			alert("La edad no es valido");
			return false;
		}		
		
		box_dashed.style.display = "block"

		var datos_usuario = [nombre, apellidos, edad];

		for (var indice in datos_usuario){
			var parrafo = document.createElement("p");
			parrafo.append(datos_usuario[indice]);
			box_dashed.append(parrafo);
		}
		

	};


	// CAPTURA EL EVENTO SUBMIT DEL FORMULARIO
	formulario.addEventListener("submit", function(){
		console.log("Evento Submit Capturado");
		captura_datos();

	});

	boton_captura.addEventListener("click", function(){
		console.log ("Evento Boton Captura");
		captura_datos();

	});

});