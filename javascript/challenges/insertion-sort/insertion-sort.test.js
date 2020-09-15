'use strict';
const findLowest = require('./insertion-sort');

describe('testing the insertion-sort function', () => {

  it('should return an array with lowest values first', () => {
    let arr = [2, 4, 7, 1];
    expect(findLowest(arr)).toBe([1, 2, 4, 7]);
  })
});

