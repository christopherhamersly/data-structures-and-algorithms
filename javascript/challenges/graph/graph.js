'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.adjacents = [];
  }
}

class Edge {
  constructor(source, destination, weight) {
    this.source = source;
    this.destination = destination;
    this.weight = weight;
  }
}

class Graph {

  constructor() {
    this.adjacencyList = [];
    this.edges = [];
  }

  addNode() {
   
    const node = new Node(value);
    this.adjacencyList.push(newNode)
    return newNode;

    // Adds a new node to the graph
    // Takes in the value of that node
    // Returns the added node

  }

  addEdge(node1, node2, weight=null) {

    node1.adjacents.push(node2.value);
    node2.adjacents.push(node1.value);

    const edge = new Edge(node1.value, node2.value, weight);
    this.edges.push(edge);
    // Adds a new edge between two nodes in the graph
    // Include the ability to have a “weight”
    // Takes in the two nodes to be connected by the edge
    // Both nodes should already be in the Graph
  }

  
  getNodes() {
    // for loop going over the nodes. 
    // Returns all of the nodes in the graph as a collection (set, list, or similar)
    return this.adjacencyList;
  }

  getNeighbors (node) {
    // Returns a collection of edges connected to the given node
    // Takes in a given node
    // Include the weight of the connection in the returned collection

    const edgeCollection = [];

    this.edges.forEach(edge => {
      if(edges.sourceNode === node.value) {
        edgeCollection.push(edge);
      }
    });
    return edgeCollection;
  }

  size() {
    // Returns the total number of nodes in the graph

    return this.adjacencyList.length;

  }










