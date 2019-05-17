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
    .when('/:property', {
      templateUrl: 'views/property.html'
    })
    .when('/:property/info', {
      templateUrl: 'views/property-info.html'
    })
    .otherwise('/');
});
