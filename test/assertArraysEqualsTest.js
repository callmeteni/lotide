const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual');

describe('#eqArrays', function() {
    it('should return true for equal arrays', function() {
      const result = eqArrays([1, 2, 3], [1, 2, 3]);
      assertArraysEqual(result, true);
    });
  
    it('should return false for unequal arrays', function() {
      const result = eqArrays([1, 2, 3], [3, 2, 1]);
      assertArraysEqual(result, false);
    });
  });
