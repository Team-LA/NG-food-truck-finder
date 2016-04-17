angular.module('finder.auth', [])

.controller('AuthController', function ($scope, $window, $location, Auth) {

  $scope.signin = function () {
    Auth.signin($scope.user)
    .then(function (token) {
      console.log("token in signin", token)
      $window.localStorage.setItem('token', token)
    })
      .catch(function (error) {
      })
  }

    $scope.signup = function () {
      Auth.signup($scope.user)
      .then(function (token) {
        console.log("token in signup", token)
        $window.localStorage.setItem('token', token);
        $location.path('/profile');

      })
      .catch(function (error) {
        console.error(error);
      });
    }
  })
