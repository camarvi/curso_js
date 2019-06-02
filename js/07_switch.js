'use strict'

var edad=40;
var imprime="";

switch(edad){
	case 18:
		imprime = "Tienes 18";
		break;
	case 25:
		imprime = "Eres un adulto";
		break;
	case 40:
		imprime = "Eres cuarenton";
		break;
	case 75:
		imprime = "Eres un anciano";
		break;
	default:
		imprime = "Edad no registrada";
		break;
}

console.log (imprime);