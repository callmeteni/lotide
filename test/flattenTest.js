const assert = require('chai').assert;
const flatten = require('../flatten');

describe('#flatten', function() {
  it('should return a flattened array', function() {
    const inputArray = [1, 2, [3, 4], 5, [6]];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    const result = flatten(inputArray);
    assert.deepStrictEqual(result, expectedOutput);
  });
});