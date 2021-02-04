# ml5.js: Handpose {

---

## Summary

The [Handpose](https://learn.ml5js.org/#/reference/handpose) feature in [ml5.js](https://ml5js.org/) allows us to use a pre-trained model to detect a hand in an image (including static images, video, or a webcam feed). The key output is a set of 21 points representing the positions of the fingers (finger tips and knuckles) and the palm of the hand.

---

## Contents

* Handpose
* Reading the documentation
* Reading and running an example online
* Accessing the output
* Understanding the output
* Making a framework in our own project
* Doing something else!

---

## Handpose

Handpose is a feature of ml5.js that provides access to a model which performs hand detection in images. In essence it lets us provide an image (via an image or video file, or through the webcam) and the model will locate a hand and label an impressive set of points on that hand (fingertips, every knuckle, and the base of the palm).

The best way to understand this feature is, unsurprisingly, to read its documentation.

---

## Reading the documentation

If we go to the [Handpose](https://learn.ml5js.org/#/reference/handpose) reference page we'll find ml5.js's standard presentation of its API. As with most API documentation, it has its own particular approach but follows general principles of providing specific descriptions of methods and properties as well as examples. Let's look at the component pieces here...

### Example image

The page begins with an image that shows us precisely what the feature offers. It can **locate** a hand in serious detail! We see all the little data points it can associate with and track on a hand! It is quite impressive!

### Description

> Handpose is a machine-learning model that allows for palm detection and hand-skeleton finger tracking in the browser. It can detect a maximum of one hand at a time and provides 21 3D hand keypoints that describe important locations on the palm and fingers.

Sounds good! There are a couple of things here worth paying attention to:

* Handpose recognizes **one hand at a time** (important since that would affect the kinds of things we would do with it)
* Handpose returns data in **3D** specifically (so we could imagine leveraging this aspect)

### Quickstart

The Quickstart section shows us a minimal amount of code required to load the Handpose model and begin recognizing hands. This is clearly useful because it shows us the usage of the model in situ, but can be awkward if we're not used to the specific way it's being achieved.

For example, we may be used to working in p5.js, but the example may present the use of the feature in a different context (such as based on the DOM). With time, we'll be able to interpret this kind of "bare bones" example and translate it to our own way of working.

At the very least we can identify the key instructions and think about how we might incorporate them into our own framework.

### Usage

In the Usage section we see the actual details of the API. This is especially useful as a place to refer back to when we start using Handpose and might want to know more about how the core methods work. Like many of the ml5.js features, it's chiefly broken down into an **initialization** method to get it started and then **prediction** methods that allow us to request its hand predictions.

There are also a number of **properties** we could potentially access to check things like the current configuration of the model or whether the model is ready yet.

We should note that we can either request an individual prediction with `.predict()` or we can continuously request predictions with the event handler `.on('predict', callback)`. Which one we use will depend particularly on whether we're doing something in realtime (in which case we'd use the event handler) or at specific moments (in which case we'd use the `.predict()` method).

Importantly, we should always pay attention to the **output** of the prediction methods, which is described as:

> Returns an array of objects describing each detected hand. You can see all of the supported annotation in the Tensorflow source code.

If we click through to the Tensorflow source code we can see the basic structure being offered, but we don't really ever get a truly precise description of the data format that model outputs. Once again, we'll probably have to work it out ourselves by using the Handpose feature and outputting the data so we can read through it.

### Examples

ml5.js is great about providing examples of using its features. Even better, the examples are provided in different frameworks, including p5.js and plain JavaScript. This makes our lives a lot easier as we can get a better sense of how to actually use any given feature.

We'll return to the examples shortly as they're a key way to get up and running with this feature. Let's keep reading for now.

### Demo

No demo for this feature as yet.

### Demo and Tutorials

No tutorials for this feature as yet.

### Model and Data Provenance

A wonderful thing about the ml5.js API is that it at least tries to provide a discussion of the data for every model it uses. This is useful and worth a look for several reasons:

* It's just interesting to learn more about the inner workings of the tools we plan on using!
* It may provide important clues concerning how the underlying models work
* It can provide us with insights into potential data bias if we're looking for that

However, at the moment, Handpose doesn't have its model and data provenance available yet. A shame, but nobody's perfect.

### Acknowledgements

People to include in your prayers of thankfulness.

### Source Code

If you really want to go there, you can actually look at how this feature is written! (It can be surprisingly "simple" or at least short because it's generally "just" an intermediary talking to TensorFlow.js.)

---

## Reading and running an example online

Now that we've got our overview of what this feature is and roughly how it works, we can turn our attention to perhaps the key key learning resource, which is the **examples** section.

In particular, looking at the versions of the examples written in the **p5 web editor** is a good option because it's immediately available and runnable. In this case we have examples of detecting a hand in a static image and live via the webcam. So, we should look at them!

The great thing here is that we can both run the example and look at the code that makes it work at the same time. Let's focus on the webcam version. Importantly this tells us a couple of things worth remembering:

* Where the key Handpose instructions are being used (such as initializing and then listening for "predict" events in `setup()`)
* At least one way to access the data (such as displaying a circle for every point)

In essence these examples can give us some basic **structure** to work with in these scenarios (static image or webcam). We can largely mimic this basic setup and then change what we **do** with the data in order to make our projects work with this feature.

---

## Accessing the output

With this kind of technology it's really crucial to understand how the **data** is being provided to your program as the output of the model. This data is the stuff we can actually use to do interesting things in our projects.

There isn't explicit documentation in the Handpose API that tells us with total precision the nature of the output, but there are a number of useful clues.

### Example code

In the **example code** we see that they draw circles at each point on the hand identified by Handpose and that they do this by going through a `landmarks` array. Each element in the `landmarks` array is another array and they're using the first (`0`) and second (`1`) elements as `x` and `y` coordinates to draw the points.

That's useful but makes it kind of difficult to understand exactly which point is which within the `landmarks` array. Which one is the thumb? Which one is the index finger?

### Documentation

Here we can return to the documentation for `.predict()` and at least get a basic picture of the object representing a detected hand. This is pretty useful, but still doesn't give us a precise map of the specific data being used to identify each point on the hand.

### The JavaScript Console

In the end, the best way to see the available data is often to look at it explicitly in a running program. In the ml5.js example we can use `console.log()` to actually display the `results` array that comes with a prediction. We can do this in the p5 web editor and then view the object in our JavaScript console.

This shows us the entire contents of the hand data, including

* `annotations` which is an object containing properties for each finger and the palm
* `boundingBox` which contains the top left and bottom right coordinates of the hand's bounding box
* `handInViewConfidence` which tells us how sure Handpose is that it can see a hand
* `landmarks` which also contains the hand data as in `annotations` but just in an array of 21 points without information about what they are

So the `annotations` object seems like the most easily accessible form of data output, but it's still kind of obscure, because if we look at something like `annotations.indexFinger`, for instance, we'll see it contains an **array** of four elements.

We can see each element contains coordinates for a point on the index finger presumably, but which point? At this stage we basically need to play around to figure out that in order in the array `annotations.indexFinger` we have points referring to the base of the finger (or thumb), the two knuckles, and then the tip of the finger. (One way to find this out would be to **number** the different points explicitly on the canvas while displaying the image feed.)

So if you want to get the tip of the index finger it's a the position specified in `annotations.indexFinger[3]`. Yikes. Nobody said data was always organized in an easy-to-understand way.

At least we know now.

---

## Understanding the output

Generally speaking the Handpose data is pretty straightforward in terms of confidence or bounding boxes or specific points on the hand.

Perhaps the key thing to keep in mind is the way that Handpose (and most ml5.js models) uses **arrays** to represent coordinates. So for a point in 3D space it will have a **three element array** where the first element (position `0`) is the x coordinate, the second element (position `1`) is the y coordinate, and the third element (position `2`) is the z coordinate.

Why do they do this? Quite possibly a matter of efficiency, but it's hard to say.

---

## Making a framework in our own project

Now we're ready to start a project with this feature in our own setup. So, we'd need to:

* Start a basic template project
* Include the ml5.js script tag (remember we can find that in [Getting Started](https://learn.ml5js.org/#/))
* Either paste in an example directly or put together our own basic framework

Here's a fairly detailed suggested framework for using Handpose and the webcam:

```javascript
/**

Handpose Framework
Pippin Barr

A skeleton framework for using ml5.js's Handpose feature. Includes a
loading screen followed by a live webcam feed with a circle drawn at
the tip of the user's index finger.

*/

"use strict";

// Current state of program
let state = `loading`; // loading, running
// User's webcam
let video;
// The name of our model
let modelName = `Handpose`;
// Handpose object (using the name of the model for clarity)
let handpose;
// The current set of predictions made by Handpose once it's running
let predictions = [];

/**
Starts the webcam and the Handpose
*/
function setup() {
  createCanvas(640, 480);

  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // Start the Handpose model and switch to our running state when it loads
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    // Switch to the running state
    state = `running`;
  });

  // Listen for prediction events from Handpose and store the results in our
  // predictions array when they occur
  handpose.on(`predict`, function(results) {
    predictions = results;
  });
}

/**
Handles the two states of the program: loading, running
*/
function draw() {
  if (state === `loading`) {
    loading();
  }
  else if (state === `running`) {
    running();
  }
}

/**
Displays a simple loading screen with the loading model's name
*/
function loading() {
  background(255);

  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Loading ${modelName}...`, width / 2, height / 2);
  pop();
}

/**
Displays the webcam.
If there is a hand it outlines it and highlights the tip of the index finger
*/
function running() {
  // Display the webcam with reveresd image so it's a mirror
  let flippedVideo = ml5.flipImage(video);
  image(flippedVideo, 0, 0, width, height);

  // Check if there currently predictions to display
  if (predictions.length > 0) {
    // Technically there will only be ONE because it only detects ONE hand
    // Get the hand predicted
    let hand = predictions[0];
    // Highlight it on the canvas
    highlightHand(hand);
  }
}

/**
Provided with a detected hand it highlights the tip of the index finger
*/
function highlightHand(hand) {
  // Display a circle at the tip of the index finger
  let index = hand.annotations.indexFinger[3];
  let indexX = index[0];
  let indexY = index[1];
  push();
  fill(255, 255, 0);
  noStroke();
  ellipse(indexX, indexY, 50);
  pop();
}
```

---

## Doing something else!

At this point we have the ability to start the model and access the data it provides. It's now up to us to use that for our wildest machine learning dreams! What if you...

* Require the user to wave their hand forwards and backwards? Waving-cat play acting!
* Teach the user how to make specific signs with their hand like Spock's "Live Long and Prosper" or a cat's claw (accompanied with a hiss?)? Nerdschool!
* Detect hand motion around a virtual cat? Pat that cat!
* Let the user pick up a cat by the scruff of its neck and put it somewhere in a scene? Momma cat simulator!

And so on. And it doesn't even have to just be cats!

---

## Nice to meet you!

So that's the Handpose feature of ml5.js. There's a lot going on here and it is very, very powerful as a technology. It's exciting to think we get to use this technology! On the web! There are a lot of skills we need to employ here, but the result is access to something genuinely incredible.

---

# }
