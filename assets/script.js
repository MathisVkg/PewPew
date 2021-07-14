

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var image = document.getElementById("source");
ctx.lineWidth = "5";
ctx.strokeStyle = "rgb(54, 95, 156)";
ctx.canvas.width  = window.innerWidth/1.5;
ctx.canvas.height = window.innerHeight/1.5;
var yval = 550;
var xval = (canvas.width/2) - 35;
console.log('xval: ', xval);
ctx.drawImage(image, xval, yval, image.width = 70, image.height = 70);

var speed = 5;
var leftPointer, rightPointer;
document.addEventListener('keydown', function(event) {
    if(event.keyCode === 32) {
        //space
        console.log("shoot");
    }
    if(event.keyCode === 37) {
        //left
        // leftPointer = setInterval(function () {
        xval -= 10;
        console.log('xval: ', xval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image,xval,yval, image.width = 70, image.height = 70);
        // }, speed)
    }
    if(event.keyCode === 39) {
        //right
        // rightPointer = setInterval(function () {
        xval += 10;
        console.log('xval: ', xval);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image,xval,yval, image.width = 70, image.height = 70);
        // }, speed)
    }
}, true);
document.addEventListener('keyup', function(event) {
    if (event.keyCode == 37) {
        clearInterval(leftPointer);
    }
    else if (event.keyCode == 39) {
        clearInterval(rightPointer)
    }
}, true);

// document.getElementById("buttonStart").addEventListener("click", () => {
// })
// document.getElementById("buttonReset").addEventListener("click", () => {
// })
        
        
// ctx.beginPath();
// ctx.rect(325, 250, 14, 115);
// ctx.rect(338, 295, 17, 44);
// ctx.rect(354, 308, 195, 16);
// ctx.rect(548, 295, 14, 44);
// ctx.rect(560, 250, 17, 115);
// ctx.rect(422, 320, 64, 15);
// ctx.rect(390, 332, 124, 20);
// ctx.rect(405, 352, 12, 19);
// ctx.rect(490, 352, 12, 19);
// ctx.rect(427, 352, 51, 8);
// ctx.rect(400, 310, 105, -42);
// ctx.rect(421, 270, 67, -114);
// ctx.rect(437, 157, 37, -69);
// ctx.rect(448, 90, 15, -23);
// ctx.fill();
// ctx.stroke();










// console.log(document.addEventListener("click", event => {console.log(event.layerX)}))
// console.log(document.addEventListener("click", event => {console.log(event.layerY)}))