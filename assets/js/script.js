
var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var image2 = document.getElementById("source2");
var img = document.getElementById("source");
ctx.lineWidth = "5";
ctx.strokeStyle = "rgb(54, 95, 156)";
canvas.width  = window.innerWidth/1.5;
canvas.height = window.innerHeight/1.5;
var score = 0
var start = false;
var inter;
var arrayProjectile = [];
var yval = (canvas.height) - 65;
var xval = (canvas.width/2) - 35;
var yvalTarget = -35;
var xvalTarget = (canvas.width/2);
var x = canvas.width/2;
var y = canvas.height-75;
var ballRadius = 5;
var dy = -2;
var rightPressed = false;
var leftPressed = false;
var target = 0;
var arrayTarget = [];
var paddleHeight = 10;
var paddleWidth = 75;
var difficulty = 0;
var theme = 0;
var timer = 0;
var minutes = 0;
var numberTarget = 25;
var live = 3;
var numTarget;
var interTimer = setInterval(timerScore, 1000);


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// check keyboard press and push a projectile in a array
document.addEventListener("keydown", function setProjectile(event) {
    if(event.code === "ArrowUp") {
        arrayProjectile.push([xval, y]);
    }
});

document.getElementById("buttonStart").addEventListener("click", () => {
    if(difficulty === 0) {
        document.getElementById("winLose").innerHTML = "Choice your difficulty !";
    }
    else {
        document.getElementById("winLose").innerHTML = "";
        if (start) {
            document.getElementById("buttonStart").innerHTML = "Start game";
            clearInterval(inter);
            start = false;
        } else {
            document.getElementById("buttonStart").innerHTML = "Pause game";
            inter = setInterval(draw, 10);
            start = true;
        }
        if(start === true) {
            document.getElementById("buttonDifficulty").disabled = true;
            document.getElementById("buttonTheme").disabled = true;
        }
    }
});
document.getElementById("buttonReset").addEventListener("click", () => {
    window.location.reload();
});

document.getElementById("buttonDifficulty").addEventListener("click", () => {
    difficulty++;
    switch (difficulty) {
        case 1:
            document.getElementById("buttonDifficulty").innerHTML = "Difficulty: Easy";
            break;
        case 2:
            document.getElementById("buttonDifficulty").innerHTML = "Difficulty: Medium";
            break;
        case 3:
            document.getElementById("buttonDifficulty").innerHTML = "Difficulty: Hard";
            break;
        case 4:
            document.getElementById("buttonDifficulty").innerHTML = "Difficulty: Extrem";
            break;
        case 5:
            difficulty = 1;
            document.getElementById("buttonDifficulty").innerHTML = "Difficulty: Easy";
            break;
    }
});
document.getElementById("buttonTheme").addEventListener("click", () => {
    theme++;
    switch (theme) {
        case 1:
            document.getElementById("game").removeAttribute("class");
            document.getElementById("game").setAttribute("class", "theme1");
            break;
        case 2:
            document.getElementById("game").removeAttribute("class");
            document.getElementById("game").setAttribute("class", "theme2");
            break;
        case 3:
            document.getElementById("game").removeAttribute("class");
            document.getElementById("game").setAttribute("class", "theme3");
            break;
        case 4:
            theme = 1;
            document.getElementById("game").removeAttribute("class");
            document.getElementById("game").setAttribute("class", "theme1");
            break;
    }
});


for (let i = 0; i < numberTarget; i++) {
    arrayTarget.push(Math.floor(Math.random() * (canvas.width -35)))
}


// check player keyboard press
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

// check player keyboard press
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

// draw ship of player
function drawPaddle() {
    ctx.drawImage(img, xval, yval, img.width = 70, img.height = 70);
}

// draw target for player, target speed is multy by difficulty
function drawTarget(a) {
    ctx.drawImage(image2, a, yvalTarget, image2.width = 35, image2.height = 35);
    yvalTarget += 1 * difficulty;
}

// draw projectile shoot by ship and stock in a array
function drawProjectile() {
    for(numTarget = 0; numTarget < arrayProjectile.length; numTarget++){
        if(arrayTarget[target] < arrayProjectile[numTarget][0]+ 35 + 5 && arrayTarget[target] + 35 > arrayProjectile[numTarget][0]+35 && yvalTarget < arrayProjectile[numTarget][1] + 5 && 35 + yvalTarget > arrayProjectile[numTarget][1]) { //shoot hit
            ctx.clearRect(arrayTarget[target], yvalTarget, image2.width = 70, image2.height = 70);
            arrayProjectile.splice(numTarget, 1);
            score++;
            yvalTarget = -35;
            target++;
            drawTarget(arrayTarget[target]);
        }
        if (arrayProjectile.length > 0) {
            ctx.beginPath();
            ctx.rect(arrayProjectile[numTarget][0]+35, arrayProjectile[numTarget][1] + 15, 5, 5);
            ctx.fillStyle = "#c73133";
            ctx.fill();
            ctx.closePath();
            arrayProjectile[numTarget][1] = (arrayProjectile[numTarget][1] + dy);
            if (arrayProjectile[numTarget][1] < 0) {
                arrayProjectile.splice(numTarget, 1);
            }
        }
    }
}


// check if projectile it something
// if porjectile it target, another target is draw and projectile is remove from array
// and player loose a live
// if projectile it end of canvas, projectile is remove or array
function collides() {
    if(arrayTarget[target] < xval + 70 && arrayTarget[target] + 35 > xval && yvalTarget < yval + 70 && 35 + yvalTarget > yval) { //target hit
        ctx.clearRect(arrayTarget[target], yvalTarget, image2.width = 70, image2.height = 70);
        arrayProjectile.splice(numTarget, 1);
        yvalTarget = -35;
        target++;
        drawTarget(arrayTarget[target]);
        live--;
        checkLive();
    }
    if(yvalTarget > canvas.height) {
        ctx.clearRect(arrayTarget[target], yvalTarget, image2.width = 70, image2.height = 70);
        arrayProjectile.splice(numTarget, 1);
        yvalTarget = -35;
        target++;
        drawTarget(arrayTarget[target]);
    }
}

// check live of player and display it
function checkLive() {
    switch (live) {
        case 2:
            document.getElementById("live3").setAttribute("style", "display: none");
            break;
        case 1:
            document.getElementById("live2").setAttribute("style", "display: none");
            break;
        case 0:
            clearInterval(inter);
            document.getElementById("game").setAttribute("style", "opacity: 0.5");
            document.getElementById("live").setAttribute("style", "display: none");
            document.getElementById("winLose").innerHTML = "You Lose !";
            break;
    }
}

function logScore() {
    document.getElementById("score").innerHTML = score;
    document.getElementById("numberTargetos").innerHTML = "/" + numberTarget;
}

function win() {
    if (score === numberTarget) {
        clearInterval(inter);
        clearInterval(interTimer);
        document.getElementById("winLose").innerHTML = "You win !";
        document.getElementById("game").setAttribute("style", "opacity: 0.5");
    }
}


// main function check call all other function for the game
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawTarget(arrayTarget[target]);
    drawProjectile();
    drawPaddle();
    collides();
    logScore();
    win();
    if(timer < 10) {
        document.getElementById("gameTime").innerHTML = "0" + minutes + " : " + 0 + timer;
    }
    else {
        document.getElementById("gameTime").innerHTML = "0" + minutes + " : " + timer;
    }
    if(timer === 60) {
        timer = 0;
        minutes += 1;
    } 
    if(rightPressed && xval < canvas.width-paddleWidth) {
        xval += 6;
    }
    else if(leftPressed && xval > 0) {
        xval -= 6;
    }
}

function timerScore() {
    timer++;
}