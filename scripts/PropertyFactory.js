Module.factory('PropertyFactory', [function() {
  var Factory = {};
  var currentProperty = null;

  var properties = [
    {
      id: 1,
      name: 'Appartment in 4 floor residential house',
      url: '4fl-residential',
      forSale: true,
      forRent: true,
      model: {
        directory: 'models/4fl-residential/',
        image: 'image.jpg',
        modelname: 'city3'
      }
    }, {
      id: 2,
      name: 'Country cottage',
      url: 'country-cottage',
      forSale: true,
      forRent: false,
      model: {
        directory: 'models/country-cottage/',
        image: 'image.jpg',
        modelname: 'houseA_obj'
      }
    }, {
      id: 3,
      name: 'Appartment in 2 floor residential house',
      url: '2fl-residential',
      forSale: true,
      forRent: true,
      model: {
        directory: 'models/2fl-residential/',
        image: 'image.jpg',
        modelname: 'residental_building'
      }
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

  Factory.getCurrentProperty = function() {
    return currentProperty;
  };

  Factory.setCurrentProperty = function(property) {
    currentProperty = property;
  };

  return Factory;

}]);
