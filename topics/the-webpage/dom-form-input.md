# DOM Form Input {

---

## Summary

Form input is a specific case of event handling and accessing data in the DOM. Notably we want to be able to respond to the user filling in input elements on a page and to get access to the information they have provided.

---

## Contents

* Input and webpages
* Buttons and
* Text inputs and
* Range sliders
* Oh my!

---

## Input and webpages

One thing we will often end up wanting to do on a webpage is get user input. We can already do this by listening for mouse clicks and keyboard presses, but HTML provides a whole suite of **input specific elements** we can use to get input in a more structured way.

Let's look at some of the possible input forms and how we can access them in the DOM.

The majority of formal input can be achieved using HTML's `<input>` tag and specifying different kinds of input element with the `type` attribute, so we'll focus out attention there.

https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

---

## Buttons

Buttons are a classic way to show users they can interact with your page.

### Using `<input>`

We can create an `<input>` and specify it's of type `button`...

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- A button with a label -->
      <input type="button" value="This is a button">
    </section>

    <script src="js/script.js"></script>
  </body>
</html>
```

### Using `<button>`

Buttons are sufficiently popular that you can also create one using the `<button>` tag instead:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- A button using the button tag -->
      <button>This is a button</button>

      <script src="js/script.js"></script>
    </section>
  </body>
</html>
```

### Reacting to a click

Pairing a button with a `click` event, we can respond to the user clicking the button in JavaScript...

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- A button with a label -->
      <input id="example-button" type="button" value="This is a button">
    </section>

    <script src="js/script.js"></script>
  </body>
</html>

```

`script.js`
```javascript
let button = document.getElementById(`example-button`);

button.addEventListener(`click`, function(event) {
  event.target.style[`display`] = `none`;
});
```

A disappearing button!

---

## Text input

We can let the user type text into the page using text input fields.

### Using the `<input>` tag

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- A text entry field -->
      <input type="text">
    </section>

    <script src="js/script.js"></script>
  </body>
</html>
```

### Adding a button and JavaScript

Fairly often we want to respond to what the user typed into a text input field (or more than one). A straightforward way is to have a button for them to click when they're done entering information.

Let's add a button and when the user clicks on it we'll take the text they typed in and put it into an `alert()`...

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- A text entry field -->
      <input id="example-text-input" type="text">
      <!-- A button -->
      <input id="example-button" type="button" value="Click me">
    </section>

    <script src="js/script.js"></script>
  </body>
</html>
```

`script.js`
```javascript
let textInput = document.getElementById(`example-text-input`);
let button = document.getElementById(`example-button`);

button.addEventListener(`click`, function(event) {
  // We can get the text in the text input using its .value property
  let input = textInput.value;
  alert(input);
});
```

### `keydown` in a text input

We could do the same thing without a button if we listened for the user pressing the return key to indicate they want to input the value in the text field...

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- A text entry field -->
      <input id="example-text-input" type="text">
    </section>

    <script src="js/script.js"></script>
  </body>
</html>
```

`script.js`
```javascript
let textInput = document.getElementById(`example-text-input`);

textInput.addEventListener(`keydown`, function(event) {
  // Check if they hit return
  if (event.keyCode === 13) {
    // Show the content of the text input
    let input = event.target.value;
    alert(input);
  }
});
```

### Read the documentation

As with all things, we should read the [`<input type="text">` documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text) to find out other potentially interesting attributes we can use with a text input, such as

* `datalist`
* `minlength` and `maxlength`
* `readonly`
* `spellcheck`

---

## A range slider

Sliders are fun! They let us choose numbers from a range with an interactive element.

### Using the `<input>` tag

The type name for a slider is `range` and important attributes are the `min` and `max` values the slider represents.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- A slider from 0-100 with a default of 0 -->
      <input type="range" value="0" min="0" max="100">
    </section>

    <script src="js/script.js"></script>
  </body>
</html>
```

### Accessing the current value

Let's add a button and some JavaScript to print out the current value of the slider when the button is clicked, it may look quite familiar...

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- A slider from 0-100 with a default of 0 -->
      <input id="range-slider" type="range" value="0" min="0" max="100">
      <!-- Our button -->
      <input id="print-button" type="button" value="Click me">
    </section>

    <script src="js/script.js"></script>
  </body>
</html>
```

`script.js`
```javascript
let slider = document.getElementById(`range-slider`);
let button = document.getElementById(`print-button`);

button.addEventListener(`click`, function(event) {
  // We can get the current value set on the slider through its .value property
  let value = slider.value;
  alert(value);
});
```

### Using the `change` event

We can also react to the slider whenever it is changed, which could be a fun way to respond dynamically...

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- A slider from 0-100 with a default of 0 -->
      <input id="range-slider" type="range" value="0" min="0" max="100">
    </section>

    <script src="js/script.js"></script>
  </body>
</html>
```

`script.js`
```javascript
let slider = document.getElementById(`range-slider`);

// Listen for changes to the slider
slider.addEventListener(`change`, function(event) {
  // Print out the current value
  let value = event.target.value;
  alert(value);
});
```

### Read the documentation

Again, we should read the [`<input type="range">` documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) to find out other potentially interesting attributes we can use with a text input, such as

* `step`

---

## Oh my!

There are a lot of input types, and we should what? We should read the [`<input>` documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) to find out more! Exciting possibilities include...

### Color picker

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- A color picker -->
      <input id="color-picker" type="color">
    </section>

    <script src="js/script.js"></script>
  </body>
</html>
```

`script.js`
```javascript
let colorPicker = document.getElementById(`color-picker`);

// Set the background color of the document when the color
// picker is used
colorPicker.addEventListener(`input`, function(event) {
  let color = event.target.value;
  document.body.style[`background-color`] = color;
});
```

### Password entry

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- Password input field -->
      <input id="password-input" type="password" maxlength="8">
      <!-- Login button -->
      <input id="login-button" type="button" value="Login">
      <p id="hint">
        Hint: the password is "password".
      </p>
    </section>

    <script src="js/script.js"></script>
  </body>
</html>
```

`script.js`
```javascript
let passwordInput = document.getElementById(`password-input`);
let loginButton = document.getElementById(`login-button`);

// Check the password when they click the button
loginButton.addEventListener(`click`, function(event) {
  // Get the password value entered
  let password = passwordInput.value;
  // Check if it's correct and notify the user
  if (password === `password`) {
    alert(`Logged in!`);
  }
  else {
    alert(`Wrong password!`);
  }
});
```

### Date picker

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>
  </head>
  <body>
    <section>
      <!-- A date picker -->
      <input id="date-picker" type="date">
    </section>

    <script src="js/script.js"></script>
  </body>
</html>
```

`script.js`
```javascript
let datePicker = document.getElementById(`date-picker`);

// Alert the date chosen each time it's changed
datePicker.addEventListener(`change`, function(event) {
  let date = event.target.value;
  alert(date);
});
```

---

## Other input

It's worth reading the more general [Mozilla Forms documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#forms) to get a wider sense of the HTML elements available to deal with form-based input. It includes a few other interesting tags like

* `<datalist>` for creating lists of default options
* `<progress>` for displaying progress bars
* `<select>` for displaying a selection menu
* `<textarea>` for creating a larger text entry element

---

## Input!

So, now we have an overview of the standard way to obtain formal user input on a webpage. We pair the various input elements in HTML with appropriate JavaScript and we can accomplish more or less anything!

---

# }
