
var promise = new Promise(function(resolve, reject){

	/*const FLAG = 5;

	if (FLAG == 10)
		resolve("Todo Bien!!");
	else
		reject(Error("Algo salio mal :C"));*/

	/*setTimeout(function(){
		resolve("Todo Bien!!");
	}, 3000);*/

	setTimeout(resolve, 4000, "Todo Bien!!!");

});


promise.then(function(response){
	console.log(response);
}, function(error){
	console.log(error);
})