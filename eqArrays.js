const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(`Assertion Passed: ${actual}  ===  ${expected}`);
  
    } else if (actual !== expected) {
      return console.log(`Assertion Failed: ${actual}  !==  ${expected}`);
    }
  };

  const eqArrays = function(arrayOne,arrayTwo){
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
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)