Module.directive('propertyItem', function() {
  return {
    template: `
      <h3>{{property.name}}</h3>
      <img ng-src={{property.directory+property.image}}>
    `
  };
});
