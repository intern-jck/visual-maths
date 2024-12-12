// Class to find test if a sequence of numbers
// can be arranged so each number in sequence
// can be summed with it's neighbor to form a perfect square.

class SquareSums {
  constructor(nodes) {
    this.nodes = nodes;
    this.path = [];
    this.adjencyList = {};
    this.visited = {};
    this.initialize();
  }

  // Create the adjency list and
  // set the visited nodes to false.
  initialize() {
    for (let i = 1; i <= this.nodes; i++) {
      this.visited[i] = false;
      for (let j = i + 1; j <= this.nodes; j++) {
        if (i !== j) {
          if (this.isSquare(i, j)) {
            if (this.adjencyList[i]) {
              this.adjencyList[i].push(j);
            } else {
              this.adjencyList[i] = [j];
            }
            if (this.adjencyList[j]) {
              this.adjencyList[j].push(i);
            } else {
              this.adjencyList[j] = [i];
            }
          }
        }
      }
    }
  }

  // Test if two numbers sum to a perfect square.
  isSquare(a, b) {
    if (Math.sqrt(a + b) - Math.floor(Math.sqrt(a + b)) === 0) {
      return true;
    }
    return false;
  }

  // Finds a Hamiltonian path in the adjency list.
  // findPath(node, adjList, visited, path) {
  //   // console.log(node)
  //   adjList[node].map((n) => {
  //     // console.log(n);
  //     if (path.indexOf(n) === -1 && visited[n] === false) {
  //       path.push(n);
  //       visited[n] = true;
  //       this.findPath(n, adjList, visited, path);
  //     } else {
  //     }
  //   });
  //   return path;
  // }

  buildTree(node, adjList, tree) {
    tree[node] = {};
  }

  findPath(node, adjList, visited, path) {
    // console.log(node)
    adjList[node].map((n) => {
      // console.log(n);
      if (path.indexOf(n) === -1 && visited[n] === false) {
        path.push(n);
        visited[n] = true;
        this.findPath(n, adjList, visited, path);
      } else {
      }
    });
    return path;
  }

  // findPath(node, adjencyList, visited, path) {
  //   for (let i = 0; i < adjencyList[node].length; i++) {
  //     if (visited[node] === false)
  //   }
  // }

}


// Driver code

let graph = new SquareSums(23);
console.log(graph.adjencyList);
// console.log(graph.findPath(1, graph.adjencyList, graph.visited, graph.path));
