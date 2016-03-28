/*
 *	Funciones
 */

function sayHello(name) {
	console.log(`Hola ${name} como estas?`);
}

var sayHi = function(name) {
	console.log(`Hola, que pasa ${name}`);
}

var suma = function(numA, numB) {
	return numA + numB;
}

sayHello("Raul");
sayHi("Brenda");
console.log(`El resultado de la suma es ${suma(5,9)}`);