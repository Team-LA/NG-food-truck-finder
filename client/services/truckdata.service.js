angular.module('truck.service',[])

.factory('Truckdata', function($http, $location, $window){
	return $http({
		method: 'POST',
		url: '/',
		data: longitude, latitude  
	}).then(function(resp){
		console.log(resp)
	})
})