
function draw(svgWidth, svgHeight) {
    console.log(svgWidth);
    // Get the div where we will place our svg elements
    let svgDOM = document.getElementById('svg-graph');
    // Create the base svg canvas
    let svgCanvas = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgCanvas.setAttribute('viewBox', '0 0 ' + svgWidth + ' ' + svgHeight);
    svgCanvas.setAttribute('onload', makeDrag);
    svgDOM.appendChild(svgCanvas);

    function makeDrag(evt) {
        console.log(el.type)
    }
    // let newRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    // newRect.setAttribute('x', 25);
    // newRect.setAttribute('y', 25);
    // newRect.setAttribute('width', 50);
    // newRect.setAttribute('height', 100);
    // newRect.setAttribute('stroke', 'black');
    // newRect.setAttribute('stroke-width', '1pt');
    // newRect.setAttribute('fill', 'none');
    // mySvg.appendChild(newRect);

    // newRect.addEventListener('mousedown', startMove);
    // newRect.addEventListener('mouseup', endMove);

    // function startMove(event) {
    //     console.log("moving rect!", event.type);
    // }

    // function endMove() {
    //     console.log("finished moving!");
    // }

}




function createSVG(w, h) {
    let mySvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    mySvg.setAttribute('viewBox', '0 0 ' + w + ' ' + h);
    return mySvg;
}


function buildRect(xPos, yPos, width, height) {
    let newRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    newRect.setAttribute('x', parseInt(xPos));
    newRect.setAttribute('y', parseInt(yPos));
    newRect.setAttribute('width', parseInt(width));
    newRect.setAttribute('height', parseInt(height));

    newRect.setAttribute('stroke', 'black');
    newRect.setAttribute('stroke-width', '1pt');
    newRect.setAttribute('fill', 'none');
    newRect.addEventListener('mousedown', startMove);
    newRect.addEventListener('mouseup', endMove);
    return newRect;
}
