

//function
function binarySearch (array, value, minimumArray, maximumArray) {

  let midIndex = Math.round(((maximumArray-minimumArray)/2) + minimumArray);

  if(minimumArray === undefined) { minimumArray = 0}
  if(maximumArray === undefined) { maximumArray = array.length -1}


  if(array.includes(value) === false) {
    return -1;
  } else if (array[midIndex] === value) {
    return midIndex;
  } else if (array[midIndex] > value) {
    return binarySearch(array, value, minimumArray, midIndex -1);
  } else if(array[midIndex] < value){
    return binarySearch(array, value, midIndex +1, maximumArray);
  }
}

binarySearch();



