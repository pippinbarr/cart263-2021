# jQuery Form Input {

---

## Summary

Form input is a specific case of event handling and accessing data in the DOM. Notably we want to be able to respond to the user filling in input elements on a page and to get access to the information they have provided. jQuery works with standard form input in much the same way as plain JavaScript.

---

## Contents

* Buttons and
* Text inputs and
* Range sliders
* Oh my!

**Note** that these notes use jQuery 3.5.1, the latest version at the time of writing.

---

## Buttons

Pairing a button with a `click` event, we can respond to the user clicking the button in JavaScript...

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>

    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"></script>
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
$(`#example-button`).on(`click`,function(event) {
  $(this).hide();
});
```

A disappearing button!

---

## Text input

We can let the user type text into the page using text input fields. We access the value of an input element using the `.val()` method.

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>

    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"></script>
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
$(`#example-button`).on(`click`,function(event) {
  // Use .val() to get the current value in the text input
  let input = $(`#example-text-input`).val();
  alert(input);
});
```

---

## A range slider

Sliders are fun! They let us choose numbers from a range with an interactive element.

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Input examples</title>

    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossorigin="anonymous"></script>
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
$(`#range-slider`).on(`change`, function(event) {
  // Use .val() to access the current value of the slider
  let value = $(this).val();
  alert(value);
});
```

---

## So it goes

In essence, jQuery works with HTML input elements in exactly the same was as plain JavaScript, with the exception of using `.val()` to access their current value.

---

# }
