Module.directive('propertyItem', function() {
  return {
    template: `
      <a ng-href="#!/{{property.url}}" class="property-item">
        <h3>{{property.name}}</h3>
        <div class="container">
          <img class="prop-image" ng-src={{property.model.directory+property.model.image}}>
        </div>
      </a>
    `
  };
});
