'use  strict'

// Eventos deL Raton

window.addEventListener('load', () => {


	var boton = document.querySelector("#boton");

	function cambiarColor(){

		var bg = boton.style.background;
		if (bg == 'green'){
			boton.style.background = 'red';
		} else {
			boton.style.background = 'green';
		}

		boton.style.padding = "10px";
		boton.style.border = "1px solid #ccc";

		return true;
	}


	// Evento Click
	boton.addEventListener('click',function(){
		cambiarColor();
	});

	// Evento MouseOver

	boton.addEventListener('mouseover',function(){

		boton.style.background = "#ccc";
	});

	// Evento mouseout

	boton.addEventListener('mouseout',function(){

		boton.style.background = 'blue';
	});	

	// EVENTOD DE TECLADO Y FOCO


	// EVENTO FOCUS

	var input = document.querySelector("#campo_nombre");

	input.addEventListener('focus',function(){

		console.log("Dentro del Input");
	});	


	// EVENTO BLUR

	input.addEventListener('blur',function(){

		console.log("Fuera del Input");
	});	

	// EVENTO KEYDOWN

	input.addEventListener('keydown',function(event){

		console.log("Se ha pulsado una tecla", String.fromCharCode(event.keyCode));
	});	


	// EVENTO KEYPRESS

	input.addEventListener('keypress',function(event){

		console.log("Tecla Presionada", String.fromCharCode(event.keyCode));
	});	


	// EVENTO KEYUP

	input.addEventListener('keyup',function(event){

		console.log("Tecla soltada", String.fromCharCode(event.keyCode));
	});	

}); // fin window