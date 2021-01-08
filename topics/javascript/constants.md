## Constants {

---

## Summary

Variable are helpful because they can change while our program runs and this allows many amazing things to happen. Sometimes, however, we have variables we know we **never** want to change, and these should be made into **constants** so they also **cannot** change.

---

## Contents

* `const`
* In practice
* Usage advice
* Too much information?
  * Inconstant `const`
  * Inconstant naming conventions

---

## `const`

There are various values in a program that we want to give a name as we do with a variable, but which we don't want to change. JavaScript provides the `const` keyword for this.

```javascript
const PI = 3.14159;

PI = 4; // Error!
```

Because `PI` is declared as a constant, **we cannot change it** by assigning any new value. In the console we see a nice, clear error message:

```
Uncaught TypeError: Assignment to constant variable.
```

(Although we might question the seeming oxymoron of a "constant variable" to some extent. Oh well.)

We can make any kind of value a constant, not just numbers...

```javascript
const I_LOVE_TO_LEARN = true;
const MY_FAVORITE_PROGRAMMING_LANGUAGE = `JavaScript`;
const HOW_MUCH_WOOD_COULD_A_WOODCHUCK_CHUCK = undefined;
```

As you can see, the convention is to write constants in ALL CAPITALS with underscores between words.

---

## In practice

Consider this program to draw concentric circles on the canvas...

```javascript
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // Loop once for each of 10 circles, drawing them 50 pixels larger each time
  for (let i = 0; i < 10; i++) {
    push();
    fill(255, 50);
    ellipse(width / 2, height / 2, i * 50);
    pop();
  }
}
```

There are hardcoded numbers in here we know we should change to variables for clarity, notably the number of circles (`10`), the alpha value of the circles (`50`), and the amount the circle size increases per circle (`50`).

So we could just make all of them variables...

```javascript
let numCircles = 10;
let circleSizeIncrease = 50;
let circleAlpha = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // Loop once for each of 10 circles, drawing them 50 pixels larger each time
  for (let i = 0; i < numCircles; i++) {
    push();
    fill(255, circleAlpha);
    ellipse(width / 2, height / 2, i * circleSizeIncrease);
    pop();
  }
}
```

However, let's say we know we're never going to change the **number** of circles in our program, even though we might change their alpha or size increase. If we know that, we should change the `numCircles` variable to a constant. This acknowledges it won't change officially, and helps us to avoid potentially changing it by accident at some point.

```javascript
const NUM_CIRCLES = 10;
let circleSizeIncrease = 50;
let circleAlpha = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // Just for fun, since they ARE variables after all
  circleAlpha = map(mouseX, 0, width, 10, 100);
  circleSizeIncrease = map(mouseY, 0, height, 10, 100);

  // Loop once for each of 10 circles, drawing them 50 pixels larger each time
  for (let i = 0; i < NUM_CIRCLES; i++) {
    push();
    fill(255, circleAlpha);
    ellipse(width / 2, height / 2, i * circleSizeIncrease);
    pop();
  }
}
```

As programs become more complex, it is more and more useful to guarantee that we can't accidentally change variables by just making them constants. If it turns out we **do** want to be able to change them, we can convert them back to variables.

---

## Another example just for the sake of it

Consider this program to draw a grid of randomly shaded tiles...

```javascript
// Constants defining our grid
const TILE_SIZE = 50;
const COLUMNS = 10;
const ROWS = 10;

// Creates the canvas
function setup() {
  // Define the canvas size in terms of the grid constants
  createCanvas(TILE_SIZE * COLUMNS, TILE_SIZE * ROWS);
}

// Draw a sparkling grid
function draw() {
  background(0);

  // Loop through each row
  for (let row = 0; row < ROWS; row++) {
    // Loop through each column
    for (let col = 0; col < COLUMNS; col++) {
      // Draw a tile at the current row and column
      drawTile(row, col);
    }
  }
}

// Draw a tile at the specified row and column
function drawTile(row, col) {
  // Calculate the x and y of the tile on the canvas
  // by multiplying by the tile size
  let x = row * TILE_SIZE;
  let y = col * TILE_SIZE;
  // Draw a random shaded tile sized square at that location
  push();
  noStroke();
  let grey = random(50, 200);
  fill(grey);
  rect(x, y, TILE_SIZE, TILE_SIZE);
  pop();
}
```

Again, it's nice to use constants at the top of our script because we're not going to **change** the width, height, or tile size when the program's running. Therefore, we make those things **constants**.

---

## Usage advice

In general, if you have a variable you know will never change, make it a `const` and follow the naming conventions. Simple as that.

---

## Too much information?

### Inconstant `const`

Using `const` doesn't always guarantee a value cannot change. In particular, it doesn't work on **objects**...

```javascript
const cat = {
  name: `Fluffy`,
  age: 7
};

cat = 5; // Error! Can't assign a new value to a const

cat.name = `Fluffykins`; // No error! You CAN change the properties of a "constant" object
```

And it doesn't work on arrays...

```javascript
const primes = [1,2,3,5,7];

primes = [2,4,6,8,10]; // Error! Can't assign a new value to a const

primes[5] = 8; // No error! You CAN change the elements of a "constant" array.

primes.push(10); // No error! You CAN add elements to a "constant" array.
```

### Inconstant naming conventions

Because not all `const`s are created equal, the more specific advice on naming conventions is that you should use UPPER_CASE naming only when using `const` **and** a value that cannot be changed (e.g. a number, a string, a boolean), otherwise you should use standard camelCase.

Going even further, you'll see plenty of people using `const` who always just use camelCase anyway, ignoring the UPPER_CASE convention altogether. It's not the end of the world.

---

# }
