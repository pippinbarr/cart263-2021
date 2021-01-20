"use strict";

/*****************

Click Attack
Pippin Barr

A fairly simple game to demonstrate a high score saving mechanism. You have to
click the circle before it leaves the screen and you get a point for each success.
The game saves your high score so that you can try to beat it when you inevitably
come back for more!

******************/

// Name of the item in local storage
const HIGH_SCORE_SAVE_NAME = `click-attack-high-score`;

// The thing you're trying to click
let clickable = {
  x: undefined,
  y: undefined,
  vx: 0,
  vy: 0,
  size: 100,
  maxSpeed: 3
};

// Current score
let score = 0;
// High score
let highScore = 0;

/**
Checks if there's already a high score and sets it if so. Starts the clickable
moving.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Load the high score...
  let data = JSON.parse(localStorage.getItem(HIGH_SCORE_SAVE_NAME));
  // If we found a saved score, then set it
  if (data !== null) {
    highScore = data.highScore;
  }
  // Start the clickable in motion
  resetClickable();
}


/**
Runs the basics of the game, displaying scores and moving the clickable.
*/
function draw() {
  background(0);

  displayScores();

  moveClickable();
  displayClickable();
}

/**
Moves the clickable according to its velocity. Checks if it goes off screen.
*/
function moveClickable() {
  // Move
  clickable.x += clickable.vx;
  clickable.y += clickable.vy;

  // Check if off screen and just kill the program if so
  if (clickable.x < 0 || clickable.x > width || clickable.y < 0 || clickable.y > height) {
    noLoop();
  }
}

/**
Display the clickable as a flickering circle
*/
function displayClickable() {
  push();
  fill(random(255), random(255), random(255));
  noStroke();
  ellipse(clickable.x, clickable.y, clickable.size);
  pop();
}

/**
Resets the clickable to the center of the canvas with a new random velocity
*/
function resetClickable() {
  clickable.x = width / 2;
  clickable.y = height / 2;
  clickable.vx = random(-clickable.maxSpeed, clickable.maxSpeed);
  clickable.vy = random(-clickable.maxSpeed, clickable.maxSpeed);
}

/**
Displays the current score and the high score.
*/
function displayScores() {
  // Current score, large and in the center
  push();
  fill(random(200, 255));
  textSize(800);
  textAlign(CENTER, CENTER);
  text(score, width / 2, height / 2);
  pop();

  // High score in the top left
  push();
  fill(random(200, 255));
  textSize(64);
  textAlign(LEFT, TOP);
  text(`High score: ${highScore}`, 0, 0);
  pop();
}

/**
Checks if the user clicked the clickable or not, adds to the score if they
succeeded.
*/
function mousePressed() {
  // Get distance between mouse and clickable
  let d = dist(mouseX, mouseY, clickable.x, clickable.y);
  // Check if they clicked in the circle
  if (d < clickable.size / 2) {
    // Increase the score
    score++;
    // Check if this is a new high score...
    if (score > highScore) {
      // Set the high score
      highScore = score;
      // Save the high score
      localStorage.setItem(HIGH_SCORE_SAVE_NAME, JSON.stringify({
        highScore: highScore
      }));
    }
    // Increase the maximum speed of the clickable to increase difficulty
    clickable.maxSpeed += 0.5;
    // Reset for anothe round
    resetClickable();
  }
}