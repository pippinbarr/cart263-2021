"use strict";

/*****************

Back-seat Driver
Pippin Barr

A car that can be driven around by the user's voice commands. There are
collectible stars on the screen to give you something to do so that you
can find out how terrible it is to try to drive a car with voice recognition
and its inevitable lag!

Commands are:
"Drive"
"Stop"
"(Turn) left"
"(Turn) right"

Uses:

annyang
https://www.talater.com/annyang/


******************/

// The car
let car;

// The number of stars to collect and an array to hold them
const NUM_STARS = 10;
let stars = [];


/**
Create a canvas, a car to drive, all the stars
Setup annyang
*/
function setup() {
  createCanvas(500, 500);

  // Start our car in the center
  car = new Car(width / 2, height / 2);

  createStars();
  setupAnnyang();

}

/**
Create the correct number of five-pointed stars at random positions
*/
function createStars() {
  for (let i = 0; i < NUM_STARS; i++) {
    let star = new Star({
      x: random(0, width),
      y: random(0, height),
      innerRadius: 5,
      outerRadius: 10,
      points: 5
    });
    stars.push(star);
  }
}

/**
Setup annyang voice commands for driving the car
*/
function setupAnnyang() {
  // Make sure annyang is available
  if (annyang) {
    // Add driving commands that correspond to method on our car
    let commands = {
      'drive': function() {
        car.drive();
      },
      'stop': function() {
        car.stop();
      },
      '(turn) left': function() {
        car.turnLeft();
      },
      '(turn) right': function() {
        car.turnRight();
      }
    };

    // Add our commands to annyang
    annyang.addCommands(commands);

    // Start listening
    annyang.start();
  }
}


/**
Update the car and stars
*/
function draw() {
  background(0);

  car.update();

  // Go through all the stars backwards (because we may need to remove one)
  for (let i = stars.length - 1; i >= 0; i--) {
    let star = stars[i];
    // Update the star
    star.update();
    // Calculate the distance to the car (for a simple overlap check)
    let d = dist(car.x, car.y, star.x, star.y);
    // If the car is within the outer radius of the star it overlaps
    if (d < star.outerRadius) {
      // Remove the star at this position from the array
      stars.splice(i, 1);
    }
  }
}