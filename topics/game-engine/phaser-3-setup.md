# Phaser 3 Setup {

---

## Summary

A Phaser 3 program can be structured in a number of ways, and no one way is the best. In this lesson we'll look at a useful and flexible way to structure our Phaser 3 code in terms of a preloader and distinct scenes. This will give us clear places to plug in our actual game programming.

---

## Contents

* Phaser 3 Structure
* Starting a project
* Adding a Play Scene
* Adding a Boot Scene

---

## Phaser 3 Structure

A Phaser 3 program can be structured in a number of ways, and no one way is the best.

Most of the **examples** you'll see on the Phaser 3 website revolve around a structure not unlike p5.js, where you have three core functions that handle the work of your game:

* `preload()` is a function to preload any assets your game will use
* `create()` is a function that runs once when your game starts (like p5.js's `setup()`)
* `update()` is a function that runs once every frame (like p5.js's `draw()`)

This is fine if you're making a very simple game, but most of the time it will make more sense to divide your game up into separate **scenes**. You might have a title scene, a game scene, and an ending scene, for example. Phaser 3 provides a very nice way to do this via Object-Oriented Programming and inheritance. Each scene can have its **own** `create()` and `update()`, and we'll have a special preloading scene that will have a `preload()` method to start the program ooff.

But first, we need to start a project!

---

## Starting a project

A Phaser 3 project begins just as with any JavaScript project. We at least need an HTML file to represent our webpage, and then we add our library and JavaScript to get Phaser working.

### HTML

Our HTML file for a Phaser 3 project can be very simple, something like...

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Phaser 3 Project</title>
  </head>

  <body>

  </body>
</html>
```

It's just a minimal webpage we can use. Phaser 3 will create a canvas to display on this webpage once we include it. And we can of course include CSS and more complex HTML if we wish to. For now, we'll just focus on the game itself, though.

### Add Phaser 3

To work with Phaser 3, we of course need to include the library. To do so we can go to the homepage and its **Download** page, then its **Download Phaser from GitHub** button.

Here we can choose to download the library as a file, but including it via the CDN is much easier. Let's add the appropriate script tag to our HTML. We'll use the **minified** version of Phaser 3 by default.

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Phaser 3 Project</title>

    <script src="//cdn.jsdelivr.net/npm/phaser@3.53.1/dist/phaser.min.js"></script>
  </head>

  <body>

  </body>
</html>
```

**Note** that Phaser 3.53.1 is the latest version as of the writing of this lesson, it may have changed since.

---

### Add our own script

In order to actually work with Phaser 3 we of course need our own JavaScript file. The convention when working in Phaser 3 is for this to be called `main.js` (as opposed to the also-very-common `script.js`) so let's follow that convention by adding a `js/main.js` file to our project.

Now we can link to our new (empty!) script in the HTML in the usual way at the bottom of our `<body>` element.

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Phaser 3 Project</title>

    <script src="//cdn.jsdelivr.net/npm/phaser@3.53.1/dist/phaser.min.js"></script>
  </head>

  <body>

    <script src="js/main.js"></script>
  </body>
</html>
```

---

## A new game object

To create a game in Phaser 3 we create a new `Game` object that we configure to apply various settings we want to work with.

In our `main.js` we write this as follows...

`main.js`
```javascript
"use strict";

// We create a JavaScript object to configure our Phaser 3 game
let config = {
  // The type refers to the kind of display we'll be using
  // which is either Canvas or WebGL. The Phaser.AUTO setting
  // will choose the best option for us.
  type: Phaser.AUTO,
  // Here we define the actual dimensions of our game's display area
  // Though note that we're able to scale the entire game as well
  // if we need to for responsive design
  width: 800,
  height: 600,
  // Because it's so common to include physics in a game, this is how
  // we set up the basic "arcade physics" engine with our game
  physics: {
    default: 'arcade',
  },
  // Finally, the scene property has an array of the different scenes
  // in our game, with the one listed first being loaded automatically
  // Right now we don't have a scene to load, so let's leave it empty
  scene: []
};

// Here we actually create the game using this configuration!
let game = new Phaser.Game(config);
```

All going to plan we'll see an empty black rectangle with the dimensions we specified. That's our game! Not a very good one though! It has no scenes!!!

**Note** that there are many more options available in the configuration of our game, but these are some classics!

---

## A `Play` scene

In order to actual make our game **do** anything we need to have at least one game scene for it to load! Let's begin with a scene that will represent our fledgling game while it's being played.

To create a new scene we create a new **class** that extends the `Phaser.Scene` class. So, let's create a file in our `js` folder called `Play.js`, and include it in our list of scripts in `index.html` (**above** `main.js`):

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Phaser 3 Project</title>

    <script src="//cdn.jsdelivr.net/npm/phaser@3.53.1/dist/phaser.min.js"></script>
  </head>

  <body>

    <script src="js/Play.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

Now we can add the following template code...

`Play.js`
```javascript
class Play extends Phaser.Scene {

  // NOTE: As we know, the constructor is called when an object is created with this class
  // but in Phaser 3 we don't actually do much with it! We just make sure that we give
  // the scene a "key" via its parent which we'll need to use to refer to it in our program.
  constructor() {
    super({
      key: `play`
    });
  }

  // NOTE: The create() method is called once when the scene is first created,
  // so we use it to set up all the elements in the current scene
  create() {
    // Let's at least print a message for now to know if this is doing anything...
    console.log("Play scene created!");
  }

  // NOTE: The update() method is a lot like the p5.js draw() function, it's called once
  // every animation frame
  update() {
    // Let's put in another message...
    console.log("Play scene updated!");
  }
}
```

This is the way **all** scenes will work when we're making a game, no matter how giant it is. We create a file named after the scene. The scene is represented as a **class** extending on `Phaser.Scene` and we especially use the `create()` and `update()` methods to handle all the exciting things that happen in that scene of our game.

Finally, we need to tell our game to actually include this scene in `main.js`. We put the name of the **class** we just defined (`Play`) in our array of scenes...

`main.js`
```javascript
"use strict";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  // NOTE: We've added our Play scene to the game, it will be automatically loaded
  // when the game starts because it's the first scene in the list of scenes
  scene: [Play]
};

let game = new Phaser.Game(config);
```

Now our game has its first scene and in the JavaScript console we should see our creation message show up once, and then our update message show up over and over again, once per frame!

It's a... game? No, not really, we can't really say that?

---

## A "game"

Just so that we can **call** this a game, let's add some text describing a game for the user to play. This will serve as a quick introduction to Phaser 3's `Text` Game Object, which is of course worth learning more about in the Examples!

So, let's remove our `console.log()`s and add some proper text to the game itself. The [Basic Text Example](https://phaser.io/examples/v3/view/game-objects/text/basic-text) is a good place to get this idea from...

`Play.js`
```javascript
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    // NOTE: Creating and adding a text object to our scene
    // EXAMPLE: https://phaser.io/examples/v3/view/game-objects/text/basic-text
    // Create a style object to define what the text will look like
    let style = {
      // Use font-family in the same way you use it in CSS
      fontFamily: `sans-serif`,
      // And font size too!
      fontSize: `40px`,
      // Set a fill color for the text (white)
      fill: `#ffffff`,
    };
    // Create a string that describes an amazing game experience!
    let gameDescription = `Think of a number... no that's not it.`;
    // Create the text object that will actually add the text into our
    // scene and display it. The parameters here are:
    // - x position
    // - y position
    // - string to display
    // - style configuration
    this.gameText = this.add.text(100, 100, gameDescription, style);
    // Note that it's often a good idea to assign the resulting text object
    // into a property of the scene if you might want to manipulate it
    // at some later point in your program!
  }

  update() {

  }
}
```

So, now we have a **Real Game** for the user to play. Pretty intense! Hard to win!

**Note** how `update()` remains empty. We **create** our text object and **add** it to the scene in `create()`. After that it's just part of the game!

---

## Before we `Play` we should `Boot`

Although we don't absolutely have to, it's a good idea to include a separate scene in our Phaser 3 game that serves as the **preloader** for any assets our game is going to use such as images, sounds, and so on.

This also allows us to display a custom screen while the game loads, and to make sure everything's ready before we actually let the user start playing the game.

### The template scene JavaScript

So, let's create a `Boot.js` file in our `js` folder with the same basic template we used before...

`Boot.js`
```javascript
class Boot extends Phaser.Scene {

  constructor() {
    super({
      // NOTE: We need to use an appropriate and different key!
      key: `boot`
    });
  }

  create() {

  }

  update() {

  }
}
```

### Adding the script to `index.html`

And of course we need to add `Boot.js` to our set of scripts in `index.html`...

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Phaser 3 Project</title>

    <script src="//cdn.jsdelivr.net/npm/phaser@3.53.1/dist/phaser.min.js"></script>
  </head>

  <body>

    <!-- Our nice new Boot class -->
    <script src="js/Boot.js"></script>
    <script src="js/Play.js"></script>
    <script src="js/main.js"></script>
  </body>
</html>
```

### Adding the scene to our game's configuration

And finally we should add the `Boot` scene to our `main.js` so Phaser 3 knows that it's there. Since `Boot` is going to load our game, it should be the **first** scene in the list!

`main.js`
```javascript
"use strict";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
  },
  // NOTE: Added Boot scene to the list of scenes in the first position
  // so it will load first
  scene: [Boot, Play]
};

let game = new Phaser.Game(config);
```

### Displaying a loading message

For now we don't actually have anything to load, but let's add a loading message to the screen just for good measure using the same approach to text we saw earlier...

`Boot.js`
```javascript
class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }

  create() {
    // NOTE: Adding a loading message to the scene on creation
    let loadingTextStyle = {
      fontFamily: "sans-serif",
      fontSize: "40px",
      fill: "#ffffff",
      align: "center"
    };
    let loadingString = `Loading...`;
    this.loadingText = this.add.text(100, 100, loadingString, loadingTextStyle);
  }

  update() {

  }
}
```

Now when the game starts we end up in the `Boot` scene and it displays the text `Loading...`.

We kind of don't want to be stuck in the `Boot` scene forever though...

### Switching to the next scene

In a **preloader** like this we normally wait for various files to load and then **switch** to the next scene when ready (or perhaps wait for the user to click or something first). Right now we're not actually loading anything, so for let's just switch scenes immediately in `create()`. We'll come back and fix this later...

`Boot.js`
```javascript
class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }

  create() {
    let loadingTextStyle = {
      fontFamily: "sans-serif",
      fontSize: "40px",
      fill: "#ffffff",
      align: "center"
    };
    let loadingString = `Loading...`;
    this.loadingText = this.add.text(100, 100, loadingString, loadingTextStyle);

    // NOTE: Switch to the scene with the key of "play"
    // EXAMPLE: https://phaser.io/examples/v3/view/scenes/change-scene-from-create
    this.scene.start(`play`);
  }

  update() {

  }
}
```

Now the `Boot` scene loads first, but instantly switches across to the `Play` scene when it's created. It's so fast you probably won't even see the `Loading...` message any more.

---

## We're ready!

Although our game is rather minimalist, we now have quite a powerful underlying structure to work with! We have

* `index.html` includes the Phaser 3 library and all our scripts
* `main.js` configures and creates our game (including its scenes, dimensions, etc.)
* `Boot.js` preloads our game's assets
* `Play.js` actually implements our game

We can also **display text** in a scene and we can **switch between scenes**, so we're getting there!

Next up, sprites!

---

# }
