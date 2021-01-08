# Object parameters {

---

## Summary

Using object literals as parameters for functions and methods is a nice way to avoid extremely long argument and parameter lists. Destructuring lets us take this one step further for really convenient code.

---

## Contents

* Too many parameters
* Object literals as parameters
* Destructuring object parameters

---

## Too many parameters

Sometimes when you're writing functions or methods you find you have so many parameters that things get really confusing. Consider:

```javascript
function setup() {
  createCanvas(500, 500);
}

function draw() {
  drawFancyRect(250, 250, 200, 200, 255, 255, 0, CENTER);
}

function drawFancyRect(x, y, w, h, r, g, b, mode) {
  push();
  fill(r, g, b);
  rectMode(mode);
  rect(x, y, w, h);
  pop();
}
```

Notice especially how **calling** `drawFancyRect()` in `draw()` looks really confusing because you can't easily tell what all the different numbers mean. This problem occurs in methods and constructors in Object-Oriented Programming too.

---

## Object literals as parameters

A great solution to most of this problem is to have your function, method, or constructor take a **single** argument that is an **object** with properties representing all the different values needed. This allows you to use property names for clarity when calling it...

```javascript
function setup() {
  createCanvas(500, 500);
}

function draw() {
  let config = {
    x: 250,
    y: 250,
    width: 200,
    height: 200,
    fillColor: {
      r: 255,
      g: 255,
      b: 0
    },
    mode: CENTER
  };
  drawFancyRect(config);
}

function drawFancyRect(config) {
  push();
  fill(config.fillColor.r, config.fillColor.g, config.fillColor.b);
  rectMode(config.mode);
  rect(config.x, config.y, config.width, config.height);
  pop();
}
```

This is already significantly better because in `draw()` we can easily see the property names of the values being used in our `drawFancyRect()` call.

It does lead to a slightly uglier `drawFancyRect()` though. There are two problems:

1. We have to write `config` everywhere to get the different values out of the object parameter
2. Because there's just a single parameter object, it's harder to tell what the full set of possible properties the function expects to be in the object are

We can fix this!

---

## Destructuring object parameters

"Destructuring" is a bit of a scary word, but it's very helpful in this case. In JavaScript it allows us to easily break an object down into individual variables based on its properties, which is lovely:

```javascript
function setup() {
  createCanvas(500, 500);
}

function draw() {
  let config = {
    x: 250,
    y: 250,
    width: 200,
    height: 200,
    fillColor: {
      r: 255,
      g: 255,
      b: 0
    },
    mode: CENTER
  };
  drawFancyRect(config);
}

// NEW: We write the individual property names inside curly brackets
// to DESTRUCTURE the object parameter into individual variables
function drawFancyRect({x, y, width, height, fillColor, mode}) {
  // Then we can just use the resulting variables in the usual way
  push();
  fill(fillColor.r, fillColor.g, fillColor.b);
  rectMode(mode);
  rect(x, y, width, height);
  pop();
}
```

Quite beautiful really. It's well worth getting into the habit of using this approach when you're writing functions/methods/constructors that have a lot of parameters.

---

# }
