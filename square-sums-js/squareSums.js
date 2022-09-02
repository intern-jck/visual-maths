class Graph {
  constructor(nodes) {
    this.nodes = nodes;
    this.adjList = {};

  }

  getSquareSums() {

  }

}

class Node extends Graph{
  constructor(val){
    super();
    this.val = val;
    this.edges = [];
  }
}
