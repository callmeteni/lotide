const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

describe('#eqArrays', function() {
  it('should return true for equal arrays', function() {
    assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('should return false for non-equal arrays', function() {
    assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
});