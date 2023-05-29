const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual}  ===  ${expected}`);

  } else if (actual !== expected) {
    return console.log(`Assertion Failed: ${actual}  !==  ${expected}`);
  }
};

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


const letterPositions = function (sentence) {
  const results = {};
  let  index = 0;
  // logic to update results here
  for (let char of sentence) {
    if (char !== ' ') {
      if (results[char]) {
        results[char].push(index);
      }
      else{
      results[char] = [index];
    }
  }
  index++;
  }
return results;
};



const sentence = 'LHL';
const letterPos = letterPositions(sentence);
console.log(letterPos);
console.log(letterPositions("lighthouse in the house"));


