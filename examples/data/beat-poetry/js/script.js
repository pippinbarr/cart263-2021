"use strict";

/*****************

Beat Poetry
Pippin Barr

A "poet" that generates a random poem out of its own source code broken
into individual words and reads it out forever. Like Kerouac's long
scrolling document of On the Road? Is this art?

Uses:

ResponsiveVoice
http://responsivevoice.org/

******************/

// Voice constants
const VOICE = `UK English Male`;
const VOICE_PARAMS = {
  rate: 0.75,
  pitch: 0.5,
  onend: sayNextWord
};

// Has the reading started
let started = false;

// Variable to hold the script.js text
let script;

// Array to hold all the words in the script
let words;


/**
Load the script.js file's text data into a variable
*/
function preload() {
  script = loadStrings(`js/script.js`);
}


/**
Creates a canvas and divides the script roughly into words.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // script is an array so
  // 1. Join its elements into a string with spaces
  // 2. Split the resulting string into an array based on spaces
  // Roughly speaking, this leads to an array of words
  words = script.join(` `).split(` `);
}


/**
Displays instructions
*/
function draw() {
  background(0);

  // If the reading hasn't begun, tell the reader how to start
  if (!started) {
    push();
    fill(255, 255, 0);
    textSize(32);
    textAlign(CENTER);
    text(`Click to enjoy poetry.`, width / 2, height / 2);
    pop();
  }
}

/**
Begin the reading
*/
function mousePressed() {
  started = true;
  sayNextWord();
}

/**
Chooses a random word and speaks it. Automatically called when the
voice is finished thanks to the `onended` callback.
*/
function sayNextWord() {
  // Get a random word from the words array
  let word = random(words);
  // Make sure it's not an empty string, since that seems to freak out ResponsiveVoice???
  while (word === ``) {
    word = random(words);
  }
  // Say the word
  responsiveVoice.speak(word, VOICE, VOICE_PARAMS);
}