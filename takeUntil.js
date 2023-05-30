// The `takeUntil` function takes an array and a callback function. 
// Once the callback returns true, it immediately returns the `results` array. 
// This allows us to "take" elements from the original array until a certain condition is met.


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

const assertArraysEquals = function (array1, array2) {
    if (eqArrays(array1, array2)) {
        console.log("Arrays are equal");
    } else {
        console.log("Arrays are not equal");
    }
}



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
    return results;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);