// Lines 3-8 are all variable declarations for the base code. Mainly for the structures and objects in the game

let ballX, ballY;
let ballSize;
let ballSpeedX, ballSpeedY;
let hoopX, hoopY;
let hoopWidth, hoopHeight;
let score;

function setup() {
  createCanvas(400, 600); // Creates Canvas
  resetGame(); // Resets the Game (I put it in function setup(), because function setup loops once)
}

function resetGame() {
  ballX = width / 2;
  ballY = height - 20;
  ballSize = 20; // Declares the ball size to be 20
  ballSpeedX = random(-3, 3); // Gives the ball's x a random speed
  ballSpeedY = random(-5, -3); // Gives the ball's y a random spee
  hoopWidth = 100; // Creates the hoop's width
  hoopHeight = 20; // Creates the hoop's height
  hoopX = (width - hoopWidth) / 2;
  hoopY = 50;
  score = 0; // Creates the score (sets it to 0 to start)
}

function draw() {
  background(220); // Creates Background color

  // Runs all the functions are are required for the game to loop
  drawHoop();
  drawBall();
  checkCollision();
  displayScore();
  moveBall();
}

function drawHoop() { // Draws the hoop for the game
  fill(0, 0, 255);
  rect(hoopX, hoopY, hoopWidth, hoopHeight, 10);
}

function drawBall() { // Draws the ball for the game, uses previosly declared variables (check above)
  fill(255, 0, 0);
  ellipse(ballX, ballY, ballSize, ballSize);
}

function checkCollision() { // Function used to check if the hoop and ball colide with each other
  if (ballX > hoopX && ballX < hoopX + hoopWidth && ballY > hoopY && ballY < hoopY + hoopHeight) { // This statement checks if their is a colission by monitoring the X and Y of both the ball and the hoop
    score++; // increases score by 1
    resetBall(); // resets ball position
    shrinkBall(); // shrinks ball
  }
}

function resetBall() { // Resets ball position after collision
  // This is the same code as above (used for reset game function)
  ballX = width / 2;
  ballY = height - 20;
  ballSpeedX = random(-3, 3);
  ballSpeedY = random(-5, -3);
}

function shrinkBall() {
  ballSize = max(10, ballSize - 2); // Shrinks the ball after collision
}

function displayScore() { // Displays the score (the total number of collisions)
  fill(0);
  textSize(24);
  textAlign(LEFT);
  text("Score: " + score, 20, 30); // Writes the score in the canvas
}

function moveBall() { // This is the main function used for the random movement of the ball
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballX < 0 || ballX > width) { // Checks if the BallsX is less than 0 or greater than width
    ballSpeedX *= -1;
  }

  if (ballY < 0) { // Checks for the first condition
    ballSpeedY *= -1;
  }

  if (ballY > height) { // Checks to see if the Ball is out of frame, if it is, then the ball resets
    resetBall();
  }
}

function keyPressed() { // Used for moving the hoop
  if (keyCode === LEFT_ARROW && hoopX > 0) { // Checks if the left arrow is pressed
    hoopX -= 20; // Moves the Ball to the left 
  } else if (keyCode === RIGHT_ARROW && hoopX + hoopWidth < width) { // Checks if the right arrow is pressed
    hoopX += 20; // Moves the Ball to the right
  }
}
