'use strict';

function quickSort(arr, left, right) {

  if (left < right) {
    right = partitionArray(arr, left, right)
    console.log('in quicksort');
  }
  quickSort(arr, left, right - 1)
  quickSort(arr, left + 1, right)
}

function partitionArray(arr, left, right) {
  // set a pivot value as a point of reference
  let pivotValue = arr[Math.floor((right + left) /2)];
  let i = left;
  let j = right;
  console.log('in partition array');
  while(i<= j){
    while(arr[i] < pivotValue) {
      i++;
    }
    while(arr[j] > pivotValue) {
      j--;
    }
    if(i<=j) {
      swapPositions(arr, i, j);
      i++;
      j--;
    }
    return i;
  }


}

function swapPositions(arr, i, low) {
  let temp = arr[i];
  console.log('in swap positions');
  arr[i] = arr[low];
  arr[low] = temp;
}

quickSort([1, 6, 2, 3]);

module.exports = quickSort;

