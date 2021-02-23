/**
Happy Offline
Pippin Barr

A program that is happy when you're offline and sad when you're not.
Uses navigator.onLine and the online and offline window events to
keep track.
*/

"use strict";

// Faces
let happy = `:)`;
let sad = `:(`;

// Get a reference to the face section of the page
let face = document.getElementById(`face`);

// Use the navigator.onLine property to check if they're online when the program starts
// and set the appropriate face
if (navigator.onLine) {
  setEmoji(sad);
}
else {
  setEmoji(happy);
}

// Listen for online and offline events to switch the face!
window.addEventListener(`online`, function(event) {
  setEmoji(sad);
});

window.addEventListener(`offline`, function(event) {
  setEmoji(happy);
});

/**
Sets the document title and the face section's text to the provided
emoji
*/
function setEmoji(emoji) {
  document.title = emoji;
  face.innerText = emoji;
}