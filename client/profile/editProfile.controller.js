angular.module('finder.editProfile', [])

.controller('EditProfileController', function($scope, $window, $state) {
	$scope.cuisineTypes = ['Chinese', 'American'];
	$scope.timeList = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', '9:00pm', '10:00pm', '11:00pm', ''];
	$scope.addLocation = false;
	$scope.locations = [];

	$scope.editLocation = function(){
		$scope.addLocation = false;
		$scope.locations.push($scope.location);
		$scope.location = {};
		console.log('location', $scope.locations)
	}

	$scope.submitProfile = function(){
		data.name = $scope.name;
		data.cuisine = $scope.cuisine;
		data.locations = $scope.locations;
		HttpRequest.submitProfile(data);
	}
});