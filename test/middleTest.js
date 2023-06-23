const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle')


describe('#middle', function() {
    it('should return the middle element of an odd-sized array', function() {
      const result = middle([1, 2, 3, 4]);
      assertArraysEqual(result, [2, 3]);
    });
  
    it('should return the two middle elements of an even-sized array', function() {
      const result = middle([1, 2, 3, 4, 5, 6]);
      assertArraysEqual(result, [3, 4]);
    });
  });