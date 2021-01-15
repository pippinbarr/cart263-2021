"use strict";

/*****************

Feelings
Pippin Barr

A creepy program that enjoys being interacted with a little too much. Says
things when different p5 events are triggered.

Uses:

ResponsiveVoice
https://responsivevoice.org/

******************/

/**
Creates a canvas.
*/
function setup() {
  createCanvas(windowWidth, windowHeight);
}


/**
Does nothing.
*/
function draw() {

}

// All remaining functions are different p5 events and responses from the program
function mousePressed() {
  say(`That's it. Press my mouse.`);
}

function mouseDragged() {
  say(`Drag me anywhere you want.`);
}

function mouseReleased() {
  say(`Don't let me go.`);
}

function doubleClicked() {
  say(`Never stop clicking.`);
}

function mouseWheel() {
  say(`Roll my wheel`);
}

function mouseMoved() {
  say(`Move my mouse.`);
}

function keyPressed() {
  say(`Keycode ${keyCode} is my favourite key.`);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  say(`That's the perfect size.`);
}

/**
Uses responsive voice to say the provided speech parameter in a creepy voice.
*/
function say(speech) {
  // Cancel any prior speech (to avoid way too much talking)
  responsiveVoice.cancel();

  // Say the current speech in a low and slow and gross way
  responsiveVoice.speak(speech, `UK English Male`, {
    rate: 0.5,
    pitch: 0.5
  });
}