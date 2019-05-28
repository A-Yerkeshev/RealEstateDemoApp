Module.factory('PropertyFactory', [function() {
  var Factory = {};
  var currentProperty = null;

  var properties = [
    {
      id: 1,
      name: 'Apartment in 4 floor residential house',
      url: '4fl-residential',
      forSale: true,
      forRent: true,
      price: {
        sale: 65000,
        rent: 800
      },
      area: 40,
      characteristics: {
        needsRenovation: false,
        storagePlace: true,
        parking: true,
        bikeParking: true,
        heating: false,
        laundry: true
      },
      model: {
        directory: 'models/4fl-residential/',
        image: 'image.jpg',
        modelname: 'city3',
        adjustments: {
          scale: 0.4,
          posX: -8,
          posY: 1,
          posZ: 11,
          rotX: 0,
          rotY: 0,
          rotZ: 0
        }
      },
      description: `2+1 Apartment in newly built 4 floor residential house. Area is
        40 m2 with balcony of 4.5 m2. Recently renovated. Storage, refrigeratory and
        laundry are located on the base floor of the building. Each apartment has two
        parking places available. Close to city transportation lines (metro 5 min
        walk and tram 10 min walk).`
    }, {
      id: 2,
      name: 'Country cottage',
      url: 'country-cottage',
      forSale: true,
      forRent: false,
      price: {
        sale: 45000,
        rent: 'n/a'
      },
      area: 60,
      characteristics: {
        needsRenovation: false,
        storagePlace: true,
        parking: true,
        bikeParking: false,
        heating: true,
        laundry: true
      },
      model: {
        directory: 'models/country-cottage/',
        image: 'image.jpg',
        modelname: 'houseA_obj',
        adjustments: {
          scale: 0.1,
          posX: 1,
          posY: 0,
          posZ: 0,
          rotX: 0,
          rotY: 90,
          rotZ: 0
        }
      },
      description: `Cosy country cottage in tranquil and relaxing forest area near to
        national park. Built in 1982 has an area of 60 m2 with little terrace in
        front. 2 bedrooms, living room and kitchen. Has a loft and cellar. Gas heating
        is available as well as a fireplace in the living room. A little lake is
        located 1.5 kilometers to the north from the cottage.`
    }, {
      id: 3,
      name: 'Apartment in 2 floor residential house',
      url: '2fl-residential',
      forSale: true,
      forRent: true,
      price: {
        sale: 55000,
        rent: 450
      },
      area: 34,
      characteristics: {
        needsRenovation: false,
        storagePlace: false,
        parking: true,
        bikeParking: true,
        heating: false,
        laundry: true
      },
      model: {
        directory: 'models/2fl-residential/',
        image: 'image.jpg',
        modelname: 'residental_building',
        adjustments: {
          scale: 1,
          posX: 0,
          posY: 0,
          posZ: 2,
          rotX: 0,
          rotY: 0,
          rotZ: 0
        }
      },
      description: `Apartment in 2 floor house for 4 families. Has total area of 34 m2
        Bathroom and kitchen are recently renovated. Apartment is located on the second
        floor of the building. Bus lines num 747, 712 and 722 are located one minute
        walk from the house. Electricity and gas bills are included into the rent
        price.`
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

  Factory.getPropertyById = function(id) {
    for (var i=0; i++; i<properties.length) {
      if (property.id == id) {
        return property;
      };
    };
  };

  return Factory;

}]);
