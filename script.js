let ballX, ballY;
let ballSize;
let ballSpeedX, ballSpeedY;
let hoopX, hoopY;
let hoopWidth, hoopHeight;
let score;

function setup() {
  createCanvas(400, 600);
  resetGame();
}

function resetGame() {
  ballX = width / 2;
  ballY = height - 20;
  ballSize = 20;
  ballSpeedX = random(-3, 3);
  ballSpeedY = random(-5, -3);
  hoopWidth = 100;
  hoopHeight = 20;
  hoopX = (width - hoopWidth) / 2;
  hoopY = 50;
  score = 0;
}

function draw() {
  background(220);

  drawHoop();
  drawBall();
  checkCollision();
  displayScore();
  moveBall();
}

function drawHoop() {
  fill(0, 0, 255);
  rect(hoopX, hoopY, hoopWidth, hoopHeight, 10);
}

function drawBall() {
  fill(255, 0, 0);
  ellipse(ballX, ballY, ballSize, ballSize);
}

function checkCollision() {
  if (ballX > hoopX && ballX < hoopX + hoopWidth && ballY > hoopY && ballY < hoopY + hoopHeight) {
    score++;
    resetBall();
    shrinkBall();
  }
}

function resetBall() {
  ballX = width / 2;
  ballY = height - 20;
  ballSpeedX = random(-3, 3);
  ballSpeedY = random(-5, -3);
}

function shrinkBall() {
  ballSize = max(10, ballSize - 2);
}

function displayScore() {
  fill(0);
  textSize(24);
  textAlign(LEFT);
  text("Score: " + score, 20, 30);
}

function moveBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if (ballX < 0 || ballX > width) {
    ballSpeedX *= -1;
  }

  if (ballY < 0) {
    ballSpeedY *= -1;
  }

  if (ballY > height) {
    resetBall();
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW && hoopX > 0) {
    hoopX -= 20;
  } else if (keyCode === RIGHT_ARROW && hoopX + hoopWidth < width) {
    hoopX += 20;
  }
}
