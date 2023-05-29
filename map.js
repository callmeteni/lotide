const words = ["ground", "control", "to", "major", "tom"];

const map = function(words, callback) {
    
    for (let item of words) {
        const results = [];
      results.push(callback(item))
    }
    return results;
  }; 

  console.log(results);


  