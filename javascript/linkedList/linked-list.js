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

  //takes any value as an argument and returns a boolean result depending on whether the value exists as a Node's value somewhere within the list.

  includes(value){
    let currentNode = this.head;
  

    //while current does not equal null go into the loop
    // check if the value ==== currentNode.value if not there 
    // keep going
    // if we reached the end of the list return false
    while(currentNode.next) {
      currentNode = currentNode.next;

      //run an if conditional, if the value is not in the node, move on.  If it is return true, if it is not in the node return false
      // move through the next node to check if its in the value
    } if (currentNode.next === value) {
      return true;
    } else {
      return false;
    }
  }

  //loop over the nodes and check to see if it has the value


  toString(){

    let currentNode = this.head;
    let string = '';

    //loop over the nodes and get a value back from them returning as a string. 
    while (currentNode) {
      string += currentNode.value;
      currentNode = currentNode.next;
    }
    return string;
  //returns a string representing all the values in the Linked List, formatted as:
  //"{ a } -> { b } -> { c } -> NULL"
  }

  insertBefore(value){

   const newNode = new Node(newVal)

   if(!this.head) {
    this.head = newNode;
    return;

   let currentNode = this.head;

   while (currentNode.value !== value) {
    currentNode = currentNode.next;
}


  insertBefore(value){
  const newNode = new Node(newVal)
  if(!this.head) {
  this.head = newNode;
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


}


module.exports = LinkedList;



