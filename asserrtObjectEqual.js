const assertEqual = function (actual, expected) {
    if (actual === expected) {
        return console.log(`Assertion Passed: ${actual}  ===  ${expected}`);

    } else if (actual !== expected) {
        return console.log(`Assertion Failed: ${actual}  !==  ${expected}`);
    }
};

const eqArrays = function (arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
        return false;
    }

    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) {
            return false;
        }
    }

    return true;
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
    const eqObjects = function (object1, object2) {
        const keys1 = Object.keys(object1);
        const keys2 = Object.keys(object2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (const key of keys1) {
            const value1 = object1[key];
            const value2 = object2[key];

            if (typeof value1 === 'object' && typeof value2 === 'object') {
                if (!eqObjects(value1, value2)) {
                    return false;
                }
            } else if (value1 !== value2) {
                return false;
            }
        }

        return true;
    };
}


const assertObjectEqual = function (actual, expected) {
    const inspect = require('util').inspect;
    if (eqObjects(actual, expected)) {
        console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
}
const nestedObj1 = { a: { z: 1 }, b: 2 };
const nestedObj2 = { a: { z: 1 }, b: 2 };
assertObjectEqual(eqObjects(nestedObj1, nestedObj2), true);

const nestedObj3 = { a: { y: 0, z: 1 }, b: 2 };
assertEqual(eqObjects(nestedObj1, nestedObj3), false);
