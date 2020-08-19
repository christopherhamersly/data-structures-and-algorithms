'use strict;'

const LinkedList = require('../linked-list.js');
const { test } = require('jest');
const ll = new LinkedList();
const zipLists = require('../linked-list.js')



// Can successfully instantiate an empty linked list
test('should instantiate', () => {
  expect(ll).toBeDefined();
});

// Can properly insert into the linked list
test('should add to empty list', () => {
  ll.insert('apples');
  expect(ll.head.value).toBe('apples');
})

test('should add to NOT empty list', () => {
  ll.insert('apples');
  ll.insert('bananas');
  expect(ll.head.value).toBe('bananas');
});

test('should append to empty list', () => {
  ll.insert('apples');
  ll.append('apples');
  expect(ll.head.value).toBe('apple');
});

// Can properly insert multiple nodes into the linked list
test('should append to NOT empty list', () => {
  ll.insert('apples');
  ll.insert('bananas');
  ll.append('cucumbers');

  expect(ll.head.value).toBe('bananas');
  expect(ll.head.next.value).toBe('apples');

  expect(ll.head.next.next.value).toBe('cucumbers');
  expect(ll.head.next.next.next).toBe(null);


  //  - Can successfully add multiple nodes to the end of a linked list
  test('should append multiple values to the end of a linked list', () => {
    ll.clear();
    ll.append('cucumbers');
    ll.append('apples');
    expect(ll).toBe('cucumbers', 'apples');
  })
});

// Can properly return a collection of all the values that exist in the linked list
test('should return a string when function is called', () => {
  ll.append('cucumbers');
  ll.append('apples');
  ll.append('bananas');
  expect(ll.toString).toBe('{bananas} -> {apples} -> {cucumbers} -> null');
});


// Will return true when finding a value within the linked list that exists
test('Will return true when finding a value within the linked list that exists', () => {
  ll.insert('apples');
  expect(ll.includes)('apples').toBe(true);
});

// Will return false when searching for a value in the linked list
test('Will return false when searching for a value in the linked list', () => {
  ll.insert('bananas');
  expect(ll.includes)('apples').toBe(false);
});


//  - Can successfully insert a node before the first node of a linked list
test('Inserts a node before the first node of a linked list', () => {
  ll.append('bananas');
  ll.insertBefore('apples');
  expect(ll).toBe('apples, bananas');

})

// - Can successfully insert a node before a node located i the middle of a linked list

test('Can successfully insert a node before a node located in the middle of a linked list', () => {
  ll.insert('bananas');
  ll.insert('carrots');
  ll.insert('doughnuts');
  ll.insert('eggplant');
  ll.insertBefore('eggplant', 'fruit');
  expect(ll).toBe('bananas, apples, carrots, doughnuts, fruit, npeggplant');
})

// - Can successfully insert after a node in the middle of the linked list

test('Can successfully insert a node before a node located in the middle of a linked list', () => {
  ll.insert('bananas');
  ll.insert('carrots');
  ll.insert('doughnuts');
  ll.insert('eggplant');
  ll.insertAfter('apples','carrots')
  expect(ll).toBe('bananas, carrots, apples, doughnuts, eggplant');
})


test('Where k is greater than the length of the linked list.', () => {
  let k = 10;
  ll.insert(5);
  ll.insert(4);
  ll.insert(3);
  ll.insert(2);
  ll.insert(1);
  kthFromEnd(k);
  expect(ll.kthFromEnd).toThrow('Error');
})


test('Where k is not a positive integer.', () => {
  let k = -5;
  ll.insert(4);
  ll.insert(3);
  ll.insert(2);
  ll.insert(1);
  expect(ll.kthFromEnd).toThrow('Error');
})


test('Where the linked list is of a size 1.', () => {
  ll.insert(1);
  expect(ll.kthFromEnd.value).toEqual(1);
})

test(' Where k and the length of the list are the same.', () => {
  kthFromEnd(4);
  ll.insert(4);
  ll.insert(3);
  ll.insert(2);
  ll.insert(1);
  expect(ll.kthFromEnd.value).toEqual(4);
})

test('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list.', () => {
  let k = 2;
  ll.insert(4);
  ll.insert(3);
  ll.insert(2);
  ll.insert(1);
  expect(ll.kthFromEnd.value).toEqual(2);
})

test('Where the lists combined eachother of equal length', () => {
  let ll1 = new LinkedList;
  let ll2 = new LinkedList;
  ll1.insert(4);
  ll1.insert(3);
  ll1.insert(2);
  ll1.insert(1);
  ll2.insert(4);
  ll2.insert(3);
  ll2.insert(2);
  ll2.insert(1);
  expect(ziplists(ll1, ll2)).toEqual(4, 4, 3, 3, 2, 2, 1, 1);
})
  
test('where list one is shorter than list two', () => {
  test('Where the lists combined eachother of equal length', () => {
    let ll1 = new LinkedList;
    let ll2 = new LinkedList;
    ll1.insert(3);
    ll1.insert(2);
    ll1.insert(1);
    ll2.insert(4);
    ll2.insert(3);
    ll2.insert(2);
    ll2.insert(1);
    expect(zipLists(ll1, ll2)).toEqual(3, 4, 2, 3, 1, 2, 1);
  })
})
  
test('where list one is shorter than list two', () => {
  test('Where the lists combined eachother of equal length', () => {
    let ll1 = new LinkedList;
    let ll2 = new LinkedList;
    ll1.insert(4);
    ll1.insert(3);
    ll1.insert(2);
    ll1.insert(1);
    ll2.insert(3);
    ll2.insert(3);
    ll2.insert(2);
    ll2.insert(1);
    expect(zipLists(ll1, ll2)).toEqual(4, 3, 3, 2, 2, 1, 1);
  })
})




