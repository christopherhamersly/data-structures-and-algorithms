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

function zipLists(list1, list2) {
  let combinedList = new LinkedList;

  let ll1Current = list1.head;
  let ll2Current = list2.head;

  while (ll1Current || ll2Current){
    if(ll1Current){
      combinedList.append(ll1Current.value);
      ll1Current = ll1Current.next;
    }
  } if (ll2Current) {
    combinedList.append(ll1Current.value);
    ll2Current = ll2Current.next;
  }
  return combinedList.head;
}

zipLists();

let currentNode1 = list1.head;
let currentNode2 = list2.head;

while(currentNode1.next && currentNode2.next) {
  let formerNext1 = currentNode1.next;
  currentNode1.next = currentNode2;

  let formerNext2 = currentNode2.next;
  currentNode2.next = formerNext1;

  currentNode1 = formerNext1;
  currentNode2 = formerNext2;
}

module.exports = LinkedList;

module.exports = zipLists;


