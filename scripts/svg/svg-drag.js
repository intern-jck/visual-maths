
// https://www.petercollingridge.co.uk/tutorials/svg/interactive/dragging/

const boundaryX1 = 0;
const boundaryX2 = 600;
const boundaryY1 = 0;
const boundaryY2 = 400;

// function makeDraggable(event) {
//   const svg = event.target;

//   // svg.addEventListener('mousedown', startDrag);
//   // svg.addEventListener('mousemove', drag);
//   // svg.addEventListener('mouseup', endDrag);
//   // svg.addEventListener('mouseleave', endDrag);

// }

function getMousePosition(event) {
  
  const svg = event.target;
  const CTM = svg.getScreenCTM();
  
  if (event.touches) {
    event = event.touches[0];
  }

  return {
    x: (event.clientX - CTM.e) / CTM.a,
    y: (event.clientY - CTM.f) / CTM.d
  };

}

  // const selectedElement, offset, transform,
  //     bbox, minX, maxX, minY, maxY, confined;

function startDrag(event) {

  const svg = event.target;
  const offset = getMousePosition(event);
  console.log(offset)

  if (event.target.classList.contains('draggable')) {
    console.log(svg)
  }

}

function drag(event) {
  
  const selectedElement = event.target;

  // if (selectedElement) {
  //   event.preventDefault();

  //   let offset;

  //   var coord = getMousePosition(event);
  //   var dx = coord.x - offset.x;
  //   var dy = coord.y - offset.y;

  //   const confined = event.target.classList.contains('confine');
  //   if (confined) {
  //     if (dx < minX) { dx = minX; }
  //     else if (dx > maxX) { dx = maxX; }

  //     if (dy < minY) { dy = minY; }
  //     else if (dy > maxY) { dy = maxY; }
  //   }

  //   transform.setTranslate(dx, dy);
  // }

}

function endDrag(event) {
  selectedElement = false;
}