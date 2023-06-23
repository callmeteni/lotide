const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

describe('#takeUntil', function() {
  it('should return a new array until the condition is met', function() {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const expected1 = [1, 2, 5, 7, 2];
    const actual1 = takeUntil(data1, x => x < 0);
    assertArraysEqual(actual1, expected1);

    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const expected2 = ["I've", "been", "to", "Hollywood"];
    const actual2 = takeUntil(data2, x => x === ',');
    assertArraysEqual(actual2, expected2);
  });

  it('should return an empty array if the condition is never met', function() {
    const data = [1, 2, 3, 4, 5];
    const expected = [];
    const actual = takeUntil(data, x => x < 0);
    assertArraysEqual(actual, expected);
  });

  it('should return a copy of the original array if the condition is always true', function() {
    const data = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    const actual = takeUntil(data, x => true);
    assertArraysEqual(actual, expected);
  });
});
