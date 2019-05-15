Module.controller('PropertyController', ['$scope', '$route', '$location', 'PropertyFactory',
  function($scope, $route, $location, PropertyFactory) {
    var path = $location.path();

    $scope.currentProperty = PropertyFactory.getCurrentProperty();
    $scope.properties = null;

    //Define function to set current property on click
    $scope.setCurrentProperty = function(property) {
      PropertyFactory.setCurrentProperty(property);
    };

    //Get list of properties for sale or for rent
    switch (path) {
      case '/buy':
        $scope.properties = PropertyFactory.getPropertiesForSale();
        controls.enabled = false;
        break;
      case '/rent':
        $scope.properties = PropertyFactory.getPropertiesForRent();
        controls.enabled = false;
        break;
    };

    //Load model of selected property
    $scope.$on('$routeChangeSuccess', function() {
      var params = $route.current.params;

      if (params.hasOwnProperty('property')) {
        loadModel(
          'obj',
          $scope.currentProperty.model.directory,
          $scope.currentProperty.model.modelname,
          $scope.currentProperty.model.adjustments);
        controls.enabled = true;
      };
    });


}])
