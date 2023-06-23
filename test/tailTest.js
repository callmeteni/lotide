const assert = require('chai').assert;
const tail = require('../tail');

describe('tail', function() {
    it('should return the tail of an array', function() {
      const result = tail(["Hello", "Lighthouse", "Labs"]);
      assert.deepEqual(result, ["Lighthouse", "Labs"]);
    });
  });
