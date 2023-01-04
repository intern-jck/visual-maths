
// SVG Engine
//scale color of line based on length where length is some percentage of the color range?
function remap(val, low1, high1, low2, high2) {
    return low2 + (high2 - low2) * (val - low1) / (high1 - low1);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
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