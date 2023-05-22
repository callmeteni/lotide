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

const middle = function (array) {
    const middleArray = [];
    const middleIndex = Math.floor(array.length / 2);
    if (array.length <= 2) {
        return middleArray;
    }
    //Arrays with an even number of elements,adds the two middle elements to the middleArray
    if (array.length % 2 === 0) {
        //retrieves the element before the middle index.
        // retrieves the element at the middle index.
        // push them to middleArray
        middleArray.push(array[middleIndex - 1], array[middleIndex]);
    } else {
        //arrays with an odd number of elements,adds the single middle element to the middleArray

        middleArray.push(array[middleIndex]);
    }

    return middleArray;
};

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

