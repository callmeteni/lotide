const assertEqual = require('./assertEqual')

// Count Only will be given an array and an object. 
//It will return an object containing counts of everything that the input object listed.
  const countOnly = function(allItems, itemsToCount) {
    //empty object counts to keep track of counts of everything that the input object listed.
    const counts = {};

  for (const item of allItems) {
    // check all the item in the array allItems
    if (itemsToCount[item]) {
        //check to see if the current item exist as a itemsToCount  object
      if (counts[item]) {
        //checks to see if  item is found in the  itemsToCount
        counts[item]++;
        // we add the item found to the counts object 
      } else {
        
        counts[item] = 1; 
      }
    }
  }

  return counts;
}    
module.exports = countOnly;