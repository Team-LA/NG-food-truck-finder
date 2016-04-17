angular.module('finder.profile', [])


.controller('ProfileController', function ($scope, $window, Profiledata, $state) { //need to include factory name in parameters

	$scope.logout = function() {
		$window.localStorage.removeItem('token');
		$state.go('trucks');
	}

});
