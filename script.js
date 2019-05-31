var pokemon = angular.module("pokemon",[])

pokemon.controller("Pokedex",function($scope,$rootScope,$http){
	$scope.pokedexB = ;

	for (var i = 0; i < 100; i++) {
		$http({
		method: "GET",
		url: "https://pokeapi.co/api/v2/pokemon/"+i
	  }).then(function callbackSuccess(y) {
		$SCOPE.pOKEDEXb

})
