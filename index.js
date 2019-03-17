var colorValue = 0;
var circleX = 200;
var circleY = 200;
var circleDiameter = 50;
var score = 0;

function setup() {
  createCanvas(400, 400);
  updateCircle();
}

function draw() {
    fill(colorValue);
    background(100,200,300);
    ellipse(circleX, circleY, 50, 50);
    updateScore();
}

function mousePressed() {
    var d = dist(mouseX, mouseY, circleX, circleY);
    if (d < circleDiameter / 2) {
        updateCircle();
        score += 1;
    }
}

function updateCircle() {
    circleX = random(50, 350);
    circleY = random(50, 350);
}

function updateScore() {
    textSize(20);
    text("Score: " + score, 20, 20);
}
