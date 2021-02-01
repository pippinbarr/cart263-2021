# ml5.js: ObjectDetector {

---

## Summary

The [ObjectDetector](https://learn.ml5js.org/#/reference/object-detector) feature in [ml5.js](https://ml5js.org/) allows us to use a pre-trained or user-created model to detect objects in images (including static images, video, or a webcam feed). Depending on the model, we can detect all kinds of objects in images and respond to them within a program!

---

## Contents

* ObjectDetector
* Reading the documentation
* Reading and running an example online
* Accessing the output
* Understanding the output
* Making a framework in our own project
* Doing something else!

---

## ObjectDetector

ObjectDetector is a feature of ml5.js that provides access to models which perform object detection in images. In essence it lets us provide an image (via an image or video file, or through the webcam) and the model will label any objects detected in that image.

The best way to understand this feature is, unsurprisingly, to read its documentation.

---

## Reading the documentation

If we go to the [ObjectDetector](https://learn.ml5js.org/#/reference/object-detector) reference page we'll find ml5.js's standard presentation of its API. As with most API documentation, it has its own particular approach but follows general principles of providing specific descriptions of methods and properties as well as examples. Let's look at the component pieces here...

### Example image

The page begins with an image that shows us precisely what the feature offers. It can **locate** (and define a bounding box around) and **label** specific objects (such as a cat) in an image. We can see that along with the label there is also a percentage which reflects how **confident** the model is in its prediction. That seems like it could be fun to play around with?

### Description

The description is very brief:

> Real-time object detection system using either YOLO or CocoSsd model.

It tells us the basic function (object detection), but also points out it can use two different **models** for this object detection (YOLO or CocoSsd). This is important because it draws our attention toward the idea that these models are **different** to one another - not all models are created equal.

In particular, different models are likely trained on different **data** and so are would detect different objects and potentially in different ways.

Perhaps one model might recognize cats, dogs, and koalas while another might recognize planes, trains, and cars.

Perhaps both models might recognize people, but one more consistently recognizes white people and  the other (perhaps trained on a more diverse dataset) recognizes people of different ethnicities equally.

While it's fine to just go ahead and play around with any model, it's worth at least registering in your mind these potential biases in datasets and the resulting models.

### Quickstart

The Quickstart section shows us a minimal amount of code required to load an object detection model and begin recognizing objects. This is clearly useful because it shows us the usage of the model in situ, but can be awkward if we're not used to the specific way it's being achieved.

For example, we may be used to working in p5.js, but the example may present the use of the feature in a different context (such as based on the DOM).

With time, we'll be able to interpret this kind of "bare bones" example and translate it to our own way of working.

At the very least we can identify the key instructions and think about how we might incorporate them into our own framework.

### Usage

In the Usage section we see the actual details of the API. ObjectDetector is mercifully simple in that it really only provides two methods. One to create an ObjectDetector and select a specific model (discussed in the Initialize section) and one to request object detection to be performed (discussed in the Methods section).

As with most APIs we get an example of usage followed by details about the parameters you can provide.

(Notice how in this API optional parameters are indicated by a question mark in front of them.)

All this is worth paying attention to, but especially crucial is the mention of the **output** of the detection method:

> returns an array of objects containing class names, bounding boxes and probabilities

This is surprisingly basic and doesn't provide information about the specifics of how the results are presented. We'll have to look closely later on at how to actually work with the data from this feature given we don't get the details here.

### Examples

Fortunately, ml5.js is great about providing examples of using its features. Even better, the examples are provided for different frameworks, including p5.js and plain JavaScript. This makes our lives a lot easier as we can get a better sense of how to actually use any given feature.

We'll return to the examples shortly as they're a key way to get up and running with this feature. Let's keep reading for now.

### Tutorials

There's even a video tutorial for this feature! We should watch this if we're looking for extra help in understanding how to get it working.

### Model and Data Provenance

A wonderful thing about the ml5.js API is that it provides this discussion of data for every model it uses. This is useful and worth a look for several reasons:

* It's just interesting to learn more about the inner workings of the tools we plan on using!
* It may provide important clues concerning how the underlying models work and the kinds of things they can actually identify (otherwise how will we know what the model knows?)
* It can provide us with insights into potential data bias if we're looking for that (consider the note that YOLO's image dataset comes from Flickr, what could that mean?)

Even if you just want to get into playing around, it's generally worth at least scanning through this section as it will link you to more detail about the models being used in case you discover you need it later.

### Acknowledgements

People to include in your prayers of thankfulness.

### Source Code

If you really want to go there, you can actually look at how this feature is written! (It can be surprisingly "simple" or at least short because it's generally "just" an intermediary talking to TensorFlow.js.)

---

## Reading and running an example online

Now that we've got our overview of what this feature is and roughly how it works, we can turn our attention to perhaps the key key learning resource, which is the **examples** section.

In particular, looking at the versions of the examples written in the **p5 web editor** is a good option because it's immediately available and runnable. Here we can see several examples, split across the two available built-in models (YOLO and CocoSsd). So, we should look at them!

For simplicity's sake, let's focus on the CocoSsd model. Thus, we can look at an example with the webcam available and an example with a single loaded image.

The great thing here is that we can both run the example and look at the code that makes it work at the same time. Importantly this tells us a couple of things worth remembering:

* Where the key ObjectDetector instructions are being used (it's initialized in `setup()` and the `detect()` method is being used once the model is ready)
* Differences between using the model once versus using it continuously in realtime (the detect method is called again each time it completes in the realtime case)
* How the the data is structured when the ObjectDetector finds something (we can see it includes position, dimensions, a label, and a confidence rating)

In essence these examples give us a really good basic **structure** to work with in these scenarios (static image or webcam). We can mimic this basic setup and then change what we **do** with the data in order to make our projects work with this feature.

---

## Accessing the output

With this kind of technology it's really crucial to understand how the **data** is being provided to your program as the output of the model. This data is the stuff we can actually use to do interesting things in our projects.

As noted above, there isn't explicit documentation in the ObjectDetector API that tells us precisely the nature of the output, but we can figure it out fairly easily in this case by looking at the single image example code's use of the data:

```javascript
for (let i = 0; i < objects.length; i++) {
  noStroke();
  fill(0, 255, 0);
  text(objects[i].label + " " + nfc(objects[i].confidence * 100.0, 2) + "%", objects[i].x + 5, objects[i].y + 15);
  noFill();
  strokeWeight(4);
  stroke(0, 255, 0);
  rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
```

If we read through this and look specifically at how the elements in the `objects` array are accessed we can understand the data available. Specifically we can see the use of six **properties** of the objects in the array:

* `x` and `y` which reflect the top left corner of the **bounding box** of the identified object
* `width` and `height` which reflect the dimensions of the **bounding box** of the identified object
* `label` which gives us the **category name** of the identified object
* `confidence` which gives us the the degree to which the model is sure it's that specific object

More formally, if we want to have a clear view, we can also note that the example code includes

```javascript
console.log(results);
```

when it has received results. This prints out the actual results data to the JavaScript console and we can go and look at it. In this case it essentially confirms our understanding of the data, though there's also a `normalized` property which includes the bounding box data normalized to be between 0 and 1.

For reference, this means that each detected object's data looks like this (with made up values):

```javascript
{
  x: 100, // x coordinate of top left corner of bounding box
  y: 100, // y coordinate of top left corner of bounding box
  width: 200, // width of the bounding box
  height: 300, // height of the bounding box
  label: "cat", // the name of the object recognized
  confidence: 0.87, // the confidence of the model in the label
  normalized: { // bounding box normalized to 0..1
    x: 0.2,
    y: 0.2,
    width: 0.25,
    height: 0.33
  }
}
```

---

## Understanding the output

Clearly it's important to be able to literally access the output in code, but it's also important to understand what that output represents and how it's formatted.

A lot of the time this can be quite straightforward, as with the position and dimensions of the object bounding box or the confidence score.

The **label**, however, has at least one aspect we should be thinking about. Specifically, what **are** the possible labels? It's not the case that the CocoSsd model recognizes every object in existence - that's easy to see when you show it various things it clearly has no idea about. So what **does** it recognize?

To find this out you actually need to do a bit of sleuthing. Specifically, you need to follow a chain of links...

* First go to the [COCO-SSD Model Biography](https://learn.ml5js.org/#/reference/object-detector?id=coco-ssd-model-biography)
* Follow the link to the [CocoSsd Github Repository](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd) as a place to get more detail on the model's implementation
* Find the mention of recognizing 80 classes objects which links to a specific file in the respository, [classes.ts](https://github.com/tensorflow/tfjs-models/blob/master/coco-ssd/src/classes.ts)
* That file contains an actual list of the recognized classes!

This kind of process is worth thinking about and practicing. We need our detective hats on to find it, but it can be really rewarding and useful. Now, for example, we have clarity on what **can** be recognized by the model and that may give us ideas for our projects. We could even include the list of objects in our project as data to use.

---

## Making a framework in our own project

Now we're ready to start a project with this feature in our own setup. So, we'd need to:

* Start a basic template project
* Include the ml5.js script tag (remember we can find that in [Getting Started](https://learn.ml5js.org/#/))
* Either paste in an example directly or put together our own basic framework

Here's a fairly detailed suggested framework for using ObjectDetector with CocoSsd and the webcam:

```javascript
/**

ObjectDetector Framework
Pippin Barr

A skeleton framework for using ml5.js's ObjectDetector feature. Includes a
loading screen followed by a live webcam feed with all recognized objects
outlined and labelled with a name and confidence rating.

*/

"use strict";

// Current state of program
let state = `loading`; // loading, running
// User's webcam
let video;
// The name of our model
let modelName = `CocoSsd`;
// ObjectDetector object (using the name of the model for clarify)
let cocossd;
// The current set of predictions made by CocoSsd once it's running
let predictions = [];

/**
Starts the webcam and the ObjectDetector
*/
function setup() {
  createCanvas(640, 480);

  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // Start the CocoSsd model and when it's ready start detection
  // and switch to the running state
  cocossd = ml5.objectDetector('cocossd', {}, function() {
    // Ask CocoSsd to start detecting objects, calls gotResults
    // if it finds something
    cocossd.detect(video, gotResults);
    // Switch to the running state
    state = `running`;
  });
}

/**
Called when CocoSsd has detected at least one object in the video feed
*/
function gotResults(err, results) {
  // If there's an error, report it
  if (err) {
    console.error(err);
  }
  // Otherwise, save the results into our predictions array
  else {
    predictions = results;
  }
  // Ask CocoSsd to detect objects again so it's continuous
  cocossd.detect(video, gotResults);
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
If there are currently objects detected it outlines them and labels them
with the name and confidence value.
*/
function running() {
  // Display the webcam
  image(video, 0, 0, width, height);

  // Check if there currently predictions to display
  if (predictions) {
    // If so run through the array of predictions
    for (let i = 0; i < predictions.length; i++) {
      // Get the object predicted
      let object = predictions[i];
      // Highlight it on the canvas
      highlightObject(object);
    }
  }
}

/**
Provided with a detected object it draws a box around it and includes its
label and confidence value
*/
function highlightObject(object) {
  // Display a box around it
  push();
  noFill();
  stroke(255, 255, 0);
  rect(object.x, object.y, object.width, object.height);
  pop();
  // Display the label and confidence in the center of the box
  push();
  textSize(18);
  fill(255, 255, 0);
  textAlign(CENTER, CENTER);
  text(`${object.label}, ${object.confidence.toFixed(2)}`, object.x + object.width / 2, object.y + object.height / 2);
  pop();
}
```

---

## Doing something else!

At this point we have the ability to start the model and access the data it provides. It's now up to us to use that for our wildest machine learning dreams! What if you...

* Check for objects with the label "cat" and fill in their bounding boxes in black. Cat censorship!
* Require that the user use a cat as a mouse pointer by only accepting input from the cat's bounding box? Cat mouse!
* Demand that the user show a cat to the webcam? Cat obsessive AI!
* Use the confidence value to tell the user their cat is of dubious quality? Cat judge!

And so on. And it doesn't even have to just be cats!

---

## Nice to meet you!

So that's the ObjectDetector feature of ml5.js. There's a lot going on here and it is very, very powerful as a technology. It's exciting to think we get to use this technology! On the web! There are a lot of skills we need to employ here, but the result is access to something genuinely incredible.

---

# }
