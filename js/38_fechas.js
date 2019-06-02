'use strict'

window.addEventListener('load',function(){

	var fecha = new Date();
	var year = fecha.getFullYear();
	var mes = fecha.getMonth();
	var dia = fecha.getDate();
	var hora = fecha.getHours();
	var minutos = fecha.getMinutes();

	var textoHora = `
		El año es : ${year}
		El mes es : ${mes}
		El dia es : ${dia}
		La hora es : ${hora} - ${minutos}

	`;

	console.log(textoHora);

});

