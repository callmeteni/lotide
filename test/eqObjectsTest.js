const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
    it('should return true for equal nested objects', () => {
        const nestedObj1 = { a: { z: 1 }, b: 2 };
        const nestedObj2 = { a: { z: 1 }, b: 2 };
        eqArrays(eqObjects(nestedObj1, nestedObj2), true);
    });

    it('should return false for different nested objects', () => {
        const nestedObj1 = { a: { z: 1 }, b: 2 };
        const nestedObj3 = { a: { y: 0, z: 1 }, b: 2 };
        eqArrays(eqObjects(nestedObj1, nestedObj3), false);
    });

});
