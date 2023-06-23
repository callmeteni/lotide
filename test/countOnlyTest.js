const assertEqual = require('../assertEqual');
const countOnly = require('../countOnly')

describe('#countOnly', function() {
    it('should return the correct counts for given names', function() {
      const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
      ];
  
      const expectedCounts = {
        "Jason": 1,
        "Karima": undefined,
        "Fang": 2,
        "Agouhanna": undefined
      };
  
      const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
      assertEqual(result, expectedCounts);
    });
  });