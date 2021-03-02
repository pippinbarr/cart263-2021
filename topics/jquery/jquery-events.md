# jQuery Events {

---

## Summary

Events are the main way that we structure our JavaScript when working with the DOM. The most obvious events are those associated with user interactions like mouse clicks or key presses, but there are many many other kinds of events our programs can respond to. jQuery can handle these events in much the same way as plain JavaScript.

---

## Contents

* What are events in jQuery?
* Example HTML
* `.on()` and `.one()`
* Typical listeners
* `.off()`

**Note** that these notes use jQuery 3.5.1, the most recent version at the time of writing.

---

## What are events in jQuery?

jQuery handles **exactly the same events** as plain JavaScript does with respect to the webpage and the DOM. The only difference is the way that we write out event **listeners** and **handlers**. Again, jQuery has been designed to make this a little more convenient.

---

## Example HTML

Here's some very simple HTML to work with for this topic:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>jQuery Events</title>

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"></script>
  </head>

  <body>
    <h1 id="main-heading" class="header">Lorem ipsum</h1>

    <section>
      <h2 id="sub-heading" class="header">Dolor sit amet</h2>

      <p id="paragraph">
        Consectetur adipiscing elit. Vivamus et vehicula libero, et accumsan elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </p>
    </section>

    <!-- My script(s) -->
    <script src="js/script.js"></script>
  </body>
</html>
```

You'll also want to create a file `js/scripts.js` so you can write jQuery-based JavaScript!

---

## `.on()`

For the vast majority of events we want to respond to, we use a specific method called [`.on()`](https://api.jquery.com/on/). Most of the time it takes two arguments:

* The **type** of event as a string (like `"click"`, exactly the same as the standard DOM events)
* The **callback** function to call whenever the event is **triggered** (like a function that changes the color of an element)

It looks like this:

```javascript
$(`#main-heading`).on(`click`, function(event) {
  $(`#main-heading`).css(`color`,`#ff0000`);
});
```

### The `event` parameter

The callback function we provide to `.on()` automatically receives a single parameter which we will call `event`. This parameter contains an object with information about the event that triggered the function. So in our click event example, it contains information about the click event that occurred.

You can take a look inside the `event` parameter in the JavaScript console if you want to:

```javascript
$(`#main-heading`).on(`click`, function(event) {
  console.log(event);
});
```

As you can see, it contains quite a few properties! Not all of them are obviously related to the mouse, but many are.

### Event documentation

Generally speaking the `event` you get in a jQuery event handler is pretty much the same as the one you get when writing plain JavaScript with the DOM. If you'd like to know more you can read the [Event Object documentation](https://api.jquery.com/category/events/event-object/).

### Event target

You probably remember that one of the more important event properties is `event.target` because it gives us access to the element that was affected by an event and this lets us write better event handlers.

In jQuery we can access `event.target` in the same way, but in fact jQuery also works such that `this` contains the event target inside your event handler, providing a quite readable shorthand for working with it.

Thus if we want to listen for a click on every element with the class `header` and remove them on click we can write...

```javascript
$(`.header`).on(`click`, function(event) {
  $(this).remove();
});
```

This is some pretty nicely reduced code that still reads really well.

**Note** that we need to write `$(this)` to reselect the target contained in `this` using jQuery so we can use jQuery methods on it. `this` on its own is the plain JavaScript representation of the DOM element.

### Just one time

jQuery provides a convenient way to create event listeners that only trigger once with the `.one()` method. It works in identical fashion to `.on` but the event will only trigger once time.

```javascript
$(`section`).on(`click`, function(event) {
  $(this).append(`<p>This will be added every click.</p>`)
});

$(`section`).one(`click`, function(event) {
  $(this).append(`<p>This will be added once only.</p>`)
});
```

### Named listener methods

jQuery also provides event listeners with specific names if that's something you're interested in, so that you can listen for a `click` event using the `.click()` method:

```javascript
$(`#main-heading`).click(function(event) {
  $(this).css(`color`, `#ff0000`);
});
```

The callback function works in exactly the same way.

Using this is a matter of preference, but generally speaking using `.on()` seems a little clearer and more consistent.

### Recap

These above ideas apply any time we're dealing with an event listener in jQuery. Essentially we need to remember:

* Create event listeners with `.on()` and `.one()`
* The callback function receives an `event` parameter which contains information about the event
* Inside the callback function `this` contains the event target
* Read the [Mozilla event reference](https://developer.mozilla.org/en-US/docs/Web/Events) to find out possible event types (this can be quite exciting!)

---

## The mouse

jQuery supports all the standard DOM events such as `click`, `mouseenter`, `mouseleave`, `contextmenu`, and so on.

For creating a typical "hover" effect, jQuery also provides the `.hover()` method to define both the `mouseenter` and `mouseleave` behaviors in one step:

```javascript
$(`#paragraph`).hover(
  // Mouse enter handler
  function(event) {
    $(this).css(`color`, `#ff0000`);
  },
  // Mouse leave handler
  function(event) {
    $(this).css(`color`, `#000000`);
  });
```

It feels a touch questionable as to whether this is clearer than just using `mouseenter` and `mouseleave` separately?

---

## The keyboard

jQuery supports all the standard DOM events such as `keydown`, `keyup`, and `keypress`. The `.key` and `.keyCode` properties are available on the `event` parameter to find out which key was interacted with.

---

## `.off()`

If you need to **stop** listening for an event, you can switch off the event listener using the `.off()` method.

For example, if we want to be able to click exactly **one** header on the page and have it turn red, but then **not** apply that to any other header afterwards...

```javascript
// Listen for clicks on the header class
$(`.header`).on(`click`, function(event) {
  // Change the clicked header to red
  $(this).css(`color`, `#ff0000`);
  // Stop listening for clicks on the header class
  $(`.header`).off(`click`);
});
```

There's quite a lot more sophistication available with events when it comes to distinguishing between different listeners to the **same** event. In particular, it's worth reading about the idea of an event **namespace** in the [`.on()` documentation](https://api.jquery.com/on/) if this comes up for you.

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

# }
