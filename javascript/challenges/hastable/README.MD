# Hashtables
> Terminology:

  1. Hash - A hash is the result of some algorithm taking an incoming string and converting it into a value that could be used for either security or some other purpose. In the case of a hashtable, it is used to determine the index of the array.
  1. Buckets - A bucket is what is contained in each index of the array of the hashtable. Each index is a bucket. An index could potentially contain multiple key/value pairs if a collision occurs.
  1. Collisions - A collision is what happens when more than one key gets hashed to the same location of the hashtable.

## Challenge

> Implement a Hashtable with the following methods:

  1. add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
  1. get: takes in the key and returns the value from the table.
  1. contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
  1. hash: takes in an arbitrary key and returns an index in the collection.

>Write tests to prove the following functionality:

  1. Adding a key/value to your hashtable results in the value being in the data structure
  1. Retrieving based on a key returns the value stored
  1. Successfully returns null for a key that does not exist in the hashtable
  1. Successfully handle a collision within the hashtable
  1. Successfully retrieve a value from a bucket within the hashtable that has a collision
  1. Successfully hash a key to an in-range value

## Approach & Efficiency


## API
<!-- Description of each method publicly available