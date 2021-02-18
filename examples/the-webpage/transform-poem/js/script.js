/**
Transform Poem
Pippin Barr

This program adds mouse interactions with specific words in the poem
displayed on the webpage. Some words fly away, some rotate, and one skews.
*/

"use strict";

// Use the helper function to add specific effects
// First argument is the class of the span around an element to interact with
// Second argument is the function to call on mouse enter
addInteraction(`mover`, startTranslate);
addInteraction(`spinner`, startRotate);
addInteraction(`skewer`, startSkew);


/**
Adds mouseenter event listeners to every element with the specified class
and calls the provided function once the first time the event is triggered.
*/
function addInteraction(className, callback) {
  // Get all the elements matching the class
  let elements = document.getElementsByClassName(className);
  // Loop through them
  for (let i = 0; i < elements.length; i++) {
    // Listen for a mouseentere event and call the callback
    elements[i].addEventListener(`mouseenter`, callback, {
      once: true
    });
  }
}

/**
Uses the browser's animation event to set a velocity for the element
and then starts repeatedly moving it
*/
function startTranslate(event) {
  // Run a function at the next animation frame
  requestAnimationFrame(function() {
    // Choose a random velocity in any direction
    let vx = 5 - (Math.random() * 10);
    let vy = 5 - (Math.random() * 10);
    // Call the translate function to move the element that triggered
    // the event, starting from a relative position of 0, 0 and using
    // the velocity
    translate(event.target, 0, 0, vx, vy);
  });
}

/**
Moves the position using the velocity, then sets the element's position.
Then requests another frame of animation to do it all again!
*/
function translate(element, x, y, vx, vy) {
  // Move position
  x += vx;
  y += vy;
  // Set position
  element.style.left = `${x}px`;
  element.style.top = `${y}px`;
  // Next frame do the same thing
  requestAnimationFrame(function() {
    translate(element, x, y, vx, vy);
  });
}

/**
Begins the pross of rotating the triggering element
*/
function startRotate(event) {
  // On the next animation frame
  requestAnimationFrame(function() {
    // Use the rotate function to rotate the triggering element
    // starting from a rotation of 0
    rotate(event.target, 0);
  });
}

/**
Increases the angle then sets the element's rotation transform. Then does it again.
*/
function rotate(element, angle) {
  // Increase angle
  angle += 10;
  // Set the element's rotation transform
  element.style.transform = `rotate(${angle}deg)`;
  // Do it again next frame
  requestAnimationFrame(function() {
    rotate(element, angle);
  });
}

/**
Begins the pross of skewing the triggering element
*/
function startSkew(event) {
  requestAnimationFrame(function() {
    skew(event.target, 0);
  });
}

/**
Increases the skew angle then sets the element's skew transform. Then does it again.
*/
function skew(element, angle) {
  // Increase the skew angle
  angle += 1;
  // Set the skew transform
  element.style.transform = `skew(${angle}deg)`;
  // Do it again next frame
  requestAnimationFrame(function() {
    skew(element, angle);
  });
}