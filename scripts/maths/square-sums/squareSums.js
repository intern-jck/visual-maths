function createAdjencyList(nodes, func) {
    let list = {};
    let a, b;

    for (let i = 0; i <= nodes.length; i++) {
        // console.log('NODE: ', nodes[i]);
        for (let j = i + 1; j <= nodes.length; j++) {
            a = nodes[i];
            b = nodes[j];

            if (i !== j) {
                if (func(a, b)) {
                    if (list[a]) {
                        list[a].push(b);
                    } else {
                        list[a] = [b];
                    }
                    if (list[b]) {
                        list[b].push(a);
                    } else {
                        list[b] = [a];
                    }
                }
            }
        }
    }
    return list;
}

function findPath(node, adjList, visited, path) {
    console.log('N:', node);
    adjList[node].map((n) => {
        console.log('\t', n);
        if (path.indexOf(n) === -1 && visited[n] === false) {
            path.push(n);
            visited[n] = true;
            findPath(n, adjList, visited, path);
        }
    });
    return path;
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
    let visited = [];
    let path = [];

    for (let i = 1; i <= count; i++) {
        nodes.push(i);
        visited.push(false);
    }
    console.log('NODES: ', nodes);

    let adjencyList = createAdjencyList(nodes, isSquare);
    console.log('LIST: ', adjencyList);
    path = findPath(nodes[0], adjencyList, visited, path);
    console.log(path);
    // return adjencyList;
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
