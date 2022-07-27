
const pi = Math.PI;
const tau = 2 * pi;
// let angleRads = pi * 2 / n;
// let angleDegs = 360 / n;

const centerX = 0;
const centerY = 0;
const svgWidth = 400;
const svgHeight = 400;

// main function to draw stuff
window.onload = () => {
    draw();
}

function draw() {

    let rects = [];
    let svg = buildSVG(svgWidth, svgHeight);
    let svgArea = document.getElementById('svg-graph');

    // a little backwards, but draft for building a class later
    for (let i = 0; i < 5; i++) {

        const xOffset = 25;
        const yOffset = 35;
        const xStep = 20;
        const yStep = 20;

        let xPos = xOffset + xStep * i;
        let yPos = yOffset + 2 * (yStep * i);
        let width = 50;
        let height = 50;
        let center = [xPos, yPos];
        let fill = 'none';
        let stroke = 'black';
        let weight = '1pt';

        let svgRect = buildRect(xPos, yPos, width, height, fill, stroke, weight);

        let rect = {
            'xPos': xPos,
            'yPos:': yPos,
            'width': width,
            'height': height,
            'center': center,
            'fill': fill,
            'stroke': stroke,
            'stroke-width': weight,
            'svg': svgRect
        };

        rects.push(rect);
        svg.appendChild(rect.svg);

    }
    svgArea.appendChild(svg);
    //check for intersection
    // let x = rects[i].svg.getAttribute('x');
    // console.log(x);

    for (let i = 0; i < rects.length; i++) {
        for (let j = i; j < rects.length; j++) {
            if (j !== i) intersectRect(rects[i].svg, rects[j].svg);
        }
        console.log('\n');
    }
}

// function intersectRect(r1, r2) {
//     var r1 = r1.getBoundingClientRect();    //BOUNDING BOX OF THE FIRST OBJECT
//     var r2 = r2.getBoundingClientRect();    //BOUNDING BOX OF THE SECOND OBJECT

//     //CHECK IF THE TWO BOUNDING BOXES OVERLAP
//   return !(r2.left > r1.right ||
//            r2.right < r1.left ||
//            r2.top > r1.bottom ||
//            r2.bottom < r1.top);
// }
// //+ Jonas Raoni Soares Silva
// //@ http://jsfromhell.com/math/is-point-in-poly [rev. #0]

// function isPointInPoly(poly, pt){
//     for(var c = false, i = -1, l = poly.length, j = l - 1; ++i < l; j = i)
//         ((poly[i].y <= pt.y && pt.y < poly[j].y) || (poly[j].y <= pt.y && pt.y < poly[i].y))
//         && (pt.x < (poly[j].x - poly[i].x) * (pt.y - poly[i].y) / (poly[j].y - poly[i].y) + poly[i].x)
//         && (c = !c);
//     return c;
// }

function intersectRect(r1, r2) {

    let x1 = parseInt(r1.getAttribute('x'));
    let x1Max = x1 + parseInt(r1.getAttribute('width'));
    let y1 = parseInt(r1.getAttribute('y'));
    let y1Max = y1 + parseInt(r1.getAttribute('height'));

    let x2 = parseInt(r2.getAttribute('x'));
    let x2Max = x2 + parseInt(r2.getAttribute('width'));
    let y2 = parseInt(r2.getAttribute('y'));
    let y2Max = y2 + parseInt(r2.getAttribute('height'));

    //console.log('R1:', x1, y1, x1Max, y1Max, 'R2:', x2, y2, x2Max, y2Max);
    //console.log(x1Max < x2, x1 > x2Max, y1 > y2Max, y1Max < y2);
    let areIntersecting = (x1Max < x2 || x1 > x2Max || y1 > y2Max || y1Max < y2);
    console.log(!areIntersecting);

}

// SVG Engine
//scale color of line based on length where length is some percentage of the color range?
function remap(val, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (val - low1) / (high1 - low1);
}

function clearDrawing() {
    var canvas = document.getElementById('graph');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function downloadSVG() {
    // get the svg
    let svg = document.getElementById('svg-graph');
    // get ellipse
    let outline = svg.getElementsByTagName('ellipse');
    // get lines
    outline.setAttribute('stroke', 'black');
    let lines = svg.getElementsByTagName('line');
    //console.log(lines.length);
    for (let line in lines) {
        line.setAttribute('stroke', 'blue');
    }
    let svgFile = svg.innerHTML;
    let blob = new Blob([svgFile.toString()]);
    let element = document.createElement("a");
    element.download = "svg-coaster.svg";
    element.href = window.URL.createObjectURL(blob);
    element.click();
    element.remove();
}

function buildSVG(w, h) {
    let mySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    //mySvg.setAttribute('fill', 'red');
    mySvg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
    //mySvg.setAttribute('stroke', 'blue');
    return mySvg;
}

function svgLine(x1, y1, x2, y2) {
    let myLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    myLine.setAttribute("x1", parseInt(x1));
    myLine.setAttribute("y1", parseInt(y1));
    myLine.setAttribute("x2", parseInt(x2));
    myLine.setAttribute("y2", parseInt(y2));
    // myLine.setAttribute('stroke', c);
    return myLine;
}

function svgCircle(center, radius) {
    let myCircle = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    myCircle.setAttribute('cx', parseInt(center));
    myCircle.setAttribute('cy', parseInt(center));
    myCircle.setAttribute('rx', parseInt(radius));
    myCircle.setAttribute('ry', parseInt(radius));
    myCircle.setAttribute('stroke', 'black');
    myCircle.setAttribute('fill', 'none');
    return myCircle;
}

function buildRect(xPos, yPos, width, height, fill, stroke, weight) {
    let newRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    newRect.setAttribute('x', parseInt(xPos));
    newRect.setAttribute('y', parseInt(yPos));
    newRect.setAttribute('width', parseInt(width));
    newRect.setAttribute('height', parseInt(height));
    newRect.setAttribute('stroke', stroke);
    newRect.setAttribute('stroke-width', weight);
    newRect.setAttribute('fill', fill);
    return newRect;
}
