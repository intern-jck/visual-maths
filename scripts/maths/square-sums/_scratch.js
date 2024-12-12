// Square Sum Sequence

// For a given range of numbers, find if they can be arranged in a way
// so that each number can be summed with its neighbor to form a perfect square

// To solve this, we can create an object whose keys are each number in our range
// and values are the numbers for which when summed with the key,
// form a perfect square.

// This object acts as our adjency list.
// Each node in this list is a key in the object,
// each edge a value for that key.
// If we can find an Hamiltonian Path in this list,
// we know the range of numbers can be arranged as a Square Sum Sequence.

(function () {
    // List of nodes and edges.
    let adjencyList = {};
    // List of nodes visited
    let visited = {};
    let squareSumList = [];
    let path = [];

    // Build as range of numbers to check.
    let buildRange = function (a, b) {
        let range = [];
        for (let i = a; i <= b; i++) {
            range.push(i);
            // Create nodes for list.
            adjencyList[i] = [];
            // Each node has not yet been visited
            visited[i] = false;
        }
        return range;
    };

    // Test if sum is a square
    let isSquare = function (a, b) {
        if (Math.sqrt(a + b) - Math.floor(Math.sqrt(a + b)) === 0) {
            return true;
        }
        return false;
    };

    // Build the adjency list for the given range
    let buildList = function (range) {
        for (let i = 0; i < range.length; i++) {
            for (let j = i + 1; j < range.length; j++) {
                if (isSquare(range[i], range[j])) {
                    adjencyList[range[i]].push(range[j]);
                    adjencyList[range[j]].push(range[i]);
                }
            }
        }
    };

    let range = buildRange(1, 30);
    buildList(range);
    console.log(adjencyList);
    console.log(adjencyList[18]);

    // Check the list for a Hamiltonian Path
    // If any nodes have zero edges,
    // we know a Hamiltonian Path cannot be formed.

    // Otherwise...
    // Start with the first node in the list
    // Add it to the path
    // Add it's first value to the path
    // Check the second node's values

    let canAddToPath = function () {};

    let buildPath = function (node, adjList, visited, path) {
        // If node is not in path
        if (path.indexOf(node) === -1 && visited[node] === false) {
            path.push(node);
            visited[node] === true;
            buildPath(adjList[node]);
        }
    };
})();

const pi = Math.PI;
const tau = 2 * pi;
let n = 9;
let angleRads = (pi * 2) / n;
let angleDegs = 360 / n;

const centerX = 0;
const centerY = 0;

function clearDrawing() {
    var canvas = document.getElementById('graph');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    let svgWidth = 400;
    let svgHeight = svgWidth;
    let radius = svgWidth / 2 - 11;
    let center = svgWidth / 2;

    let svg = buildSVG(svgWidth, svgHeight);
    let outline = svgCircle(center, radius);

    // Clear previous lines, if any
    while (svg.children.length >= 1) {
        svg.removeChild(svg.children[0]);
    }

    let svgArea = document.getElementById('svg-graph');
    if (svgArea.children.length >= 1) {
        svgArea.removeChild(svgArea.children[0]);
    }

    svg.appendChild(outline);
    // Add lines to svg
    drawSvgLines(center, radius, multiplier, modulus, svg);
    // Add svg to DOM
    //console.log(svg.children.length);
    document.getElementById('svg-graph').appendChild(svg);
}

function drawSvgLines(c, r, m, n, svg) {
    for (i = 0; i < n; i++) {
        let alpha = (i * m) % n;
        if (alpha != i) {
            let x1 = c + r * Math.sin((i * 2 * Math.PI) / n);
            let y1 = c - r * Math.cos((i * 2 * Math.PI) / n);
            let x2 = c + r * Math.sin((m * i * 2 * Math.PI) / n);
            let y2 = c - r * Math.cos((m * i * 2 * Math.PI) / n);
            let line = svgLine(x1, y1, x2, y2);
            let lineLength = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2).toFixed(
                2
            );
            let mappedLength = parseInt(remap(lineLength, 0, 2 * r, 0, n));
            line.setAttribute('stroke', 'black');
            svg.appendChild(line);
        }
    }
}

function buildSVG(w, h) {
    let mySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    mySvg.setAttribute('fill', 'none');
    mySvg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
    mySvg.setAttribute('stroke', 'black');
    return mySvg;
}

function svgLine(x1, y1, x2, y2) {
    let myLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    myLine.setAttribute('x1', parseInt(x1));
    myLine.setAttribute('y1', parseInt(y1));
    myLine.setAttribute('x2', parseInt(x2));
    myLine.setAttribute('y2', parseInt(y2));
    // myLine.setAttribute('stroke', c);
    return myLine;
}

function svgCircle(center, radius) {
    let myCircle = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'ellipse'
    );
    myCircle.setAttribute('cx', parseInt(center));
    myCircle.setAttribute('cy', parseInt(center));
    myCircle.setAttribute('rx', parseInt(radius));
    myCircle.setAttribute('ry', parseInt(radius));
    myCircle.setAttribute('stroke', 'black');
    myCircle.setAttribute('fill', 'none');
    return myCircle;
}

// findPath(node, adjencyList, visited, path) {
//   for (let i = 0; i < adjencyList[node].length; i++) {
//     if (visited[node] === false)
//   }
// }

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
