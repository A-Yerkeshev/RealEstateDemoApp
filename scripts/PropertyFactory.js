Module.factory('PropertyFactory', [function() {
  var Factory = {};

  var properties = [
    {
      id: 1,
      name: 'Appartment in 4 floor residential house',
      forSale: true,
      forRent: true,
      directory: 'models/4-floor-residential/',
      image: 'image.jpg',
      model: 'city3.obj',
      textures: 'city3.mtl'
    }
  ];

  Factory.getPropertiesForSale = function() {
    var list = [];

    properties.forEach(function(property) {
      if (property.forSale) {
        list.push(property);
      };
    });

    return list;
  };

  return Factory;

}]);
