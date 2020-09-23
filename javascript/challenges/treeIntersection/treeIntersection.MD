# Challenge Summary
Write a function called tree_intersection that takes two binary tree parameters.
Without utilizing any of the built-in library methods available to your language, return a set of values found in both trees.


## Approach 
Given two trees as inputs, we can run a traversal of each to return two arrays, each representing all values within one tree
Then, we can add all values of tree A to a hash table
Do a .contains(key) check of each value from tree B, and if TRUE, add to a new Return Array



## Efficiency 
Time: O(n)* => Binary Tree traversals and adding to a hash table each take O(n) where n = each value/node interacted with once.  The final contains check should be a constant O(1) unless values become deeply nested in the table due to a bad hash.
Space: O(n) => more precisely, something closer to O(4n) as we’ll be creating 3 new arrays (one for each tree and one for duplicate values to be returned) as well as a hash table containing all the values from one of the trees.



## Solution
![treeIntersection](treeIntersection.png)


## Co-Author(s)
 - Jen Chinzi