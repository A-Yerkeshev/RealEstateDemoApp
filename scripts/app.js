var Module = angular.module('RealEstateApp', ['ngRoute']);

Module.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/main.html'
      }).
      when('/buy', {
        templateUrl: 'views/buy-list.html'
      }).
      otherwise('/');
  }
]);
