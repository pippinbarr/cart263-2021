# Phaser 3 Physics and Movement {

---

## Summary

Some level of physics simulation is so integral to so many games that Phaser 3 understandably includes the ability to add physics. Phaser 3 offers a "simple" physics engine called Arcade Physics, and a more complex engine that uses the [Matter.js](https://brm.io/matter-js/). In this lesson we'll look at using the Arcade Physics engine to move a sprite around on the canvas.

---

## Contents

* The game so far
* Phaser 3's physics systems
* Sprites with physics
* Moving sprites with velocity
* Adding keyboard input

---

## The game so far

At this point we have a nicely structured game with a preloading scene and a play scene. We also have two sprites in our play scene, a wall and an avatar. The avatar can play animations! However the avatar can't move, which is less fun than it could be. Return to the previous lessons if you need to catch up to this point.

---

## Phaser 3's physics systems

Some level of physics simulation is so integral to so many games that Phaser 3 understandably includes the ability to add physics. Phaser 3 offers a "simple" physics engine called Arcade Physics, and a more complex engine that uses the [Matter.js](https://brm.io/matter-js/). In this lesson we'll look at using the Arcade Physics engine to move a sprite around on the canvas.

Our ultimate objective will be for the user to steer that avatar sprite around on the canvas using the arrow keys on their keyboard. In doing this, we'll learn about the basics of Arcade Physics, setting it up, and controlling a sprite's velocity. We'll also be taking a quick look at keyboard input!

Remember in `main.js` when we included the configuration option specifying "arcade" as our default physics engine? Well, now we're going to use that!

---

## Sprites with physics

The chosen physics system in a Phaser 3 game is represented in a scene via the `this.physics` property. This is what allows us to create sprites that work with the physics engine, as well as check for collisions and overlaps and more.

Currently our wall and avatar sprites are being created as standard sprites (with no physics!). It's time to change that, and the change is... **tiny**! Check it out...

We will omit the `createAnimations()` method definition here for clarity.

`Play.js`
```javascript
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    // NOTE: Instead of using this.add.sprite() we use this.physics.add.sprite()
    // That's it! Doing this means we're asking the physics system in this.physics
    // to create our sprite and add all the properties and methods it needs to do
    // physics things!
    // EXAMPLE: https://phaser.io/examples/v3/view/physics/arcade/simple-body
    this.wall = this.physics.add.sprite(100, 100, `wall`);
    this.wall.setTint(`0xdd3333`);

    // NOTE: Same again here. Just create the sprite in the same way but via the
    // physics system in this.physics
    this.avatar = this.physics.add.sprite(200, 200, `avatar`);

    this.createAnimations();

    // NOTE: We now have access to physics methods such as .setVelocityX()
    // (and .setVelocityY() of course) that can make our physics sprite move!
    // The parameter specifies the number of pixels per second the avatar
    // should move at
    // EXAMPLE: https://phaser.io/examples/v3/view/physics/arcade/simple-body
    this.avatar.setVelocityX(100);
    // NOTE: Since the sprite now starts out moving, it makes sense to play its
    // moving animation instead of its idle animation
    this.avatar.play(`moving`);
  }

  update() {

  }
}
```

Look at it go! Our avatar should now move across the canvas from left to right at 100 pixels per second while running its moving animation loop! This is starting to look like something!

**NOTE** how there is **still nothing in `update()`**! This is a very nice aspect of Phaser 3. All of these kinds of "normal" game operations, such as making a sprite animate and move are just **taken care of** behind the scenes. When we add our sprite to the scene, give it a velocity, and start it playing an animation, **Phaser 3 does the rest**. The sprite is just **in the scene**, doing its thing.

If you dig into the Arcade Physics examples for Phaser 3 you will see there are **many** more things we can do with physics sprites! This is the very tip of the iceberg.

---

## Adding keyboard input

Our "game" would be more interesting if the user could control the avatar sprite with their keyboard in some way. Let's go with "the usual". Pressing the left arrow will move the avatar sprite left, pressing the down arrow will move it down, and so on.

For simple "arrow keys and the space bar" input, Phaser 3 provides a really handy shortcut for getting up and running with user input, so let's use that. We'll set up the input controls and then add a `handleInput()` method to call in `update()` to check which keys the user is pressing so we can set velocity and play animations appropriately.

`Play.js`
```javascript
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    this.wall = this.physics.add.sprite(100, 100, `wall`);
    this.wall.setTint(`0xdd3333`);

    this.avatar = this.physics.add.sprite(200, 200, `avatar`);

    this.createAnimations();

    // NOTE: The avatar isn't moving to begin with any more
    this.avatar.play(`idle`);

    // NOTE: We can create an easy way to access the arrow keys and space bar
    // using the keyboard input system's .createCursorKeys() method!
    // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.handleInput();
  }

  handleInput() {
    // NOTE: We can now check which keys are pressed and set the velocity of our
    // avatar sprite accordingly.
    // EXAMPLE: https://phaser.io/examples/v3/view/input/keyboard/cursor-keys
    if (this.cursors.left.isDown) {
      this.avatar.setVelocityX(-100);
    }
    else if (this.cursors.right.isDown) {
      this.avatar.setVelocityX(100);
    }
    else {
      // If neither left or right are pressed, stop moving on x
      this.avatar.setVelocityX(0);
    }

    if (this.cursors.up.isDown) {
      this.avatar.setVelocityY(-100);
    }
    else if (this.cursors.down.isDown) {
      this.avatar.setVelocityY(100);
    }
    else {
      // If neither up or down are pressed, stop moving on y
      this.avatar.setVelocityY(0);
    }

    // NOTE: Now that the avatar might be moving or idle, we should
    // check its current velocity to figure out which animation to play!
    // Notice that to check the current velocity we need to access the
    // "body" property of our avatar (which represents it in relation to the physics
    // engine) and then the "velocity" property of that body.

    // If either x or y velocity isn't zero, that the avatar is moving
    if (this.avatar.body.velocity.x !== 0 || this.avatar.body.velocity.y !== 0) {
      // NOTE: That we include a second argument of "true" to tell the animation system
      // to ignore this instruction if the animation is already playing. This avoids
      // having the animation get constantly interrupted as the player moves
      // DOCS: https://newdocs.phaser.io/docs/3.53.1/Phaser.GameObjects.Sprite#play
      this.avatar.play(`moving`, true);
    }
    // Otherwise it's not moving
    else {
      this.avatar.play(`idle`, true);
    }
  }
}
```

Now we can steer our little avatar around on the canvas with the arrow keys! We have created life! We're also finally using `update()` for something, which is nice too.

---

## Physics and movement!

We've seen how to use the physics system in our scene via `this.physics` and to use it to create physics-enabled sprites that can have a velocity and thus move around. We've also seen an example of using the keyboard input system in `this.input.keyboard` to create quick access to the cursor keys on the keyboard and how to use them to control our avatar.

This is just the beginning of what's possible in terms of controlling movement in a Phaser 3 game. There's naturally also the ability to handle acceleration, rotational movement, and more! The examples are your friend for delving into those possibilities.

One really important thing about physics, though, is having different objects physically interact. You know, like collide and stuff. That will be our next lesson!

# }
