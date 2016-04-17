angular.module('truck.service',[])

.factory('Truckdata', function($http, $location, $window){
	var getTrucks = function(longitude, latitude){

		return $http({
			method: 'POST',
			url: '/findTrucks',
			data: {
				longitude: longitude,
				latitude: latitude
			} 
		}).then(function(resp){
			return resp.data;
		})
	}

	return {
		getTrucks: getTrucks
	};
})