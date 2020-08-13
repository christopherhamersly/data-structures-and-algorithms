
//testing

describe('Testing middle index', () => {
  test('it should find the middle index of the array', () => {
    let array = [1, 2, 3, 4, 5, 6, 7, 8];

    expect(midIndex(array)).toStrictEqual(4);
  });
});

describe('Testing end result', () => {
  test('it should return the final result', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    let val = [5];
    expect(binarySearch(arr, val).toStrictEqual(4));
  });
});

describe('Testing if number is not in the array', () => {
  test('it should return -1 if the number is not inside the array', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    let val = [9];
    expect(binarySearch(arr, val).toStrictEqual(-1))
  })
});
