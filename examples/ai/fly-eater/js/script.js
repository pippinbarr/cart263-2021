/**

Fly Eater
Pippin Barr

A program that allows you to eat virtual flies via the webcam. Displays
you on screen and uses ml5's implementation of Facemesh to detect your mouth
and whether it's open or closed. Close your mouth while a fly is "in" it to
eat the fly. Yum yum.

Uses:

ml5.js Facemesh:
https://learn.ml5js.org/#/reference/facemesh

Facemesh keypoints map:
https://github.com/tensorflow/tfjs-models/tree/master/facemesh#keypoints

*/

"use strict";

// Current state of the program
let state = `loading`; // loading, running
// The user's webcam
let video;
// The name of our model
let modelName = `Facemesh`;
// The facemesh model itself
let facemesh;
// The current set of predictions made by Facemesh once it's running
let predictions = [];

// Number of flies at the start of the simulation
const NUM_FLIES = 10;
// An array to contain fly objects
let flies = [];
// A variable to contain a representation of the user's mouth data
let mouth;

/**
Creates a mouth and set of fly objects and starts up the Facemesh model.
*/
function setup() {
  // Ah yes, a canvas
  createCanvas(640, 480);

  // Start the webcam (this uses p5's DOM and so creates an actual element on the page)
  video = createCapture(VIDEO);
  // Hide the video element, so we only see the p5 canvas
  video.hide();

  // Start up a Facemesh model, providing the user's webcam as data
  // Provides an anonymous function to call when the model is loaded
  facemesh = ml5.facemesh(video, function() {
    // Start the simulation
    state = `simulation`;
  });
  // Tell Facemesh we want it to save the results to our predictions variable each time
  // it is able to make a prediction about the user's face.
  facemesh.on(`predict`, function(results) {
    predictions = results;
  });

  // Create a representation of the user's mouth
  mouth = new Mouth();

  // Add the required number of flies to the array
  for (let i = 0; i < NUM_FLIES; i++) {
    let fly = new Fly();
    flies.push(fly);
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
  background(255);

  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Loading ${modelName}...`, width / 2, height / 2);
  pop();
}

/**
Displays the user's video and the flies. Checks if the user ate any flies.
*/
function simulation() {
  // Display user's webcam
  image(video, 0, 0, width, height);

  // Update the current mouth data with the predictions from Facemesh
  mouth.update(predictions);

  // Go through all the flies (backwards so we can remove them as needed)
  for (let i = flies.length - 1; i >= 0; i--) {
    // Get the current fly
    let fly = flies[i];
    // Update it
    fly.update();
    // If this fly is in the user's mouth and they have closed it,
    // then they ate it!
    if (fly.inMouth && !mouth.open) {
      // Remove the eaten fly from the array
      flies.splice(i, 1);
    }
    else {
      // Otherwise, update the fly's status as being in or out of
      // the user's mouth by checking for an overlap
      fly.inMouth = mouth.overlap(fly);
    }
  }
}