
function svgLine(x1, y1, x2, y2) {

  let myLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');

  myLine.setAttribute("x1", parseInt(x1));
  myLine.setAttribute("y1", parseInt(y1));
  myLine.setAttribute("x2", parseInt(x2));
  myLine.setAttribute("y2", parseInt(y2));

  // myLine.setAttribute('stroke', c);


  myLine.setAttribute('stroke', 'black');
  myLine.setAttribute('stroke-width', '1pt');
  myLine.setAttribute('fill', 'none');

  return myLine;
}

function svgCircle(center, radius) {
  let myCircle = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  myCircle.setAttribute('cx', parseInt(center));
  myCircle.setAttribute('cy', parseInt(center));
  myCircle.setAttribute('rx', parseInt(radius));
  myCircle.setAttribute('ry', parseInt(radius));

  myCircle.setAttribute('stroke', 'black');
  myCircle.setAttribute('stroke-width', '1pt');
  myCircle.setAttribute('fill', 'none');

  return myCircle;
}

function buildRect(xPos, yPos, width, height, fill, stroke, weight) {

  let newRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

  newRect.setAttribute('x', parseInt(xPos));
  newRect.setAttribute('y', parseInt(yPos));
  newRect.setAttribute('width', parseInt(width));
  newRect.setAttribute('height', parseInt(height));

  newRect.setAttribute('stroke', 'black');
  newRect.setAttribute('stroke-width', '1pt');
  newRect.setAttribute('fill', 'white');

  // newRect.addEventListener('mousedown', startMove);
  // newRect.addEventListener('mouseup', endMove);
  newRect.addEventListener('mousedown', startDrag);
  newRect.addEventListener('mousemove', drag);
  newRect.addEventListener('mouseup', endDrag);
  newRect.addEventListener('mouseleave', endDrag);

  newRect.classList.add('draggable');

  return newRect;
}

// const svgBuilder = {
//   buildRect,
// }

// module.exports = svgBuilder;
