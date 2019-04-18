Module.controller('PropertyController',
  ['$scope', 'PropertyFactory', function($scope, PropertyFactory) {

    $scope.propertiesForSale = PropertyService.getPropertiesForSale();

}])
