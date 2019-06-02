'use strict'

/*

crear una calculdora
 Pida dos numeros y compruebe que estan bien, que son numeros
 Que muestre el resultado de las operaciones aritmericas : suma, resta, division, multiplicacion
*/

var numero1;
var numero2;

while (isNaN(numero1)){

	numero1 = parseInt(prompt("Numero 1 : "));
}

while (isNaN(numero2)){

	numero2 = parseInt(prompt("Numero 2 : "));
}

var resultado = "La suma es : " + (numero1 + numero2) + "<br/>" +
				"La resta es :" + (numero1-numero2) + "<br/>" +
				"La multiplicacion es :" + (numero1*numero2) + "<br/>" +
				"La division es : " + (numero1/numero2);

var resultado2 = "La suma es : " + (numero1 + numero2) + "\n" +
				"La resta es :" + (numero1-numero2) + "\n" +
				"La multiplicacion es :" + (numero1*numero2) + "\n" +
				"La division es : " + (numero1/numero2);

document.write(resultado);

alert(resultado2);

console.log(resultado2);



