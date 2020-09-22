'use strict';

function mergeSort(arr) {

  if(arr.length <= 1) {
    return arr;
  }

  let mid = Math.floor(arr.length/2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid,length);

  console.log('left', left);
  console.log('right', right);

  mergeSort(left)
  mergeSort(right);
  merge(left, right, arr);

  console.log('leftmerge', left);
  console.log('rightmerge', right);

  return arr;
}




function merge(left, right ) {
  let i = 0;
  let j = 0;
  let k = [];

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      k.push(left[j]);
      i++;
    }
    else {
      k.push(right[j]);
      j++;
    }

    if (i === left.length) {
      arr = [...arr,right[j]];
    } else {
      arr = [left[i],...arr]
    }
    // console.log(arr);
    return arr;
  }
}

mergeSort();

module.exports = mergeSort;


