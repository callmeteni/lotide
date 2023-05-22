const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual}  ===  ${expected}`);
  
  } else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual}  !==  ${expected}`);
  }
};
  
// TEST CODE


function tail(arr) {
  return arr.slice(1);
}


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);