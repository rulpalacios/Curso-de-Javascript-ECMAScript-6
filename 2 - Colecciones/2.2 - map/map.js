/*
*	Map ó Mapa
*/

var car = new Map();

car.set("brand", "Volkswagen");
car.set("name", "Golf");
car.set("color", "White");

console.log(car.get("brand"));
console.log(car.has("brand"));
car.delete("brand");
console.log(car.has("brand"));
console.log(car);