// Class to find test if a sequence of numbers
// can be arranged so each number in sequence
// can be summed with it's neighbor to form a perfect square.

function createAdjencyList(nodes, func) {
    let list = {};
    for (let i = 1; i <= nodes.length; i++) {
        for (let j = i + 1; j <= nodes.length; j++) {
            if (i !== j) {
                if (func(i, j)) {
                    if (list[i]) {
                        list[i].push(j);
                    } else {
                        list[i] = [j];
                    }
                    if (list[j]) {
                        list[j].push(i);
                    } else {
                        list[j] = [i];
                    }
                }
            }
        }
    }
    return list;
}

// Test if two numbers sum to a perfect square.
function isSquare(a, b) {
    if (Math.sqrt(a + b) - Math.floor(Math.sqrt(a + b)) === 0) {
        return true;
    }
    return false;
}

function updateNumber(val) {
    document.getElementById('sums-range').value = val;
    document.getElementById('sums-number').value = val;
    getGraph(val);
}

function getGraph(count) {
    let nodes = [];
    for (let i = 1; i <= count; i++) {
        nodes.push(i);
    }
    let adjencyList = createAdjencyList(nodes, isSquare);
    console.log(adjencyList);
}

window.onload = () => {
    const value = document.getElementById('sums-number').value;
    getGraph(value);
};

/**
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
}

 */
