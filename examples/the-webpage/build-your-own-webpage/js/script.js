/**
Build Your Own Website
Pippin Barr

An ultra-basic program that lets the user type HTML into a text box
and then add it (as actual parsed HTML) to the page.
*/

"use strict";

// Get references to the input text and button
let htmlInput = document.getElementById(`html-input`);
let submitButton = document.getElementById(`submit-button`);
// Listen for clicks on the submit button
submitButton.addEventListener(`click`, addHTML);

/**
Adds the text currently in the text input as HTML to the body of
the page inside a <span>
*/
function addHTML(event) {
  // Get the current text in the text input
  let html = htmlInput.value;
  // Create a span (you can't just add the HTML directly to the body's .innerHTML
  // as it'll break everything!)
  let element = document.createElement(`span`);
  // Set the user's text as the HTML inside the span
  element.innerHTML = html;
  // Add the span to the bottom of the body
  document.body.appendChild(element);
}