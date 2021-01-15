"use strict";

/*****************

Doctor, doctor!
Pippin Barr

A simple therapy session between the Eliza chatbot and itself, using speech
output and speech input to conduct the session.

Designed to work with computer speakers feeding back into computer microphone.
No headphones.

Uses:

ResponsiveVoice
https://responsivevoice.org/

annyang
https://www.talater.com/annyang/

Elizabot
https://www.masswerk.at/elizabot/

******************/

// Keep track of which voice to speak in
let doctor1Voice = "UK English Female";
let doctor2Voice = "UK English Male";
let currentVoice = doctor1Voice;
// A variable to hold our Eliza bot
let eliza;
let currentSpeech = ``;

/**
Create the canvas
*/
function setup() {
  createCanvas(500, 500);
}

/**
Display the currently spoken text
*/
function draw() {
  background(0);

  push();
  textSize(18);
  textAlign(CENTER);
  rectMode(CENTER);
  fill(255, 255, 0);
  text(currentSpeech, width / 2, height / 2, width - width / 10, height / 2);
  pop();
}

/**
Initialise elizabox and say her first line. Called on mouse click.
*/
function start() {

  // Initialise annyang with no commands (because we just want to listen to whatever it hears)
  annyang.init({});
  // Whenever something is heard, handle it as input to Eliza
  annyang.addCallback('result', handleSpeech);
  // Start the engine
  annyang.start();

  // Create our eliza chatbot for processing the responses
  eliza = new ElizaBot();
  // Get her starting comment and say it
  let initial = eliza.getInitial();
  responsiveVoice.speak(initial, currentVoice);
}

/**
Called when annyang detects speech, provides an array of possible
interpretations in the speech argument
*/
function handleSpeech(speech) {
  // Get the first (best) interpretation of what was said from the speech array
  // which contains multiple possible interpretations of the user's speech
  let interpretation = speech[0];

  // Add the interpretation to the string to display on the canvas
  currentSpeech = `"${interpretation}"`;

  // Get Eliza's response to the first possible interpretation
  let response = eliza.transform(interpretation);

  // Swap the doctor's voice so it's more conversational
  if (currentVoice === doctor1Voice) {
    currentVoice = doctor2Voice;
  }
  else {
    currentVoice = doctor1Voice;
  }
  // Say the response (which will be picked up by annyang through the computer speakers, hopefully)
  responsiveVoice.speak(response, currentVoice);
}

/**
Start the bots talking!
*/
function mousePressed() {
  start();
}