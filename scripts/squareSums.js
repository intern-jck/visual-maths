
/*

*/

let adjencyList = {};
let visited  = {};

// Creates the adjency list and sets all values
// in visited to false.
function initialize(n) {
  for (let i = 1; i <= n; i++) {
    visited[i] = false;
    for (let j = i + 1; j <= n; j++) {
      if (i !== j) {
        if (isSquare(i, j)) {
          if (adjencyList[i]) {
            adjencyList[i].push(j);
          } else {
            adjencyList[i] = [j];
          }
          if (adjencyList[j]) {
            adjencyList[j].push(i);
          } else {
            adjencyList[j] = [i];
          }
        }
      }
    }
  }
}

// Tests if two numbers sum to a perfect square
function isSquare(a, b) {
  if (Math.sqrt(a + b) - Math.floor(Math.sqrt(a + b)) === 0) {
    return true;
  }
  return false;
}

function findPath(node, adjList, visited, path) {
  let keys = Object.keys(obj);

  if (path.indexOf(node) === -1 && visited[node] === false) {
    path.push(node);
    visited[node] = true;
    findPath(adjList[node], adjList, visited, path);
  }
  return path;
}

initialize(16);
console.log(adjencyList, visited);

