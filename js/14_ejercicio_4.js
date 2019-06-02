'use strict'

/*
Mostrar los numeros impares que hay entre dos numeros
*/

var numero1 = parseInt(prompt('Numero 1:',0));
var numero2 = parseInt(prompt('Numero 2:',0));

document.write ('<h1>Numeros Impares entre ' + numero1 + ' y ' + numero2 + '</h1>');

for (var i=numero1;i<=numero2; i++){
 
 if (i%2!=0){
 	document.write("</br>" + i);
 } 

}