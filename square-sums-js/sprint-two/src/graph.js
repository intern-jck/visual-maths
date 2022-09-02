// Instantiate a new graph
var Graph = function() {
  this.graph = [];
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (typeof node === 'number') {
    var newNode = {
      value: node,
      edges: [],
    };
    this.graph.push(newNode);
  } else if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i ++) {
      var newNode = {
        value: node[i],
        edges: [],
      };
      this.graph.push(newNode);
    }
  }

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === node) {
      // console.log('contains', this.graph[i]);
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === node) {
      for (let j = 0; j < this.graph[i].edges.length; j++) {
        let fromNode = this.graph[i].value;
        let toNode = this.graph[i].edges[j];
        this.removeEdge(fromNode, toNode);
      }

      this.graph.splice(i, 1);
    }
  }
};


// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === fromNode) {
      if (this.graph[i].edges.includes(toNode)) {
        return true;
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {

  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === fromNode) {
      this.graph[i].edges.push(toNode);
    }
  }

  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === toNode) {
      this.graph[i].edges.push(fromNode);
    }
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === fromNode) {
      this.graph[i].edges.splice(i, 1);
    }
  }

  for (let i = 0; i < this.graph.length; i++) {
    if (this.graph[i].value === toNode) {
      this.graph[i].edges.splice(i, 1);
    }
  }

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let i = 0; i < this.graph.length; i++) {
    cb(this.graph[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?

addNode = O(1)
contains = O(n)
removeNode = O(n)
hasEdge = O(n)
addEgde = O(n)
removeEdge = O(n)
forEachNode = O(n)

 */


