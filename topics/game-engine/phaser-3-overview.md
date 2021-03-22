# Phaser 3 Overview {

---

## Summary

Phaser 3 is a sophisticated and flexible 2D game engine for JavaScript. It provides an impressive array of features to allow you to create animated sprites, apply physics, handle user input, create particle effects, manage the game camera, and much more.

---

## Contents

* What is Phaser 3?
* Getting to know Phaser 3
* Examples
* Learning resources
* Getting Phaser 3

---

## What is Phaser 3?

Phaser 3 is a sophisticated and flexible 2D game engine for JavaScript. It provides an impressive array of features to allow you to create animated sprites, apply physics, handle user input, create particle effects, manage the game camera, and much more.

You may well already have experience trying to implement some of those ideas from scratch yourself. If so, you probably found out just how challenging many of these tasks are (we're looking at you, physics!). Phaser 3 is essentially designed to make common game development tasks much, much easier.

It's also a big library, however, so it's important to adjust to the fundamentals before getting too adventurous! In this series of lessons we're going to focus on the basics of getting a solid Phaser 3 game project underway.

Finally, it's worth noting that although Phaser 3 is specifically a **game** library, you don't have to use it to make games! At heart, it's more about creating "interactive worlds" than games. Keep your mind open!

---

## Getting to know Phaser 3

As always, we should get to know Phaser 3 by visiting its homepage at [https://phaser.io](https://phaser.io).

### Description

As we can see, Phaser 3 is self-described as

> A fast, free and fun open source framework for Canvas and WebGL powered web games.

The fact Phaser 3 is open source is really nice - you can, if you want, look at every single aspect of how the library is coded whenever you want. Admittedly that's usually too overwhelming to contemplate, but it's nice that it has that ethos. It also means it's a real **community** project, which adds to the liveliness of the documentation and help available.

### Features

The listing of "features" available in Phaser 3 is worth perusing to get a very high level overview of the key things the library provides us with.

### Games

At the bottom of the page you can find links to many **games** made in Phaser 3. This can be an inspiring way to think about what it makes possible.

### Menu

The homepage immediately points us to key resource in its menu:

* **Learn** will take us to tutorials and documentation especially
* **Download** will help us actually obtain the Phaser 3 library itself
* **Examples** has a truly impressive set of examples of how to achieve particular effects with Phaser 3
* **Community** points to excellent places to seek help from other Phaser 3 developers

So, Phaser 3 has a solid network of help available for learning how to use it. Let's take a quick tour of the key categories here.

---

## Examples

After having seen some full scale games to get a sense of some of the aesthetic and interactive possibilities involved in using Phaser 3, it's a good idea to take a dip into the **examples** section of the website.

In fact, this is likely to be the **most important resource** we use with the library. Often when we're trying to solve a problem using the library we'll find ourselves working via the examples to figure out how to implement it. Developing a familiarity with the example section's structure and specific examples is a good starting point so that you know the kinds of things available here.

### Overview

The main examples page shows us high level categories we may be interested. It's already pretty intense in terms of just how much is clearly possible, but it's smart to get this general overview in our minds so we know what we can reasonably look for later on.

There's a lot to be exited about here, from animation to camera control to audio to full games to input to physics to particles to tweens to math!

A quick note that the **Game Object** category is particularly important to look at. These are all the kinds of "things" that can exist in a Phaser 3 game, from sprites to text to images to lights to particles. You definitely want to have a sense of these since they're your building blocks.

### An actual example

Let's take a quick look at Examples > Game Objects > Sprites > [Moving Sprite](https://phaser.io/examples/v3/view/game-objects/sprites/moving-sprite) to see the basic format...

#### Working "game"

First, we see the example actually running on the page. In this case it's a sprite (an image) that moves across the canvas it's displayed on. Quite simple, but clearly the kind of thing we might want to be able to do!

#### Code

Second, we have the code that makes the example run. It's clearly great to have this code, but a couple of caveats:

* The code is **not commented** (perhaps they feel it's self-explanatory, but this is a shame)
* This code is **not immediately usable** in the sense of cut and paste because we would need the image used and we'd need a working Phaser 3 project
* The code's **structure is unfamiliar** to us right now, we'll need to know how Phaser 3 programs are structured to make sense of it

Despite all this, we can look at the example and see how it'll be helpful later on. We're programmers after all! We can see:

* There's a **preloading** aspect, represented here by a `preload()` function which is loading the actual image being used in the example and giving it a name (phaser calls this a "key")
* There's a **creation** aspect, where the actual sprite is created in a `create()` function. We can see the sprite is added with a position and using the **key** it was assigned when the image was loaded
* There's an **updating** aspect, where the sprite is moved across the screen by manipulating its `x` property in an `update()` function.

In fact, this bear a significant resemblance to how we might do something similar in p5.js, right?

* p5.js's `preload()` function is replicated here as Phaser 3's `preload()`
* p5.js's `setup()` function is replicated here as Phaser 3's `create()`
* p5.js's `draw()` function is replicated here as Phaser 3's `update()`

So we're actually on relatively familiar ground **conceptually**. Most of what we need to get used to is the new ways to make specific things **happen**, like loading an image, creating a sprite, and moving it on the canvas.

As we get used to using Phaser 3, these examples will become easier and easier to parse.

#### A note on Phaser 3 versus Phaser 2

Right at the bottom of the [main examples page](https://phaser.io/examples) is a link to "Swap to Phaser 2 examples". Phaser 2 is, as you may imagine, the **previous** major version of Phaser 3. They are **not** compatible with each other.

Generally speaking you should **just use Phaser 3**. There's no real reason to work with Phaser 2 unless you're already familiar with it.

The most important thing to note here, though, is you do need to **be aware that Phaser 2 exists**. That's because some examples, tutorials, help online, etc. will be for Phaser 2 and **not** Phaser 3. Always check to make sure when you're looking at a resource that it's for **Phaser 3 specifically**.

---

## Learning resources

If we return to the homepage and go to the **Learn** section of the website, we'll find their collection of resources for learning how to use Phaser 3. There's a lot here, but do take special note of:

* **Getting Started** - may be good to review, though we'll cover the vast majority of this ourselves
* **Making your first game** - a fairly straightforward platformer tutorial and a common starting point with the library
* **Examples** - we know about this!
* **API Docs** - ah, there's the API!
* **Tutorials** - there are a **lot** of tutorials for Phaser 3

Again, we'll get ourselves up and running with Phaser 3 over the next lessons, but there's a ton of support outside that.

---

## The API

If we click through to the Phaser 3 API, we'll find that it's pretty **intense**. Because Phaser 3 relies quite heavily on learning by **example** in particular, the documentation of the API is very thorough, but not necessarily a strong learning resource. It's more useful as the final word on every little thing that's possible with every single element of the library.

If we make our way through to Game Objects > [Sprite](https://newdocs.phaser.io/docs/3.53.1/Phaser.GameObjects.Sprite), for example, we can see just how much is packed into this single element of Phaser 3.

The API documentation is written in what is probably a familiar style by now, with a listing of **properties** and **methods** available for the particular component of the library being discussed.

* Properties get a **description** and also the **type** of value they require
* Methods get a **description**, a listing of **parameters**, and a description of any **return** value

The documentation is interlinked, so if the type of a property value is some other object in the Phaser 3 library you can click through to find out more about it through its documentation.

So, it's **standard** documentation, but it's **huge** documentation. In terms of learning, it's generally best to begin from the **examples** and then check in the API when you really need to clarify something quite specific.

---

## Getting Phaser 3

Well, we've got an overview of what the library is and does now, we're going to want to use it! Fortunately the **Download** menu item will take care of that for us.

Like many libraries, we can obtain Phaser 3 in multiple ways, including the two most familiar approaches of **downloading it as a file** and using it **via a CDN**. As always, you can do whatever feels more convenient!

So, that was easy! We're ready to start?!

---

## Phaser 3!

We've learned that Phaser 3 is a game engine for JavaScript. It has many examples that we can draw inspiration from as well as use in our own code. It has a huge amount of learning support, including a very active community. In short, it's an excellent library to add to our arsenal. Let's start using it!

Over the next lessons we'll get up and running with a simple "collection game" written in Phaser 3 that will help us to touch on a lot of the core elements of the library.

---

# }
