"use strict";

/**

Bubble Popper
Pippin Barr

Turns the index finger as seen through the webcam into a pin that can pop
a bubble that floats from the bottom of the screen to the top.

Uses:

ml5.js Handpose:
https://learn.ml5js.org/#/reference/handpose

*/

// Current state of the program
let state = `loading`; // loading, simulation

// The user's webcam
let video;

// The name of our model
let modelName = `Handpose`;
// The handpose model itself
let handpose;
// The current set of predictions made by Handpose once it's running
let predictions = [];

// The bubble we will be popping
let bubble;

/**
Creates a canvas, starts the webcam, and starts up Handpose
Creates the bubble
*/
function setup() {
  createCanvas(640, 480);

  // Start the user's webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // Start up handpose and start the simulation when it's loaded
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    state = `simulation`;
  });

  // Ask handpose to tell us when it makes predictions and store the
  // results in our predictions array
  handpose.on("predict", function(results) {
    predictions = results;
  });

  // Create our basic bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  }
}

/**
Runs the appropriate function for loading state or simulation state
*/
function draw() {
  if (state === `loading`) {
    loading();
  }
  else if (state === `simulation`) {
    simulation();
  }
}

/**
Displays a simple loading screen with the loading model's name
*/
function loading() {
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Loading ${modelName}...`, width / 2, height / 2);
  pop();
}

/**
Handles popping the bubble with the pin as well as moving the bubble
*/
function simulation() {
  // Use these lines to see the video feed
  // const flippedVideo = ml5.flipImage(video);
  // image(flippedVideo, 0, 0, width, height);

  // Use this line to just see a black background. More theatrical!
  background(0);

  // Check if there's a current prediction from Handpose
  if (predictions.length > 0) {
    // If yes, then get the positions of the tip and base of the index finger
    const indexTipX = predictions[0].annotations.indexFinger[3][0];
    const indexTipY = predictions[0].annotations.indexFinger[3][1];
    const indexBaseX = predictions[0].annotations.indexFinger[0][0];
    const indexBaseY = predictions[0].annotations.indexFinger[0][1];

    // Check if the tip of the "pin" is touching the bubble
    let d = dist(indexTipX, indexTipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      // Pop!
      resetBubble();
    }
    // Display the current position of the pin as a line between the tip and
    // base of the index finger
    displayPin(indexTipX, indexTipY, indexBaseX, indexBaseY);
  }

  // Handle the bubble's movement and display
  moveBubble();
  checkOutOfBounds();
  displayBubble();
}

/**
Resets the bubble to the bottom of the screen in a new x position
*/
function resetBubble() {
  bubble.x = random(width);
  bubble.y = height;
}

/**
Moves the bubble according to its velocity
*/
function moveBubble() {
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;
}

/**
Resets the bubble if it moves off the top of the canvas
*/
function checkOutOfBounds() {
  if (bubble < 0) {
    resetBubble();
  }
}

/**
Displays the bubble as a circle
*/
function displayBubble() {
  push();
  noStroke();
  fill(100, 100, 200, 150);
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
}

/**
Displays the pin based on the tip and base coordinates. Draws
a line between them and adds a red pinhead.
*/
function displayPin(tipX, tipY, baseX, baseY) {
  // Draw pin
  push();
  stroke(255);
  strokeWeight(2);
  line(tipX, tipY, baseX, baseY);
  pop();

  // Draw pinhead
  push();
  fill(255, 0, 0);
  noStroke();
  ellipse(baseX, baseY, 20);
  pop();
}