const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without')

describe('#without', function() {
    it('should return an array without the specified elements', function() {
      const inputArray = [1, 2, 3];
      const elementsToRemove = [1];
      const expectedOutput = [2, 3];
      const result = without(inputArray, elementsToRemove);
      assertArraysEqual(result, expectedOutput);
    });
  
    it('should return an array without the specified elements, preserving order and type', function() {
      const inputArray = ["1", "2", "3"];
      const elementsToRemove = [1, 2, "3"];
      const expectedOutput = ["1", "2"];
      const result = without(inputArray, elementsToRemove);
      assertArraysEqual(result, expectedOutput);
    });
  });

