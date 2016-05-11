angular.module('profile.service',[])

.factory('HttpRequest', function($http) {
    var get = function () {
        return $http({
            method: 'GET',
            url: '/profile',
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

    var submitProfile = function(data) {
        return $http.post('/profile', data);
    }
    return {
        get: get,
        post: post,
        submitProfile: submitProfile
    };
});