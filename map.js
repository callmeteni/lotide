const words = ["ground", "control", "to", "major", "tom"];
let results = [];
const map = function (array, callback) {
    for (let item of array) {
        results.push(callback(item))
    }
    return results;
};
const results1 = map(words, word => word[0]);