const eqArrays = require('./eqArrays');

const assertArraysEqual  = require('./assertArraysEqual')

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

module.exports = without; 