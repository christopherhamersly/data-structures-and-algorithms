'use strict';

const quickSort = require('./quick-sort');


describe('we are doing some tests on the quick sort function', () => {

  test('it should return an array in order given an out of order array', () => {
    let array = [4, 7, 1, 3];

    expect(quickSort(array)).toEqual([1, 3, 4, 7]);
  })
});
