const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return console.log(`Assertion Passed: ${actual}  ===  ${expected}`);
  
    } else if (actual !== expected) {
      return console.log(`Assertion Failed: ${actual}  !==  ${expected}`);
    }
  };
  
  // TEST CODE
  assertEqual("Lighthouse Labs", "Bootcamp");
  assertEqual(1, 1);
  assertEqual(1, "sam");
  
  
  //

  function head(arr){
    if(arr.length === 0){
    return undefined;
  }
  return arr[0]
}


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");