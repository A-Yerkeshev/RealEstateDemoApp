Module.controller('PropertyController', ['$scope', '$route', '$location', 'PropertyFactory',
  function($scope, $route, $location, PropertyFactory) {
    var path = $location.path();

    $scope.properties = null;

    //Get list of properties for sale or for rent
    switch (path) {
      case '/buy':
        $scope.properties = PropertyFactory.getPropertiesForSale();
        break;
      case '/rent':
        $scope.properties = PropertyFactory.getPropertiesForRent();
        break;
    };

    //Load model of selected property
    $scope.$on('$routeChangeSuccess', function() {
      var params = $route.current.params;
      console.log('changed')
      console.log($route)

      if (params.hasOwnProperty('property')) {
        loadModel(
          'obj', currentProperty.model.directory, currentProperty.model.modelname);
      };
    });


}])
