

var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");
var image = document.getElementById("source");
ctx.lineWidth = "5";
ctx.strokeStyle = "rgb(54, 95, 156)";
ctx.canvas.width  = window.innerWidth/1.5;
ctx.canvas.height = window.innerHeight/1.5;

ctx.drawImage(image, (canvas.width/2) - 35, 550, image.width = 70, image.height = 70);








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