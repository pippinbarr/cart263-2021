/**
Haiku Generator
Pippin Barr

A program that generates a random haiku based on pre-existing arrays
of lines of the correct syllable length. Also swaps out lines if the user
clicks on them with a fade in and out effect.
*/

"use strict";

// Our pre-made haiku lines
let haikuLines = {
  fiveSyllables: [
    `O, to be a tree`,
    `The cat does not know`,
    `We are all forests`,
    `You have done your best`,
    `They are all gone now`
  ],
  sevenSyllables: [
    `Say the things left unsaid`,
    `Never believe the wind's lies`,
    `The autumn stretches its legs`,
    `Nothing can satisfy you`,
    `They will not come back again`
  ]
};

// Our three elements on the page that contain each line of the poem
let line1 = document.getElementById(`line-1`);
let line2 = document.getElementById(`line-2`);
let line3 = document.getElementById(`line-3`);

// Set up the starting lines
setupLines();
// Listen for clicks on each element and respond by changing them
addListeners();

/**
Puts a randomly chosen haiku line in each line of the poem in HTML,
also sets opacity to 1 since that's useful later on
*/
function setupLines() {
  line1.innerText = random(haikuLines.fiveSyllables);
  line1.style.opacity = 1;
  line2.innerText = random(haikuLines.sevenSyllables);
  line2.style.opacity = 1;
  line3.innerText = random(haikuLines.fiveSyllables);
  line3.style.opacity = 1;
}

/**
Adds event listeners for changing each line of the poem
*/
function addListeners() {
  line1.addEventListener(`click`, changeLine);
  line2.addEventListener(`click`, changeLine);
  line3.addEventListener(`click`, changeLine);
}

/**
Triggers a fade out when a line is clicked
*/
function changeLine(event) {
  // We use an anonymous function so we can provide the
  // clicked element as an argument to fadeOut()
  window.requestAnimationFrame(function() {
    fadeOut(event.target);
  });
}

/**
Reduces the opacity of the provided element until it reaches zero
then changes its line and triggers a fade in
*/
function fadeOut(element) {
  // Change the opacity of the line
  let newOpacity = changeOpacity(element, -0.01);
  // Check if the opacity made it to or past zero
  if (newOpacity <= 0) {
    // If so, set the opacity to exactly 0
    element.style[`opacity`] = 0;
    // Set a new line of poem for the element
    setNewLine(element);
    // Trigger a fade in
    requestAnimationFrame(function() {
      fadeIn(element);
    });
  }
  else {
    // Trigger another frame of fading out
    requestAnimationFrame(function() {
      fadeOut(element);
    });
  }
}

/**
Increases the opacity of the provided element until it reaches
1 and then stops.
*/
function fadeIn(element) {
  // Increase the opacity
  let newOpacity = changeOpacity(element, 0.01);
  // Check if it reached or passed 1
  if (newOpacity >= 1) {
    // If so, set it to 1 and don't ask for another frame of animation (we're done)
    element.style[`opacity`] = 1;
  }
  else {
    // If not, trigger another frame of fading in
    requestAnimationFrame(function() {
      fadeIn(element);
    });
  }
}

/**
Changes the opacity of the element by the amount specified
*/
function changeOpacity(element, amount) {
  // Get the current opacity of the element as a number (not a string!)
  // parseFloat() converts a number contained in a string to an actual number
  let opacity = parseFloat(element.style.opacity);
  // Change the opacity
  opacity += amount;
  // Set the opacity of the element to the new value
  element.style[`opacity`] = opacity;
  // Return the new value so it can be checked by the caller
  return opacity;
}

/**
Sets the text of the element to a randomly chosen haiku line, accounting for
syllables
*/
function setNewLine(element) {
  if (element === line1 || element === line3) {
    // If the element is line1 or line3, use five syllables
    element.innerText = random(haikuLines.fiveSyllables);
  }
  else {
    // If the element is line2 use seven
    element.innerText = random(haikuLines.sevenSyllables);
  }
}

/**
A helper function that returns a random element from the provided array
*/
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}