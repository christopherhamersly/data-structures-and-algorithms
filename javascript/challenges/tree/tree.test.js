'use strict';

const {BinarySearchTree, Node, BinaryTree, Queue} = require ('./tree.js');




it('should instantiate a new class', () => {
  expect(BinarySearchTree).toBeDefined();

})

it ('can successfully instantiate a tree with a single root node', () => {
  const tree = new BinarySearchTree('bananas');
  expect(tree.root).toBe('bananas');
})

it('Can successfully add a left child and right child to a single root node', () => {

  const apple = new Node('apple', 'bananas', 'cherries');
  expect(apple.value).toBe('apple');
  expect(apple.left).toBe('bananas');
  expect(apple.right).toBe('cherries');
})


it('Can successfully return a collection from preorder traversal', () => {
  const apple = new Node('apple');
  const bananas = new Node ('bananas');
  const cherries = new Node('cherries', bananas, apple);
  const tree = new BinarySearchTree(cherries);
  expect(tree.preOrder()).toEqual(['cherries', 'bananas', 'apple']);
})

it('Can successfully return a collection from an inorder traversal', () => {
  const apple = new Node('apple');
  const bananas = new Node ('bananas');
  const cherries = new Node('cherries', bananas, apple);
  const tree = new BinarySearchTree(cherries);
  expect(tree.inOrder()).toEqual(['bananas', 'cherries', 'apple']);
})

it(' Can successfully return a collection from a postorder traversal', () => {
  const apple = new Node('apple');
  const bananas = new Node ('bananas');
  const cherries = new Node('cherries', bananas, apple);
  const tree = new BinarySearchTree(cherries);
  expect(tree.postOrder()).toEqual(['bananas', 'apple', 'cherries']);
})

it('can successully search through a binary tree and see if a value is included', () => {
  const apple = new Node('apple');
  const bananas = new Node ('bananas');
  const cherries = new Node('cherries', bananas, apple);
  const tree = new BinarySearchTree(cherries);
  expect(tree.contains('apple')).toEqual(true);
})

it('can successully search through a binary tree and see if a value is included', () => {
  const apple = new Node('apple');
  const bananas = new Node ('bananas');
  const cherries = new Node('cherries', bananas, apple);
  const tree = new BinarySearchTree(cherries);
  expect(tree.contains('donuts')).toBe(false);
})

it('should add to root of empty tree', () => {
  const tree = new BinarySearchTree();

  tree.add(5);

  expect (tree.root.value).toBe(5);
})

it('should find the maximum value in a tree', () => {
  const apple = new Node(1);
  const bananas = new Node (5);
  const cherries = new Node(3, bananas, apple);
  const tree = new BinaryTree(cherries);
  expect(tree.findMaximum()).toEqual(5);

})

it.only('should correctly read top to bottom of the tree', () => {
  const one = new Node('apples', 'flour', 'grapes');
  const two = new Node('bananas', 'dates', 'eggplant');
  const three = new Node('cherries', two, one);
  const tree = new BinaryTree(three);
  console.log(tree, 'tree');
  expect(tree.breadthFirst()).toBe('cherries, bananas, apples');
 

});

