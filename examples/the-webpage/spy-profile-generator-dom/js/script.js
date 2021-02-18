"use strict";

/*****************

Spy Profile Generator
Pippin Barr

Asks the user for their name and generates a spy profile for them! Uses
JSON data to create the profile. Generates a password and requires that
password to view the profile when the program is loaded again.

Uses:

Darius Kazemi's corpora project:
https://github.com/dariusk/corpora/

******************/

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

function newUser() {
  Promise.all([
      fetch(TAROT_DATA_URL).then(response => response.json()),
      fetch(OBJECT_DATA_URL).then(response => response.json()),
      fetch(INSTRUMENT_DATA_URL).then(response => response.json())
    ])
    .then((data) => {
      let tarotData = data[0];
      let objectData = data[1];
      let instrumentData = data[2];

      let profile = generateProfile(tarotData, objectData, instrumentData);
      setProfile(profile);
    })
    .catch((err) => {
      console.log(err);
    });
}

function generateProfile(tarot, objects, instruments) {
  let username = prompt(`Username:`);
  let card = random(tarot.tarot_interpretations);

  let profile = {
    username: username,
    alias: `The ${random(instruments.instruments)}`,
    secretWeapon: random(objects.objects),
    password: random(card.keywords)
  };

  // Save the resulting profile to local storage
  localStorage.setItem(PROFILE_DATA_KEY, JSON.stringify(profile));

  return profile;
}

function setProfile(profile) {
  document.getElementById(`username`).innerText = profile.username;
  document.getElementById(`alias`).innerText = profile.alias;
  document.getElementById(`secret-weapon`).innerText = profile.secretWeapon;
  document.getElementById(`password`).innerText = profile.password;
}

function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}