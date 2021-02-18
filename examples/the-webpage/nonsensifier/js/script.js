/**
Nonsensifier
Pippin Barr

A program that gradually "corrupts" an existing text by replacing characters in it
with symbols.
*/

"use strict";

// The set of symbols we can randomly choose to replace a character with
const nonsense = [`☰`, `☱`, `☲`, `☳`, `☴`, `☵`, `☶`, `☷`];
// The set of <p> elements on the page
const paras = document.getElementsByTagName(`p`);

// Call doNonsense() every 50 milliseconds (it will replace one random character)
setInterval(doNonsense, 50);

function doNonsense() {
  // Choose a random paragraph from the page
  let para = random(paras);
  // Get its text content
  let text = para.innerText;
  // Choose a random character index in the text
  let index = Math.floor(Math.random() * text.length);
  // Choose a random nonsense character
  let nonsenseChar = random(nonsense);
  // Replace the text of the paragraph with a copy of itself but with the nonsense character added
  para.innerText = text.substring(0, index) + nonsenseChar + text.substring(index + 1, text.length);
}

/**
Helper function that returns a random element from an array
*/
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}