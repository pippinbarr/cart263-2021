/**

Random Stressor
Pippin Barr

Takes a user's inputted sentence and adds a stress to a random
word with the <em> tag. Fun with meaning!

*/

"use strict";

// Listen for clicks on the submission button
$(`#submit`).on(`click`, stressify);


/**
Takes the user input in the text field and adds an <em> tag around
one random word
*/
function stressify(event) {
  // Get the input
  let sentence = $(`#text-input`).val();
  // If it's empty, just give up
  if (sentence === ``) {
    return;
  }
  // Split the sentence into individual words based on the space character
  let words = sentence.split(` `);
  // Choose a random word index in the array of words
  let stressIndex = Math.floor(Math.random() * words.length);
  // Replace the word at the index with itself inside <em>
  words[stressIndex] = `<em>${words[stressIndex]}</em>`;
  // Join the sentence back together
  sentence = words.join(` `);
  // Add the sentence to the page
  $(`#sentence`).html(sentence);
}