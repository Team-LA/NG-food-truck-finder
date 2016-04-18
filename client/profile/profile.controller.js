angular.module('finder.profile', [])

.controller('ProfileController', function($scope, $window, $state, HttpRequest) {

    $scope.showProfile = false;
    $scope.editProfile = true;

    $scope.userData = {};
    $scope.getProfile = function () {
        var token = $window.localStorage.getItem('token');
        HttpRequest.get().then(function (data) {
            $scope.user= data;
            if($scope.user.name) {
                $scope.showProfile = true;
                $scope.editProfile = false;
            }
        });
    };

    $scope.logout = function() {
        $window.localStorage.removeItem('token');
        $state.go('trucks');
    }

    $scope.getProfile();

    $scope.toEditProfile = function() {
        console.log('ngmodel', $scope.name);
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
        HttpRequest.post($scope.user).then(function(resp){
            console.log('line 46', resp.data)
            console.log('line 47', '$scope.user',$scope.user)
                $scope.showProfile = true;
                $scope.editProfile = false;
        });
    }
});