const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

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
module.exports = letterPositions;


