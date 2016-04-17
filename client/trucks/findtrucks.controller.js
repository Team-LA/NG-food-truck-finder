
angular.module('finder.trucks', [])

.controller('FindtrucksController', function ($scope, Truckdata) {
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
			});
    });
	};

	$scope.getLocation = getLocation;
	
});