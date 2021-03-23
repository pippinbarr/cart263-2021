/**
Desperately Seeking Sadness
Pippin Barr

An emoji in search of sadness. The player controls a neutral face emoji
that they can fly like a spaceship using the arrow keys. They're amongst
a sea of thumbs up emojis which get in their way (physically) while they try
to find the single thumbs down emoji to collect it. Rinse and repeat!
*/

"use strict";

// Standard configuration for the game
let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: `arcade`
  },
  scene: [Boot, Play]
};

let game = new Phaser.Game(config);