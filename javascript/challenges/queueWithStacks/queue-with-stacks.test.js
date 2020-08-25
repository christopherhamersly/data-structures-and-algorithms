'use strict';

const PsuedoQueue = require('./queue-with-stacks.js');
const Queue = require('../stacksAndQueues/stacks-and-queues.js');


// “Happy Path” - Expected outcome
// Expected failure
// Edge Case (if applicable/obvious)

describe(`queue with stacks`, () => {
  it('should dequeue the last number in a linked list.', () => {
    let newQueue = new PsuedoQueue;
    let realNewQueue = new Queue;

    realNewQueue.enqeue('bananas');
    realNewQueue.enqeue('oranges');
    realNewQueue.pus('carrots');


  })

  it('should enqeue a value to the end of a linked list', () => {
    let newQueue = new PsuedoQueue;
    let realNewQueue = new Queue;

    realNewQueue.enqeue('bananas');
    realNewQueue.enqeue('oranges');
    realNewQueue.enqeue('carrots');
    newQueue.enqeue('apples');
    expect(newQueue).toBe('bananas, oranges, carrots, apples');

  });

});