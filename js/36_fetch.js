'use strict'

// Fetch y peticiones a servicios / apis rest


var div_usuario = document.querySelector("#usuario");
var div_janet = document.querySelector("#janet");

	getUsuarios()
		.then(data => data.json())
		.then(users => {
			//console.log(usuarios);
	     	listadoUsuarios(users.data);

	     	return getJanet();
	     })
	     .then(data => data.json())
	     .then(janet => {
	     	mostrarJanet(janet.data);

	     	return getInfo();
	     })
	     .then(data =>{
	     	console.log(data);
	     })
	     .catch(error =>{
	     	console.log(error);
	     });	
		
	

function getUsuarios(){
	return fetch('https://reqres.in/api/users');
}

function getJanet(){
	return fetch('https://reqres.in/api/users/2');

}

function getInfo(){

	var profesor = { //se crea un json
			nombre : "Fernando",
			apellidos : "herrera",
			url : "www.fherrera.com"
		}

	return new Promise((resolve, reject) =>{
		var profesor_string = JSON.stringify(profesor);

		if (typeof profesor_string != 'string') return reject('error');

		return resolve(profesor_string);
	});
	

	
}

function listadoUsuarios(usuarios){

		usuarios.map((user, i)=> {  // esto es lo mismo que hacer un for in
			let nombre = document.createElement('h2');

			nombre.innerHTML = user.first_name + " " + user.last_name;
			div_usuario.appendChild(nombre);

			document.querySelector(".cargando").style.display = "none";

		});

}

function mostrarJanet(user){

	let nombre = document.createElement('h2');
	let avatar = document.createElement('img');

	nombre.innerHTML = user.first_name + " " + user.last_name;
	avatar.src = user.avatar;
	avatar.width = "100";

	div_janet.appendChild(nombre);
	div_janet.appendChild(avatar);

	document.querySelector("#janet .cargando").style.display = "none";

	
}