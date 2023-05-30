const obj = {
    "Blue Hill": { stars: 1 },
    "Akaleri": { stars: 3 },
    "noma": { stars: 2 },
    "elBulli": { stars: 3 },
    "Ora": { stars: 2 },
    "Akelarre": { stars: 3 }
}

const findKey = function (obj, callback) {
    for (let item in obj) {
        if (callback(obj[item])) {
            return item
        }
    }
    return undefined;
}
const test = findKey(obj, x => x.stars === 2);
console.log(test);