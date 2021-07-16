
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
var yval = 550;
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
var numberTarget = 100;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("keydown", function setProjectile(event) {
    if(event.code === "ArrowUp") {
        arrayProjectile.push([xval, y]);
    }
});

document.getElementById("buttonStart").addEventListener("click", () => {
    if(difficulty === 0) {
        document.getElementById("winLose").innerHTML = "Choice your difficulty !";
        // alert("Choice your difficulty !")
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
        }
        if(start === true) {
            document.getElementById("buttonTheme").disabled = true;
        }
    }
});
document.getElementById("buttonReset").addEventListener("click", () => {
    window.location.reload();
});

document.getElementById("buttonDifficulty").addEventListener("click", () => {
    difficulty++;
    if(difficulty === 1) {
        document.getElementById("buttonDifficulty").innerHTML = "Difficulty: Easy";
    }
    else if(difficulty === 2) {
        document.getElementById("buttonDifficulty").innerHTML = "Difficulty: Medium";
    }
    else if(difficulty === 3) {
        document.getElementById("buttonDifficulty").innerHTML = "Difficulty: Hard";
    }
    else if(difficulty === 4) {
        document.getElementById("buttonDifficulty").innerHTML = "Difficulty: Extrem";
    }
    else if(difficulty === 5) {
        difficulty = 1;
        document.getElementById("buttonDifficulty").innerHTML = "Difficulty: Easy";
    }
});
document.getElementById("buttonTheme").addEventListener("click", () => {
    theme++;
    if(theme === 1) {
        document.getElementById("game").removeAttribute("class");
        document.getElementById("game").setAttribute("class", "theme1");
    }
    else if(theme === 2) {
        document.getElementById("game").removeAttribute("class");
        document.getElementById("game").setAttribute("class", "theme2");
    }
    else if(theme === 3) {
        document.getElementById("game").removeAttribute("class");
        document.getElementById("game").setAttribute("class", "theme3");
    }
    else if(theme === 4) {
        theme = 1;
        document.getElementById("game").removeAttribute("class");
        document.getElementById("game").setAttribute("class", "theme1");
    }
});


for (let i = 0; i < numberTarget; i++) {
    arrayTarget.push(Math.floor(Math.random() * (canvas.width -35)))
}


function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function drawPaddle() {
    ctx.drawImage(img, xval, yval, img.width = 70, img.height = 70);
}

function drawTarget(a) {
    ctx.drawImage(image2, a, yvalTarget, image2.width = 35, image2.height = 35);
    yvalTarget += 1 * difficulty;
}

function drawProjectile() {
    for (let i = 0; i < arrayProjectile.length; i++) {
        if(arrayTarget[target] < arrayProjectile[i][0]+35 + 5 && arrayTarget[target] + 35 > arrayProjectile[i][0]+35 && yvalTarget < arrayProjectile[i][1] + 5 && 35 + yvalTarget > arrayProjectile[i][1]) { //shoot hit
            ctx.clearRect(arrayTarget[target], yvalTarget, image2.width = 70, image2.height = 70);
            arrayProjectile.splice(i, 1);
            score++;
            yvalTarget = -35;
            target++;
            drawTarget(arrayTarget[target]);
        }
        if (arrayProjectile.length > 0) {
            ctx.beginPath();
            ctx.rect(arrayProjectile[i][0]+35, arrayProjectile[i][1] + 15, 5, 5);
            // ctx.arc(arrayProjectile[i][0]+35, arrayProjectile[i][1] + 15, ballRadius, 0, Math.PI*2);
            ctx.fillStyle = "#c73133";
            ctx.fill();
            ctx.closePath();
            arrayProjectile[i][1] = (arrayProjectile[i][1] + dy);

            if (arrayProjectile[i][1] < 0) {
                arrayProjectile.splice(i, 1);
            }
        }
    }
}

function collides() {
    if(arrayTarget[target] < xval + 35 && arrayTarget[target] + 70 > xval && yvalTarget < yval + 70 && 35 + yvalTarget > yval) { //target hit
        clearInterval(inter);
        document.getElementById("winLose").innerHTML = "You Lose !";
        document.getElementById("game").setAttribute("style", "opacity: 0.5");
        // alert("You lose");
    }
    if(yvalTarget > canvas.height) {
        clearInterval(inter);
        document.getElementById("winLose").innerHTML = "You Lose !";
        document.getElementById("game").setAttribute("style", "opacity: 0.5");
        // alert("You lose 1");
    }
}

function logScore() {
    document.getElementById("score").innerHTML = score;
    document.getElementById("numberTargetos").innerHTML = "/" + numberTarget;
}

function win() {
    if (score == 100) {
        clearInterval(inter);
        clearInterval(interTimer);
        document.getElementById("winLose").innerHTML = "You win !";
        document.getElementById("game").setAttribute("style", "opacity: 0.5");
        // alert("You win!");
    }
}

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
        xval += 4;
    }
    else if(leftPressed && xval > 0) {
        xval -= 4;
    }
}

var interTimer = setInterval(timerScore, 1000);
function timerScore() {
    timer++;
}