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

const without =function(source,itemsToRemove){
    const result = [];

    for (let i = 0; i < source.length; i++) {
      let found = false;
  
      for (let j = 0; j < itemsToRemove.length; j++) {
        if (source[i] === itemsToRemove[j]) {
          found = true;
          break;
        }
      }
  
      if (!found) {
        result.push(source[i]);
      }
    }
  
    return result; 
}


console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]);