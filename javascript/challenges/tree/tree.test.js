'use strict';

const {BinarySearchTree, Node} = require ('./tree.js');



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
  expect(tree.includes('apple')).toBe(true);
})

it('can successully search through a binary tree and see if a value is included', () => {
  const apple = new Node('apple');
  const bananas = new Node ('bananas');
  const cherries = new Node('cherries', bananas, apple);
  const tree = new BinarySearchTree(cherries);
  expect(tree.includes('donuts')).toBe(false);
})





