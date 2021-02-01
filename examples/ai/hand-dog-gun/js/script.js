/**

Hand Dog Gun
Pippin Barr

Turns the user's hand into a silly gun that shoots dogs. Uses
Handpose model in ml5 to do this. Dogs are fired out of the tip of the
index finger along a trajectory based on the line from the base of the index
finger to the tip. Gun fires when user touches thumb to base of index finger.

Uses:

ml5.js Handpose:
https://learn.ml5js.org/#/reference/handpose

*/

"use strict";

// Current state of program
let state = `loading`; // loading, running
// User's webcam
let video;
// The name of our model
let modelName = `Handpose`;
// Handpose object (using the name of the model for clarity)
let handpose;
// The current set of predictions made by Handpose once it's running
let predictions = [];

// How far the thumb tip should be from the index base to reload
const MIN_RELOAD_DISTANCE = 80;
// How close the thumb tip should be to the index base to fire
const MIN_FIRE_DISTANCE = 50;

// The specific set of data for our "gun"
let handGun = {
  thumbTip: {
    x: undefined,
    y: undefined
  },
  indexTip: {
    x: undefined,
    y: undefined
  },
  indexBase: {
    x: undefined,
    y: undefined
  }
}

// An array of dogs that are currently active on the canvas
let dogs = [];
// Whether or not the user can shoot right now
let canShoot = true;
// An image of a dog
let dogImage;
// The sound of a dog
let barkSFX;

/**
Preloads the dog image
*/
function preload() {
  dogImage = loadImage(`assets/images/sausage-dog.png`);
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

/**
Starts the webcam and the Handpose
*/
function setup() {
  createCanvas(640, 480);

  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // Start the Handpose model and switch to our running state when it loads
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    // Switch to the running state
    state = `running`;
  });

  // Listen for prediction events from Handpose and store the results in our
  // predictions array when they occur
  handpose.on(`predict`, function(results) {
    predictions = results;
  });
}

/**
Handles the two states of the program: loading, running
*/
function draw() {
  if (state === `loading`) {
    loading();
  }
  else if (state === `running`) {
    running();
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
Checks for user firing the gun and fires a bullet if so.
*/
function running() {
  // Display user's webcam
  const flippedVideo = ml5.flipImage(video);
  image(flippedVideo, 0, 0, width, height);

  // Check if there are currently new predictions of the hand
  if (predictions.length > 0) {
    // If so, update the data and handle reloading and shooting
    // based on it
    updateHandData();
    handleReload();
    handleShoot();
  }

  // Update any dogs on screen (independent of hand prediction)
  updateDogs();
}

/**
Goes through the predictions data and puts it into our more specific
data format, just to make it a tiny bit easier to read
*/
function updateHandData() {
  // Get the annotated data in the predictions
  const annotations = predictions[0].annotations;

  // Store the relevant positions of the thumb and index finger
  handGun.thumbTip.x = annotations.thumb[3][0];
  handGun.thumbTip.y = annotations.thumb[3][1];
  handGun.indexBase.x = annotations.indexFinger[0][0];
  handGun.indexBase.y = annotations.indexFinger[0][1];
  handGun.indexTip.x = annotations.indexFinger[3][0];
  handGun.indexTip.y = annotations.indexFinger[3][1];
}

/**
Check if the thumb is far enough from the base of the index finger and reload if so
*/
function handleReload() {
  // Calculate distance
  let thumbTipToIndexBaseDistance = dist(handGun.thumbTip.x, handGun.thumbTip.y, handGun.indexBase.x, handGun.indexBase.y);
  // If they can't shoot and the thumb is far enough away, reload
  if (!canShoot && thumbTipToIndexBaseDistance > MIN_RELOAD_DISTANCE) {
    // Reload
    canShoot = true;
  }
}

/**
Check if they can shoot and the thumb tip is close enough to the index base, if so shoot
*/
function handleShoot() {
  // Can they shoot?
  let thumbTipToIndexBaseDistance = dist(handGun.thumbTip.x, handGun.thumbTip.y, handGun.indexBase.x, handGun.indexBase.y);
  if (canShoot && thumbTipToIndexBaseDistance < MIN_FIRE_DISTANCE) {
    // Calculate angle to fire at (based on angle of index finger)
    const angle = atan2(handGun.indexTip.y - handGun.indexBase.y, handGun.indexTip.x - handGun.indexBase.x);
    // Create a dog that will come from the tip of the user's index finger
    // at that angle
    let dog = new Dog(handGun.indexTip.x, handGun.indexTip.y, angle, dogImage);
    // Add it to the array
    dogs.push(dog);
    // The user needs to "reload" before shooting again
    canShoot = false;
    // Bark
    barkSFX.play();
  }
}

/**
Update dogs and remove them if they're offscreen
*/
function updateDogs() {
  // Update all dogs on the canvas, remove any that have moved offscreen
  for (let i = dogs.length - 1; i >= 0; i--) {
    let dog = dogs[i];
    dog.update();
    // Is the dog off screen?
    if (dog.x < 0 || dog.x > width || dog.y < 0 || dog.y > height) {
      // Remove it if so
      dogs.splice(i, 1);
    }
  }
}