'use strict'

window.addEventListener('load', function(){

// Timers

    // setTimeout --> solo se ejecuta una vez se pone en lugar de setInterval
   
function intervalo(){
	var tiempo = setInterval(function(){
		console.log("setInterval Ejecutado");
		 var encabezado = document.querySelector("h1");
 		if (encabezado.style.fontSize != "50px") {
			encabezado.style.fontSize = "50px";
		} else {
			encabezado.style.fontSize = "30px";
		}
		
	}, 1000);
	return tiempo

}
	
   var tiempo = intervalo();

   var stop = document.querySelector("#stop");

   stop.addEventListener('click', function(){
   	 // Voy a parar el bucle de la variable tiempo
   	 alert("Se ha parado el intervalo en bucle");
   	 clearInterval(tiempo);
   });


   var iniciar = document.querySelector("#iniciar");

   iniciar.addEventListener('click', function(){
   		console.log("Has iniciado el bucle");
   		intervalo();

   });

});