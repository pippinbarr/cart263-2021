# Phaser 3 Sprites {

---

## Summary

Sprites are, generally speaking, the images that make up a videogame. They're frequently animated by displaying a series of frames in sequence. In this lesson we'll look at how to create both static images and animated sprites in Phaser 3.

---

## Contents

* The game so far
* What are sprites?
* Working from examples
* Images
* Creating a sprite image
* Adding a simple sprite to the game
* Sprite sheets
* Creating a sprite sheet animation
* Adding an animated sprite to the game
* TMI?
  * Texture atlases

---

## The game so far

At this point we have the skeleton of a Phaser 3 game, with a preloading scene called `Boot` and a game scene called `Play`. If you're not up to speed, remember to go back to the previous lessons to put together that fundamental framework.

---

## What are sprites?

Sprites are, generally speaking, the images that make up a videogame. They're frequently animated by displaying a series of frames in sequence. We also tend to move them around on the screen to make up the visual element of the gameplay of a game.

Most obviously the player's avatar (their representative on the screen if they have one) is likely to be a sprite, the images that make up their environment are probably sprites, other agents in the world are probably sprites, and so on. Nobody is **obliged** to use sprites in a game, but it's certainly common to want static or animated images and sprites are how we do that.

---

## Working from examples

Throughout these lessons and throughout your future with Phaser 3, it's likely you'll be working from the examples in the Phaser 3 documentation as well as via other developers. There are a couple of things to remember here.

### Working with multiple scenes

Many examples assume a simple one scene structure of Phaser 3 where there's just the classic three functions `preload()`, `create()` and `update()`. Because we're using multiple scenes by default (it's better!) we need to remember how to place the code we find correctly.

In general:

* Code in a `preload()` function should go in the `preload()` method of your `Boot` class
* Code in a `create()` or `update()` function should go in the `create()` and `update()` methods of the **scene you want to use the example code in**

### Working with classes

Many examples of Phaser 3 are **not using Object-Oriented Programming**, but we **are**. Be extra vigilant about the fact we will store sprites and so on as **properties** of a class whereas examples often use variables. Pay attention to the use of `this` in your class.

---

## Images

At its most basic, a sprite in our game is just an image file that we display on the canvas. This requires an actual image file that we load and then use to represent it. Phaser 3 can use various image formats for displaying sprites, but most obviously PNG and JPG images (GIFs too!).

---

## Creating a sprite image

You probably know how to make images all on your own, but a nice option for making quick "pixel art" style sprites is [Piskel](https://www.piskelapp.com/). This will also come in handy when we want to straightforwardly create animated sprites a little later in the lesson.

Let's create a **wall** sprite for our game.

**NOTE:** If you're drawing something monochromatic, it's a good idea to **draw in white** because this is the best way for us to be able to **tint** the sprite to different colors in Phaser 3.

Go ahead and use Piskel to draw a simple 32x32 sprite image to represent a single wall in the editor. When you're ready, use the EXPORT button, choose the PNG tab, and then "Sprite sheet file export". Rename the file to `wall.png`.

Once you have your `wall.png` image, create an `assets/images` folder in your game project and put `wall.png` in that folder.

---

## Adding a simple sprite to the game

There are three key ideas involved in adding a new sprite to a game. We have to **load the image** in the preloader, then we **create the sprite object** and **add it to a scene**.

### Preloading an image

We created our `Boot` scene specifically so we could preload assets for our game before it runs, and now we can finally use it for its intended purpose!

In order to do so, we will add a couple of pieces to `Boot.js`:

* We need a `preload()` method for loading files in
* An instruction to load our wall image in preload
* An event listener to check when all the loading is completed so we can switch scenes

`Boot.js`
```javascript
class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }

  // NOTE: we add the preload() method to tell Phaser 3 we want to preload
  // asset files here
  preload() {
    // NOTE: we use special loading methods to load files into our program
    // Here we're using the special "load" property of the scene to load
    // a simple image. The parameters are
    // - The "key" we will use to refer to this asset later
    // - The path to the image asset
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/image/load-image
    this.load.image(`wall`, `assets/images/wall.png`);

    // NOTE: now that we're loading an actual file, we need to wait until everything
    // loads before switching to the next scene. We use the "complete" event listener
    // of the loader to do this.
    // Note the use of an ARROW FUNCTION so that we can still use "this" correctly
    // inside the event handler!
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/loader-events/load-progress
    this.load.on(`complete`, () => {
      // Switch to the Play scene
      this.scene.start(`play`);
    });
  }

  create() {
    let loadingTextStyle = {
      fontFamily: `sans-serif`,
      fontSize: `40px`,
      fill: `#ffffff`,
      align: `center`
    };
    let loadingString = `Loading...`;
    this.loadingText = this.add.text(100, 100, loadingString, loadingTextStyle);

    // NOTE: We removed the scene switching instruction here and moved it up
    // into our loading completion handler because that's when we really want
    // to switch to the next scene.
  }

  update() {

  }
}
```

We now have a fully functioning preloader in our `Boot` scene! It includes the instruction to load our wall image, an event listener that switches to the player scene when all loading is completed, and a loading message text that displays on the canvas while the program waits for the loading to complete.

In practice, the loading of this tiny image will be so fast you **still** probably won't see the loading message, but once you have more assets that will change.

### Adding a sprite to the play scene

Now we know that when the Play scene is loaded, it means the Boot scene has completely loaded our wall image in the preloading process. Therefore, we can confidently add a sprite to our scene that **uses** that wall image.

Let's look at how we do that...

`Play.js`
```javascript
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    // NOTE: This is the standard way to add a sprite to our scene in Phaser.
    // "this" refers to the CURRENT SCENE (Play). The parameters for adding
    // the sprite are
    // - x position
    // - y position
    // - key of the image to use
    // We assign the new sprite into a property of the scene in case we want
    // to manipulate it later on
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/image/load-image
    this.wall = this.add.sprite(100, 100, `wall`);

    // NOTE: Just for fun, let's tint the sprite to a different color (which works well
    // if we drew it in white)
    // As you can see, the sprite object has a setTint() method we can use to change its
    // color by tinting. Note the notation for indicating the color here is
    // HEXADECIMAL, but it's written with an 0x in front of the color code instead of a #
    // EXAMPLE: https://phaser.io/examples/v3/view/display/tint/single-color-tint
    this.wall.setTint(0xdd3333);
  }

  update() {

  }
}
```

We should now see our wall image displayed on the canvas, tinted to the chosen color. We have the power to add images to our game!

So the logic is that we "add" the sprite to the scene in a specific position and provide the **key** of the image we loaded in our preloader. We assign the resulting sprite to a property of the scene (`this.wall`) so we can manipulate it. In this case we used its `.setTint()` method to change the color of the wall.

Notice how we don't need to do anything in `update()` to make the image display. Once we've **added it to the scene** it's just there. Nice!

---

## Sprite sheets

To display a sprite that can be **animated** in our game, we need to create the right kind of file to represent an animation. Your mind might jump to the idea of an animated GIF, but this isn't actually how developers tend to create animations in games. Instead, they more often use **sprite sheets**.

A sprite sheet is a **single image** that contains all the **frames** of one or more animations. You can think of it as something like a strip of film, for instance. Phaser 3 can load these sprite sheets and manage the creation and playing of their animations in a game.

---

## Creating a sprite sheet animation

There are many ways to create sprite sheets, but try out [Piskel](https://www.piskelapp.com/) for this task as it's quite handy for the basics.

The big difference this time is that we want to create **multiple frames** for our sprite. By default our sprite has just one frame, the one we see when we start creating it. We can add new frames in Piskel by clicking the... "Add new frame" button! Who would have thought! (You can also **duplicate** an existing frame if you want.)

Let's create an **avatar** for our game that we'll move around. We'll animate the avatar while it's moving. We'll use the first frame as an "idle" animation when it's not moving.

Draw a series of frames for your animation, whatever you like. Note the little onion icon underneath the animated version of your sprite at the top right. Activating it means you'll be able to see a semi-transparent version of the **previous frame** while you're drawing, which is usually super helpful. Note, too, that your animation will actually be playing while you draw. You can change the frame rate it runs at beneath.

When you're satisfied with your animated sprite follow the same exporting process. Use the EXPORT button, choose the PNG tab, and then "Sprite sheet file export". Rename the file to `avatar.png` and put it in your project's `assets/images` folder. If you look at the file you'll see all the frames you drew in some kind of grid in a single image.

---

## Adding an animated sprite to the game

We have the primordial materials of an animation, our **sprite sheet**. We need to load the sprite sheet in our preloader, add a sprite to our scene using the sprite sheet, and separately add animations to tell our sprite how to animate.

### Preload the sprite sheet

To load the sprite sheet we follow a very similar road to loading an image, with a couple of extra ideas. Fortunately, our preloader already takes care of switching scenes when loading is completed, so we only need to add the correct instruction to load our sprite sheet images. Let's take a look...

`Boot.js`
```javascript
class Boot extends Phaser.Scene {

  constructor() {
    super({
      key: `boot`
    });
  }

  preload() {
    this.load.image(`wall`, `assets/images/wall.png`);

    // NOTE: Here's how to load a simple sprite sheet using the loader's
    // .spritesheet() method.
    // The parameters are
    // - The key we will use to refer to this sprite sheet
    // - The image file containing the sprite sheet
    // - A configuration object specifying at least
    //   - the dimensions of an individual frame of the animation via
    //     frameWidth and frameHeight properties
    //   - the final frame number (counting from 0) so the loader knows
    //     how many frames are in the image
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/sprite-sheet/load-sprite-sheet
    this.load.spritesheet(`avatar`, `assets/images/avatar.png`, {
      // Our animation uses 32x32 pixel frames
      frameWidth: 32,
      frameHeight: 32,
      // Our animation has 4 frames, so the final frame number is 3, counting from 0
      endFrame: 3
    });

    this.load.on('complete', () => {
      this.scene.start(`play`);
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
  }

  update() {

  }
}
```

Now Phaser 3 will load both our wall image and our sprite sheet image before switching to the Play scene!

### Add the avatar sprite to the scene

We now want to create another sprite representing the player's avatar in the game, which will use this newly loaded sprite sheet. We can follow the same process as with the wall!

`Play.js`
```javascript
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    this.wall = this.add.sprite(100, 100, `wall`);
    this.wall.setTint(`0xdd3333`);

    // NOTE: We add the avatar in exactly the same way
    // but providing the key of the sprite sheet this time.
    this.avatar = this.add.sprite(200, 200, `avatar`);
  }

  update() {

  }
}
```

Now our avatar appears on the canvas, but it's not animated yet. It just uses the first frame of the sprite sheet when it's displayed by default. To animate it we still need to tell Phaser 3 about the frames of animation we want to be able to play.

### Add a moving animation and play it on the avatar

In Phaser 3, the animation system is separated from the individual sprites that use it. We tell the animation system about the configuration of a specific animation, and then we tell an individual sprite to **play** an animation configured in the animation system.

This idea of special subsystems of the engine is fundamental to Phaser 3 and worth making friends with. There's an **animation** subsystem, an **input** subsystem, a **physics** subsystem, a **camera** subsystem, and so on. It makes things nicely modular.

To add an animation to the animation system...

`Play.js`
```javascript
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    this.wall = this.add.sprite(100, 100, `wall`);
    this.wall.setTint(`0xdd3333`);

    this.avatar = this.add.sprite(200, 200, `avatar`);

    // NOTE: Here we create an animation we will play when the avatar is
    // moving in our game. As discussed, we create it using the animation
    // system of Phaser 3, which is available via this.anims. We use its
    // .create() method, passing in a configuration object.
    // EXAMPLE: https://phaser.io/examples/v3/view/loader/sprite-sheet/load-sprite-sheet
    let movingAnimationConfig = {
      // The animation key name we'll use when playing it
      key: `moving`,
      // A list of the individual frames in the animation. This could be an array of
      // image names, but here it's wise to use the special .generateFrameNames() helper
      // method which we can tell the key of a sprite sheet and the frames to use
      frames: this.anims.generateFrameNumbers(`avatar`, {
        // For this moving animation we'll play from the first frame
        start: 0,
        // to the last frame
        end: 3
      }),
      // The frame rate this animation should play at
      frameRate: 30,
      // How many times to repeat the animation
      // 0 means not to play at all
      // Any positive number (e.g. 3) means to play that many loops (e.g. three times)
      // -1 means to loop infinitely
      repeat: -1
    };
    // NOTE: Now we can tell the animation system to create the animation with this configuration
    this.anims.create(movingAnimationConfig);

    // NOTE: We can tell the avatar sprite to actually play our newly created animation
    // using its .play() method and providing the animation key
    this.avatar.play(`moving`);
  }

  update() {

  }
}
```

All going to plan, you should see your avatar on the canvas looping through its moving animation over and over again! The sheer power of creation!!

### An idle animation

For completeness, we probably don't actually want our avatar to just always animate as if it's moving around (like, you know, when it's not moving around?). Let's add an idle animation to play by default that's just the first frame of the sprite sheet...

`Play.js`
```javascript
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    this.wall = this.add.sprite(100, 100, `wall`);
    this.wall.setTint(`0xdd3333`);

    this.avatar = this.add.sprite(200, 200, `avatar`);

    let movingAnimationConfig = {
      key: `moving`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 3
      }),
      frameRate: 30,
      repeat: -1
    };
    this.anims.create(movingAnimationConfig);

    // NOTE: Configuring an idle animation
    let idleAnimationConfig = {
      // NOTE: We need to use a different animation key of course
      key: `idle`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        // NOTE: We're only going to use frame 0, so it's starts and ends there
        start: 0,
        end: 0
      }),
      // NOTE: No need to specify a frame rate for something that doesn't technically animate!
      // NOTE: We'll repeat 0 times!
      repeat: 0
    };
    this.anims.create(idleAnimationConfig);
    // NOTE: It makes sense for the avatar to start out "idle"
    this.avatar.play(`idle`);
  }

  update() {

  }
}
```

Great. Now the avatar just sits there playing its idle animation, which is appropriate because it is being **so idle**! Wake up! Wait, it can't because we haven't programmed it to move. Sorry, avatar!

Still, the avatar now **can** play its moving animation whenever we need just by using that `.play()` method, so once it can move on the canvas, we'll know how to do that part.

---

## Tidying up

Let's move the animation creation code into a separate method to clean up `create()` a bit...

`Play.js`
```javascript
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    this.wall = this.add.sprite(100, 100, `wall`);
    this.wall.setTint(`0xdd3333`);

    this.avatar = this.add.sprite(200, 200, `avatar`);

    this.createAnimations();

    this.avatar.play(`idle`);
  }

  createAnimations() {
    let movingAnimationConfig = {
      key: `moving`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        start: 0,
        end: 3
      }),
      frameRate: 30,
      repeat: -1
    };
    this.anims.create(movingAnimationConfig);

    let idleAnimationConfig = {
      // NOTE: We need to use a different animation key of course
      key: `idle`,
      frames: this.anims.generateFrameNumbers(`avatar`, {
        // NOTE: We're only going to use frame 0, so it's starts and ends there
        start: 0,
        end: 0
      }),
      // NOTE: No need to specify a frame rate for something that doesn't animate!
      // NOTE: We'll repeat 0 times!
      repeat: 0
    };
    this.anims.create(idleAnimationConfig);
  }

  update() {

  }
}
```

Ah, much nicer.

---

## Sprites!

We now have the core knowledge of how to create both single image and sprite sheet based sprites in our game. This unlocks all kinds of fun animation potential and, most importantly, lets us have a visual component to our game that was rather lacking previously.

Our next task is going to be to make our avatar **move**.

---

## TMI?

### Texture atlases

A better way to store the image assets of a game than separate images is a **texture atlas**. This is a single image that includes all our game's images at once! The key advantage here is that a user will only need to download a single image file along with your game, rather than a whole sequence of images. It turns out that all that stopping and starting to download multiple images can slow down load times significantly.

If you're interested in using texture atlases, one of the standard pieces of software to use is [Texture Packer](https://www.codeandweb.com/texturepacker). It's not free, but it's very good. There's even a [Texture Packer with Phaser 3 tutorial](https://www.codeandweb.com/texturepacker/tutorials/how-to-create-sprite-sheets-for-phaser3?utm_source=ad&utm_medium=banner&utm_campaign=phaser-2018-10-16) you can follow along, and Phaser 3 endorses the software. It's worth thinking about it.

---

# }
