"use strict";

/**

Feed Me(dia)
Pippin Barr

A program that asks you to show it an image of a specific kind of object
with your webcam and detects whether or not you were successful or not.
Can even do okay with some drawings which is quite interesting.

Uses:

ml5.js ObjectDetector
https://learn.ml5js.org/#/reference/object-detector

*/

"use strict";

// Current state of program
let state = `loading`; // loading, running
// User's webcam
let video;
// The name of our model
let modelName = `CocoSsd`;
// ObjectDetector object (using the name of the model for clarify)
let cocossd;
// The current set of predictions made by CocoSsd once it's running
let predictions = [];

// The name of the object the program wants to see (chosen randomly from
// the total set recognized by the mode, see cocossd-objects.js)
let desire = ``;
// The current top result as predicted by the classifier
let topResult = undefined;

/**
Starts the webcam and the ObjectDetector
*/
function setup() {
  createCanvas(640, 480);

  // Start webcam and hide resulting HTML element
  video = createCapture(VIDEO);
  video.hide();
  // Start the CocoSsd model and when it's ready start the challenge
  cocossd = ml5.objectDetector('cocossd', {}, startChallenge);
}

/**
Changes state and chooses a random desire, then switches to the guessing
state after a delay.
*/
function startChallenge() {
  // Switch to the challenge state now that the model is ready
  state = `challenge`;
  // Choose a random object the program wants to see
  // Remember that cocossdObjects is defined in a separate file
  desire = random(cocossdObjects);
  // Ask CocoSsd to start detecting objects
  cocossd.detect(video, gotResults);
  // Wait two seconds, then switch to the guessing state
  setTimeout(function() {
    state = `guessing`;
  }, 2000);
}

/**
Called when CocoSsd has detected at least one object in the video feed
*/
function gotResults(err, results) {
  // Assume no results to begin with
  topResult = undefined;
  // If there's an error, report it
  if (err) {
    console.error(err);
    return;
  }

  // Otherwise, if there are results, get the first result in the array!
  if (results.length > 0) {
    topResult = results[0];
  }

  // Ask CocoSsd to detect objects again so it's continuous
  cocossd.detect(video, gotResults);
}

/**
Handles the three states of the program: loading, challenge, guessing
*/
function draw() {
  if (state === `loading`) {
    loading();
  }
  else if (state === `challenge`) {
    challenge();
  }
  else if (state === `guessing`) {
    guessing();
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
Displays the current challenge
*/
function challenge() {
  background(255);

  // Just to be fancy, get the correct indefinite article for the desired object
  // accounting for the first letter being a vowel or not
  let article = getArticle(desire);
  // Display the challenge as text
  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Feed me ${article} ${desire}.`, width / 2, height / 2);
  pop();
}

/**
Returns the (roughly) correct indefinite article for the provided word
*/
function getArticle(word) {
  // Get the first letter of the word and convert to lower case for easier matching
  let firstLetter = word.charAt(0).toLowerCase();
  // Store the set of vowels (which need "an" instead of "a")
  const vowels = "aeiou";
  // Check if the first letter appears in the set of vowels
  // indexOf returns -1 if it doesn't find the string and the index it finds it at
  // otherwise
  if (vowels.indexOf(firstLetter) >= 0) {
    // If it does, then use "an"
    return `an`;
  }
  else {
    // If it doesn't, then use "a"
    return `a`;
  }
}

/**
Perfects a detection step with CocoSsd, displays the user's webcam
and checks whether the user is displaying something matching the program's
desire. Shows whether they are failing or have succeeded.
*/
function guessing() {
  // Display the webcam
  image(video, 0, 0, width, height);

  // Check if there is currently a result to compare with the desire
  if (topResult) {
    // Store the true/false value of whether the label of the top results is the
    // same as the stated desire (e.g. they're showing us something that matches
    // the stated desire)
    let success = (topResult.label === desire);
    // Display a rectangle around the currently identified object
    push();
    noFill();
    // Give it a green outline if it's a successful object and red otherwise
    if (success) {
      stroke(0, 255, 0);
    }
    else {
      stroke(255, 0, 0);
    }
    strokeWeight(10);
    rect(topResult.x, topResult.y, topResult.width, topResult.height);
    pop();

    // Store a word indicated success/failure to display
    let result = ``;
    if (success) {
      result = `Yes.`;
    }
    else {
      result = `No.`;
    }

    // Display the text in the centre of the rectangle identifying the object
    push();
    // Make the text green if successful and red otherwise
    if (success) {
      fill(0, 255, 0);
    }
    else {
      fill(255, 0, 0);
    }
    textAlign(CENTER, CENTER);
    textSize(32);
    textStyle(BOLD);
    text(result, topResult.x + topResult.width / 2, topResult.y + topResult.height / 2);
    pop();

    // If this was a successful object, then stop the program so they can enjoy their victory
    if (success) {
      noLoop();
    }
  }
}