const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

describe('#letterPositions', function() {
  it('should return the correct letter positions for a given sentence', function() {
    const sentence = 'LHL';
    const expectedPositions = {
      'L': [0, 2],
      'H': [1]
    };

    const result = letterPositions(sentence);

    assertArraysEqual(result, expectedPositions);
  });

  it('should return the correct letter positions for a longer sentence', function() {
    const sentence = 'lighthouse in the house';
    const expectedPositions = {
      'l': [0],
      'i': [1, 11],
      'g': [2],
      'h': [3, 5, 15, 18],
      't': [4, 14],
      'o': [6, 19],
      'u': [7, 20],
      's': [8, 21],
      'e': [9, 16, 22],
      'n': [12],
      ' ': [13, 17]
    };

    const result = letterPositions(sentence);

    assertArraysEqual(result, expectedPositions);
  });
});