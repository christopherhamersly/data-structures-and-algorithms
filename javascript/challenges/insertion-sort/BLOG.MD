# Insertion sort

## In this blog article I will be explaining how to do an insert sort method on an array, step by step.  

1. Given the following array, we need to compare the numbers inside of the array, and ouptut a return array, with the numbers sorted from least to greatest. 

![Input Array](img/one.png)

1. Here we are comparing the values in the first index position to all of the other numbers in the array.  8 will compare itself to 4, 23, 42, 16, and 15. 

![Input Array](img/two.png)

1. If any of the other numbers is lower than 8, it will take the place of 8. In this case, 4 is lower, and will take the value of the lowest, as we traverse through the rest of the array.  Since there aren't any values less than 4, 4 takes the place of 8, resulting in the following array. 

![Input Array](img/three.png)

1.  We now move to the next index position [1] and compare 8 to the rest of the array. 

![Input Array](img/four.png)

1. 8 is the next lowest number and will retain its position in the array, resulting in the following array. 

![Input Array](img/five.png)

1.  We now compare the next index position [2] which is 23.  23 compares itself to the rest of the array.  It is smaller than 42 so it retains its position.  It is larger than 16 so 16 now takes a temporary position of the smallest.  16 is now compared to the rest of the array, in this instance, 15.  Since 15 is the smallest value, it will take position [2].

![Input Array](img/six.png)

1. Resulting in the following array

![Input Array](img/seven.png)


1.  We repeat the exact same steps for position [3].  

![Input Array](img/eight.png)

1.  Resulting in the following array.  

1. Continuning down the rest of the array. 

![Input Array](img/nine.png)

![Input Array](img/ten.png)

1.  Now that we have reached the end, the last index position is comparing itself to itself, making it the largest value in the array.  

![Input Array](img/eleven.png)

1. Resulting in the final output array.

