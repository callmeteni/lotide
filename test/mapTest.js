const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

describe('#map', function() {
  const words = ["ground", "control", "to", "major", "tom"];

  it('should return an array of the first characters of each word', function() {
    const expected = ['g', 'c', 't', 'm', 't'];
    const actual = map(words, word => word[0]);
    assertArraysEqual(actual, expected);
  });

  it('should return an array of the word lengths', function() {
    const expected = [6, 7, 2, 5, 3];
    const actual = map(words, word => word.length);
    assertArraysEqual(actual, expected);
  });

  it('should return an array of uppercase words', function() {
    const expected = ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"];
    const actual = map(words, word => word.toUpperCase());
    assertArraysEqual(actual, expected);
  });
});