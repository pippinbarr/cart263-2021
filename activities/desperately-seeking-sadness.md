# Activity: Desperately Seeking Sadness {

## Objectives

* Working with Phaser 3

---

## The idea

We will create metaphor for how we seek out or are drawn to negative emotions. This will be in the form of a spaceship in a kind of asteroid field! Obvi! The user will fly around as an emoji, seeking out the single "thumbs down" in a sea of "thumbs ups". When they find it, another one will appear somewhere else and the sad saga continues.

---

## Create a new project

1. Start a plain javascript template project in your `activities` folder and name it `desperately-seeking-sadness` ([plain-javascript-project.zip](../templates/plain-javascript-project.zip))
2. Open the project folder in Atom to start work
3. Set the title of the project in `index.html` to something appropriate like `Desperately Seeking Sadness`
4. Add Phaser 3 to the project by adding the appropriate script tag from the CDN to `index.html`
6. Commit the changes to your repository with a commit message

---

## The plan

We'll use this activity chiefly to go through the steps of setting up a fairly standard Phaser 3 project with sprites and physics and basic interactivity. By the end we'll have something quite extensible, but for the activity we'll focus on the basics. Thus, we'll need to set up the base level project itself, add an avatar and make it move with user input, then add our other sprites and interactions.

We can roughly divide this project up into six steps:

1. Create the basic Phaser 3 project
2. Add the avatar sprite
3. Add keyboard-based "spaceship" input
4. Add a thumbs down sprite
5. Add user interaction with thumbs down
6. Add thumbs up sprites

---

## 1. Create the basic Phaser 3 project

We've gone over this in the associated Phaser 3 lessons, so really the objective here is to follow the same process discussed in the "setup" discussion to get the fundamentals ready. That is:

1. Rename `script.js` to `main.js` and change the script tag in `index.html`
2. Add a `Boot.js` file and define the `Boot` class (extending `Phaser.Scene`), it should have
  * A `constructor()` that calls the super constructor to set the scene key to `boot`
  * A `preload()` method that includes a listener for the loading complete event and switches to a scene with the key `play`
  * A `create()` method
  * An `update()` method
3. Add a ` Play.js` file and define the `Play` class (extending `Phaser.Scene`), it should have
  * A `constructor()` that calls the super constructor to set the scene key to `boot`
  * A `create()` method
  * A `update()` method
4. Add script tags for `Boot.js` and `Play.js` to `index.html`
5. In `main.js` add the basic configuration and game creation code, make sure you
  * Set the `type` to `Phaser.AUTO`
  * Specify dimensions
  * Include the arcade physics option
  * Add both the `Boot` and `Play` classes (in that order) to the `scene` property's array

With this done we will see the classic blank black rectangle representing our game's void-like canvas.

---

## 2. Add the avatar sprite

It's time to add our first sprite, the avatar. Let's represent them as a [Neutral Face Emoji](https://emojipedia.org/neutral-face/).

1. Download an image of the neutral face emoji, resize it to 32x32, rotate it 90º clockwise (more on this later), rename it to `avatar.png`, and move it to the `assets/images` folder of your project
2. In `Boot.js` load the image with a key of `avatar` in the `preload()` method
3. In `Play.js` add a physics sprite to the scene using the `avatar` key, assign it to `this.avatar`

We should now see our black rectangle with the neutral face emoji wherever we chose to position it on the canvas.

---

## 3. Add keyboard-based "spaceship" input

We want the user to be able to steer the avatar around on the canvas using the arrow keys. They'll use **up** for thrust and **left** and **right** for rotation. Fortunately there's a nice Phaser 3 example for this which we can take inspiration and code from! [Physics > Arcade > Space](https://phaser.io/examples/v3/view/physics/arcade/space).

To adapt the example we will need to:

1. In `create()`, reuse the line of code for creating the cursor keys object (if we can't remember how), assigning the result to `this.cursors`
2. In `update()` reuse the code being used to move the spaceship, replacing `ship` with `this.avatar` so it applies to our avatar!
3. Tweak numbers like the angular velocity and thrust to our satisfaction

All going to plan, you should now be able to steer the emoji around on the canvas! Notice how it initially flies to the right (which is an angle of 0º!). That's why it was a good idea to rotate the image 90º clockwise! Everyone knows emoji's fly in the direction of the top of their head.

It would be nice if the emoji didn't leave our canvas so let's also

1. Set `.collideWorldBounds` to `true` on our avatar's `body` property in `create()`

There, now it's stuck in the canvas. Trapped for all eternity with the bad vibes we're about to introduce!

---

## 4. Add a thumbs down sprite

We're ready to add the thumbs down sprite the avatar will collect. We've done this before, so let's follow the same basic principles. We'll use the [Thumbs Down Emoji](https://emojipedia.org/thumbs-down/) here.

1. Download an image of the thumbs down emoji, resize it to 32x32, rename it to `thumbs-down.png`, and move it to the `assets/images` folder of your project
2. In `Boot.js` load the image with a key of `thumbs-down` in the `preload()` method
3. In `Play.js` create a physics sprite using thumbs down at a random position
  * Assign a random value between `0` and `this.sys.canvas.width` to a new variable `x`
  * Assign a random value between `0` and `this.sys.canvas.height` to a new variable `y`
  * Add a physics sprite to the scene at the `x` and `y` position and using the `thumbs-down` key, assign it to `this.sadness`

Now you should see your avatar where you positioned it **and** a thumbs down in a random position.

---

## 5. Add user interaction with thumbs down

We want the user to be able to collect the thumbs down by overlapping with it. When collected, the thumbs down should appear somewhere else on the canvas.

1. Add an `overlap` event listener in `create()` that checks for an overlap between the avatar and the thumbs down sprites, call the event handler method `getSad()` (remember to include the extra arguments to include the context of `this` for the handler)
2. In `getSad()` assign a new random position to the thumbs down sprite (you can reuse the earlier code idea for this)

Now if your avatar overlaps the thumbs down sprite, the thumbs down sprite should vanish and a "new one" will appear somewhere else on the canvas. We have our basic search for sadness working!

---

## 6. Add thumbs up sprites

The cutting-edge critical perspective here is that we want the player to be flying amongst lots of positive emotions as they search out the sadness. The good feelings should be **getting in their way**. To do this, we'll have a lot of thumbs up emojis that the player bumps into in their quest. This means we can play around with some more of the physics options in Arcade Physics!

We'll use the [Thumbs Up Emoji](https://emojipedia.org/thumbs-up/) here. We'll also reference the [Group versus Group](https://phaser.io/examples/v3/view/physics/arcade/group-vs-group) example from Phaser 3.

1. Download an image of the thumbs up emoji, resize it to 32x32, rename it to `thumbs-up.png`, and move it to the `assets/images` folder of your project
2. In `Boot.js` load the image with a key of `thumbs-up` in the `preload()` method
3. In `Play.js` assign a new a physics group to `this.happiness`, with the following configuration (check out **Group versus Group**)
  * Set the `key` to `thumbs-up` so the sprites use that image
  * Set the `quantity` to something like `50` to have multiple sprites
  * Set `collideWorldBounds` to `true` so they stay on the canvas
  * Set `bounceX` and `bounceY` to a value between `0` and `1` so the thumbs ups bounce!
  * Set `dragX` and `dragY` to something like `50` so the thumbs ups slow down over time!
  * Play around with more options if you wish!
4. Right now all the thumbs ups end up at position `0,0` which is no good but notice how they position the elements in **Group versus Group** using the `Phaser.Actions.RandomInRectangle()` helper and copy that idea!)
5. Finally, we want collisions so
  * Add a collider between the avatar and the happiness group
  * Add a collider between the happiness group and itself!

Now you should see many thumbs ups on the canvas! If you steer the avatar into them they bounce off it and each other for some pleasing chaos! The metaphor is complete!

---

## 7. Improve the program

As always, there are probably improvements that can be made. Consider

* Moving the spaceship control code into a separate method
* Writing a random positioning method for the sadness sprite to avoid repetition
* You could use the same `Phaser.Actions.RandomInRectangle()` trick from the happiness group to reposition the sadness sprite if you provide the sadness sprite to it in an array, e.g. `Phaser.Actions.RandomInRectangle([this.sadness],this.physics.world.bounds)`

---

## The future!

We can imagine all kinds of improvements and changes!?

* Play with the physics options to improve on the "game feel"
* Change to a different metaphor with different images but the same core idea of collection in a physics based world
* Add sound effects to collection and collision
* Develop a more complex model of the avatar's mood so it's dropped down by the thumbs down but slightly raised by the thumbs ups, challenge them to stay unhappy!
* Add title and instructions scenes
* Add an ending to the game (run out of time? too happy?) and a "game over" scene
* Add another type of emoji (or other element) to the world of the game with different physics properties
* Make the collectable (or a new one) change the way the avatar moves (slow them down? speed them up?)
* Choose any example(s) in the Phaser 3 examples and implement the idea in the game
* Give the thumbs up and thumbs down emojis some "AI" so that they move around on their own accord (randomly? chasing? fleeing?)
* Add gravity to the simulation (maybe it only affects the avatar to add to their struggle?)
* Add immovable elements that the player has to navigate along with the moving thumbs downs
* ... and many more?

---

# }
