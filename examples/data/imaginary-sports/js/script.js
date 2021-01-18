"use strict";

/*****************

Imaginary Sports
Pippin Barr

Generates the name of an imaginary sport from the names of two real sports.

******************/

// To store the loaded data of sport names
let sportsData;

// The name of the new sport (also used to give basic instruction)
let newSport = `Click to generate a sport.`;

/**
Loads the sport data from a JSON file.
*/
function preload() {
  sportsData = loadJSON(`assets/data/sports.json`);
}


/**
Creates a canvas.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
}


/**
Displays the name of the new sport (or the instruction)
*/
function draw() {
  background(0);

  push();
  fill(255, 255, 0);
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER);
  text(newSport, width / 2, height / 2);
  pop();
}

/**
Generates the name of an imaginary sport.
*/
function mousePressed() {
  // Get a random sport name and split it into words
  let words1 = random(sportsData.sports).split(` `);
  // Same again
  let words2 = random(sportsData.sports).split(` `);

  // Choose a random word from the sport's name
  let word1 = random(words1);
  // And again
  let word2 = random(words2);

  // Capitalize the firt letter of both words
  word1 = capitalizeFirstLetter(word1);
  word2 = capitalizeFirstLetter(word2);

  // Our new sport's name is these two words together...
  newSport = `${word1} ${word2}`;
}

/**
Capitalizes the first letter of the string and returns the new string
*/
function capitalizeFirstLetter(string) {
  // Our new string is the first letter capitalized plus the "rest" of the string
  // We use toUpperCase() too convert the first character (0) of the string
  // We use slice() to give us every character in the string starting at position 1
  // which is the second letter
  // Add those together to get a capitalized version of the string!
  return string[0].toUpperCase() + string.slice(1);
}