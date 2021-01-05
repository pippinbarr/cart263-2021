"use strict";

/*****************

Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!

******************/

const TILE_SIZE = 50;

let world = [
  [`W`, `W`, `W`, `W`, `W`, `W`, `W`, `W`, `W`, `W`],
  [`W`, ` `, ` `, ` `, ` `, ` `, ` `, ` `, ` `, `W`],
  [`W`, ` `, `W`, `W`, `W`, `W`, `W`, `W`, ` `, `W`],
  [`W`, ` `, ` `, ` `, ` `, ` `, ` `, `W`, ` `, `W`],
  [`W`, ` `, `W`, `W`, `W`, `W`, `W`, `W`, ` `, `W`],
  [`W`, ` `, `W`, ` `, ` `, ` `, ` `, `W`, ` `, `W`],
  [`W`, ` `, `W`, ` `, `W`, `W`, ` `, `W`, ` `, `W`],
  [`W`, ` `, ` `, ` `, ` `, `W`, `W`, `W`, ` `, `W`],
  [`W`, `W`, `W`, `W`, ` `, ` `, ` `, `W`, ` `, `W`],
  [`W`, ` `, ` `, ` `, ` `, `W`, ` `, ` `, ` `, `W`],
  [`W`, `W`, `W`, `W`, `W`, `W`, `W`, `W`, `W`, `W`],
];

let player = {
  row: 5,
  col: 5
};

// preload()
// Description of preload
function preload() {

}


// setup()
// Description of setup
function setup() {
  let canvasHeight = world.length * TILE_SIZE;
  let canvasWidth = world[0].length * TILE_SIZE;
  createCanvas(canvasWidth, canvasHeight);
}


// draw()
// Description of draw()
function draw() {
  background(255);

  displayWorld();
  displayPlayer();
}

function displayWorld() {
  for (let row = 0; row < world.length; row++) {
    for (let col = 0; col < world[row].length; col++) {
      let tile = world[row][col];
      switch (tile) {
        case ` `:
          break;
        case `W`:
          displayWall(row, col);
          break;
      }
    }
  }
}

function displayWall(row, col) {
  let x = col * TILE_SIZE;
  let y = row * TILE_SIZE;
  push();
  noStroke();
  fill(0);
  rect(x, y, TILE_SIZE);
  pop();
}

function displayPlayer() {
  let x = player.col * TILE_SIZE;
  let y = player.row * TILE_SIZE;
  push();
  noStroke();
  fill(255, 0, 0);
  rect(x, y, TILE_SIZE);
  pop();
}

function keyPressed() {
  let move = {
    row: 0,
    col: 0
  };

  switch (keyCode) {
    case LEFT_ARROW:
      move.col = -1;
      break;
    case RIGHT_ARROW:
      move.col = 1;
      break;
    case UP_ARROW:
      move.row = -1;
      break;
    case DOWN_ARROW:
      move.row = 1;
      break;
  }

  let nextPosition = {
    row: player.row + move.row,
    col: player.col + move.col
  };

  if (world[nextPosition.row][nextPosition.col] !== `W`) {
    player.row = nextPosition.row;
    player.col = nextPosition.col;
  }
}