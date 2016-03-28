/*
*	Set ó Conjunto
*/

var dogs = new Set();

dogs.add("Chihuahua");
dogs.add("Bull-Dog");
dogs.add("Bull-Terrier");
dogs.add("Bull-Terrie");

dogs.delete("Bull-Terrie");
console.log(dogs);