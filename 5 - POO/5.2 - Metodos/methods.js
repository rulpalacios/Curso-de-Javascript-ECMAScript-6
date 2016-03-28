class Dog {

	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	sayGuau() {
		return "Guau Guau!!!";
	}

	static sayMiau() {
		return "Miau Miau!!!";
	}

}

var dog = new Dog("Popi", "Golden");

console.log(dog.sayGuau());

console.log(Dog.sayMiau());