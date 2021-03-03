/**

Spy Profile Generator
Pippin Barr

An application for spies to apply for profiles in a system and then later
log in with a username and password to view their profile.

*/

"use strict";

// Key name for localStorage
const TOP_SECRET_DATA_SAVE_NAME = `top-secret-data`;
// The default user data contains an empty array of users
let userData = {
  users: []
};

// URLs for JSON data used to generate profiles
const TAROT_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`;
const OBJECTS_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`;
const INSTRUMENTS_URL = `https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`;

// Variables to hold the JSON data
let tarotData;
let objectsData;
let instrumentsData;

// Load the existing user data if it exists
let loadedData = JSON.parse(localStorage.getItem(TOP_SECRET_DATA_SAVE_NAME));
if (loadedData) {
  userData = loadedData;
}

// We use jQuery's .when() method to **wait** for all the JSON to load and then store the
// resulting data in the appropriate variables, then start up the actual site.
$.when(
  // Load the three JSON files
  $.getJSON(TAROT_URL),
  $.getJSON(OBJECTS_URL),
  $.getJSON(INSTRUMENTS_URL)
).then(function(loadedTarotData, loadedObjectsData, loadedInstrumentsData) {
  // Store the loaded data in the specific variables
  tarotData = loadedTarotData[0];
  objectsData = loadedObjectsData[0];
  instrumentsData = loadedInstrumentsData[0];

  // Now we can activate the login and new user UIs
  setupLoginUI();
  setupNewUserUI();
});


/************************************
Login Interface
************************************/

/**
Activate the login and new user buttons by adding event listeners
*/
function setupLoginUI() {
  $(`#login-submit-button`).on(`click`, login);
  $(`#login-new-user-button`).on(`click`, newUser);
}

/**
Called when the user clicks the login button. Gets the entered username
and password and checks if they match any user in the user data. If so
it loads the profile, if not it resets the interface.
*/
function login() {
  // Get the username and password from the text fields
  let username = $(`#login-username`).val();
  let password = $(`#login-password`).val();
  // Filter the user data's users array to extract any users with
  // a username matching the one entered by the user
  // This is using the .filter() method of JavaScript arrays which is
  // extremely powerful - worth looking into if you want to be fancy
  let users = userData.users.filter((user) => user.username === username);
  // If the resulting array of users matching the username is empty,
  // then they entered a username that wasn't there
  if (users.length === 0) {
    // The user doesn't exist
    alert("No such user");
    resetLogin();
  }
  // Otherwise the username was found so we need to check the password
  else {
    // We're assuming a username is unique, so we'll check the password of
    // the FIRST user in the list of users with the matching username...
    if (users[0].password === password) {
      // Password correct
      $(`#login`).hide();
      loadProfile(users[0]);
      $(`#profile`).show();
    }
    else {
      // Incorrect password
      alert("Password incorrect");
      resetLogin();
    }
  }
}

/**
Empties the username and password fields
*/
function resetLogin() {
  $(`#login-username`).val(``);
  $(`#login-password`).val(``);
}

/**
Switches from the login to the new user interface
*/
function newUser() {
  $(`#login`).hide();
  $(`#new-user`).show();
}


/************************************
New User Interface
************************************/

/**
Listens for a click on the new user submission button and triggers
the create user process
*/
function setupNewUserUI() {
  $(`#new-user-submit-button`).on(`click`, createUser);
}

/**
Creates a new new profile with the username provided and randomly
generated properties. Saves it to the user database in localStorage
*/
function createUser() {
  // Get the username they entered in the text field
  let username = $(`#new-user-username`).val();

  // If they didn't write anything, admonish them
  if (username === ``) {
    alert(`Please enter a username`);
  }
  // If the username is already in the existing database, admonish them
  else if (userData.users.filter(user => user.username === username).length > 0) {
    alert(`Username taken`);
  }
  // Otherwise it's a legitimate username so we can create a profile for them
  else {
    // Create an object with all the properties of the profile
    let user = {
      // Use their username
      username: username,
      // Generate a random password based on an instrument
      password: random(instrumentsData.instruments),
      // Generate a random alias based on a tarot card name
      alias: random(tarotData.tarot_interpretations).name,
      // Generate a random secret weapon based on an everyday object
      secretWeapon: random(objectsData.objects)
    };
    // Add this new user profile to the user data's users array
    userData.users.push(user);
    // Save it to localStorage
    localStorage.setItem(TOP_SECRET_DATA_SAVE_NAME, JSON.stringify(userData));

    // Hide the new user interface, load the new profile, and show the
    // profile interface
    $(`#new-user`).hide();
    loadProfile(user);
    $(`#profile`).show();
  }
}


/************************************
Helpers
************************************/

/**
Loads the provided user profile object into the appropriate
spans on the page
*/
function loadProfile(user) {
  $(`#profile-username`).text(user.username);
  $(`#profile-password`).text(user.password);
  $(`#profile-alias`).text(user.alias);
  $(`#profile-secret-weapon`).text(user.secretWeapon);
}

/**
Returns a random element from the provided array
*/
function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}