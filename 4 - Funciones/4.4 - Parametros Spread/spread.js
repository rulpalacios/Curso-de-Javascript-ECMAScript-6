/*
 *	Parametros Spread
 */

function device(type, name, brand) {
	console.log(`El ${type} ${name} es de la marca ${brand}`);
}

var cellphone = new Array("Celular", "X2", "Motorola");

device(...cellphone);