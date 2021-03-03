/**************************************

DIY Homepage
Pippin Barr

A template homepage with "likes" and "dislikes" and a profile picture
that is editable (via contenteditable) by the person looking at it and
can be saved using localStorage so that it is persistent between sessions.

**************************************/

"use strict";

// The key to use when saving and loading with localStorage
const STORAGE_KEY = `diy-homepage;`

// Load the current HTML data of the page
let data = JSON.parse(localStorage.getItem(STORAGE_KEY));
// Check if there's data available
if (data) {
  // If so, set the HTML of the homepage section to the saved data
  $(`#homepage`).html(data.html);
}

// Make all the elements on the page contenteditable
$(`h1,h2,p,li`).attr(`contenteditable`, `true`);
// Add a simple interface to the profile image so the user can change
// the picture's URL
$(`img`).on(`click`, function() {
  // Get the new image URL
  let newImageURL = prompt(`What is the URL of your profile picture?`);
  // Set the image to point to the provided URL
  $(this).attr(`src`, newImageURL);
});

// Listen for clicks on the save button
$(`#save-button`).on(`click`, function() {
  // Save the HTML data inside the homepage section
  let data = {
    html: $(`#homepage`).html()
  };
  // Save the data object to localStorage
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
});