
angular.module('finder.trucks', [])

.controller('FindtrucksController', function ($scope, Truckdata) {
	
	$scoope.getTrucks = function() {
		Trucksdata.getTrucks(getLocation(showPositionLongitude), getLocation(showPositionLatitude));

	}
	
	function getLocation(cb) {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(cb);
	    } else {
	        console.log("Geolocation is not supported by this browser.");
	    }
	};
	function showPositionLatitude(position) {
	    return position.coords.latitude  
	    
	};

	function showPositionLongitude(position){
		return position.coords.longitude
	};



	
	$scope.getLocation = getLocation;
	$scope.showPositionLatitude = showPositionLatitude;
	$scope.showPositionLongitude = showPositionLongitude;
	$scope.getNearbyTrucks = getNearbyTrucks;

});