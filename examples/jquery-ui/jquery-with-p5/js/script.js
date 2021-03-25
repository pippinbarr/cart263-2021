/**

p5.js and jQuery (Friends Forever)
Pippin Barr

A very rough and ready example of some integration between p5.js and
jQuery and jQuery UI (and HTML and CSS).

Creates a p5 canvas displaying a moving circle and allows the user to
interact with it via HTML UI elements via jQuery event handlers. Also
pops up a dialog in the centre of the canvas for good measure.

*/

"use strict";

// The circle displayed in our p5 sketch
let circle = {
  x: 0,
  y: 250,
  size: 100,
  speed: 0,
  color: `#ff0000`
};
// The current background color of the sketch
let bgColor = `#000000`;

// Toggle the sketch's visibility with the toggle button
$(`#toggle-p5`).on(`click`, function(event) {
  $(`#p5js-canvas`).slideToggle();
});

// Pop open the dialog when the user clicks the button
$(`#popup-dialog`).on(`click`, function(event) {
  $(`#popup`).dialog(`open`);
});

// Set the sketch's background color with the background color slider
$(`#select-background`).on(`input`, function(event) {
  bgColor = $(this).val();
});

// Set the circle fill slider's starting value to the circle's starting color
$(`#circle-fill`).val(circle.color);
// Set the circle fill color with the circle fill slider
$(`#circle-fill`).on(`input`, function(event) {
  circle.color = $(this).val();
});

// Set the circle's movement speed with the circle speed slider
$(`#circle-speed`).on(`input`, function(event) {
  circle.speed = parseFloat($(this).val());
});

/**
The standard p5 function called when the program begins. Sets up the canvas
and creates the dialog box.
*/
function setup() {
  // Create the canvas
  let canvas = createCanvas(500, 500);
  // Move the canvas within the HTML into the appropriate section
  canvas.parent('p5js-canvas');
  // Create the dialog box here because it relies on the canvas having
  // been created to choose its position
  $(`#popup`).dialog({
    // Don't open right away
    autoOpen: false,
    // Position the dialog based on the canvas
    position: {
      my: `center`,
      at: `center`,
      of: `#p5js-canvas canvas`
    }
  });
}

/**
The standard p5 function called once per frame. Fills the background and
draws a moving circle according to the circle object.
*/
function draw() {
  // Fill the background
  background(bgColor);

  // Display the circle based on its properties
  push();
  fill(circle.color);
  noStroke();
  ellipse(circle.x, circle.y, circle.size);
  pop();

  // Move the circle and wrap
  circle.x += circle.speed;
  if (circle.x > width) {
    circle.x = 0;
  }
}