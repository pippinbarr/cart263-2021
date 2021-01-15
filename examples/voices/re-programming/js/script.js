"use strict";

/*****************

Re:programming
Pippin Barr

Requires the user to say things they love, all of which are programming-related.

Uses:

annyang
https://www.talater.com/annyang/

******************/

// An array of things to love in programming (user will say these)
let loves = [
  `JavaScript`,
  `Object-Oriented Programming`,
  `destructuring`,
  `variables`,
  `arrow functions`,
  `functions`,
  `anonymous functions`,
  `programming`,
  `to code`,
  `JavaScript libraries`,
  `the Atom text editor`,
  `Creative Computation`,
  `debugging`
];

// Current thing they're supposed to say they love
let currentLove = ``;
// What text to display on the canvas
let displayText = ``;


/**
Creates a canvas, sets text defaults, and sets up annyang to listen to
declarations of love.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Text defaults
  textSize(64);
  textStyle(BOLD);
  textAlign(CENTER);

  // Set up annyang
  if (annyang) {
    // Add the commands to annyang. That is it should listen
    // for "I love..." followed by some number of words.
    // In annyang's commands an asterisk (*) followed by a
    // variable names means that annyang will call the function
    // specified with EVERYTHING it heard from that point on...
    var command = {
      "I love *lovedThing": handleUserSpeech,
    };

    // Now we've defined the commands we give them to annyang
    // by using its .addCommands() function.
    annyang.addCommands(command);

    // Finally we tell annyang to start listening with its
    // .start() function
    annyang.start();

    // Choose a phrase for the user to say first
    newAffirmation();
  }

}

/**
Displays the current display text on the canvas
*/
function draw() {
  background(255);

  text(displayText, width / 2, height / 2);
}

/**
Responds to successful annyang command. Checks whether the user said they love
the correct thing, and lets them know.
*/
function handleUserSpeech(lovedThing) {
  // Stop listening for a moment
  annyang.pause();
  // Check if what the user said matches the request
  // Convert both to lowercase to make matching easier
  if (lovedThing.toLowerCase() === currentLove.toLowerCase()) {
    // If they got it right, emphasize it
    displayText = `That's right. You do love ${currentLove}.`;
    // Assign a new affirmation after five seconds
    setTimeout(newAffirmation, 5000);
  }
  else {
    // If they were wrong, mock them.
    displayText = `You love ${lovedThing}? No. Try again. Say "I love ${currentLove}."`;
  }
}

/**
Chooses a random thing to love and tells the user to say they love it.
*/
function newAffirmation() {
  currentLove = random(loves);
  displayText = `Say "I love ${currentLove}."`;
  annyang.resume();
}