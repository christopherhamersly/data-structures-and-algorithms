'use strict';

const insertShiftArray = require('./array-shift.js');

describe('we are tesing the insert shift array method on a few different items', () => {
  
let originalArray = [1, 2, 3, 4, 6, 7, 8, 9];

  it('should be able to place 5 in the middle of an array', () => {
    expect(insertShiftArray(5)).toBe([1, 2, 3, 4, 5, 6, 7, 8, 9]);


  })

})