const assertEqual = require("./assertEqual");

const findKey = function (obj, callback) {
    for (let item in obj) {
        if (callback(obj[item])) {
            return item
        }
    }
    return undefined;
}

module.exports = findKey;
