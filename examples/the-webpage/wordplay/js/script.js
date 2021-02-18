/**
Wordplay
Pippin Barr

Mousing over the letters on the webpage cause them to fly away randomly.
This has some serious flaws, notably it breaks word wrapping! It would be
smarter to use a library like https://splitting.js.org/
*/

"use strict";

// Maximum speed a letter can move
const MAX_SPEED = 4;
// The text to display
let words = `That was the last time I saw him.`;

// Off we go!
setup();

/**
Goes through the text, splits it into characters and adds
each one to the page in a space. Adds event listeners to the
individual spans to cause them to move on mouse enter.
*/
function setup() {
  // Get the text element we will put our text into
  let text = document.getElementById(`text`);
  // Split the words string into an array of individual characters
  let chars = words.split(``);
  // Go through every character
  for (let i = 0; i < chars.length; i++) {
    // Create a new <span> element
    let span = document.createElement(`span`);
    // If the character is a space, we should add it to the span's HTML
    // as &nbsp so it is an explicit space character (otherwise we will have
    // no word breaks)
    if (chars[i] === ` `) {
      span.innerHTML = `&nbsp`;
    }
    // Otherwise we just add the character itself
    else {
      span.innerHTML = chars[i];
    }
    // Add the character class to the span (required styling so that we
    // can use its transform property)
    span.classList.add(`character`);
    // Call "fly" on mouse enter (only once)
    span.addEventListener(`mouseenter`, fly, {
      once: true
    });
    // Add the span to the text
    text.appendChild(span);
  }
}

/**
Starts the flying process by choosing a random velocity and making the
first move.
*/
function fly(event) {
  // Choose a random velocity
  let vx = MAX_SPEED / 2 - Math.random() * MAX_SPEED;
  let vy = MAX_SPEED / 2 - Math.random() * MAX_SPEED;
  // On the next frame
  requestAnimationFrame(function() {
    // Start the element moving at this velocity from its starting position of 0,0
    move(event.target, 0, 0, vx, vy);
  })
}

/**
Moves the position by the velocity and repositions the element, then runs again
on the next frame
*/
function move(element, x, y, vx, vy) {
  // Move the position
  x += vx;
  y += vy;
  // Set the transform to the new position
  element.style[`transform`] = `translate(${x}px,${y}px)`;
  // On the next frame do it again
  requestAnimationFrame(function() {
    move(element, x, y, vx, vy);
  });
}