# Phaser 3 Physics and Collisions {

---

## Summary

One of the huge advantages of using a physics engine is that it can take care of the very complex mathematics of working out whether two objects have collided or overlapped and can resolve those collisions. Phaser 3's Arcade physics system is a "simple" physics engine, but it can do a lot. In this lesson we'll look at handling collisions and overlaps between physics objects.

---

## Contents

* The game so far
* Arcade physics events
* Collisions
* Overlaps
* Groups

---

## The game so far

At this point we have a `Boot` scene that preloads our image and sprite sheet assets, and a `Play` scene that creates an avatar and a wall and allows the user to move the avatar around with the arrow keys.

---

## Arcade physics events

The other really important thing a physics engine allows beyond just having objects **move** is having them **interact** physically. That is, the physics engine can monitor the movements of the various objects and **respond** when they collide or overlap.

As with most Phaser 3 features, the possibilities here run very deep, but we'll look at the two most fundamental ideas: **collision** and **overlap**.

Within the engine, the easiest way to deal with these is through **events**. Essentially we can register that we want the engine to notice when two objects collide (or overlap) and to handle that situation for us. (We can also add further code to handle the collision if we want!)

---

## Collisions

We probably want our avatar to collide with the wall rather than just pass through it like a ghost. (Unless it's a ghost! Or... what if the **wall** is a ghost??? No.) To achieve this, we'll tell the physics engine to deal with it! It's worryingly easy. We'll also designate the wall as an **immovable** object, as walls should be.

We'll omit the `createAnimations()` and `handleInput()` methods for simplicity here. Return to the sprite and movement lessons if you need those methods!

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

    // NOTE: We tell the physics engine that the wall cannot move
    // which will be important if something bumps into it!
    // EXAMPLE: https://phaser.io/examples/v3/view/physics/arcade/sprite-vs-immovable
    this.wall.setImmovable(true);

    this.avatar = this.physics.add.sprite(200, 200, `avatar`);

    // NOTE: The simplest way to enable collisions between the avatar and the wall
    // is to add an event listener to the physics engine in this.physics as follows
    // EXAMPLE: https://phaser.io/examples/v3/view/physics/arcade/collider-1
    this.physics.add.collider(this.avatar, this.wall);

    this.createAnimations();

    this.avatar.play(`idle`);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.handleInput();
  }
}
```

Wow! Now if you steer the avatar around and try to go through the wall... you can't! The physics engine is just dealing with it thanks to **two lines of code**! Praise be!

Try commenting out the code that makes the wall **immovable** just for fun... nice. Design possibilities there too.

---

## Overlaps

With our fancy new physics abilities we can perform another really common task, which is to check whether objects **overlap**. The most obvious example of this is "collecting" something in a game, like a coin or a power-up or just a little more self esteem?

Let's add a collectable physics sprite using the same image as the wall. We'll tint it a different color so it's identifiable. Then let's add an event listener for an overlap between the avatar and that object and respond in a function!

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

    // NOTE: We're adding another physics sprite with the same image as the wall!
    this.collectable = this.physics.add.sprite(300, 300, `wall`);
    // NOTE: We'll tint it a different color so we can tell the difference
    this.collectable.setTint(`0x3333dd`);

    this.avatar = this.physics.add.sprite(200, 200, `avatar`);

    this.physics.add.collider(this.avatar, this.wall);

    // NOTE: To check for overlaps we do the same kind of thing as above
    // BUT we'll add extra arguments so we can call our own method to respond
    // to the overlap! The arguments here are:
    // - The first thing that can overlap (the avatar)
    // - The second thing that can overlap (the collectable)
    // - The function or method to call when it happens (collectItem())
    // - A function or method to replace how Arcade Physics handles the event (null!)
    // - The "context" to use when calling our handler(s) ("this", so that we can
    //   still use the properties and methods of this class)
    // DOCS: https://photonstorm.github.io/phaser3-docs/Phaser.Physics.Arcade.Factory.html#overlap__anchor
    this.physics.add.overlap(this.avatar, this.collectable, this.collectItem, null, this);

    this.createAnimations();

    this.avatar.play(`idle`);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.handleInput();
  }

  // NOTE: This method is called when the avatar overlaps the collectable
  // It receives two parameters by default, which are the first and second object
  // that overlapped (the avatar and the collectable item in that order in this case!)
  collectItem(avatar, item) {
    // NOTE: We'll keep it simple by just removing the collectable from the scene
    // using its .destroy() method!
    item.destroy();
  }
}
```

Now when the avatar overlaps with the collectable the collectable vanishes! As if you had picked it up! (It's kind of weird that it was really **destroyed** but there you go, that's the difference between the Matrix and the Real World I guess.)

We have two of the most fundamental interactions we see in countless games! Bumping into things and overlapping with them! The sky's the limit in terms of what we could meaningfully do with this.

---

## More sprites!

Currently we only have one wall and one collectable, which is a touch limited. We can probably see how we could most obviously add more: just add more lines of code adding individual sprites for each new thing we want, and add colliders and overlaps as necessary. This would mean that to add two more walls and two more collectables we would do something like this...

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
    this.wall.setImmovable(true);
    this.wall.setTint(`0xdd3333`);
    // NOTE: More walls!
    this.wall2 = this.physics.add.sprite(132, 100, `wall`);
    this.wall2.setImmovable(true);
    this.wall2.setTint(`0xdd3333`);
    this.wall3 = this.physics.add.sprite(164, 100, `wall`);
    this.wall3.setImmovable(true);
    this.wall3.setTint(`0xdd3333`);

    this.collectable = this.physics.add.sprite(300, 300, `wall`);
    this.collectable.setTint(`0x3333dd`);
    // NOTE: More collectables!
    this.collectable2 = this.physics.add.sprite(300, 364, `wall`);
    this.collectable2.setTint(`0x3333dd`);
    this.collectable3 = this.physics.add.sprite(300, 428, `wall`);
    this.collectable3.setTint(`0x3333dd`);

    this.avatar = this.physics.add.sprite(200, 200, `avatar`);

    this.physics.add.collider(this.avatar, this.wall);
    // NOTE: More colliders!
    this.physics.add.collider(this.avatar, this.wall2);
    this.physics.add.collider(this.avatar, this.wall3);

    this.physics.add.overlap(this.avatar, this.collectable, this.collectItem, null, this);
    // NOTE: More overlaps!
    this.physics.add.overlap(this.avatar, this.collectable2, this.collectItem, null, this);
    this.physics.add.overlap(this.avatar, this.collectable3, this.collectItem, null, this);

    this.createAnimations();

    this.avatar.play(`idle`);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.handleInput();
  }

  // More methods would be here
}
```

But this is a bad idea for the usual reasons! It's highly repetitive, and repetitive code is a bad idea. We might think of solving this by putting our walls and collectables into **arrays** and that would work fine.

However, Phaser 3 has a more powerful solution for this idea of wanting to deal with **multiple** game objects at the same time, which is to put them in a **group**.

---

## Groups

In Phaser 3 we can create **groups** of game objects and manipulate them all simultaneously, including checking collisions between groups or single objects and groups, and more. This is a much better way for us to organize our walls and collectables.

Also fun is that we can actually use groups to **create** a whole bunch of game objects (like sprites) at the same time, rather than creating them individually!

Let's look at one way this can work...

`Play.js`
```javascript
class Play extends Phaser.Scene {
  constructor() {
    super({
      key: `play`
    });
  }

  create() {
    // NOTE: Instead of creating individual walls, we create a group of walls all at once.
    // By adding a group to the physics engine, we can specify some basic details about the
    // image to use, the number to create, and some simple physics properties.
    // We assign the result into a property of the scene so we can deal with the group of walls
    // when we need to.
    // EXAMPLE: https://phaser.io/examples/v3/view/game-objects/group/create-invaders
    this.walls = this.physics.add.group({
      // All walls should use the wall image key
      key: `wall`,
      // Make all the walls created immovable
      immovable: true,
      // Create 16 walls
      quantity: 16,
    });

    // NOTE: Now that we've created all these wall and they're in our group, we need to
    // iterate through them to set them up! Fortunately the group gives us easy access
    // to its children and a method to iterate through them!
    this.walls.children.each(function(wall) {
      // Choose a random position on the canvas
      // NOTE: how the Phaser.Math module gives us access to lots of useful math
      // helper functions!
      // NOTE: we can use this.sys.canvas to find out the dimensions of our game
      // on the canvas!
      let x = Phaser.Math.Between(0, this.sys.canvas.width);
      let y = Phaser.Math.Between(0, this.sys.canvas.height);
      // Set the position of the current wall
      wall.setPosition(x, y);
      // Set the tint of the current wall
      wall.setTint(`0xdd3333`);
      // Note how we pass "this" as the second argument to .each() so that we can use the class'
      // methods and properties if needed
    }, this);

    // NOTE: Do roughly the same thing for the collectables to create randomly positioned
    // collectables
    this.collectables = this.physics.add.group({
      key: 'wall',
      repeat: 9
    });

    this.collectables.children.each(function(collectable) {
      let x = Phaser.Math.Between(0, this.sys.canvas.width);
      let y = Phaser.Math.Between(0, this.sys.canvas.height);
      collectable.setPosition(x, y);
      collectable.setTint(`0x3333dd`);
    }, this);

    this.avatar = this.physics.add.sprite(200, 200, `avatar`);

    // NOTE: We can add a collider between the avatar and the GROUP of walls!
    // It will check the collision between the avatar and all the walls for us!
    this.physics.add.collider(this.avatar, this.walls);

    // NOTE: We can add an overlap check between the avatar and the GROUP of collectables!
    // It will check the overlaps between the avatar and all the collectables for us!
    this.physics.add.overlap(this.avatar, this.collectables, this.collectItem, null, this);

    this.createAnimations();

    this.avatar.play(`idle`);

    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.handleInput();
  }

  // NOTE: The collectItem() method stays exactly the same! It will destroy whichever
  // collectables the avatar actually overlaps with.
  collectItem(avatar, item) {
    item.destroy();
  }
}
```

This code creates a group of randomly positioned walls and another group of randomly positioned collectables. The user can interact with both kinds of objects in the same way (**can't** walk through walls, **can** collect collectables)! This is nice because we didn't have to add so much code and you can imagine creating nice little worlds this way.

There are other approaches to positioning sprites in code, and the [Actions](https://phaser.io/examples/v3/category/actions) category of examples has some quite nice built-in methods you can use for this. Check out the random layouts! The grid layouts! Lots of potential there!

---

## Tile maps

It's too large a topic to cover, but it's worth knowing that if you're wanting to really get specific about how you lay out the sprites in your game, you'll end up wanting to use a **tile map**. This will allow you to use a separate program to actually specify visually where you want your sprites to be, and then to create a configuration file that tells Phaser 3 the layout.

[Tiled](https://www.mapeditor.org/) is a popular tool for this task that's nicely compatible with Phaser 3. There are numerous tutorials online if you want to go down this specific road!

---

## Physics and collisions!

We've completed a high level overview of what's possible with Phaser 3, but most importantly we have a grasp the core structural and philosophical ideas behind the library. We've also emphasized how important the Phaser 3 examples are in terms of learning to use the library's to its full capacity.

Guess it's time to make some games!

---

# }
