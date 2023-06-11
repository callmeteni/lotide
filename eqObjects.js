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
    
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1,object2){
    const keys1 = Object.keys(object1);

    if (keys1.length !== Object.keys(object2).length) {
      return false;
    }
  
    for (const key of keys1) {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  
    return true;
}

  
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
console.log(eqObjects(shirtObject , anotherShirtObject)); // => true

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
console.log(eqObjects(shirtObject , longSleeveShirtObject));