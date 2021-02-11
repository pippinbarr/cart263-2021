# Web Storage API {

---

## Summary

Browsers allow us to **save** and **load** data on a user's computer with the Web Storage API! This means our programs/websites can be **persistent** in time by **remembering** things from the last time they were run.

---

## Contents

* Memory
* The Web Storage API
* `localStorage`
* `sessionStorage`

---

## Memory

By default, our webpage-based JavaScript programs are like newborn babies each time we load the page. They have no sense of history or memory.

But sometimes it would be nice to have a page/application/game/thing that could **persist over time**.

We might want a webpage that Knows What We Did Last Summer, or a game that remembers your high scores, an "AI" that knows how often you visit it, or simply something that remembers your name and greets you next time you show up.

To do any of that we need some way to **store data between sessions** on the page...

... wouldn't that be nice? Wonder if anyone thought of that...

---

## The Web Storage API

The Web Storage API is the answer to our dreams in this case. It's a standard supported by every browser that allows us to save data to the user's browser and load it again within JavaScript.

For the technical particulars you can consult [Mozilla's Web Storage API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) as well as their [Using the Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) demo and information.

Fortunately, though, the API is not very complicated to work with! There are two variables, `localStorage` and `sessionStorage` that exist to let us access the Web Storage API and thus to save and load data.

We'll talk about `localStorage` here, and mention `sessionStorage` later. They both work in the same way.

---

## `localStorage`

So, when we're programming for the browser, there is variable always available called `localStorage` that allows us to access the user's browser storage.

With it we can save data into the user's browser, and retrieve it. To save data we use `setItem()` and to retrieve data we use `getItem()`.

### `setItem()`

`setItem()` requires two parameters:
* a **key**, which is the name of the data we're going to save as a **string**
* a **value**, which is the data we're saving

So if we want to save the string "Be excellent to each other." we need to think of a name for its **key**, such as "meaningOfLife" and then...

```javascript
localStorage.setItem(`meaning-of-life`, `Be excellent to each other.`);
```

This will **save** the string `Be excellent to each other.` with the key `meaning-of-life`.

Note:
* The key is always a **string**
* The data is any simple **JavaScript value** (e.g. a string, a number, a boolean)
* But saving **arrays and JavaScript objects are special cases** we'll get to later

### `getItem()`

To **load data** we use `getItem()` with one parameter:
* the **key** of the data we want to load

```javascript
let meaning = localStorage.getItem(`meaning-of-life`); // "Be excellent to each other."
```

The above will load the data saved under the key "meaning-of-life" into `meaning`. Because we know we just saved data to that key with `setItem()` we know that `meaning` will end up with "Be excellent to each other." in it.

### `getItem()` with no data

If we use a key for which there is **no data** it will return `null`

```javascript
let moaning = localStorage.getItem(`moaning-of-life`); // null
```

Because we **haven't** saved any data under the key "meaning-of-life" there's nothing to "get" and so `getItem()` will return `null`.

That means we can **check** if some specific data has already been saved before or not by trying to load it and then checking whether the result is `null` (there is no data) or not `null` (there is data).

### `getItem()` always returns strings!

It is important to know that `localStorage` actually **saves everything as strings**! You can still save numbers and booleans etc., but when you load them they'll come back as string versions of themselves......

```javascript
localStorage.setItem(`my-boolean`, true);
localStorage.setItem(`my-number`, 0.1);
localStorage.setItem(`my-array`, [1,2,3]);

let myBoolean = localStorage.getItem(`my-boolean`); // "true" (NOT the boolean value true)
let myFloat = localStorage.getItem(`my-number`); // "0.1" (NOT the number 0.1)
let myArray = localStorage.getItem(`my-array`); // "1,2,3" (NOT the array [1,2,3])
```

This is kind of frustrating, because we would rather get back the exact same kind of value that we put in. But we don't.

There are different ways to cope with this, but the easiest is to always save **objects** as our data. This does require an extra step, but is generally more foolproof and less prone to errors.

---

## Objects to the rescue!

So, the most consistent way to ensure we keep our data in the format we want is to save **JavaScript objects** containing our data, instead of individual values.

**However**, to do this we have to convert the object to a string when we save it, and convert it back from a string when we load it. Luckily there are two functions for performing exactly this task.

* `JSON.stringify()` converts an object into a string
* `JSON.parse()` converts a string back into an object

---

### `setItem()` and `JSON.stringify()`

We save our data by storing it in an object and using `JSON.stringify()` before we save it:

```javascript
let data = {
  text: `Be excellent to each other.`,
  number: 10,
  boolean: true,
  array: [1,2,3]
};
let dataString = JSON.stringify(data); // Convert the data to a string
localStorage.setItem(`my-data`, dataString); // Save the data as a string
```

It's just as easy to do the saving and stringifying in one step:

```javascript
let data = {
  text: `Be excellent to each other.`,
  number: 10,
  boolean: true,
  array: [1,2,3]
};
localStorage.setItem(`my-data`, JSON.stringify(data)); // Save the data as a string
```


### `getItem()` and `JSON.parse()`

We restore our data by loading (as a string) and then converting it back to an object using `JSON.parse()`:

```javascript
let loadedDataString = localStorage.getItem(`my-data`); // Load the string!
let loadedData = JSON.parse(loadedDataString); // Parse the real data!

console.log(loadedData.text); // "Be excellent to each other."
console.log(loadedData.number); // 10
console.log(loadedData.boolean); // true
console.log(loadedData.array); // [1, 2, 3]
```

Again, it's more common to do the loading and parsing in one step:

```javascript
let loadedData = JSON.parse(localStorage.getItem(`my-data`)); // Load and parse the data!

console.log(loadedData.text); // "Be excellent to each other."
console.log(loadedData.number); // 10
console.log(loadedData.boolean); // true
console.log(loadedData.array); // [1, 2, 3]
```

---

## Use case

In order to contextualize this whole thing, let's create a very simple little "game" of clicking as many times as possible, a kind of horrible "score attack" experience...

```javascript
// How many clicks
let clicks = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Display the number of clicks
  push();
  textSize(64);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255, 255, 0);
  text(clicks, width / 2, height / 2);
  pop();
}

function mousePressed() {
  // Track clicks
  clicks++;
}
```

### Adding a high score

Now, we could imagine wanting to display a high score for this, so that each time we come back to the game we can try to beat our previous high score. To do that, we need to:

* **Load** the current high score data if there is some (with `getItem()`)
* **Check** when the user sets a high score (by comparing their current score to the high score)
* **Save** the high score when the user does beat it (with `setItem()`)

So we might do something like this:

```javascript
// Track clicks
let clicks = 0;
// A place to store the game data
let gameData = {
  highScore: 0 // Start the high score at 0 by default
};

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Try to load the game data (remembering to parse it first)
  let data = JSON.parse(localStorage.getItem(`game-data`));
  // Check if there's anything there
  if (data !== null) {
    // There is data! So replace our default game data with the save data
    gameData = data;
  }
}

function draw() {
  background(0);

  // Display score
  push();
  textSize(64);
  textAlign(CENTER);
  textStyle(BOLD);
  fill(255, 255, 0);
  text(clicks, width / 2, height / 2);
  pop();

  // Display high score
  push();
  textSize(32);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  fill(255, 255, 0);
  text(`High score: ${gameData.highScore}`, 0, 0);
  pop();
}

function mousePressed() {
  // They clicked!
  clicks++;
  // Check if this beats the current high score...
  if (clicks > gameData.highScore) {
    // Set the new high score
    gameData.highScore = clicks;
    // Save the game data to remember for next time, remembering to stringify the data first
    localStorage.setItem(`game-data`, JSON.stringify(gameData));
  }
}
```

Now our game successfully remembers the high score between visits. Even if the user closes their browser, logs out of their computer, then comes back later, the high score will still be there.

---

## Where is the data exactly?

`localStorage` saves and loads data based on the **domain** the program is running on and saves it into the **browser** that is viewing the page. This has implications:

* The same JavaScript running on **two different domains** cannot see each other's data. If I run the same program on `pippinbarr.com` and `pippinbarr.github.io` they are completely separate in terms of data saved, even if I use the same browser to access both programs.
* Accessing the same URL for a program from **different browsers** will lead to different storage per browser. If I access a program from Chrome and it saves data, then I load the same page in Firefox, it will **not** be able to load that data.
* If the page with the program is viewed through a browser's "incognito" or "private" mode, `localStorage` is cleared as soon as the window is closed.
* Two **different** pages/programs on the same domain can share information through `localStorage` by using the same key names! Could lead to some pretty interesting possibilities, but also suggests you should name your keys quite carefully to avoid problems between programs.

---

## Deletion

We might want to **delete** something in `localStorage`. Maybe we offer the user the option to clear the data that has been saved, maybe we want to have a program that is "forgetful", or maybe we have other reasons.

There are two key options here, `removeItem()` and `clear()`.

### `removeItem()`

`removeItem()` allows us to remove data associated with a specific key.

```javascript
// Save data in a key
let childhoodData = {
  years: [1999,2000,2001,2002],
  nickname: "Geezer"
};
localStorage.setItem(`childhood-data`,JSON.stringify(childhoodData)); // Save it one step!

// Later on...

// Load the data...
JSON.parse(localStorage.getItem(`childhood-data`)); // The data is there and loads!

// Later on...

// Remove the data
localStorage.removeItem(`childhood-data`); // Delete the data!
// Try to load it again...
JSON.parse(localStorage.getItem(`childhood-data`)); // null
```

So, when we use `removeItem()` the key and data are all gone.

This is probably the **best** approach to use, because you can be more precise and avoid deleting data you didn't mean to delete.


### `clear()`

For the nuclear case of removing **all stored data** we use `clear()`.

```javascript
// Save some data in a key
let childhood = {
  description: "Sunny, happy, good"
}
localStorage.setItem(`childhood-data`,JSON.stringify(childhood));
// Save some data in another key
let adolescence = {
  description: "Who am I???"
}
localStorage.setItem(`adolescence-data`,JSON.stringify(adolescence));

...

// Delete all stored data
localStorage.clear();

// Check if it's still there (it's not!)
localStorage.getItem(`childhood-data`); // null
localStorage.getItem(`adolescence-data`); // null
```

It's probably not smart to do this unless you really know you want to because it will delete **all** the data stored on the user's computer associated with your website, potentially including data saved by other programs! Avoid it.

---

## `localStorage` versus `sessionStorage`

All the same methods we have seen for `localStorage` **also** work for another variable called `sessionStorage`. They're two different ways of saving data in the browser with one big difference:

* `localStorage` stores your data essentially "forever", even when the user closes their browser.
* `sessionStorage` stores your data for as long as the window running your program is open. When it is closed, the `sessionStorage` is closed.

So, `sessionStorage` is quite temporary. You would use it if you only need to save data while the program is running, to avoid cluttering the user's browser. `localStorage` is "permanent" (though the user can clear it in their browser if they want to).

---

## I remember you...

One last example just to remind ourselves of the most common structure we use with storage. Which is that:

1. The user runs the program
2. We check if there is **already** saved data (maybe their name)
  * If there **is** then we load it and use it
  * If there **isn't** then we ask for their name and save it

Something like this:

```javascript
"use strict";

let userData = {
  name: `stranger` // A default value if we don't know the user's name
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Try to load the user data
  let data = JSON.parse(localStorage.getItem(`example-user-data`));
  // Check if there's data there...
  if (data) {
    // If there is, then use the name property in the data
    userData.name = data.name;
  }
  else {
    // If there isn't, ask the user their name and store it in the user data
    // prompt() brings up a simple dialog that the user can enter text in
    // The first argument is the prompt for the user, the second argument is
    // a default value to provide
    userData.name = prompt(`What's ya name?`, `Tony`);
    // Save the user data
    localStorage.setItem(`example-user-data`, JSON.stringify(userData));
  }
}

function draw() {
  background(255);

  // Greet the user according to their name
  push();
  textSize(32);
  textAlign(CENTER);
  text(`Hi there, ${userData.name}.`, width / 2, height / 2);
}
```

---

## Viewing `localStorage` or `sessionStorage`

It's possible to view the data being stored using the developer tools of your browser! You can even delete elements from storage there.

In **Chrome**'s developer console go to the "Application" menu and select "Local Storage" or "Session Storage" and then the URL for the running program.

In **Firefox**'s developer console go to the "Storage" menu and select "Local Storage" or "Session Storage" and then the URL for the running program.

There are buttons to delete selected data or clear all the data. Handy!

---

## Remembrance

So, the Web Storage API allows us to save and load any kind of data we want in the user's browser. This lets us write programs that **remember** things, and this can be very **useful** as well as potentially very **interesting**.

Memory has all kinds of emotional and poetic implications among other things.

We could have a program that remembers the user from visit to visit, developing a relationship with them.

We could have a program that develops memory problems and forgets things if you don't visit often enough.

We could have a program decides it does or doesn't like you and then sticks with that decision no matter what you do...

Fun!

---

# }
