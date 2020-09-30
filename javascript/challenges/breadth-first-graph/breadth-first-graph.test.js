'use strict'
const { graph } = require ('../graph/graph');
const breadthFirst = require('./breadth-first-graph');

describe('we are testing a breadth first search method on a graph', () => {
  test('it should return numbers in the following order', () => {
    const a = graph.addNode('A');
    const b = graph.addNode('B');
    const c = graph.addNode('C');
    const d = graph.addNode('D');
    const e = graph.addNode('E');
    const f = graph.addNode('F');

    graph.addEdge(a,b)
    graph.addEdge(b,c)
    graph.addEdge(b,d)
    graph.addEdge(c,e)
    graph.addEdge(c,f)
    graph.addEdge(d,f)

    expect(graph.breadthFirst(a)).toBe('A', 'B', 'C', 'D', 'E', 'F')
  })
  test('it should not return the following', () => {

  })
  test('it should not repeat values that have already been captured', () => {

  })
})

