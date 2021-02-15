# DOM Events {

---

## Summary

---

## Contents

* What are events?
* Example HTML
* Time-based events
* Event listeners
* Too much information?
  * `requestAnimationFrame()`
  * The options parameter for `addEventListener()`

---

## What are events?

Generally speaking, it's far more interesting to work with the DOM if we're doing it dynamically instead of just changing things the instant the page loads.

We want to be able to **respond** to **events** while the user is looking at and interacting with the page.

To deal with events, most of the time we use **event listeners** which `listen` for a specific event, and then call a special function (an `**event handler**` or `**callback**`) when it happens.

Events we might be interested in could include

* User interactions
* Network connection loss

---

## Example HTML

Here's some HTML to work with for this topic:

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

---

## Time-based events

One very useful form of event we can handle when working with the DOM is **time passing**. Two of the most popular event handlers available in the web browser and `setTimeout()` and `setInterval()`. We use these to call a function at specific moments of time.

Both functions require us to provide the follow arguments

* a **callback function** to call when the time elapses
* the **time** to wait in milliseconds

### `setTimeout()`

`setTimeout()` lets us wait a set amount of time before calling a function...

```javascript
let paragraph = document.getElementById(`paragraph`);

setTimeout(function () {
  paragraph.style[`color`] = `#ff0000`;
},2000);
```

### `setInterval()`

`setInterval()` lets us repeatedly call a function over and over again at a specific interval of time...

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

---

## `addEventListener()`

For the vast majority of events we want to respond to in the DOM, we use a specific method called `addEventListener()`. Most of the time it takes two arguments:

* The particular **type** of event (like `"click"`)
* The **callback** function to call whenever the event occurs (like a function that changes the color of an element)

It looks like this:

```javascript
document.addEventListener(`click`, function(event) {
  document.body.style[`color`] = `#ff0000`;
});
```

Although it's relatively "simple", there's quite a lot to say about `.addEventListener()` and how we use it. Let's continue with the basic example of a click event in some detail to see how we can work with events in the DOM. This isn't a one-size-fits-all thing - not every event is like a click - but it will help us understand a lot.

### Events triggered on a specific element

We can listen for an event on a **specific** element by calling `.addEventListener()` on that element. So if we want to listen for a click just on the main heading we write:

```javascript
let paragraph = document.getElementById(`paragraph`);
paragraph.addEventListener(`click`, function(event) {
  paragraph.style[`color`] = `#ff0000`;
});
```

Now the click event is only triggered if we click on the **paragraph itself**, not anywhere else. This effectively turns that paragraph into a kind of button! This works on any element!

### The `event` parameter

The callback function we provide to `.addEventListener()` automatically receives a single parameter. This parameter contains an object with information about the event that triggered the function. So in our click event example, it contains information about the click that occurred. It's good practice to name the parameter `event`, since that's nice and clear.

You can take a look inside the `event` parameter in the JavaScript console if you want to:

```javascript
let paragraph = document.getElementById(`paragraph`);
paragraph.addEventListener(`click`, function(event) {
  console.log(event);
});
```

As you can see, it contains quite a few properties! Not all of them are obviously related to the mouse, but several are.

### Event documentation

Generally speaking you'll gain a far better understanding of specific events by reading their documentation!

If we read the [`click` event documentation](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) we can find the kind of object that will automatically be stored in the `event` parameter. It's listed as the **Interface** of the `click` event, and it's called `MouseEvent`...

#### `MouseEvent`

If we read the [`MouseEvent` documentation](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent) we'll see list of **properties** and **methods** available in a `MouseEvent`, these are all available in our `event` parameter. Also helpful: these events and properties are actually **documented**.

For example, we can see there are properties called `.clientX` and `.clientY` which give the position of the click in the window, we could change the `.innerText` of an element to contain those mouse coordinates...

```javascript
let mainHeading = document.getElementById(`main-heading`);
mainHeading.addEventListener(`click`, function(event) {
  mainHeading.innerText = `${event.clientX}, ${event.clientY}`;
});
```

When we click on the heading, its text changes to the mouse coordinates of the click! Not necessarily the most useful example, but this makes it clear we can get those coordinates and use them in our code.

#### `UIEvent`

In fact, there are **even more** properties than this, because if we read the documentation for `MouseEvent` we see that it **derives** (inherits) from `UIEvent`, which has its own [`UIEvent` documentation](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) with another list of properties and methods. Since our `event` is also a kind of `UIEvent`, it will have those properties too.

#### `Event`

And it goes further still, because a `UIEvent` **derives** from `Event` which has its own [`Event` documentation](https://developer.mozilla.org/en-US/docs/Web/API/Event), with yet another list of properties and methods. Again, our `event` is also a kind of `Event` because of this **inheritance chain**.

One important `Event` property we should know about is the `.target` property. It contains the element **affected** by the event. For our click, it will contain the element that was clicked! So we could rewrite our code a little to take advantage of this...

```javascript
let paragraph = document.getElementById(`paragraph`);
paragraph.addEventListener(`click`, function(event) {
  // Use the event.target property to refer to the clicked element
  event.target.style[`color`] = `#ff0000`;
});
```

This is considered **better** because it means the function no longer relies on a variable from **outside** the function. When that's possible, it's better because it maintains **encapsulation**.

One advantage of this encapsulation is we can write a more general function and call it from multiple event listeners...

```javascript
let mainHeading = document.getElementById(`main-heading`);
mainHeading.addEventListener(`click`, setRedTextColor);
let subHeading = document.getElementById(`sub-heading`);
subHeading.addEventListener(`click`, setRedTextColor);
let paragraph = document.getElementById(`paragraph`);
paragraph.addEventListener(`click`, setRedTextColor);

function setRedTextColor(event) {
  event.target.style[`color`] = `#ff0000`;
}
```

Now all three of our event listeners use the same function to handle the event. Because we used `event.target`, the same function works each time! Nice one.

### Recap

That was a fairly deep dive into the components of using `.addEventListener()` with `click`. These same principles apply any time we're dealing with an event listener. Essentially we need to remember:

* Read the [Mozilla event reference](https://developer.mozilla.org/en-US/docs/Web/Events) to find out possible event names (this can be quite exciting!)
* The callback function receives an `event` parameter which contains information about the event
* We should read the specific event documentation to find out what information is available
* We should remember that events have an inheritance chain (e.g. `MouseEvent` < `UIEvent` < `Event`)

We can move on from here more quickly by just looking at some other common possibilities with DOM events.

---

## What are the events?

There are **many** events we can listen for in the DOM and it's fun to read the full list. For now, let's review **user input**, which largely means the mouse and keyboard.

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

paragraph.addEventListener(`mouseenter`, function(event) {
  event.target.innerText = `Lorem.`;
});

paragraph.addEventListener(`mouseleave`, function(event) {
  event.target.innerText = `Ipsum.`;
});
```

Remember, you can also use the `:hover` CSS pseudo-class for basic CSS styling tasks related to mouse rollovers.

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

Triggered when the user presses a key down. This is only really useful if it's listening to an element that allows text entry (like a text field) or it's attached to the whole document.

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

### `requestAnimationFrame()`

Another time-related event handler you may want to look at is [`requestAnimationFrame()`](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) which will allow you to repeatedly call a function at the animation framerate of the browser. Check out its documentation for more information.

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
