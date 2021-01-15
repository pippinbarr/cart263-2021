"use strict";

/*********

Nonsense Generator
Pippin Barr

Generate an endless stream of made up language for the computer to speak.

Uses:

ResponsiveVoice
https://responsivevoice.org/

*********/

// Constants with the consontants and vowels we'll use to create basic phonemes
// We're using split() to split the strings into array with each character in an element
// So constants and vowels contain arrays of single characters
const consonants = "bcdfghjklmnprstvwxyz".split('');
const vowels = "aeiou".split('');

// The nonsense being spoken (used initially to show "click to start")
let nonsense = `Click to start the nonsense.`;

/**
Creates a createCanvas
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
}

/**
Displays the current nonsense text.
*/
function draw() {
  background(0);

  push();
  fill(255, 255, 0);
  textSize(48);
  rectMode(CENTER);
  text(nonsense, width / 2, height / 2, width / 2, height / 2);
  pop();
}

/**
Generates and speaks a sentence-worth of nonsense, then starts the next
*/
function sayNonsense() {
  // Generate the nonsense sentence
  nonsense = generateSentence();
  // Options with some randomness for variation, plus calling this function
  // again once the speech has finished
  responsiveVoice.speak(nonsense, "UK English Male", {
    rate: random(1.3, 1.4),
    pitch: random(0.8, 0.9),
    onend: sayNonsense // Call the same function after ending speaking!
  });
}

/**
Generates a random-length sentence of nonsense with some random punctuation
*/
function generateSentence() {
  // A variable to hold the sentence
  let sentence = ``;
  // Randomly select how long the sentence will be (in words)
  let words = random(5, 15);
  // Loop to generate each word
  for (let j = 0; j < words; j++) {
    // A variable to hold the current word
    let word = ``;
    // Randomly select how many phonemes this word is
    let length = random(1, 4);
    // Loop to generate the phonemes of the word
    for (let i = 0; i < length; i++) {
      // Add a consonant from the consonants string (treat it like an array)
      word += random(consonants);
      // Add a vowel in the same way
      word += random(vowels);
    }
    // Add this word to the sentence
    sentence += word;
    // If it's not the last word...
    if (j < words - 1) {
      // Sometimes add a comma, for fun
      if (random() < 0.1) {
        sentence += `,`;
      }
      // Add a space so the next word is in the right spot
      sentence += ` `;
    }
  }
  // Capitalise the first letter of the sentence (this is ugly, oh well)
  sentence = sentence.charAt(0).toUpperCase() + sentence.substring(1, sentence.length);
  // Return the sentence including its full-stop
  return sentence + `. `;
}

/**
Starts the program off when the mouse is clicked.
*/
function mousePressed() {
  sayNonsense();
}