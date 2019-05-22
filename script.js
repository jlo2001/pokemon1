var pokemon =angular.module("pokemon")

pokemon.controller("pokemon",fuction($scope,$rootScope,$http()
	$htpp({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pkemon/35"
	}).then(function callbacksuccess(y))
		console.log(y);
}
