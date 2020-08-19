'use strict';
class Node {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

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
  
  let currentNode = this.head;
  while(currentNode.next.value !== value) {
  currentNode = currentNode.next;
  }

  currentNode = currentNode.next;
  let temp = currentNode;
  currentNode.next = newNode;
  newNode.next = temp.next;
  }
  };

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

  if(targetValue<0) {
    return 'Exception'
  } else {
    currentNode = this.head;
    letkCounter = 0;
    while(kCounter < targetNode) {
      kCounter++;
      currentNode = currentNode.mext;
    } 
  }

  return currentNode.value;
  }
}


module.exports = LinkedList;



