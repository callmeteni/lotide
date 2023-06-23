const assertEqual = require('./assertEqual');

const findKeyByValue = function (object, value) {
  const keys = Object.keys(object);
  for (let key of keys) {
// we check to see if object has currrent keys 
    if (object.hasOwnProperty(key)) {
      if (object[key] === value) {
//we check and if key is found we return the key
        return key;
      }
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

