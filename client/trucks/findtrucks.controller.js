
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
				console.log("scope.trucks",$scope.trucks);
				console.log("where am I?")
			});
	    });
	    
	};

	function showHours(array){
		$scope.hours = '';
		$scope.address = '';
		$scope.day = '';
		for(var i =0; i<array.length; i++){
			for(var key in array[i]){
				if(key==="address"){
					$scope.address = array[i][key]
				}
				if( key === "hours"){
					for(var key2 in array[i][key]){
						if(key2 = "1"){
							$scope.day = "Monday";
							if(array[i][key][key2]){
								$scope.hours = array[i][key][key2][0]+"am"+ " to " +(array[i][key][key2][1]-12) +"pm" 
							}
						}
					}
				}
			}
		};
	};





	
	$scope.getLocation = getLocation;
	$scope.showHours = showHours;
	
});