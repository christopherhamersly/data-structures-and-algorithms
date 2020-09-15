'use strict';

class Queue {
  constructor() {
    this.storage = [];
  }
  dequeue() {
    // if (this.storage.length === 0) {
    //   throw new RangeError('Cannot dequeue empty queue');
    // } else {
    // let returnValue = this.storage.length
    // this.storage.unshift(returnValue);
    return this.storage.shift();
    // }
  }

  peek() {
    if (this.storage.length === 0) {
      throw new RangeError('Cannot peek empty queue');
    } else {
      let peek = this.storage[0];
      return peek
    }
    // Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

  }
  enqueue(value) {
    this.storage.push(value);
    // which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
  }
  isEmpty() {
    if (this.size === 0){
      return true;
    } else {
      return false;
    }
    // that takes no argument, and returns a boolean indicating whether or not the queue is empty.
  }
}

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

  breadthFirst() {

    const output = [];
    let breadth = new Queue;
    // const node = new Node;

    while (!breadth.isEmpty()) {
      let node = breadth.dequeue();
      if(node.value.left) {
        breadth.enqueue(node.left)
      }
      if(node.right.value) {
        breadth.enqueue(node.right)
      }
      output.push(node.value.value);
    }
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








// const applesNode = new Node('apples');
// const bananasNode = new Node('bananas');
// const cucumbersNode = new Node('cucumbers');

// applesNode.left = bananasNode;
// applesNode.right = cucumbersNode;

const applesNode = new Node('apples', new Node('bananas'), new Node('cucumbers'));

const tree = new BinaryTree(applesNode);

const results = tree.preOrder();

console.log(results);


class BinarySearchTree extends BinaryTree {

  add_inner(value, root) {

    const node = new Node(value);

    if (value <= root.value) {
      root.left = node;
    } else {
      root.right = node;
    }
  }

  add(value) {
    if(!this.root) {
      this.root = new Node(value);
      return;
    }
    this.add_inner(value, this.root);
  }

  contains(value) {

    while(this.root) {
      if(this.root === value)
        return true;
      if (value > this.root) {
        this.root = this.right;
      } else if (value < this.root) {
        this.root = this.left;
      } else {
        return false
      }
    }
  }
}


module.exports = {BinarySearchTree, Node, BinaryTree, Queue};



