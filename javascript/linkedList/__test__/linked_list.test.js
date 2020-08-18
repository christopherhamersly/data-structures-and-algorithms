'use strict;'

const LinkedList = require('../linked-list.js');
const { TestScheduler } = require('jest');


// Can successfully instantiate an empty linked list
test('should instantiate', () => {
  const ll = new LinkedList();
  expect(ll).toBeDefined();
});

// Can properly insert into the linked list
test('should add to empty list', () => {
  const ll= new LinkedList();
  ll.insert('apples');
  expect(ll.head.value).toBe('apples');
})

test('should add to NOT empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('bananas');
  expect(ll.head.value).toBe('bananas');
});

test('should append to empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.append('apples');
  expect(ll.head.value).toBe('apple');
});

// Can properly insert multiple nodes into the linked list
test('should append to NOT empty list', () => {
  const ll = new LinkedList();
  ll.insert('apples');
  ll.insert('apples');
  ll.append('cucumbers');

  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');

  expect(ll.head.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next).toBe(null);


});

// Can properly return a collection of all the values that exist in the linked list
test('should return a string when function is called', () => {
  const ll = new LinkedList();
  ll.toString('apples').toBe('apples');
  ll.toString('bananas').toBe('bananas');
  ll.toString('cucumbers').toBe('cucumbers');
});

test('should return a string when function is called', () => {
  const ll = new LinkedList();
  ll.toString('apples').toBe('apples');
  ll.toString('bananas').toBe('bananas');
  ll.toString('cucumbers').toBe('cucumbers');
});

// Will return true when finding a value within the linked list that exists
test('Will return true when finding a value within the linked list that exists', () => {
  const ll = new LinkedList();
  ll.appends('apples');
  ll.includes('apples').toBe(true);
});

// Will return false when searching for a value in the linked list
test('Will return false when searching for a value in the linked list', () => {
  const ll = new LinkedList();
  ll.appends('bananas');
  ll.includes('apples').toBe(false);
});



/*

 -- TESTS for code challenge 06 --
  - Can successfully add a node to the end of the linked list

  - Can successfully add multiple nodes to the end of a linked list

  - Can successfully insert a node before a node located i the middle of a linked list

  - Can successfully insert a node before the first node of a linked list

  - Can successfully insert after a node in the middle of the linked list
  
  - Can successfully insert a node after the last node of the linked list


/*