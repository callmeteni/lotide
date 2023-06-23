const assertEqual = require('../assertEqual');
const head = require('../head');


describe("#head", () => {
    it("returns 1 for [1, 2, 3]", () => {
      assertEqual(head([1, 2, 3]), 1);
    });

    it("returns '5' for ['5']", () => {
        assertEqual(head(['5']), '5'); 
      });
  });


