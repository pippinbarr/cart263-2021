/**
Two Way Scrolling
Pippin Barr

A surprising amount of work to create a two column layout where the columns
scroll in opposite directions!
*/

"use strict";

// Objects to store information about the two divs we are scrolling through
let rightDiv = {
  element: undefined, // Reference to the element on the page
  pScrollTop: undefined, // Previous scroll top position
  autoScrolled: false // Whether we just scrolled it using our code
};

let leftDiv = {
  element: undefined,
  pScrollTop: undefined,
  autoScrolled: false
};

// Off we go
setup();

/**
Sets up the information about our two columns and adds event listeners
to handle our special scrolling!
*/
function setup() {
  // Get references to the elements
  leftDiv.element = document.getElementById(`left-div`);
  rightDiv.element = document.getElementById(`right-div`);
  // Scroll the right-hand element to the very bottom
  rightDiv.element.scrollTop = rightDiv.element.scrollHeight;
  // Remember the previous scroll position for each
  leftDiv.pScrollTop = leftDiv.element.scrollTop;
  rightDiv.pScrollTop = rightDiv.element.scrollTop;
  // Listen for the scroll event for both divs and when we hear it
  // trigger opposite direction scrolling in the other div
  leftDiv.element.addEventListener('scroll', function(e) {
    // Scroll the rightDiv in the opposite direction to the left div
    oppositeScroll(leftDiv, rightDiv);
  });
  // Vice versa
  rightDiv.element.addEventListener('scroll', function(e) {
    oppositeScroll(rightDiv, leftDiv);
  });
}

/**
Scrolls the other div based on the main div that was scrolled
*/
function oppositeScroll(main, other) {
  // Check if the reference (scrolled) div was just scrolled by this program
  // because if it was, that's what triggered the scroll event and we don't
  // want to react to it!
  if (main.autoScrolled) {
    // Now that we've successfully ignored the scroll event for our program's
    // scrolling, we can reset the boolean and exit the function
    main.autoScrolled = false;
    main.pScrollTop = main.element.scrollTop;
    return;
  }

  // If we get here we want to scroll the other div in the opposite direction to
  // the main div that was just scrolled by the user

  // Calculate the distance that was scrolled since the last scrolling
  let delta = main.element.scrollTop - main.pScrollTop;
  // Remember the new scroll position
  main.pScrollTop = main.element.scrollTop;
  // Change the other div's scroll position by the same amount in the negative
  other.element.scrollTop += -delta;
  // Remember that we just scrolled the other div so we can ignore the
  // corresponding scroll event
  other.autoScrolled = true;
}