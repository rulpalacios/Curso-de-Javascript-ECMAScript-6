/*
*	Destructuring Assignment - Asignacion de Desestructuracion
*/ 


var animals = new Array("Perro", "Gato", "Ratón");

//Sin Destructuring
/*
var perro = animals[0];
var gato = animals[1];
var raton = animals[2];
*/

//Destructuring

var [perro, gato, raton] = animals


console.log(perro, gato, raton);