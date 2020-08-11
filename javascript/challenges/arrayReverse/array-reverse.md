# Reverse an Array
Decided the best method would be to use the pop and push method to sort the array.  This will make sure that the array will be in the same order and isn't dependent on numbers being larger or smaller than eachother. 

## Challenge
Need to reverse an array without using the built in reverse method. 

## Approach & Efficiency
I chose the pop and push method because I can put this in a for loop and it should be able to work infinitely. 

Not sure this is the most proficient exercise, but after being away from coding for a month, this is the one that seemed the most attainable to me at the time. 

## Solution

psuedo code 

declare original array as a variable

create a new function to loop over the original array

declare a new variable for the new reversed array

create for loop, looping over the length of the array and popping (taking last number off the array) and pushing it to the beginning of the reversed array.  

finish the for loop and return the newly reversed array. 

Code

let originalArray = [5, 4, 3, 2, 1];
 
function arrayReversed(originalArray) => {
  let reversedArray = [];

  for (let i = orignalArray.length, i<0 , i++);
  reversedArray.push(originalArray.pop)
}
return reversedArray