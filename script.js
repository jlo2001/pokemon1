var pokemon = angular.module("Pokemon", [])
pokemon.controller("ListadoPokemon",function($scope,$rootScope,$http){
	$scope.Lista=[];
	for (var y=1;y<=100;y++){
			$http({
			method:"GET",
			url:"https://pokeapi.co/api/v2/pokemon/"+y
		}).then(function data(x){
			$scope.Lista.push(x);
		})
	}
		

	});
