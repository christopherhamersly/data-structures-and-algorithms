'use strict';

const mergeSort = require('./merge-sort');


describe ('We are testing out a merge sort function', () => {

  test('it should be able to sort out the following array', () => {

    let arr = [1, 5, 2, 4, 8, 6];

    expect(mergeSort(arr)).toBe([1, 2, 4, 5, 6, 8]);
  })

  test('it should be able to sort out the following array', () => {

    let arr = [1, 5, 2, 8, 6];

    expect(mergeSort(arr)).toBe([1, 2, 5, 6, 8]);
  });

  test('it should be able to sort out the following array', () => {

    let arr = [1, 6];

    expect(mergeSort(arr)).toBe([1, 6]);
  })

});
