const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual}  ===  ${expected}`);

  } else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  const keys = Object.keys(object);
  for (let key of keys) {
// we check to see if object has currrent keys 
    if (object.hasOwnProperty(key)) {
      if (object[key] === value) {
//we check and if key is found we return the key
        return key;
      }
    }
  }
  return undefined;
};

// Example usage:
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "Breaking Bad",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sciFi"); // Assertion Passed: sciFi === sciFi
assertEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), "drama"); // Assertion Passed: drama === drama
assertEqual(findKeyByValue(bestTVShowsByGenre, "Friends"), undefined); // Assertion Passed: undefined === undefined
