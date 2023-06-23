const assertEqual = require("../assertEqual");
const findKey = require("../findKey");

describe('#findKey', function() {
    it('should return the key for which the value meets the condition', function() {
      const obj = {
        "Blue Hill": { stars: 1 },
        "Akaleri": { stars: 3 },
        "noma": { stars: 2 },
        "elBulli": { stars: 3 },
        "Ora": { stars: 2 },
        "Akelarre": { stars: 3 }
      };
  
      const expected = "noma";
      const actual = findKey(obj, x => x.stars === 2);
      assertEqual(actual, expected);
    });
  
    it('should return undefined if no key meets the condition', function() {
      const obj = {
        "Blue Hill": { stars: 1 },
        "Akaleri": { stars: 3 },
        "elBulli": { stars: 3 },
        "Akelarre": { stars: 3 }
      };
  
      const expected = undefined;
      const actual = findKey(obj, x => x.stars === 2);
      assertEqual(actual, expected);
    });
  
    it('should return the first key that meets the condition if multiple keys have the same value', function() {
      const obj = {
        "Blue Hill": { stars: 2 },
        "Akaleri": { stars: 2 },
        "noma": { stars: 2 },
        "elBulli": { stars: 2 },
        "Ora": { stars: 2 },
        "Akelarre": { stars: 3 }
      };
  
      const expected = "Blue Hill";
      const actual = findKey(obj, x => x.stars === 2);
      assertEqual(actual, expected);
    });
  });