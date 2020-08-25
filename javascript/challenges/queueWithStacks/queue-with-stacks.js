'use strict';
const stack = require('../stacksAndQueues/stacks-and-queues.js');


class PsuedoQueue {



  enqueue(value) {
    let queue = {};
    queue.push(value);
    return queue;

  }


  dequeue() {
    let queue = {};
    let holdingList = {};
    let argList = {};
    // let secondHoldingList = {};

    while (this.head.value === true) {
      queue.pop.linkedList();
      queue.push.linkedList(holdingList);
      return holdingList();
    }
    holdingList.pop(argList);
    return holdingList
  }
  // while(holdingList.head.value === true);
  //   queue.pop.holdingList();
  //   queue.push.secondHoldingList(holdingList);
  //   return secondHoldingList();
}

module.exports = PsuedoQueue;

