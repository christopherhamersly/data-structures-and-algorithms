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
}

const treeIntersection = require('./treeIntersection');
// const BinaryTree = require('../tree/tree');


describe('we are testing tree intersections ', () => {

  test('it should return values if they match' , () => {

    let right = new Node(100, 120, 60 );
    let left = new Node(15 , 60, 80);
    let root = new Node(30, left, right);
    let firstTree = new BinaryTree(root);



    let right_second = new Node(120, 140, 25);
    let left_second = new Node(15 , 60, 80);
    let root_second = new Node(30, left_second, right_second);
    let secondTree = new BinaryTree(root_second);

    expect(treeIntersection(firstTree, secondTree).toEqual(120, 60, 30, 80))
  })

  test('it should return values if they match' , () => {

    let right = new Node(100, 1200, 60 );
    let left = new Node(15 , 60, 80);
    let root = new Node(30, left, right);
    let firstTree = new BinaryTree(root);



    let right_second = new Node(120, 140, 25);
    let left_second = new Node(15 , 60, 80);
    let root_second = new Node(30, left_second, right_second);
    let secondTree = new BinaryTree(root_second);

    expect(treeIntersection(firstTree, secondTree).toEqual(60, 30, 80))
  })

  test('it should return values if they match' , () => {

    let right = new Node(100, 1200, 600 );
    let left = new Node(15 , 60, 80);
    let root = new Node(30, left, right);
    let firstTree = new BinaryTree(root);



    let right_second = new Node(120, 140, 25);
    let left_second = new Node(15 , 60, 80);
    let root_second = new Node(30, left_second, right_second);
    let secondTree = new BinaryTree(root_second);

    expect(treeIntersection(firstTree, secondTree).toEqual(30, 80))
  })

})