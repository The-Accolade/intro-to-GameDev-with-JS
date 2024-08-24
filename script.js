const canvas = document.getElementById("game-canvas");
const context = canvas.getContext("2d");

//Drawing shapes
//1. Rectangle
// context.fillStyle = "green"; //sets the fill color
// context.fillRect(50, 50, 50, 50); //Draws a filled rectangle fillRect(x: distance from the left, y: distance from the top, width, height)

// context.strokeStyle = "red"; //sets the stroke color
// context.lineWidth = 5; //sets the stroke width
// context.strokeRect(200, 50, 50, 50); //draws the rectangle outline => fillRect(x: distance from the left, y: distance from the top, width, height)

// context.clearRect(60, 60, 80, 80);// => fillRect(x: distance from the left, y: distance from the top, width, height);

//2. Drawing Paths
// context.beginPath(); //begins a new path
// context.moveTo(50, 50); //moves the path's starting point
// context.lineTo(100, 10);
// context.lineTo(145, 50);
// context.lineTo(120, 100);
// context.lineTo(75, 100)
// context.lineTo(100, 100);
// context.closePath(); //closes the current path by drawing a line back to the starting point
// context.stroke(); //draws the outline of the path
// context.fillStyle = "blue"; //specifies the fill color
// context.fill(); //fills the path with the fill color specified

// context.beginPath(); //we use this to begin the polygon/path
// context.strokeStyle = "red"; //we use this to style the border/stroke with a color, for instance
// context.fillStyle = "blue"
// context.lineWidth = 2; //we use this to give the stroke a specific width
// context.moveTo(100, 50);
// context.lineTo(120, 25);
// context.lineTo(155, 25);
// context.lineTo(175, 50);
// context.lineTo(175, 75);
// context.lineTo(155, 100);
// context.lineTo(120, 100);
// context.lineTo(100, 75);

// context.moveTo(100, 50);
// context.lineTo(120, 35);
// context.lineTo(150, 35);
// context.lineTo(170, 50);
// context.lineTo(175, 70);
// context.lineTo(170, 90);
// context.lineTo(150, 105);
// context.lineTo(120, 105);
// context.lineTo(100, 90);
// context.lineTo(95, 70);
// context.closePath();

// // context.closePath();
// context.stroke(); //we use to activate the stroke
// context.fill();

//3. circle

// context.beginPath();
// context.arc(50, 50, 50, 0, Math.PI * 2, false); //arc(x, y, startAngle, endAngle, anticlockwise)
// context.stroke();

// context.beginPath();
// context.arc(150, 50, 50, 0, Math.PI, false);
// context.fillStyle = "purple";
// context.fill();

// context.beginPath();
// context.arc(50, 50, 10, 0, Math.PI * 2, false);
// context.fillStyle = "purple";
// context.fill();
// // context.stroke();

//Create a bouncing ball
let xPosition = 50;
let yPosition = 50; //these two variables represent the ball's current position on the canvas. 
let xPace = 1;
let yPace = 1; //how much the ball moves each time the screen updates
let radius = 10; //how big the ball is from the center; that is, 20 from the center
//Whenever you are creating an animation, what you're doing is essentially clearing the canvas and presenting another image on the canvas, i.e switching from one image(look) to another.
function drawBall() {
    context.clearRect(0, 0, canvas.width, canvas.height); //clear the canvas

    context.beginPath();
    context.arc(xPosition, yPosition, radius, 0, Math.PI * 2);
    context.fillStyle = "purple";
    context.fill();
    context.closePath(); //to draw the circle

    //Bounce the ball off the walls
    if(xPosition + xPace > canvas.width - radius || xPosition + xPace < radius) { 
        //this is checking if the ball will hit the right edge or the left edge; and when it does,
        xPace = -xPace;
    }
    if(yPosition + yPace > canvas.height - radius || yPosition + yPace < radius) {
        yPace = -yPace;
    }

    xPosition += xPace; // xPostion + 2
    yPosition += yPace; // yPosition + 2

    requestAnimationFrame(drawBall);
}

drawBall();