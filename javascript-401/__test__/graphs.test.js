'use strict';

let { Vertex, Edge, Graph } = require('../graphs/graphs');
let myGraph = new Graph();
let vertex1 = new Vertex(1);
let vertex2 = new Vertex(2);

describe('test the graph ', () => {
  test('add vertices', () => {
    expect(myGraph.addVertex(vertex1)).toEqual({'value' : 1});
  });

  test('return the size of the graph ', () => {
    expect(myGraph.size()).toBe(1);
  });

  test('it can connect vertices through an edge and return the neighbors using the getNeighbors method', () => {
    myGraph.addVertex(vertex2);
    myGraph.addEdge(vertex1, vertex2);
    expect(myGraph.getNeighbors(vertex1)).toEqual([{'value' : 2}]);
  });
 
});
