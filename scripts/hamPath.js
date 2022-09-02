// JavaScript program for solution of Hamiltonian
// Cycle problem using backtracking

class HamiltonianCycle {
  constructor() {
    this.V = 5;
    this.path = [];
  }

  /* A utility function to check if the vertex v can be added at
index 'pos'in the Hamiltonian Cycle constructed so far (stored in 'path[]') */

  isSafe(v, graph, path, pos) {
    /* Check if this vertex is an adjacent vertex of the
  previously added vertex. */
    if (graph[path[pos - 1]][v] == 0) return false;

    /* Check if the vertex has already
  been included. This step can be
  optimized by creating an array
  of size V */
    for (var i = 0; i < pos; i++) if (path[i] == v) return false;

    return true;
  }

  /* A recursive utility function
to solve hamiltonian cycle problem */
  hamCycleUtil(graph, path, pos) {
    /* base case: If all vertices
  are included in Hamiltonian Cycle */
    if (pos == this.V) {
      // And if there is an edge from the last included
      // vertex to the first vertex
      if (graph[path[pos - 1]][path[0]] == 1) return true;
      else return false;
    }

    // Try different vertices as a next candidate in
    // Hamiltonian Cycle. We don't try for 0 as we
    // included 0 as starting point in hamCycle()
    for (var v = 1; v < this.V; v++) {
      /* Check if this vertex can be
      added to Hamiltonian Cycle */
      if (this.isSafe(v, graph, path, pos)) {
        path[pos] = v;

        /* recur to construct rest of the path */
        if (this.hamCycleUtil(graph, path, pos + 1) == true) return true;

        /* If adding vertex v doesn't
          lead to a solution, then remove it */
        path[pos] = -1;
      }
    }

    /* If no vertex can be added to Hamiltonian Cycle
  constructed so far, then return false */
    return false;
  }

  /* This function solves the Hamiltonian
Cycle problem using Backtracking. It
mainly uses hamCycleUtil() to solve the
problem. It returns false if there
is no Hamiltonian Cycle possible,
otherwise return true and prints the path.
Please note that there may be more than
one solutions, this function prints one
of the feasible solutions. */
  hamCycle(graph) {
    this.path = new Array(this.V).fill(0);
    for (var i = 0; i < this.V; i++) this.path[i] = -1;

    /* Let us put vertex 0 as the first
  vertex in the path. If there is a
  Hamiltonian Cycle, then the path can be
  started from any point of the cycle
  as the graph is undirected */
    this.path[0] = 0;
    if (this.hamCycleUtil(graph, this.path, 1) == false) {
      document.write("<br>Solution does not exist");
      return 0;
    }

    this.printSolution(this.path);
    return 1;
  }

  /* A utility function to print solution */
  printSolution(path) {
    document.write(
      "Solution Exists: Following" + " is one Hamiltonian Cycle <br>"
    );
    for (var i = 0; i < this.V; i++) document.write(" " + path[i] + " ");

    // Let us print the first vertex again
    // to show the complete cycle
    document.write(" " + path[0] + " <br>");
  }
}
// Driver code
var hamiltonian = new HamiltonianCycle();
/*
Let us create the following graph
  0----1----2
  |   / \   |
  |  /   \  |
  | /     \ |
  3---------4
*/
var graph1 = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [1, 1, 0, 0, 1],
  [0, 1, 1, 1, 0],
];

// Print the solution
hamiltonian.hamCycle(graph1);

/*
Let us create the following graph
  0----1----2
  |   / \
  |  /   \
  | /     \
  3         4
*/
var graph2 = [
  [0, 1, 0, 1, 0],
  [1, 0, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
];

// Print the solution
hamiltonian.hamCycle(graph2);