const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', function() {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama: "Breaking Bad",
  };

  it('should return the correct key for a given value', function() {
    const result = findKeyByValue(bestTVShowsByGenre, "The Expanse");
    assertEqual(result, "sciFi");
  });

  it('should return the correct key for another given value', function() {
    const result = findKeyByValue(bestTVShowsByGenre, "Breaking Bad");
    assertEqual(result, "drama");
  });

  it('should return undefined for a value not in the object', function() {
    const result = findKeyByValue(bestTVShowsByGenre, "Friends");
    assertEqual(result, undefined);
  });
});
