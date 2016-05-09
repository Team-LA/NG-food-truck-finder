angular.module('finder.editProfile', [])

.controller('EditProfileController', function($scope, $window, $state) {
	$scope.cuisineTypes = ['Chinese', 'American'];
	$scope.timeList = ['12:00am', '8:00am', '9:00am', '10:00am'];
	$scope.addLocation = false;
	$scope.locations = [];

	$scope.editLocation = function(){
		$scope.addLocation = false;
		var location = {};
		location.address = $scope.address;
		location.hours = {};
		location.hours["1"] = [$scope.start1, $scope.end1];
		location.hours["2"] = [$scope.start2, $scope.end2];
		location.hours["3"] = [$scope.start3, $scope.end3];
		location.hours["4"] = [$scope.start4, $scope.end4];
		location.hours["5"] = [$scope.start5, $scope.end5];
		location.hours["6"] = [$scope.start6, $scope.end6];
		location.hours["0"] = [$scope.start0, $scope.end0];
		$scope.locations.push(location);
		console.log('location', $scope.locations)
	}
});