/**
Secret Mouse Message
Pippin Barr

Presents the user with a secret message that is revealed based on their
mouse position! For the record, it is revealed by moving the mouse right to
left across the page.
*/

"use strict";

// The secret message itself
let message = "THIS IS THE TIME AND THIS IS THE RECORD OF THE TIME.";
// A reversed version of the secret message for more secretness!
let reverseMessage = message.split(``).reverse().join(``);

// Call the showSecret() function every time the user moves the mouse
$(document).on(`mousemove`, showSecret);

/**
Chooses which character in the secret message to display based on where
the mouse is on the x axis of the page
*/
function showSecret(event) {
  // Map the user's mouse position, which is between 0 and the window's width
  // to a number between 0 and the length of the message to get a character
  // position
  let index = map(event.clientX, 0, $(window).width(), 0, reverseMessage.length);
  // Floor the resulting number so it can work as a specific pointer to a
  // specific character
  index = Math.floor(index);
  // Set the text in the secret letter section to the chosen letter
  $(`#secret-letter`).text(reverseMessage.charAt(index));
}

/**
A helper function for mapping a value between two ranges
*/
function map(value, min, max, newMin, newMax) {
  let normalized = value / (max - min);
  let newValue = newMin + normalized * (newMax - newMin);
  return newValue;
}