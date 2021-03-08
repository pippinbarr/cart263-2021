/*

Beach Party
Pippin Barr

An application of jQuery UI's .draggable() and .resizable() to create
a beach party on a totally Tubular beach. Basic concept is "simple", but adds
some UI niceties and ties a few ideas together (sound, Tubular backround video
drag and (conditional) resize).

An exciting beach party with three intense animated gifs. Creates a small menu
at the bottom left which allows you to drag characters onto the beach and
then resize them to your desired size (as well as continue to drag them around).

Plays A Fifth of Beethoven to enhance the experience.

Uses:

jQuery:
https://jquery.com

jQuery UI:
https://jqueryui.com

Tubular:
https://www.seanmccambridge.com/tubular/

*/

// DISCLAIMER: This code is pretty old now, but it's such a nice example you know?


"use strict";

// Load our disco Beethoven into a variable
let music = new Audio('music/beethoven.mp3');
music.pause();

// Use tubular to inject a full window video into the wrapper div
$('#wrapper').tubular({
  // The plugin takes various options, but in this case we'll just give it
  // the video ID of the YouTube video we want.
  videoId: '4xOEUPBcl94?iv_load_policy=3'
});

// Now we handle when the user mouses over the user-interface version
// of an element to drag it by... making it draggable!
// (I'm calling the elements at the bottom of the screen that you use
// as an interface to get images to use the "master" versions of the GIFs.)
$('#content').on('mouseover', '.master', function() {
  // Make it draggable...
  $(this).draggable({
    // The start property takes a function that is called when dragging starts
    start: startMasterDrag,
    // The stop property contains a function that is called when the dragging is stopped
    // e.g. the mouse is released
    stop: stopMasterDrag
  });
});

// When the user mouses over a resizable element, we use jQuery
// to make it be resizable
$('#content').on('mouseover', '.resizable', enableResizeable);

// If the user moves the mouse off a resizable element,
// turn of jQuery's resizable so that the little resizing
// arrow disappears when not needed.
$('#content').on('mouseout', '.resizable', disableResizeable);

// And we can delete instances by double cilcking them
// We can find them by selecting for "resizable"
$('#content').on('dblclick', '.resizable', deleteImage);

// Called when the user starts to drag one of the master images in the UI
function startMasterDrag() {
  // First we add a new master version back onto the page (since we're
  // dragging away its element right now), we can 'clone' the currently
  // selected element for this (but we'll have to adjust it a bit)
  $('#content').append($(this).clone());
  // Now we can safely make the one we're dragging not the master
  $(this).removeClass('master');
  // Remove the 'start' event so it doesn't keep duplicating
  $(this).draggable(`option`, `start`, undefined);
}

// Called when the user stops dragging a master image (or any other image actually)
function stopMasterDrag() {
  // Did they drag it far enough out of the interface area?
  if ((Math.abs($(this).position().top) > $(window).height() * 0.85) && (Math.abs($(this).position().left) < 180)) {
    // If not, then remove the dragged element entirely because it's not far enough onto the beach
    $(this).remove();
    // Return immediately to avoid the rest of this function
    return;
  }
  // If we get here, it was dragged onto the beach, so...

  // We can make it resizable
  $(this).addClass('resizable');
  // We enable resizing right now since the user's mouse is by definition over this element
  $(this).resizable({
    aspectRatio: true, // Maintain the aspect ratio
  });
  // We need to explicitly call resizable with 'enable' in case
  // this element had been disabled previously.
  $(this).resizable('enable');

  // When the user stops dragging, we should turn on the music
  // if this is the first time they've interacted with the page.
  handleMusic();

  // Fade out the instructions
  // (If they're already faded out, this won't do anything)
  $('#instruction').fadeOut(5000);
}

// Called when the user stops resizing an element...
function handleMusic() {
  // If it's currently paused, we should start it
  if (music.paused) {
    // We want the music to loop, because it's that good.
    music.loop = true;
    // We want it to be full volume, naturally.
    music.volume = 1;
    // Now we play it.
    music.play();
  }
}

// Enables resizeable on the selected element
function enableResizeable() {
  $(this).resizable({
    aspectRatio: true, // Maintain the aspect ratio
  });
  // We need to explicitly call resizable with 'enable' in case
  // this element had been disabled previously.
  $(this).resizable('enable');
}

// Disable resizing on the selected element
function disableResizeable() {
  $(this).resizable('disable');
}

// Delete the selected element
function deleteImage() {
  // But first check it isn't the master UI version
  if (!$(this).hasClass('master')) {
    $(this).remove();
  }
}