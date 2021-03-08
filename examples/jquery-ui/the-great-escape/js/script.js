/**

The Prisoner
Pippin Barr

A lightly interactive adventure in which the player can
help to free a prisoner from prison either through the
power of imagination or through an escape tunnel.

Uses:

jQuery:
https://jquery.com

jQuery UI:
https://jqueryui.com

*/

"use strict";

// Hide the escape tunnel initially
$(`#escape-tunnel`).hide();

// Make the prisoner shake with rage
$(`#prisoner`).effect({
  effect: `shake`,
  duration: 1000,
  times: 10,
  distance: 5,
  complete: makePrisonerDraggable
});

// Ask the question on how to escape
$(`#question-dialog`).dialog({
  // Require the user to answer before interacting with the page
  modal: true,
  // Offer two options
  buttons: {
    // The imagination option removes the containment option on the prisoner
    "Imagination": function() {
      $(`#prisoner`).draggable(`option`, `containment`, `none`);
      $(this).dialog(`close`);
    },
    // The escape tunnel option opens the escape tunnel
    "Escape tunnel": function() {
      $(`#escape-tunnel`).show();
      makeTunnelDroppable();
      $(this).dialog(`close`);
    }
  },
});

/**
Makes the prisoner draggable
*/
function makePrisonerDraggable() {
  $(`#prisoner`).draggable();
  // Prisoner is draggable
  $(`#prisoner`).draggable({
    // Prisoner cannot be dragged out of the prison
    containment: `#prison`,
    // Prisoner gets an underline and turns blue when dragging starts
    start: function(event, ui) {
      $(this).addClass(`prisoner-dragging`, 1000);
    },
    // Prisoner loses underline and turns black when dragging stops
    stop: function(event, ui) {
      // NEW! Animated class removal
      $(this).removeClass(`prisoner-dragging`, 1000);
    }
  });
}

/**
Sets up the escape tunnel to be droppable
*/
function makeTunnelDroppable() {
  $(`#escape-tunnel`).droppable({
    // Elements dropped on escape tunnel are removed from the page
    drop: function(event, ui) {
      ui.draggable.remove();
      // And let's hide the tunnel too for a sneaky effect!
      $(this).hide({
        effect: `blind`,
        duration: 500
      });
    }
  });
}