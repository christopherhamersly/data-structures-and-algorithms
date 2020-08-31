// Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

function insertShiftArray () {

  const originalArray = [];
  const newNumber = [];
  let counter = 0;

  for (let i=0; i <originalArray.length; i++ );
  counter++

  let middleOfArray = Math.round(counter%2 - 1);

  originalArray.splice(middleOfArray, newNumber);

  return originalArray;

}

insertShiftArray();

module.exports = insertShiftArray;

