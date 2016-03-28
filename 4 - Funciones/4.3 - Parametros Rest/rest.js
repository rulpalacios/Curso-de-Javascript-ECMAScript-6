/*
 *	Parametros Rest ó Agrupados
 */

function hardware(...components) {
	for (let component of components) {
		console.log(component);
	}
}

hardware("RAM", "HDD", "Mother Board");