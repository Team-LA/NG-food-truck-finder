angular.module('finder.profile', [])

.controller('ProfileController', function($scope, $window, $state, HttpRequest) {
    $scope.userData = {};
    $scope.getProfile = function () {
        var token = $window.localStorage.getItem('token');
        console.log('token', token)
        HttpRequest.get().then(function (data) {
            $scope.user= data;
        });
    };
    $scope.logout = function() {
        $window.localStorage.removeItem('token');
        $state.go('trucks');
    }
    $scope.getProfile()
    
    $scope.toEditProfile = function() {
        $scope.user = {};
        $scope.user.locations = [];
        $scope.user.name = $scope.name;
        $scope.user.cuisine = $scope.cuisine;
        $scope.user.locations.push({
            address: $scope.address,
            hours: {
                "1": [$scope.start1, $scope.end1],
                "2": [$scope.start2, $scope.end2],
                "3": [$scope.start3, $scope.end3],
                "4": [$scope.start4, $scope.end4],
                "5": [$scope.start5, $scope.end5],
                "6": [$scope.start6, $scope.end6],
                "0": [$scope.start0, $scope.end0]
            }
        });
        console.log('ngmodel', $scope.user);
        HttpRequest.post($scope.user)
    }
});