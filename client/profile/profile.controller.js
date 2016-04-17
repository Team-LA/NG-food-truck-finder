
angular.module('finder.profile', [])
	
.controller('ProfileController', function($scope, $window, $state, HttpRequest) {
  $scope.hasProfile = false;
	$scope.noProfile = false; 	
  $scope.user = {};
  console.log('inside profile controller');

  $scope.getProfile = function () {

  HttpRequest.get().then(function (data) {
  $scope.user =data;
    console.log('scope.user', $scope.user);
  });
 };

  $scope.getProfile()

  $scope.shouldShow = function() {
     if (scope.user.name) {
       $scope.hasProfile = true;
     } else {
       $scope.noProfile = true;
     }
   }
})
