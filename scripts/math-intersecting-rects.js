// const {svgBuilder} = import('./svg-builder.js');

// SVG CONSTANTS
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
  console.log('intersecting rects')
  draw();
}

function draw() {

  let canvas = document.getElementById('canvas');

  let rects = [];

  // a little backwards, but draft for building a class later
  for (let i = 0; i < 5; i++) {

    const xOffset = 20;
    const yOffset = 20;
    const xStep = 55;
    const yStep = 50;

    let xPos = xOffset + xStep * i;
    // let yPos = yOffset + 2 * (yStep * i);
    let yPos = yOffset;

    let width = 50;
    let height = 50;

    // console.log(xPos, yPos, width, height)

    const svgRect = buildRect(xPos, yPos, width, height);
    canvas.appendChild(svgRect);

  }
  //   canvas.appendChild(svg);
}
