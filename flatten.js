const flatten = function (array) {
    const flattenedArray = [];

    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            // check if argument is an array 
            const nestedArray = flatten(array[i]);
            // Then, we iterate over the elements of the nestedArray using a loop and individually push them 
            for (let j = 0; j < nestedArray.length; j++) {
                //if argument is an array we add the values to our array
                flattenedArray.push(nestedArray[j]);
            }
        } else {
            // If the argument is not an array, add it to the flattenedArray
            flattenedArray.push(array[i]);
        }
    }

    return flattenedArray;
    // return our new array of flattened array
};

module.exports = flatten;
