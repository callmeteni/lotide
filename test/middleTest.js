const assert = require('chai').assert;
const middle = require('../middle')

describe('#middle', function() {
    it('should return the middle element of an odd-sized array', function() {
      const result = middle([1, 2, 3, 4]);
      assert.deepEqual(result, [2, 3]);
    });
  
    it('should return the two middle elements of an even-sized array', function() {
      const result = middle([1, 2, 3, 4, 5, 6]);
      assert.deepEqual(result, [3, 4]);
    });
  });

//TEST CODE
// console.log(middle([1, 2, 3, 4]));
// console.log(middle([1, 2, 3, 4, 5, 6]));