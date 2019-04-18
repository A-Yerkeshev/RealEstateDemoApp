var Module = angular.module('RealEstateApp', ['ngRoute']);

Module.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html'
    })
    .when('/buy', {
      templateUrl: 'views/catalog.html'
    })
    .when('/rent', {
      templateUrl: 'views/catalog.html'
    })
    .otherwise('/');
});
