
angular.module('finder.trucks', [])

.controller('FindtrucksController', function ($scope, Truckdata) {

	$scope.hiddenDiv = false;



	var longitude;
	var latitude;
	

	$scope.getTrucks = function() {
		getLocation(Truckdata.getTrucks);

	};
	

	function getLocation(cb) {
	    navigator.geolocation.getCurrentPosition(function(position){
	    	latitude = position.coords.latitude;
	    	longitude = position.coords.longitude;
	    	cb(longitude, latitude)
	    	.then(function(resp){
				$scope.trucks = resp;
				console.log("resp", resp);
				console.log("scope.trucks",$scope.trucks)
			});
	    });
	    
	};



	
	$scope.getLocation = getLocation;
	
	
});