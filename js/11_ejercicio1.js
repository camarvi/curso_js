'use strict'

/*
Programa que pida dos numeros y diga cual es mayor , menor o igual
*/

var numero1 = parseInt(prompt("Numero 1 : ",0));
var numero2 = parseInt(prompt("Numero 2 : ",0));

while (numero1 <=0 || numero2 <=0 || isNaN(numero1) || isNaN(numero2)){
  numero1 = parseInt(prompt("Numero 1 : ",0));
  numero2 = parseInt(prompt("Numero 2 : ",0));


}

if(numero1 == numero2){
	alert("Los numeros son iguales " + numero1);
} else if (numero1 > numero2) {
		alert(numero1 + " es mayor que " + numero2);
		} else {
			alert (numero1 + " es menor que " + numero2);
		}