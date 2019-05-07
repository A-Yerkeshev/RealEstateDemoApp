Module.directive('propertyItem', function() {
  return {
    template: `
      <h3>{{property.name}}</h3>
      <div>
        <img class="prop-image" ng-src={{property.directory+property.image}}>
      </div>
    `
  };
});
