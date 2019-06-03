Module.controller('PropertyController', ['$scope', '$route', '$location', 'PropertyFactory',
  function($scope, $route, $location, PropertyFactory) {
    var path = $location.path().substring(1);

    $scope.currentProperty = PropertyFactory.getCurrentProperty();
    $scope.properties = null;

    //Define function to set current property on click
    $scope.setCurrentProperty = function(property) {
      PropertyFactory.setCurrentProperty(property);
    };

    switch (path) {
      case 'buy':
        $scope.properties = PropertyFactory.getPropertiesForSale();
        $('html').removeClass('hide-scrollbar');
        controls.enabled = false;
        break;
      case 'rent':
        $scope.properties = PropertyFactory.getPropertiesForRent();
        $('html').removeClass('hide-scrollbar');
        controls.enabled = false;
        break;
      case 'about':
        $('html').addClass('hide-scrollbar');
        controls.enabled = false;
        break;
      case 'contacts':
        $('html').addClass('hide-scrollbar');
        controls.enabled = false;
        break;
      default:
        $('html').addClass('hide-scrollbar');
        controls.enabled = true;
    };

    //Load model of selected property if another model is loaded
    $scope.$on('$routeChangeSuccess', function(event, current, prev) {

      if (current.params['property'] != prev.params['property'] &&
        current.params['property'] != undefined) {
        loadModel(
          'obj',
          $scope.currentProperty.model.directory,
          $scope.currentProperty.model.modelname,
          $scope.currentProperty.model.adjustments
        );
      };
    });

}])
