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
.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $urlRouterProvider.otherwise('/trucks');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
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
            controller: 'ProfileController'

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

    // We add our $httpInterceptor into the array
    // of interceptors. Think of it like middleware for your ajax calls
    //$httpProvider.interceptors.push('AttachTokens');
})
// .factory('AttachTokens', function ($window) {
//   // this is an $httpInterceptor
//   // its job is to stop all out going request
//   // then look in local storage and find the user's token
//   // then add it to the header so the server can validate the request
//   var attach = {
//     request: function (object) {
//       var jwt = $window.localStorage.getItem('com.shortly');
//       if (jwt) {
//         object.headers['x-access-token'] = jwt;
//       }
//       object.headers['Allow-Control-Allow-Origin'] = '*';
//       return object;
//     }
//   };
//   return attach;
// })
// .run(function ($rootScope, $location, Auth) {
//   // here inside the run phase of angular, our services and controllers
//   // have just been registered and our app is ready
//   // however, we want to make sure the user is authorized
//   // we listen for when angular is trying to change routes
//   // when it does change routes, we then look for the token in localstorage
//   // and send that token to the server to see if it is a real user or hasn't expired
//   // if it's not valid, we then redirect back to signin/signup
//   $rootScope.$on('$routeChangeStart', function (evt, next, current) {
//     if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
//       $location.path('/signin');
//     }
//   });
// });
