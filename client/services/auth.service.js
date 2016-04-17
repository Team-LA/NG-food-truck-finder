angular.module('auth.service',[])

.factory('Auth', function($http, $location, $window) {
	var signin = function (user) {
		return $http({
		  method: 'POST',
		  url: '/login',
		  data: user
		})
		.then(function (resp) {
		  return resp.data;
		});
  };

  var signup = function (user) {
	  return $http({
		  method: 'POST',
		  url: '/signup',
		  data: user
		})
		.then(function (resp) {
		  return resp;
		});
	};

  var isAuth = function () {
	  return !!$window.localStorage.getItem('token');
	};

  return {
	  signin: signin,
	  signup: signup,
	  isAuth: isAuth
	}

});
