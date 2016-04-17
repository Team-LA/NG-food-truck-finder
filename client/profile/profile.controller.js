angular.module('finder.profile', [])
	
.controller('ProfileController', function($scope, $window, $state, HttpRequest) {
    $scope.userData = {};
    console.log('inside profile controller');
    $scope.getProfile = function () {
        HttpRequest.get().then(function (data) {
            $scope.userData.profile= data;
            console.log($scope.userData.profile);

        });
    };
    $scope.logout = function() {
        $window.localStorage.removeItem('token');
        $state.go('trucks');
    }
});
