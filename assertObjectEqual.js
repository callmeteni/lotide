const assertEqual = require('./assertEqual');
const eqObjects = require('./eqObjects')
const eqArrays = require('./eqArrays')

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const assertObjectEqual = function (actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
}

module.exports = assertObjectEqual;