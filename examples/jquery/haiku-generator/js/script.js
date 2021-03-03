/*********************************************

Haiku Generator
Pippin Barr

Generates a typical haiku from randomly chosen lines
of appropriate syllabic structure. User can click on
individual lines to swap them out for a new random
line with a fading in and out effect.

*********************************************/

"use strict";

// The poem data broken into lines with five and seven syllables
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

// Set up the three lines, including user interaction
setupLines();


/**
Sets a new line on each of the lines on the webpage and
adds a click listener so the user can switch out lines.
*/
function setupLines() {
  $(`.line`).each(setNewLine);
  $(`.line`).on(`click`, changeLine);
}

/**
Checks whether the line has five or seven syllables
according to its classes and sets its text to a new
line of the appropriate syllabic structure.
*/
function setNewLine() {
  if ($(this).hasClass(`five`)) {
    $(this).text(random(haikuLines.fiveSyllables));
  }
  else if ($(this).hasClass(`seven`)) {
    $(this).text(random(haikuLines.sevenSyllables));
  }
}

/**
Called when the user clicks a line. Fades the line out,
sets a new line, and fades it back in.
*/
function changeLine(event) {
  $(this).fadeOut(1000, function(event) {
    // Note the use of .each() here to call our setNewLine()
    // function on the specific line even though we know there's
    // only ONE. .each() is still useful here!
    $(this).each(setNewLine);
    $(this).fadeIn(1000);
  })
}

/**
A helper function to return a random element from the provided array
*/
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}