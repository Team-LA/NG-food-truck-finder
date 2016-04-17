
angular.module('finder.trucks', [])

.controller('FindtrucksController', function ($scope, Truckdata) {
	
	function getGeoLocation(){
		//get geolocation from browser and post it to the server
		navigator.geolocation.getCurrentPosition
	};

	function getNearbyTrucks(trucks array from truckdata.service){
		//get array of truck objects whose truck distance property is less than a certain distance
	}


	$scope.getGeoLocation = getGeoLocation;
	$scope.getNearbyTrucks = getNearbyTrucks;

});