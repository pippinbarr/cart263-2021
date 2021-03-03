"use strict";

/**

Spy Profile Generator
Pippin Barr

Asks the user for their name and generates a spy profile for them! Uses
JSON data to create the profile. Generates a password and requires that
password to view the profile when the program is loaded again.

Uses:

Darius Kazemi's corpora project:
https://github.com/dariusk/corpora/

*/

// URLs to JSON data
const TAROT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const OBJECT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const INSTRUMENT_DATA_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;
// The key used to save and load the data for this program
const PROFILE_DATA_KEY = `spy-profile-data`;


// Try to load the data
let data = JSON.parse(localStorage.getItem(PROFILE_DATA_KEY));
// Check if there was data to load
if (data) {
  // If so, ask for the password
  let password = prompt(`Password:`);
  // Check if the password is correct
  if (password === data.password) {
    alert(`Welcome, ${data.username}.`)
    // If is is, then setup the spy profile with the data
    setProfile(data);
  }
}
else {
  // If there is no data, generate a spy profile for the user
  newUser();
}

/**
Loads JSON data for user generation then generates a profile
*/
function newUser() {
  // We use Promise.all() here to guarantee the data all loads before
  // we do the things in the .then() part of this instruction.
  // Promises are a WHOLE THING that you can read more about!
  Promise.all([
      fetch(TAROT_DATA_URL).then(response => response.json()),
      fetch(OBJECT_DATA_URL).then(response => response.json()),
      fetch(INSTRUMENT_DATA_URL).then(response => response.json())
    ])
    // This part handles the resulting data
    // All three JSON files end up in a data array
    .then((data) => {
      // Assign across the data to the named variables
      let tarotData = data[0];
      let objectData = data[1];
      let instrumentData = data[2];
      // Generate a profile with the data
      let profile = generateProfile(tarotData, objectData, instrumentData);
      // Set the current profile to display on the page
      setProfile(profile);
    })
    // The catch part happens if there's an error loading the JSON
    .catch((err) => {
      console.error(err);
    });
}

/**
Generates a spy profile using the data provided
*/
function generateProfile(tarot, objects, instruments) {
  // Ask for the username
  let username = prompt(`Username:`);
  // Get a random tarot card (for the password)
  let card = random(tarot.tarot_interpretations);
  // Create the profile object
  let profile = {
    username: username, // The name the entered
    alias: `The ${random(instruments.instruments)}`, // Alias based on an instrument
    secretWeapon: random(objects.objects), // Weapon based on an everyday object
    password: random(card.keywords) // Password based on a tarot card's keyword
  };

  // Save the resulting profile to local storage
  localStorage.setItem(PROFILE_DATA_KEY, JSON.stringify(profile));
  // Return the profile so it can be used
  return profile;
}

/**
Displays the provided profile on the webpage by setting the innerText
of the appropriate spans by id
*/
function setProfile(profile) {
  document.getElementById(`username`).innerText = profile.username;
  document.getElementById(`alias`).innerText = profile.alias;
  document.getElementById(`secret-weapon`).innerText = profile.secretWeapon;
  document.getElementById(`password`).innerText = profile.password;
}

/**
Returns a random element from the provided array
*/
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}