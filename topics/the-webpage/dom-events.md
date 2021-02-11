# UNDER CONSTRUCTION

# DOM Events {

---

## Events

- Generally speaking, our access to the DOM is at its most interesting when it allows us to creative __interactive__ experiences
- In most situations, we deal with interactions (and other temporal elements of programming) using the idea of __events__
- An event in a program is anything that can __happen__ at a moment in time, such as a mouse click, a timer expiring, a file finishing loading, or a key being pressed down.
- To deal with events, we use "event listeners" which pay attention to a specific event, and then call a special function (an "event handler" or "callback") when it occurs

---

## Timeouts

- As we've seen before, a classic event we often want to use is a timer or timeout
- For this we have `setTimeout`

```javascript
// This goes wherever we want to start the timer (e.g. on loading the page)
setTimeout(enlargePage,2000);

...

function enlargePage() {
  document.body.style.fontSize = '3em';
}
```

---

## Intervals

- Sometimes we have something we want to do over and over again at a specified interval of time
- For this we have `setInterval`

```javascript
// This goes wherever we want to start the timer (e.g. on loading the page)
setInterval(enlargePage,2000);

...

function enlargePage() {
  // Get the style properties of the body with window.getComputedStyle()
  let style = window.getComputedStyle(document.body);
  let currentSize = parseFloat(style.fontSize);
  currentSize += 5;
  document.body.style.fontSize = `${currentSize}px`;
}
```

- Clearly this is a way to do animation! (But if you really want to animate, look at `window.requestAnimationFrame()` instead.)

???

- Note that `window.getComputedStyle()` returns the CSS properties for the specified element
- `window.getComputedStyle()` does have limitations, most notably that it uses default units when computing the style on the page, so even if you specified a font size in `em` units, for example, it will return the font size in `px`
- This is a big rabbit hole that you can go down if you want to! (This is also why things like jQuery exist.)

---

## Stopping intervals!

- To cancel an interval we use `clearInterval`
- Note that `setInterval` returns a reference to our interval which we can then give to `clearInterval` to cancel it

```javascript
// This goes at the top of our script (needs to be global)
let enlargingInterval;

...

// This goes wherever we want to start the timer (e.g. on loading the page)
enlargingInterval = setInterval(enlargePage,2000);

...

function enlargePage() {
  let style = window.getComputedStyle(document.body);
  let currentSize = parseFloat(style.fontSize);
  currentSize += 5;
  document.body.style.fontSize = `${currentSize}px`;
  if (currentSize >= 20) {
    clearInterval(enlargingInterval); // Stop the interval!
  }
}
```

---

## Click anywhere!

- In DOM programming, we use the `addEventListener()` function to register event handlers (callbacks) for specific types of events

```javascript
document.addEventListener('click',enlargePage);
// enlargePage() will be called every time the document is clicked (anywhere)

...

function enlargePage() {
  let style = window.getComputedStyle(document.body);
  let currentSize = parseFloat(style.fontSize);
  currentSize += 5;
  document.body.style.fontSize = `${currentSize}px`;
}
```

---

## Click here!

- We can use `addEventListener` on the specific element of our page that needs to react to the event (such as a click)

```javascript
let heading = document.getElementById('main-heading');
heading.addEventListener('click', enlargePage);
// enlargePage() will be called every time the heading is clicked

...

function enlargePage() {
  let style = window.getComputedStyle(document.body);
  let currentSize = parseFloat(style.fontSize);
  currentSize += 5;
  document.body.style.fontSize = `${currentSize}px`;
}
```

---

## Press any key!

- Just as you might image, there are events that respond to the keyboard
- Like `keydown` and `keyup`

```javascript
document.addEventListener('keydown', enlargePage);
// enlargePage() will be called every time key is pressed down

...

function enlargePage() {
  let style = window.getComputedStyle(document.body);
  let currentSize = parseFloat(style.fontSize);
  currentSize += 5;
  document.body.style.fontSize = `${currentSize}px`;
}
```

---

## Press a specific key!

- We can check information about events by including a parameter in our event handler function, traditionally called something like `e` or `event`
- For keyboard-related events, we can check its `.keyCode` property to see which key was actually interacted with

```javascript
document.addEventListener('keydown', enlargePage);
// enlargePage() will be called every time key is pressed down

...

function enlargePage(e) {
  if (e.keyCode === 32) { // Only enlarge if they pressed space
    let style = window.getComputedStyle(document.body);
    let currentSize = parseFloat(style.fontSize);
    currentSize += 5;
    document.body.style.fontSize = `${currentSize}px`;
  }
}
```

---

## `target`

- One important property that exists in the parameter passed to an event handler is `.target`
- In relevant situations, such as mouse interactions, it contains the element that the event was triggered on

```javascript
let heading = document.getElementById('main-heading');
heading.addEventListener('click', enlargeElement);
...
function enlargeElement(e) {
  let style = window.getComputedStyle(e.target);
  let currentSize = parseFloat(style.fontSize);
  currentSize += 5;
  e.target.style.fontSize = `${currentSize}px`;
}
```

---

## So many events!

- There are many, many possible events to use in your programming
- As always, it's a good idea to rely on a reference both to see what is possible and to remind yourself of the specifics of each type of event
- Something like the [Mozilla Event reference](https://developer.mozilla.org/en-US/docs/Web/Events) is a good start
