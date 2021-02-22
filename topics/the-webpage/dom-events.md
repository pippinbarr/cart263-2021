# DOM Events {

---

## Summary

Events are the main way that we structure our JavaScript when working with the DOM. The most obvious events are those associated with user interactions like mouse clicks or key presses, but there are many many other kinds of events our programs can respond to.

---

## Contents

* What are events?
* Event-driven programming
* Example HTML
* Time-based events
* Event listeners
* Too much information?
  * Build a better `fadeOut()`
  * The options parameter for `addEventListener()`

---

## What are events?

An **event** in a JavaScript program is how we describe something specific **happening** at a moment in time. The user clicking their mouse is an event, a timer expiring is an event, a sound finishing playing is an event, the user losing their internet connection is an event, and so on.

The DOM includes a significant range of events relevant to a webpage and web browsing experience that we can have our programs respond to when they happen. This allows our program to be interactive and dynamic based on what's going on at any moment in time that it is running.

---

## Event-driven programming

Writing programs that essentially respond to events to do their work is called **event-driven programming**, it's a "paradigm" or "architecture" that we can understand our programs through. Essentially, everything our program does in this approach is a response to some specific event occurring. And that's how we write programs that work with webpages and the DOM.

For our program to respond to a specific event we create an **event listener** which is essentially a kind of deal or agreement with the DOM that it will notify out program when that event occurs. So if we want to respond to the user clicking the mouse, we create a **click event listener** in order to be notified when a click occurs.

In the language of events we say that if the user clicks the mouse in this situation, it **triggers** the click event.

So, when we create an event listener we always specify what kind of event we want to listen for (e.g. a click) and we provide a **function** that should be called when the event occurs, known as the **event handler** function or the **callback** function. The code we write in the function will be executed each time the event is **triggered**.

It remains to look at some specific event types and look at listening for and handling those events.

---

## Example HTML

Here's some very simple HTML to work with for this topic:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>DOM Events</title>

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />
  </head>

  <body>
    <h1 id="main-heading">Lorem ipsum</h1>

    <section>
      <h2 id="sub-heading">Dolor sit amet</h2>

      <p id="paragraph">
        Consectetur adipiscing elit. Vivamus et vehicula libero, et accumsan elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
    </section>

    <!-- My script(s) -->
    <script src="js/script.js"></script>
  </body>
</html>
```

You'll also want to create a file `js/scripts.js` in which to add your JavaScript when following the examples below.

---

## Time-based events

One very useful form of event we can handle when working with the DOM is **time passing**. There are three main time-oriented functions we should know about. `setTimeout()`, `setInterval()`, and `requestAnimationFrame()`. We use these to call a function at specific moments of time.

### `setTimeout()`

`setTimeout()` lets us wait a set amount of time before calling a function exactly **once**. It takes two arguments:

* The function to call (often an **anonymous function** if the code to execute is brief)
* The amount of time to wait in **milliseconds**

```javascript
let paragraph = document.getElementById(`paragraph`);

setTimeout(function () {
  paragraph.style[`color`] = `#ff0000`;
},2000);
```

After 2000 milliseconds, the paragraph's text turns red.

### `setInterval()`

`setInterval()` lets us repeatedly call a function **repeatedly** at a specific interval of time. It takes two arguments:

* The function to call (often an **anonymous function** if the code to execute is brief)
* The amount of time to wait in **milliseconds** between each call


```javascript
let paragraph = document.getElementById(`paragraph`);

setInterval(function() {
  let display = paragraph.style[`display`];
  if (display === `none`) {
    paragraph.style[`display`] = `block`;
  }
  else {
    paragraph.style[`display`] = `none`;
  }
}, 500);
```

The paragraph alternates between displaying and not displaying every 500 milliseconds. Bring back the `<blink>` tag!

---

### `requestAnimationFrame()`

`requestAnimationFrame()` allows us to run a function on the next animation frame of the browser, when means we can run functions that keep up with the browser's underlying frame rate. It requires a single parameter:

* The function to call on the next animation frame

Note that `requestAnimationFrame()` on its own only runs the function **once** on the **next** animation frame. If you want to run on the frame after that, you call it again...

```javascript
let paragraph = document.getElementById(`paragraph`);
let paragraphOpacity = 1; // Default opacity
paragraph.style[`opacity`] = paragraphOpacity; // Set the default opacity

fadeOut();

function fadeOut() {
  // Reduce the opacity
  paragraphOpacity -= 0.01;
  // Set the opacity on the paragraph
  paragraph.style[`opacity`] = paragraphOpacity;
  // Check if the opacity is still above 0
  if (paragraphOpacity > 0) {
    // If it is, call fadeOut() again on the next frame
    // So we get an animation over time!
    requestAnimationFrame(fadeOut);
  }
}
```

---

## `.addEventListener()`

For the vast majority of events we want to respond to in the DOM, we use a specific method called `.addEventListener()`. Most of the time it takes two arguments:

* The **type** of event as a string (like `"click"`)
* The **callback** function to call whenever the event is **triggered** (like a function that changes the color of an element)

It looks like this:

```javascript
document.addEventListener(`click`, function(event) {
  document.body.style[`color`] = `#ff0000`;
});
```

Although it's relatively "simple", there's quite a lot to say about `.addEventListener()` and how we use it. Let's continue with the basic example of a click event in some detail to see how we can work with events in the DOM. This isn't a one-size-fits-all thing - not every event is like a click - but it will help us understand a lot.

### Events are triggered on a specific element

We can listen for an event on a **specific** element by calling `.addEventListener()` on that element. Above we were listening for an event on the overall `document` itself. If we want to listen for a click just on the main heading we write:

```javascript
let paragraph = document.getElementById(`paragraph`);
paragraph.addEventListener(`click`, function(event) {
  paragraph.style[`color`] = `#ff0000`;
});
```

Now the click event is only triggered if we click on the **paragraph itself**, not anywhere else. This effectively turns that paragraph into a kind of button! This works on any element!

### The `event` parameter

The callback function we provide to `.addEventListener()` automatically receives a single parameter which we will call `event`. This parameter contains an object with information about the event that triggered the function. So in our click event example, it contains information about the click event that occurred.

You can take a look inside the `event` parameter in the JavaScript console if you want to:

```javascript
let paragraph = document.getElementById(`paragraph`);
paragraph.addEventListener(`click`, function(event) {
  console.log(event);
});
```

As you can see, it contains quite a few properties! Not all of them are obviously related to the mouse, but many are.

### Event documentation

Generally speaking you'll gain a better understanding of specific events by reading their documentation!

If we read the [click event documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) we can find the kind of object that will automatically be stored in the `event` parameter. It's listed as the **Interface** of the `click` event, and it's called `MouseEvent`. We need to read the documentation for that "interface" to know what's available.

#### `MouseEvent`

If we read the [`MouseEvent` documentation](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) we'll see list of **properties** and **methods** available in a `MouseEvent`, these are all available in our `event` parameter. The obvious improvement over just looking at the `event` parameter in the JavaScript Console is that these events and properties are actually **documented**.

For example, we can see there are properties called `.clientX` and `.clientY` which give the position of the click in the window, we could change the `.innerText` of an element to contain those mouse coordinates...

```javascript
let mainHeading = document.getElementById(`main-heading`);
mainHeading.addEventListener(`click`, function(event) {
  mainHeading.innerText = `${event.clientX},${event.clientY}`;
});
```

When we click on the heading, its text changes to the mouse coordinates of the click! Not necessarily the most practical usage, but this makes it clear we can get those coordinates and use them in our code as we wish.

#### `UIEvent`

There are actually **more** properties and methods available, because when we read the documentation for `MouseEvent` we see that it **derives** (inherits) from `UIEvent`, which has its own [`UIEvent` documentation](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) with another list of properties and methods. Since our `event` is also a kind of `UIEvent`, it will have those properties too.

#### `Event`

And it goes further still, because a `UIEvent` **derives** from `Event` which has its own [`Event` documentation](https://developer.mozilla.org/en-US/docs/Web/API/Event), with yet another list of properties and methods. Again, our `event` is also a kind of `Event` because of this **inheritance chain**.

In practice we will develop a memory of the important properties and methods we care about, and the crucial `Event` property we should know about is the `.target` property. It contains the element **affected** by the event. For our click, it will contain the element that was clicked! So we could rewrite our code a little to take advantage of this...

```javascript
let paragraph = document.getElementById(`paragraph`);
paragraph.addEventListener(`click`, function(event) {
  // Use the event.target property to refer to the clicked element
  event.target.style[`color`] = `#ff0000`;
});
```

This is **better** because it means the function no longer relies on a variable from **outside itself** the function. When that's possible, it's better because it maintains **encapsulation**.

One advantage of this encapsulation is we can write a more general named function and use it multiple times...

```javascript
let mainHeading = document.getElementById(`main-heading`);
mainHeading.addEventListener(`click`, setRedTextColor);
let subHeading = document.getElementById(`sub-heading`);
subHeading.addEventListener(`click`, setRedTextColor);
let paragraph = document.getElementById(`paragraph`);
paragraph.addEventListener(`click`, setRedTextColor);

function setRedTextColor(event) {
  // Use event.target to change the style of the specific clicked element
  event.target.style[`color`] = `#ff0000`;
}
```

Now all three of our event listeners use the same function to handle the event. Because we used `event.target`, the same function works each time! Nice one.

### Recap

That was a fairly deep dive into the components of using `.addEventListener()` with `click`. These same principles apply any time we're dealing with an event listener. Essentially we need to remember:

* Read the [Mozilla event reference](https://developer.mozilla.org/en-US/docs/Web/Events) to find out possible event types (this can be quite exciting!)
* The callback function receives an `event` parameter which contains information about the event
* We should read the specific **Interface** event documentation to find out what information is available
* We should remember that events have an inheritance chain (e.g. `MouseEvent` < `UIEvent` < `Event`)

Let's move on from here more quickly by just looking at some other common DOM events we're likely to use in our lives.

---

## The mouse

### `click`

Triggered when the user clicks on the element.

```javascript
let paragraph = document.getElementById(`paragraph`);

paragraph.addEventListener(`click`, function(event) {
  event.target.style[`color`] = `#ff0000`;
});
```

### `mouseenter`

Triggered when the user's mouse enters the element.

```javascript
let paragraph = document.getElementById(`paragraph`);

paragraph.addEventListener(`mouseenter`, function(event) {
  event.target.style[`color`] = `#ff0000`;
});
```

### `mouseleave`

Triggered when the user's mouse leaves the element.

```javascript
let paragraph = document.getElementById(`paragraph`);

paragraph.addEventListener(`mouseleave`, function(event) {
  event.target.style[`color`] = `#ff0000`;
});
```

### `mouseenter` and `mouseleave`

We can achieve roll-overs with these two events.

```javascript
let paragraph = document.getElementById(`paragraph`);
let originalText = paragraph.innerText;

paragraph.addEventListener(`mouseenter`, function(event) {
  event.target.innerText = `SECRET MESSAGE!!!`;
});

paragraph.addEventListener(`mouseleave`, function(event) {
  event.target.innerText = originalText;
});
```

Remember, you can also use the `:hover` CSS pseudo-class for basic CSS styling tasks related to mouse rollovers. Note, though, that setting the text like this isn't something we can (easily) do via CSS, so JavaScript is appropriate here.

### `contextmenu`

Triggered when the user opens a context menu (usually by right-clicking).

```javascript
let paragraph = document.getElementById(`paragraph`);

paragraph.addEventListener(`contextmenu`, function(event) {
  event.target.style[`color`] = `#ff0000`;
});
```

---

## The keyboard

### `keydown`

Triggered when the user presses a key down. This is useful if it's listening to an element that allows text entry (like a text field) or if it's attached to the whole document.

```javascript
document.addEventListener('keydown', function(event) {
  document.body.style[`background-color`] = `#ff0000`;
});
```

This is clearly more useful if you know which key was pressed. Fortunately our `event` parameter contains information about this (check out the [`KeyboardEvent` documentation](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent) for more information).

Notably, we have access to both `.keyCode`, which contains the ASCII key code of the key pressed...

```javascript
// Turn the background color red if the user presses the spacebar
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    document.body.style[`background-color`] = `#ff0000`;
  }
});
```

... and to `.key`, which contains a string containing the name of the key pressed...

```javascript
// Turn the background color red if the user presses the r key
document.addEventListener('keydown', function(event) {
  if (event.key === `r`) {
    document.body.style[`background-color`] = `#ff0000`;
  }
});
```

If you're familiar with something like p5.js, you're already familiar with these ideas.

---

### `keyup`

Triggered when the user releases a key.

```javascript
// Turn the background color red if the user presses the spacebar
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 32) {
    document.body.style[`background-color`] = `#ff0000`;
  }
});

// Turn the background color white if the user releases the spacebar
document.addEventListener('keyup', function(event) {
  if (event.keyCode === 32) {
    document.body.style[`background-color`] = `#ffffff`;
  }
});
```

---

## So many events!

Again, there are many, many possible events to use in your programming. Look at the [Mozilla Event reference](https://developer.mozilla.org/en-US/docs/Web/Events) and find things you think look interesting. What about...

* `online` and `offline`
* `focus` and `blur`
* `beforeprint` and `afterprint`
* `resize`
* `scroll`
* `cut`, `copy`, and `paste`
* `drag`, `drop`

And on and on!

---

## Too much information?

### Build a better `fadeOut()`

#### A nicer version...

The example earlier on is a little imperfect because it requires a separate variable to track the opacity of every element we want to fade out! It would be better if we wrote a function that can fade out **any** element given the element and the opacity to fade out from...

```javascript
let mainHeading = document.getElementById(`mainHeading`);
let paragraph = document.getElementById(`paragraph`);

fadeOut(mainHeading, 1);
fadeOut(paragraph, 1);


function fadeOut(element, currentOpacity) {
  // Reduce the opacity
  currentOpacity -= 0.01;
  // Set the opacity on the paragraph
  element.style[`opacity`] = currentOpacity;
  // Check if the opacity is still above 0
  if (currentOpacity > 0) {
    // If it is, call fadeOut() again on the next frame
    // with the same element and the new opacity value
    requestAnimationFrame(function() {
      fadeOut(element, currentOpacity);
    });
  }
}
```

#### Even more nicely written?

What if we want to be able to fade out elements **from** their **current opacity** CSS value, rather than always assuming they're at an opacity of `1`? We'd want to be able to check their current opacitry and fade from there, but there are two things to think about here:

1. As we know, the opacity CSS property (and all others) is stored as a **string**, so it wouldn't be `1`, for instance, it would be `"1"`
2. If we access a CSS property that isn't set, it will be an **empty string** rather than whatever the default value in CSS is, so we need to account for that

Thus we could rewrite the fading script to work with any element by creating a function to convert an element's CSS property opacity (a string) into a number...

```javascript
let mainHeading = document.getElementById(`main-heading`);
let paragraph = document.getElementById(`paragraph`);

fadeOut(mainHeading, getOpacity(mainHeading));
fadeOut(paragraph, getOpacity(paragraph));

function getOpacity(element) {
  // Get the opacity of the element
  let opacity = element.style[`opacity`];
  // Remember it's a string, so we need to convert it to a number
  // We will use a special function called parseFloat, that takes a string
  // and extracts a single floating-point number from it
  opacity = parseFloat(opacity);
  // We then need to check if the result is NaN (not a number), which it will be
  // if the string was empty
  if (isNaN(opacity)) {
    // If so, we'll set the opacity to 1, assuming that was the default starting point
    opacity = 1;
  }
  // Return it as a number!
  return opacity;
}

function fadeOut(element, currentOpacity) {
  // Reduce the opacity
  currentOpacity -= 0.01;
  // Set the opacity on the element
  element.style[`opacity`] = currentOpacity;
  // Check if the opacity is still above 0
  if (currentOpacity > 0) {
    // If it is, call fadeOut() again on the next frame
    // So we get an animation over time for the element
    requestAnimationFrame(function() {
      // Note how we use an anonymous function so we can pass the element
      // as an argument to the next call of fadeOut()
      fadeOut(element, currentOpacity);
    });
  }
}
```

There's quite a lot to take in there, but this model is an important one if we want to work with changing any CSS properties based on their current value. It's worth knowing that there is also `parseInt()` for parsing simple integers out of a string.

Also worth knowing is that if the string contains other text (like a unit), `parseInt()` and `parseFloat()` will still work!

```javascript
parseInt("1rem"); // 1
parseFloat("25.5vh"); // 10.5
```

### The options parameter in `.addEventListener()`

If desired, we can provide one more argument to `.addEventListener()` after the event name and handler, which we can use to specify **options**. The option with the most potential for us right now is `once` which lets us create an event listener that only happens one time.

For example, we might want a click to make the heading to disappear, but it would be pointless to then keep listening for clicks on the invisible header, so we use `once`:

```javascript
let mainHeading = document.getElementById(`main-heading`);
mainHeading.addEventListener(`click`, function(event) {
  event.target.style[`opacity`] = 0;
}, {
  once: true // The event will only trigger once
});
```
