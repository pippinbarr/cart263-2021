/**

Fridge Poetry
Pippin Barr

Displays fridge poetry on the page and lets the player arrange the words
as they wish. Saves each new configuration to localStorage so that when
the player returns the words are where they left them.

Uses:

jQuery:
https://jquery.com

jQuery UI:
https://jqueryui.com

*/

"use strict";

// Our save key for localStorage
const LOCAL_STORAGE_KEY = `fridge-poetry-data`;
// The string our fridge poetry will represent
let string = "the quick brown fox jumped over the lazy dog";


setup();

/**
Loads any data or begins from default and creates the fridge magnets
*/
function setup() {
  // First try to load the words from storage
  let loaded = loadWords();

  // If this failed there was no word data...
  if (!loaded) {
    // So we create fresh words from our string
    createWordsFromString(string);
  }
};

/**
Tries to load words from localStorage
If successful it adds all the words to the page
*/
function loadWords() {
  // Retrieve the data (if it's there) using getItem()
  let wordsData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if (wordsData === null) {
    // The result will be null if there is no data with that name
    // So we can return false to indicate new words need to be generated
    return false;
  }

  // If we get here then there was data loaded
  // So create the words on the page based on the data
  createWordsFromData(wordsData);
  // Return true to indicate that the words loaded successfully
  return true;
}

/**
Creates fridge magnet words from a specified string
*/
function createWordsFromString(string) {
  // Split the string into separate words (using spaces as the division point)
  let wordsArray = string.split(` `);
  // Run through the array generating words
  for (let i = 0; i < wordsArray.length; i++) {
    // Get the word
    let word = wordsArray[i];
    // Choose a random location on the page
    // (Multiplying by 0.9 as a not-amazing way to make sure they don't display off the edge)
    let x = Math.random() * window.innerWidth * 0.9;
    let y = Math.random() * window.innerHeight * 0.9;
    // Create the word at that location
    createWord(word, x, y);
  }
  // Once all words are generated, save them so they'll be available and in the same place
  // next time
  saveWords();
}

/**
Creates fridge magnet words from loaded data
*/
function createWordsFromData(data) {
  // Run through the words in the data and create them according to the saved information
  for (let i = 0; i < data.words.length; i++) {
    let wordData = data.words[i];
    createWord(wordData.word, wordData.x, wordData.y);
  }
}

/**
Creates an element on the page representing the word at the position specified
*/
function createWord(word, x, y) {
  // Create the basic div with the word in it
  let $word = $(`<div>${word}</div>`);
  // Style it
  $word.addClass('word');
  // Make it draggable and tell it to save all words whenever it's dragged somewhere
  $word.draggable({
    stop: saveWords
  });
  // Add it to the page
  $(`body`).append($word);
  // Set its offset to reflect the position requested
  // (Annoyingly if you do this before appending it will break)
  $word.offset({
    left: x,
    top: y
  });
}

/**
Saves the current words and positions to storage
*/
function saveWords() {
  // Set up a data object to save everything
  let wordsData = {
    date: Date.now(), // Save the date as an extra piece of information
    words: [] // An array to store all the words currently on the page
  };

  // Go through each element with class 'word' on the page
  $('.word').each(function() {
    // Store the data about this word in an object
    let wordData = {
      word: $(this).text(),
      x: $(this).offset().left,
      y: $(this).offset().top
    };
    // Add this data object to the array of words in the data we're saving
    wordsData.words.push(wordData);
  });

  // Save the JSON string to storage as 'words'
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(wordsData));
}