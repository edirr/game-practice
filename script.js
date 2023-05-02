const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500
canvas.height = 500
console.log(canvas.height)
console.log(canvas.width)

// ctx.beginPath();
// ctx.moveTo(75, 50);
// ctx.lineTo(100, 75);
// ctx.lineTo(100, 25);
// ctx.fill();

// ctx.beginPath();
// ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
// ctx.moveTo(110, 75);
// ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
// ctx.moveTo(65, 65);
// ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
// ctx.moveTo(95, 65);
// ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
// ctx.stroke();



// function draw(){
//     ctx.fillStyle = `#${Math.floor(Math.random()*16777215).toString(16)}`;
//     ctx.fillRect((canvas.width/2)-25, (canvas.height/2)-25, 50, 50);
//     window.requestAnimationFrame(draw)
// }
// /*
//     Method setInterval (that exists on our browsers window interface) 
//     that tells our browser to run our draw() function 
//     every x number of miliseconds
//     I chose 500 (.5 second).
// */
// // window.setInterval(draw, 500);
// window.requestAnimationFrame(draw)

// let x = 25;
// let y = 25;

// ctx.fillStyle = 'green';

const handleKeyPress = (e)=> {
    if(e.key === 'ArrowUp'){
        y -= 30
    }
    else if(e.key === 'ArrowDown'){
        y += 30
    }
    else if(e.key === 'ArrowLeft'){
        x -= 30
    }
    else if(e.key === 'ArrowRight'){
        x += 30
    }
}

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.fillRect(x, y, 50, 50);
//     document.addEventListener('keydown', handleKeyPress)
//     requestAnimationFrame(draw)
// }

// // setInterval(draw, 30);
// requestAnimationFrame(draw)



let dx = 20;
let dy = -20;
let x = 25;
let y = 25;

ctx.fillStyle = 'green';

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 50, 50);

    
    if(x + dx > canvas.width-50 || x + dx < 0) {
        dx = -dx;
    }
    if(y + dy > canvas.height-50 || y + dy < 0) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 30);