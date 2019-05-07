Module.factory('PropertyFactory', [function() {
  var Factory = {};

  var properties = [
    {
      id: 1,
      name: 'Appartment in 4 floor residential house',
      forSale: true,
      forRent: true,
      directory: 'models/4fl-residential/',
      image: 'image.jpg',
      model: 'city3.obj',
      textures: 'city3.mtl'
    }, {
      id: 2,
      name: 'Country cottage',
      forSale: true,
      forRent: false,
      directory: 'models/country-cottage/',
      image: 'image.jpg',
      model: 'houseA_obj.obj',
      textures: 'houseA_obj.mtl'
    }, {
      id: 3,
      name: 'Appartment in 2 floor residential house',
      forSale: true,
      forRent: true,
      directory: 'models/2fl-residential/',
      image: 'image.jpg',
      model: 'residental_building.obj',
      textures: 'residental_building.mtl'
    },
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

  Factory.getPropertiesForRent = function() {
    var list = [];

    properties.forEach(function(property) {
      if (property.forRent) {
        list.push(property);
      };
    });

    return list;
  };

  return Factory;

}]);
