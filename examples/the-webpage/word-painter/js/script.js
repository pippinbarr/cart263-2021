/**
Word Painter
Pippin Barr

A text effect that leaves a trail of colored words when the mouse
passes over them. Over time the trail erases itself back to the
default coloor.
*/

"use strict";

// Lorem ipsum in an array to generate the page content
// We're doing this because we need to wrap every word in a <span>
// tag so that we can manipulate every word separately.
const loremIpsumStrings = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent posuere nibh purus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus in lobortis sem. Donec nec sem eu ipsum rutrum feugiat a ac ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam neque est, vehicula nec feugiat sit amet, consectetur vitae metus. Nulla ut nibh non diam pharetra mollis a ut justo.`,
  `Integer sagittis dui et maximus mollis. Aliquam erat volutpat. Curabitur augue ante, lobortis sed augue in, ullamcorper rhoncus purus. Integer eget consequat lacus. Donec auctor tellus orci, gravida scelerisque justo varius in. Pellentesque pellentesque nec dolor quis fringilla. Praesent cursus nibh sit amet massa vulputate, et sollicitudin leo accumsan. Sed sollicitudin eros tortor, vitae venenatis arcu commodo sed.`,
  `Sed cursus viverra mi vitae mollis. Aenean egestas consectetur faucibus. Vestibulum lobortis quam ac enim malesuada scelerisque. Fusce placerat consectetur velit aliquet consectetur. Nunc pulvinar justo dignissim porta laoreet. Donec lacinia lacus in turpis cursus, sit amet hendrerit leo varius. Mauris egestas diam orci, ut porta sapien tempus eget. Quisque ultrices consequat metus, ac ultrices eros laoreet in. Praesent ac feugiat ante. Nunc leo dui, tincidunt eu semper ut, sollicitudin quis lacus.`,
  `Cras pulvinar, libero a imperdiet ultricies, nulla libero convallis nibh, sit amet mattis felis justo vel sapien. Morbi a urna elementum, tempor augue a, bibendum ante. Aliquam erat volutpat. Vestibulum fermentum tortor vitae quam porta facilisis. Ut lobortis non nisi et pharetra. Suspendisse sed suscipit urna, non malesuada lectus. Sed lacinia at sapien ut tincidunt. Nam sit amet iaculis felis. Mauris a congue dui. Quisque vehicula, diam non porta vehicula, dui leo convallis tortor, in elementum magna augue vel velit. Duis vulputate tincidunt odio, ac bibendum sapien dignissim ac.`,
  `Suspendisse nec nisi sit amet tellus accumsan semper vel vitae metus. Nulla non venenatis sem. Suspendisse pretium augue vitae aliquam blandit. Praesent vitae nisl erat. Mauris quis diam quis dui egestas auctor quis in arcu. Nam egestas porttitor elit, eget interdum est cursus id. Vestibulum vitae rhoncus enim, quis tincidunt dolor. Duis faucibus quam vitae lectus dignissim egestas in vel sapien. Praesent feugiat facilisis fringilla. Curabitur at sagittis felis. Donec tellus turpis, efficitur id eros accumsan, mollis tincidunt mauris. Sed vulputate nunc odio, nec scelerisque augue egestas a.`
];

// Add the lorem ipsum to the page (complete with event listeners)
addLoremIpsum();

/**
Goes through the lorem ipsum array and takes each word, wrapping it in a span
that responds to mouse over events in order to change color.
*/
function addLoremIpsum() {
  // Gets the section we will put the page content into
  const section = document.getElementById(`lorem-ipsum`);
  // Loop through the array of strings
  for (let i = 0; i < loremIpsumStrings.length; i++) {
    // Create a <p> element
    const paragraph = document.createElement(`p`);
    // Get an array of individual words from the current string of lorem ipsum
    // by splitting it at every space character
    const words = loremIpsumStrings[i].split(` `);
    // Go through every word
    for (let j = 0; j < words.length; j++) {
      // Create a <span> element
      const span = document.createElement(`span`);
      // Add the "word" class to the span (not really doing much right now)
      span.classList.add(`word`);
      // Set the text of the span to the current word so it will display
      span.innerText = `${words[j]} `;
      // Add a mouse enter listener so we can change the span's color
      span.addEventListener(`mouseenter`, mouseEnterWord);
      // Add the current span (word) the current paragraph
      paragraph.appendChild(span);
    }
    // Add the current paragraph to the main section on the webpage
    section.appendChild(paragraph);
  }
}

/**
Randomly changes the color of the moused over word and sets a timer to revert
it to black (to give the appearance of a moving trail)
*/
function mouseEnterWord(event) {
  // From: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
  // So create a random hexadecimal color we can use
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  // Set the element's color to the random color
  event.target.style[`color`] = randomColor;
  // Set a timeout to revert the color to black after 1500 milliseconds
  setTimeout(function() {
    event.target.style[`color`] = `#000000`;
  }, 1500);
}