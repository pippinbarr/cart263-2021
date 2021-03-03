/**

Transform poem
Pippin Barr

A translation of a previous example to use CSS animation instead of
animating view the DOM. It's significantly simpler, but does have the
disadvantage of not being able to parameterize the movements - e.g. there's
no way for us to make the moving elements move in a random direction.

Most the action is in the CSS file.

*/

"use strict";

// When you mouse over an element with the appropriate class we add a CSS class
// that includes a CSS animation

$(`.mover`).one(`mouseenter`, function(event) {
  $(this).addClass(`move`);
});

$(`.spinner`).one(`mouseenter`, function(event) {
  $(this).addClass(`spin`);
});

$(`.skewer`).one(`mouseenter`, function(event) {
  $(this).addClass(`skew`);
});