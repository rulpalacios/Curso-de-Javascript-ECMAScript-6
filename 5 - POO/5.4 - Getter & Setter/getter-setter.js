class Raul{

	get name(){
		return this._name;	
	}

	set name(name){
		this._name = name;
	}

}

var person = new Raul();

person.name = "Raúl";
console.log(`Hola soy ${person.name}`);