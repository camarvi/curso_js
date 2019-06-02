'use strict'

var categorias = ['comedia','accion','terror'];
var peliculas = ['pe1','pe2','pe3'];

var cine = [categorias, peliculas];

/*
console.log(cine[0][1]); // accion
console.log(cine[1][2]); // pe3
*/

// añadir elementos

peliculas.push("pe4");

peliculas.pop(); //elimina el ultimo elemento array

//elimnar un elemento del aray

//peliculas.splice(2,1);  // elimina el elemento 2


// pasar array a string
var peliculas2 =peliculas.join();
console.log(peliculas2);

// pasar string a un array

var nuevo_array = peliculas2.split(",");
console.log(nuevo_array);