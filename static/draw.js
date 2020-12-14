
var image, imgData;

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const LINE_WIDTH = 15;
const LINE_COLOR = '#ffffff';
const FILL_COLOR = '#000000';

ctx.lineWidth = LINE_WIDTH;
ctx.lineCap = 'round';
ctx.strokeStyle = LINE_COLOR;
ctx.fillStyle = FILL_COLOR;
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.stroke();

let painting = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishPosition() {
    painting = false;
    ctx.beginPath();

    // Getting Image Data
    imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    console.log(imgData);
}

function draw(e) {
    if (!painting) return;

    var currX = e.clientX - canvas.offsetParent.offsetLeft - canvas.offsetLeft + window.pageXOffset;
    var currY = e.clientY - canvas.offsetParent.offsetTop - canvas.offsetTop + window.pageYOffset;

    console.log(canvas.offsetLeft);

    ctx.lineTo(currX, currY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(currX, currY);
}

canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mouseup', finishPosition);
canvas.addEventListener('mousemove', draw);