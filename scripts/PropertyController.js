Module.controller('PropertyController',
  ['$scope', 'PropertyFactory', function($scope, PropertyFactory) {

    $scope.propertiesForSale = PropertyFactory.getPropertiesForSale();
    $scope.propertiesForRent = PropertyFactory.getPropertiesForRent();

}])
