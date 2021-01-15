"use strict";

/*****************

Perfect pitch
Pippin Barr

A pretty horrible attempt at singing with ResponsiveVoice. Allows the user
to set the rate and pitch of the voice with the mouse while the computer
"sings" Twinkle Twinkle Little Star.

Uses:

ResponsiveVoice
https://responsivevoice.org/

******************/

// What to sing
let lyrics = "Twinkle twinkle little star, How I wonder what you are. Up above the world so high, Like a diamond in the sky. Twinkle twinkle little star,  How I wonder what you are.";
// The lyrics as individual words
let lyricsArray = lyrics.split(' ');
// Which word to sing next (starting at the first one)
let currentWordIndex = 0;
// Which word is currently being sung, used at start as an instruction
let currentWord = `Click to begin.`;
// The current pitch of the voice
let pitch = 1;

/**
Creates a canvas
*/
function setup() {
  createCanvas(500, 500);
}

/**
Displays the current word being sung. Maps mouse to pitch.
*/
function draw() {
  background(0);

  // Display the current word
  push();
  fill(255);
  textSize(64);
  textAlign(CENTER);
  text(currentWord, width / 2, height / 2);
  pop();

  // Map the mouse position to the pitch the voice should use for the next word
  pitch = map(mouseY, height, 0, 0.2, 2);
}

/**
Gets the current word to sing and uses responsive voice to say it at the current
pitch, then calls itself again after the voice finished.
*/
function sing() {
  // Get the current word
  currentWord = lyricsArray[currentWordIndex];
  // Say the current word in a default voice at the current pitch
  // Call sing() again when the voice finishes
  responsiveVoice.speak(currentWord, undefined, {
    pitch: pitch,
    onend: sing
  });
  // Go to the next word
  currentWordIndex++;
  // If it reaches the end of the lyrics, go back to the start
  if (currentWordIndex >= lyricsArray.length) {
    currentWordIndex = 0;
  }
}

/**
Starts singing on click.
*/
function mousePressed() {
  sing();
}