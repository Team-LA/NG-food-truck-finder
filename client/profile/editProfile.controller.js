angular.module('finder.editProfile', [])

.controller('EditProfileController', function($scope, $window, $state) {
	$scope.cuisineTypes = ['Chinese', 'American'];
	$scope.timeList = ['12:00am', '8:00am', '9:00am', '10:00am'];
	$scope.addLocation = false;
	$scope.locations = [];

	$scope.editLocation = function(){
		console.log('location, housr', $scope.address, $scope.start1)
		var location = {};
		location.address = $scope.address;
	}
});