

// var canvas = document.getElementById("game");
// var ctx = canvas.getContext("2d");
// var image = document.getElementById("source");
// ctx.lineWidth = "5";
// ctx.strokeStyle = "#000";
// ctx.canvas.width  = window.innerWidth/1.5;
// ctx.canvas.height = window.innerHeight/1.5;

// var yValShoot = 525
// var yval = 550;
// var xval = (canvas.width/2) - 35;
// // var autoShoot;
// var speed = 5000;
// ctx.drawImage(image, xval, yval, image.width = 70, image.height = 70);



// function drawShoot() {
//     ctx.beginPath();
//     ctx.lineTo(xval + 35, yValShoot);
//     ctx.lineTo(xval + 35, yValShoot + 10);
//     ctx.closePath();
// }
// function shipShoot() {
//     // document.addEventListener('keydown', function(event) {
//         // if(event.keyCode === 32) {
//         //     //space
//         //     console.log('xval: ', xval);
//         //     console.log("shoot");
//         // }
//         // autoShoot = setInterval(shoot, speed) ;
//         // function shoot() {
//             // ctx.clearRect(0, 0, canvas.width, canvas.height);
//             drawShoot();
//             // moveShip();
//             yValShoot -= 10;
//         // }
//     // });
// }

// function moveShip() {
// document.addEventListener('keydown', function(event) {
//     if(event.keyCode === 37) { //left
//         if(xval < 13) {
//             xval = 13;
//         }
//         xval -= 10;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(image,xval,yval, image.width = 70, image.height = 70);
//         shipShoot();
//         // drawShoot();
//     }
//     if(event.keyCode === 39) { //right
//         if(xval > canvas.width - 90) {
//             xval = canvas.width -90;
//         }
//         xval += 10;
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         ctx.drawImage(image,xval,yval, image.width = 70, image.height = 70);
//         shipShoot();
//         // drawShoot();
//         }
//     });
// }


// setInterval(moveShip, speed);
// setInterval(shipShoot, speed);
// drawShoot();
// moveShip();
// shipShoot();





var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth/1.5;
ctx.canvas.height = window.innerHeight/1.5;
var image = document.getElementById("source");
var ballRadius = 5;
var x = canvas.width/2;
var y = 525;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;
var spacePressed = false;
var yval = 550;
var xval = (canvas.width/2) - 35;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    // else if(e.keyCode == 32) {
    //     spacePressed = true;
    // }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    // else if(e.keyCode == 32) {
    //     spacePressed = false;
    // }
}


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y + 15, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.drawImage(image, xval, yval, image.width = 70, image.height = 70);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawBall();
    // document.addEventListener("keydown",(e) => {
    //     if(e.keycode === 32) {
    //         drawBall();
    //         console.log("yes");
    //     }
    // })
    if(rightPressed && xval < canvas.width-paddleWidth) {
        xval += 4;
    }
    else if(leftPressed && xval > 0) {
        xval -= 4;
    }
    // else if(spacePressed) {
    //     drawBall();
    // }
    
    // x += dx;
    y += dy;
}

setInterval(draw, 10);




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