'use strict';


function fizzBuzz (tree){
  //use preorder and change how it iterates through the tree and output strings 
  if(!tree.root){
    return;
  }
  function _fizzBuzz(root) {
    if(root.value %15) {
      root.value = 'Fizzbuzz'
    } else if (root.value % 5) {
      root.value = 'Buzz';
    } else if (root.value % 3) {
      root.value = 'Fizz';
    } else {
      root.value = root.value.toString();
    }
    _fizzBuzz(root.left);
    _fizzBuzz(root.right);
  }
  _fizzBuzz(tree.root);
}

module.exports = {fizzBuzz}
