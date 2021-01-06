# Functions {

---

## Summary

Functions are absolutely central to having a well-organized and efficient program. Most of all they allow us to make **modular** and **reusable** chunks of code.

---

## Contents

* Functions for organization
* Functions with arguments
* Functions with return values
* Modularity and reuse

---

## Functions for organization

Programs get confusing when we try to write a lot of lines of code that do different things...

```javascript
let cat = {
  x: 0,
  y: 0,
  size: 100,
  fill: {
    r: 100,
    g: 100,
    b: 0
  }
};

let mouse = {
  x: 100,
  y: 100,
  size: 50,
  fill: {
    r: 0,
    g: 100,
    b: 100
  }
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  // Move the cat with the (computer!) mouse
  cat.x = mouseX;
  cat.y = mouseY;

  // Move the mouse randomly
  mouse.x += random(-2,2);
  mouse.y += random(-2,2);

  // Check if the cat eats the mouse
  let d = dist(cat.x,cat.y,mouse.x,mouse.y);
  if (d < cat.size/2 + mouse.size/2) {
    noLoop(); // The cat ate the mouse and our simulation is over
  }

  // Draw the cat
  push();
  noStroke();
  fill(100,100,0);
  ellipse(cat.x,cat.y,cat.size);
  pop();

  // Draw the mouse
  push();
  noStroke();
  fill(200,0,200);
  ellipse(mouse.x,mouse.y,mouse.size);
  pop();
}
```

The comments help here, but it's clear this program is already getting out of hand and it's so simple! Breaking it down into functions helps just to keep things organized.

We __define a function__ by writing `function`, then the name of the function in camelCase, then parentheses, then curly brackets with the code for that function inside them.

We __call a function__ by writing its name with parentheses.


```javascript
let cat = {
  x: 0,
  y: 0,
  size: 100,
  fill: {
    r: 100,
    g: 100,
    b: 0
  }
};

let mouse = {
  x: 100,
  y: 100,
  size: 50,
  fill: {
    r: 0,
    g: 100,
    b: 100
  }
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  // Call our lovely functions...
  moveCat();
  moveMouse();
  handleCatEatMouse();
  drawCat();
  drawMouse();
}

// Define our functions...

// Move the cat with the (computer!) mouse
function moveCat() {
  cat.x = mouseX;
  cat.y = mouseY;
}

// Move the mouse randomly
function moveMouse() {
  mouse.x += random(-2,2);
  mouse.y += random(-2,2);
}

// Check if the cat eats the mouse
function handleCatEatMouse() {
  let d = dist(cat.x,cat.y,mouse.x,mouse.y);
  if (d < cat.size/2 + mouse.size/2) {
    noLoop(); // The cat ate the mouse and our simulation is over
  }  
}

// Draw the cat as a circle
function drawCat() {
  push();
  noStroke();
  fill(cat.fill.r,cat.fill.g,cat.fill.b);
  ellipse(cat.x,cat.y,cat.size);
  pop();
}

// Draw the mouse as a circle
function drawMouse() {
  push();
  noStroke();
  fill(mouse.fill.r,mouse.fill.g,mouse.fill.b);
  ellipse(mouse.x,mouse.y,mouse.size);
  pop();
}
```

This program is now **much more organized** that it was before. It's easier to find where to change what we need to change. The code is **modular**.


---

## Functions with arguments

Functions become much more powerful when we include **arguments**. These allow us to pass **values** into our functions when we call them and this allows the function to do **different things** depending on the values passed.

Consider the `drawCat()` and `drawMouse()` functions above. They're the same except that one draws a circle based on the cat's data and one draws a circle based on the mouse's data. With an argument for which animal to draw, we could combine them into a single function.

We could also make our eating function more sophisticated and general if we pass it the two animals to check. Then if we added more animals later, we could use this same function to handle them eating each other...

```javascript
let cat = {
  x: 0,
  y: 0,
  size: 100,
  fill: {
    r: 100,
    g: 100,
    b: 0
  }
};

let mouse = {
  x: 100,
  y: 100,
  size: 50,
  fill: {
    r: 0,
    g: 100,
    b: 100
  }
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  // Call our lovely functions...
  moveCat();
  moveMouse();
  // Handle the cat eating the mouse by passing them as parameters
  handleEating(cat,mouse);
  // Draw our cat and mouse by pass them as parameters to the drawAnimal function
  drawAnimal(cat);
  drawAnimal(mouse);
}

// Define our functions...

// Move the cat with the (computer!) mouse
function moveCat() {
  cat.x = mouseX;
  cat.y = mouseY;
}

// Move the mouse randomly
function moveMouse() {
  mouse.x += random(-2,2);
  mouse.y += random(-2,2);
}

// Check if the predator animal eats the prey animal
function handleEating(predator,prey) {
  let d = dist(predator.x,predator.y,prey.x,prey.y);
  if (d < predator.size/2 + prey.size/2) {
    noLoop(); // The predator ate the prey and our simulation is over
  }  
}

// Draw the animal passed in the animal argument
function drawAnimal(animal) {
  push();
  noStroke();
  fill(animal.fill.r,animal.fill.g,animal.fill.b);
  ellipse(animal.x,animal.y,animal.size);
  pop();
}
```

A function can have as many arguments as you want (separated by commas) and they can contain any kind of value you want. As you can see, you use them inside your function just any other variables, it's just they will contain whatever value was passed in when the function is called.

---

## Functions with return values

We can get even more sophisticated and flexible functions if we return data from them using the `return` keyword.

We could improve our simulation further if by changing our `checkEating()` function into a simpler `overlap()` function that returns `true` if two things overlap and `false` if not. Then we can handle the **results** of that overlap check separately...

```javascript
let cat = {
  x: 0,
  y: 0,
  size: 100,
  fill: {
    r: 100,
    g: 100,
    b: 0
  }
};

let mouse = {
  x: 100,
  y: 100,
  size: 50,
  fill: {
    r: 0,
    g: 100,
    b: 100
  }
}

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);

  // Call our lovely functions...
  moveCat();
  moveMouse();

  // NEW!
  // Handle the cat eating the mouse by checking if they overlap and stopping
  // the simulation if they do
  if (overlap(cat,mouse)) {
    noLoop();
  }

  // Draw our cat and mouse by pass them as parameters to the drawAnimal function
  drawAnimal(cat);
  drawAnimal(mouse);
}

// Define our functions...

// Move the cat with the (computer!) mouse
function moveCat() {
  cat.x = mouseX;
  cat.y = mouseY;
}

// Move the mouse randomly
function moveMouse() {
  mouse.x += random(-2,2);
  mouse.y += random(-2,2);
}

// NEW!
// Check if two animals, a and b, overlap
function overlap(a,b) {
  let d = dist(a.x,a.y,b.x,b.y);
  if (d < a.size/2 + b.size/2) {
    return true;
  }  
  else {
    return false;
  }
}

// Draw the animal passed in the animal argument
function drawAnimal(animal) {
  push();
  noStroke();
  fill(animal.fill.r,animal.fill.g,animal.fill.b);
  ellipse(animal.x,animal.y,animal.size);
  pop();
}
```

We use `return` to "send back" a value from the function. If a function has a return value we can use the function anywhere we want to use the value it returns (the function call is "replaced" by the value returned).

The resulting program above is better because `overlap()` is a more **general** function that could be used in multiple ways, not just for checking eating specifically! That is, it's more **reusable**.

---

## Modularity and reuse

The key goal in using functions (and in writing code in general) is to strive for **modularity** and **reuse**.

**Modularity** means our program is broken up into meaningful chunks, rather than having a bunch of unrelated code all together. That's why we break our programs into separate functions that handle very specific tasks.

**Reuse** means we should try to write our code so that parts of it can be used for more than one purpose. The `drawAnimal()` function lets us draw **both** kinds of animals in our simple simulation, rather than having a separate drawing function for each. The `overlap()` function is only used once, but it **could** be reused to check whether **any** two circles overlap.

---

# }
