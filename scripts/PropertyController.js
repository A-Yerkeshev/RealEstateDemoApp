Module.controller('PropertyController', ['$scope', '$location', 'PropertyFactory',
  function($scope, $location, PropertyFactory) {
    var path = $location.path();

    $scope.properties = null;

    switch (path) {
      case '/buy':
        $scope.properties = PropertyFactory.getPropertiesForSale();
        break;
      case '/rent':
        $scope.properties = PropertyFactory.getPropertiesForRent();
        break;
    };

}])
