//Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

//Create a Stack class that has a top property. It creates an empty Stack when instantiated
class LinkedList {
  constructor () {
    this.head = null;
  }


  insert(value) {
    this.head = new Node(value, this.head);
  }


  append(value){
    const newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
      return;
    }

    let currentNode = this.head;

    while(currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  includes(value){
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    } if (currentNode.next === value) {
      return true;
    } else {
      return false;
    }
  }

  toString(){

    let currentNode = this.head;
    let string = '';

    while (currentNode) {
      string += `{ ${currentNode.value} } ->`;
      currentNode = currentNode.next;
    }
    return string + 'NULL';

  }

  insertBefore(targetValue, newValue){

    if(!this.head) {
      return;
    }

    if(this.head.value === targetValue) {
      this.insert(newValue);
      return;
    }
    let current = this.head;
  }

  while(current){
    if(current.next.value === targetValue) {
      current.next = new Node(newvalue, current.next);
      // break;
    }
    current = current.next;
  }


  insertAfter(value, arg){

    const newNode = new Node(newVal)

    if(!this.head) {

      return;
    }

    let currentNode = this.head;
    while(currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    currentNode = currentNode.next;
    let temp = currentNode;
    currentNode.next = newNode;
    newNode.next = temp.next;
  }


  kthFromEnd(k){
    if(!this.head){
      return 'Exception: list contains no nodes';
    }

    let listLength = 0;
    let currentNode = this.head;

    while(currentNode.next){
      listLength++;
      currentNode = currentNode.next;
    }

    let targetNode = (listLength - k);

    if(targetNode<0) {
      return 'Exception'
    } else {
      currentNode = this.head;
      let kCounter = 0;

      while(kCounter < targetNode) {
        kCounter++;
        currentNode = currentNode.mext;
      }
    }

    return currentNode.value;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Stack {

  constructor() {
    this.size = 0;
    this.top = null;
  }

  isEmpty() {
    return this.front === 0;
  }


  peek() {
    if (this.top === null) {
      throw new RangeError('Cannot peek off empty Stack');
    }
    return this.top.value;
  }


  push(value) {
    const oldTop = this.top;
    this.top = new Node(value);
    this.top.next = oldTop;
  }

  pop() {
    if (this.top === null) {
      throw new RangeError('Cannot pop off empty stack');
    }
    let current = this.top;
    this.top = this.top.next;
    current.next = null;
    return current.value;
  }

}

class Queue {
  constructor() {
    this.storage = [];
  }
  dequeue() {
    if (this.storage.length === 0) {
      throw new RangeError('Cannot dequeue empty queue');
    } else {
      let returnValue = this.storage.length
      this.storage.unshift(returnValue);
      return;
    }
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

module.exports = Stack;
module.exports = Queue;

















//Create a Queue class that has a front property. It creates an empty Queue when instantiated.
//This object should be aware of a default empty value assigned to front when the queue is created.
//Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.


//Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.

//Should raise exception when called on empty queue

//Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.

//Should raise exception when called on empty queue

//Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.
