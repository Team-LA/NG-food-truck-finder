angular.module('profile.service',[])

// .factory('ProfileData', function($http, $location, $window){
// 	return {};
// });
angular.module('profile.service',[])

.factory('HttpRequest', function($http) {
	var get = function (user) {
		return $http({
			method: 'GET',
			url: '/profile',
			params: user
		}).then(function (resp) {
			return resp.data;
		});
	};

	var post = function (user) {
		return $http({
			method: 'POST',
			url: '/profile',
			data: user
		});
	};
	return {
		get: get,
		post: post
	};
});
