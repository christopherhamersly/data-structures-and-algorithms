'use strict';

//given an array 
//compare the the numbers
//temporary value of lowest 
//make that continue to count

//while loop of array length greater than zero
//if number is greater than other number make that number the lowest
// if number is larger continue to go through the array
//once we reach the end of the array, return the output array

//variables 
//output array
//temp lower

function findLowest (arr) {

  while (arr.length > 0) {
    let lowest = arr[0];
    for (let i=0; i< arr.length; i++) {
      if( arr[i] < lowest) {
        lowest = arr[i];}
      else return;
    }
  }
  return arr;


}


module.exports = findLowest;
