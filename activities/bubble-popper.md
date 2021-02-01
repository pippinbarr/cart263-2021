# Activity: Bubble Popper {

## Objectives

* Playing with the ml5.js Handpose feature
* Getting comfortable with the Handpose framework
* Working with its output data

---

## The idea

Using hand tracking we turn the user's index finger into a pin on our program's canvas. A bubble floats upward repeatedly and the user can pop the bubble with the pointy end of their pin-finger.

---

## Create a new project

1. Start a p5 template project in your `activities` folder and name it `bubble-popper` ([template-p5-project.zip](../templates/template-p5-project.zip))
2. Open the project folder in Atom to start work
3. Set the title of the project in `index.html` to something appropriate like `Bubble Popper`
4. Commit the changes to your repository with a commit message

---

## The plan

There are roughly four major things we need to do. We need to make hand tracking work, display a pin where the user's index finger is, make a bubble move on the canvas, and finally make the pin pop the balloon.

So that's the plan:

1. Get Handpose working
2. Draw a pin
3. Draw and move a bubble
4. Make the bubble pop

---

## 1. Get Handpose working

Technically the easiest way to get Handpose up and running with the webcam is probably just to take a pre-existing example and work from that, but let's build it up from first principles instead.

### Include ml5.js

First we clearly need to include the ml5.js library in our project

1. Go to the [ml5.js Homepage](https://ml5js.org/) and navigate to "Getting Started" to find the script tag we need
2. Include the script tag in `index.html`

### Webcam

Let's start the webcam...

1. Create a canvas in `setup()` of your preferred dimensions (640x480?)
2. Declare a global `video` variable
3. In `setup()` use `createCapture(VIDEO)` to access the webcam and assign the return value to `video`
4. Hide the `video` element so it doesn't display on the page

If we run this program we should be asked for permission to use the webcam (if needed) and then should see the webcam light turn on.

### Handpose

Let's set up the Handpose model. We want to initialize the model and tell it we want to listen for "predict" events so we can track the user's hand...

1. Declare an undefined global `handpose` variable to store the model
2. In `setup()` assign a new handpose model to `handpose` with three arguments
  * The `video` variable containing the webcam (the source of detection)
  * An options object with the `flipHorizontal` property set to true (to make the video a mirror)
  * An **anonymous** function that does nothing for now to be called when the model's ready
3. Declare a global `predictions` variable and assign an empty array
4. In `setup()` create a listener using `.on()` for the "predict" event with an **anonymous** callback function that
  * assigns the results (passed in as an argument) to the `predictions` array
  * uses `console.log()` to output the results to the JavaScript console

At this point if we run the program we should be able to go into the JavaScript console and, if we hold a hand in front of the webcam, we should see results coming in! Hand detection!

---

## 2. Draw a pin

Now that we have hand data, we can display our pin on the canvas. We'll need to find the coordinates of the tip and base of the user's index finger and draw the pin between them. To do this we need to remember/check how Handpose formats the prediction data. We can figure this out by reading the data and experimenting, or just remember it.

We'll do all this in `draw()` since we're displaying this on the canvas:

1. Fill the background with a color (black?)
2. Check if the `predictions` array has anything in it (is its length greater than 0?), if so:
  * Assign the x and y coordinates of the tip of the index finger to variables
  * Assign the x and y coordinates of the base of the index finger to variables
  * Display a line between the the coordinates (our pin!)
  * Display a (red?) circle at the base of the pin (so it looks more like a pin)

If we run this program we should be able to hold up our hand and see a pin drawn wherever our index finger is!

(Note: if we need to debug one useful trick is to display the webcam data on the canvas so we can see what it's seeing. Flip the image with `ml5.flipImage()` and display the result with `image()` so that it's displayed correctly.)

---

## 3. Draw and move a bubble

To make having a pin for a finger more interesting we need something to pop. We'll add a simple bubble (AKA a circle) that moves upward on the canvas and wraps around.

1. Declare an undefined global `bubble` variable
2. In `setup()` assign an object literal with properties for `x`, `y`, `size`, `vx`, `vy`
  * Start the bubble at the bottom of the canvas in a random x position
  * Give it a size of your choosing
  * Give it a `vx` of 0 and a **negative** `vy` so it moves upward (`-2`?)
3. In `draw()` **after** the predictions check, move and display the bubble using its properties
  * Change its position properties according to its velocity
  * Write an `if` statement that check if it has gone off the top of the canvas and move it back to the bottom in a new random x position
  * Display it as a circle on the canvas according to its position and size

All going to the plan, when we run the program the bubble moves up the screen serenely and wraps when it hits the top. Right now our finger-pin does nothing because there's no code for that yet...

---

## 4. Make the bubble pop

Now we want to make the bubble and the pin interact. In particular we want to check if the tip of the pin (the tip of the index finger) is inside the bubble's area. If so the bubble should "pop" and reset to the bottom of the canvas.

We'll do this in `draw()` **inside** the predictions check, after we've calculated the positions of the index finger:

1. Calculate the distance from the tip of the index finger to the center of the bubble
2. Write an `if` statement that checks if this distance means the tip of the pin is inside the bubble (based on the bubble's size)
  * If it is, reset the bubble to the bottom of the canvas at a random x position

Now when we run the program we should be able to pop the bubble with the pin! We are literally moving our **real** hand around and in the program it's represented as a pin that can pop a bubble. Ridiculous!

---

## 5. Improve the program

As always, there are improvements that can be made. Consider

* Separate the code into functions. There's a **lot** in `draw()` that can become individual functions with names like `resetBubble()` or `displayPin()` or `displayBubble()` etc.
* You could consider make an object to represent the **pin**
* You could add a loading screen to display while waiting for the Handpose model to load

---

## Done!

As with any simple program, we can imagine all kinds of improvements and changes?

* Count how many bubbles the user has popped over time
* Improve the audiovisual presentation of the program with more interesting visuals and sound effects
* Make it increasingly difficult to pop the bubble over time (it could get faster? smaller?)
* Add loading, title, and instructions screens and maybe an "ending" to the program to make it into more of a total package
* Make the bubble avoid the user's pin by moving or even teleporting when they get to close (but don't make it impossible!)
* Let the user bump the bubble in different directions with the head of the pin (like need to keep track of the pin's velocity by checking its position change frame to frame)
* Add multiple bubbles to the simulation (probably want to convert the program to Object-Oriented Programming)
* Add different types of bubbles (maybe you shouldn't pop some of them, maybe they all react different to being poked with the pin...)
* Make different objects (or something) drop out of a bubble when it's popped (you could be "rescuing them" or receiving them as "prizes" or something else)
* Use a different ml5.js feature to represent the pin (could use the Object Detector to require the player uses a pair of scissors? Though you could represent rotation then...)
* Give the user a different tool than a pin that has a different effect on the bubble (could you give them a bubble blower that emits bubbles as they wave it around?)
* Put a different tool on each finger of the user's hand?
* Let the user change between different tools by closing and opening their hand? (How would you detect a closed hand? Their finger-tips would be closer than usual to the base of their palm...)
* Integrate another library or other technology you know about into the experience to add to the possibilities (could random words fall out of bubbles? Could fortunes fall out or be read aloud? Could the bubbles talk to you? Could you talk to them? Could you say sorry before you pop them?)
* Change the underlying meaning of the simulation by have the user's interaction with the bubble (or other object) be positive, helping it to grow or get stronger or feel happier or something else (could this turn into a gardening simulation or something?!)
* ... and many more?!

---

# }
