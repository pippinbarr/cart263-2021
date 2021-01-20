"use strict";

/*****************

Bad Tarot Forever
Pippin Barr

Gives you a randomly chosen negative tarot reading and then insists
on it forever by saving it to browser storage. Ha ha.

Uses:

Darius Kazemi's Tarot Interpretations data
https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json

******************/

// To store the tarot data
let tarot;
// To store the displayed fortune
let fortune;

/**
Loads the tarot interpretations
*/
function preload() {
  tarot = loadJSON(`assets/data/tarot_interpretations.json`);
}


/**
Creates the canvas, checks if the user already has had their fate decided
and then either sets that fate in place or generates a fresh one.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);

  // Get the "fate" data from storage if it's there
  let fateData = JSON.parse(localStorage.getItem(`fateData`));

  // Check if data is null (i.e. that it hasn't been saved)
  if (fateData === null) {
    // If they don't have a fate yet choose a random card
    let card = random(tarot.tarot_interpretations);
    // Get a random shadow reading from the cards shadow meanings array
    // Also convert to lowercase for readability
    let shadowReading = random(card.meanings.shadow).toLowerCase();
    // Make our fortune string
    fortune = `Your future is ${shadowReading}.`;
    // Save the fortune to storage so it will be there when they come back
    localStorage.setItem(`fateData`, JSON.stringify({
      fate: fortune
    }));
  }
  else {
    // If the data wasn't null, it means it was saved earlier and we can just
    // tell them the same fate we saved!
    fortune = `${fateData.fate} And that's final.`;
  }
}

/**
Displays the user's fortune on the screen.
*/
function draw() {
  background(0);

  push();
  fill(255, 0, 0);
  textSize(windowWidth / 50);
  textAlign(CENTER, CENTER);
  text(fortune, width / 2, height / 2);
  pop();
}