angular.module('finder', [
  'finder.auth',
  'finder.map',
  'finder.profile',
  'finder.trucks',
  'auth.service',
  'profile.service',
  'truck.service',
  'ui.router'
])

.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/trucks');

  $stateProvider
    .state('signin', {
      url: '/signin',
      templateUrl: 'auth/signin.html',
      controller: 'AuthController'
    })

    .state('signup', {
      url: '/signup',
      templateUrl: 'auth/signup.html',
      controller: 'AuthController'
    })

    .state('profile', {
      url: '/profile',
      templateUrl: 'profile/profile.html',
      controller: 'ProfileController',
      authenticate: true
    })

    .state('trucks', {
      url: '/trucks',
      templateUrl: 'trucks/findtrucks.html',
      controller: 'FindtrucksController'
    })

  .state('map', {
    url: '/trucks',
    templateUrl: 'map/map.html',
    controller: 'MapController'
  });

  $httpProvider.interceptors.push('AttachTokens');
})

.factory('AttachTokens', ['$window', function ($window) {
  console.log("in AttachTokens")
  var attach = {
    request: function (object) {

      var jwt = $window.localStorage.getItem('token');

      if (jwt) {
        console.log('has jwt')
        object.headers['x-access-token'] = jwt;
      }

    object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
}])

.run(['$rootScope', '$state', 'Auth', function ($rootScope, $state, Auth) {
  $rootScope.$on('$stateChangeStart', function (evt, toState, toParams, fromState, fromParams, error) {

    if (toState && toState.authenticate && !Auth.isAuth()) {
      evt.preventDefault();
      $state.go('signin');
    }

  });
}]);
