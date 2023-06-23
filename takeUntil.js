// The `takeUntil` function takes an array and a callback function. 
// Once the callback returns true, it immediately returns the `results` array. 
// This allows us to "take" elements from the original array until a certain condition is met.


const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

const takeUntil = function (array, callback) {
    const result = [];
    for (let item of array) {
        if (callback(item)) {
            //iterates through each element of the array until the callback function returns true for an element
            return result;
        }
        result.push(item);
        //push each element to the `results` array until the callback returns true
    }
    return result;
}
module.exports = takeUntil;
