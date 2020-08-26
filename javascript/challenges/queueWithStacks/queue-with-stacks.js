'use strict';

'use strict';

const Stack = require('../../data-structures/stacksAndQueues/stacks-and-queues.js');

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class PseudoQueue {

  constructor(){
    this.top = null;
  }

  enqueue(value){
    const oldTop = this.top;
    this.top = new Node(value);
    this.top.next = oldTop;
  }

  dequeue(){
    let stackOne = {};
    let stackTwo = {};
    while (this.next !== null){
      let current = this.top;
      this.top = this.top.next;
      current.next = null;

      const oldTop = this.top;
      this.top = current.value
      this.top.next = oldTop;

      return top.value;
    }
  }

  peek(){
    return this.top.value;
  }
}

const Stack = require('../stacksAndQueues/stacks-and-queues.js');
 
Class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class PsuedoQueue {



  enqueue(value) {
    let queue = {};
    queue.push(value);
    return queue;

  }


  dequeue() {
    this.storage = {};
    let holdingList = {};
    let argList = {};
    // let secondHoldingList = {};

    while (this.head.value === true) {
      stack.pop.linkedList();
      stack.push.linkedList(holdingList);
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

