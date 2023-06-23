const assertEqual = require('./assertEqual');

const countLetters = function(sentence) {
// This line declares an empty object called result. This object will store the letter counts
    let result = {};
// loop over each character 
    for (let char of sentence) {
// checking if the character is not a space 
      if (char !== ' ') {
// checking to see if the character already exists then increments it 
        if (result[char]) {
          result[char]++;
        } else {
// else we  return the char appearred once 
          result[char] = 1;
        }
      }
    }
  
    return result;
  };

module.exports = assertEqual;
module.exports = countLetters;



