'use strict';


class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root=null) {
    this.root = root;
  }



  preOrder() {

    const output = [];
    function _preOrder(root) {
      if(!root) {
        return;
      }
      output.push(root.value);
      _preOrder(root.left);
      _preOrder(root.right);
    }
    _preOrder(this.root);
    return output;
  }

  inOrder() {

    const output = [];
    function _inOrder(root) {
      if(!root) {
        return;
      }
      _inOrder(root.left);
      output.push(root.value);
      _inOrder(root.right);
    }
    _inOrder(this.root);
    return output;
  }

  postOrder() {
    const output = [];
    function _postOrder(root) {
      if(!root) {
        return;
      }
      _postOrder(root.left);
      _postOrder(root.right);
      output.push(root.value);
    }
    _postOrder(this.root);
    return output;
  }

  findMaximum() {
    let array = [];
    let max = 0;
    function _preOrder(root){
      if(!root){
        return;
      }
      console.log(root.value);
      if(root.left){
        _preOrder(root.left);
      }
      array.push(root.value);
      if(root.right){
        _preOrder(root.right);
      }
    }
    _preOrder(this.root);
    for (let i = 0; i < array.length; i++){
      if (array[i] >= max){
        max = array[i];
        return max;
      }
    }
  }

}
function fizzBuzz (tree){
  console.log(tree)
  //use preorder and change how it iterates through the tree and output strings;  
  if(!tree.root){
    return;
  }
  function _fizzBuzz(root) {
    if ( root === null ) {
      return;
    }
    if(root.value %15 === 0) {
      root.value = 'Fizzbuzz'
    } else if (root.value % 5 === 0 ) {
      root.value = 'Buzz';
    } else if (root.value % 3 === 0 ) {
      root.value = 'Fizz';
    } else {
      root.value = root.value.toString();
    }
    _fizzBuzz(root.left);
    _fizzBuzz(root.right);
  }
  _fizzBuzz(tree.root);
}
// fizzBuzz();
// const fizzBuzz = require('./fizz-buzz-tree');
// const BinaryTree = require('../tree/tree');

describe('we are testing fizz buzz on a tree and changing it in place', () => {

  it('should change a tree in place', () => {

    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3, two, one);
    const tree = new BinaryTree(three);
    console.log(tree);
    expect(fizzBuzz(tree)).toBe('1', '2', 'fizz');



  })








});

