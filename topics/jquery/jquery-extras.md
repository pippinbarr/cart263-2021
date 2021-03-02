# jQuery Extras {

---

## Summary

Along with providing convenient manipulation of webpages along standard lines available in plain JavaScript, jQuery has a number of fun extras that can streamline common tasks like making elements appear and disappear, animating CSS properties, and more.

---

## Contents

* Adding and removing classes
* Display transitions
* CSS animation
* `.each()`
* Advanced selection

**Note** that these notes use jQuery 3.5.1, the most recent version at the time of writing.

---

## Example webpage

Here's some very simple HTML and CSS to work with for this topic:

`style.css`
```css
.highlight {
  background-color: yellow;
}
```

`index.html`
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

      <input id="button" type="button" value="Button">
    </section>

    <!-- My script(s) -->
    <script src="js/script.js"></script>
  </body>
</html>
```

You'll also want to create a file `js/scripts.js` so you can write jQuery-based JavaScript!


---

## Adding and removing classes

A really nice way to dynamically change elements on a page quickly from your JavaScript is by adding or removing classes that therefore alter how they are processed by CSS.

In our CSS above we have a `highlight` class that we could add to any element to easily set its background to yellow, or remove to unhighlight it!

jQuery provides `.addClass()` and `.removeClass()` for this purpose.

```javascript
// Highlight the main heading
$(`#main-heading`).addClass(`highlight`);

// If the user clicks on the main heading, remove the highlight
$(`#main-heading`).on(`click`,function(event) {
  $(this).removeClass(`highlight`);
});
```

jQuery also has `.toggleClass()` if you want to switch back and forth between applying a class to an element and removing it...

```javascript
setInterval(function() {
  $(`#main-heading`).toggleClass(`highlight`);
}, 500);
```

---

## Display transitions

One very common task when working with a webpage is making specific elements appear and disappear on cue. jQuery provides a number of methods for doing this easily!

### `.hide()`

Hides the select element(s) by setting its `display` CSS property to `none`.

```javascript
$(`#button`).on(`click`, function(event) {
  // Hide the main heading
  $(`#main-heading`).hide();
});
```

A button that hides the main heading.

### `.show()`

Shows the select element(s) by setting its `display` CSS property back to its previous value.

```javascript
$(`#button`).on(`click`, function(event) {
  // Hide the main heading
  $(`#main-heading`).hide();
  // Show it again after two seconds
  setTimeout(function() {
    $(`#main-heading`).show();
  },2000);
});
```

### `.toggle()`

Hides the selected element(s) if visible, shows the select element(s) if hidden.

```javascript
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).toggle();
});
```

### Fading transitions

jQuery also provides methods that provide the same basic function of hiding or displaying an element, but with an added fading effect!

For example, `.fadeOut()` allows us to fade an element out over time...

```javascript
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).fadeOut();
});
```

We can also specify how long the fade should take by providing a paramter specifying the time in milliseconds...

```javascript
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).fadeOut(2000);
});
```

We can also provide a callback function after the duration that will be called when the fading effect is completed. We could fade back in for example...

```javascript
$(`#button`).on(`click`, function(event) {
  // Fade out the main heading over two seconds...
  $(`#main-heading`).fadeOut(2000, function() {
    // .. then fade it back in over two seconds
    $(this).fadeIn(2000);
  });
});
```

As you may imagine, `.fadeToggle()` is available to switch between visible and hidden states.

```javascript
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).fadeToggle(2000);
});
```

### Sliding transitions

You can also transition elements with a "sliding" effect using `.slideUp()`, `.slideDown()`, and `.slideToggle()`.

```javascript
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).slideUp();
});
```

We can similarly specify the amount of time...

```javascript
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).slideUp(2000);
});
```

We can similarly provide a callback...

```javascript
$(`#button`).on(`click`, function(event) {
  // Slide up the main heading over two seconds...
  $(`#main-heading`).slideUp(2000, function() {
    // .. then slide it back down over two seconds
    $(this).slideDown(2000);
  });
});
```

And `.slideToggle()` does what you'd expect...

```javascript
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).slideToggle(2000);
});
```

---

## CSS animation

jQuery provides a powerful method called `.animate()` that allows us to animate numerical CSS properties of elements to our heart's content! The basic usage is to specify

1. The CSS property or properties and their **destination** values to animate to
2. The amount of time to animate over

### Basic usage

So to animate the opacity of our heading to 0.5 over two seconds we could write:

```javascript
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).animate({
    "opacity": 0.5
  },2000);
});
```

(**Note** how this is particularly useful if you want to fade something out but want it to maintain its position in the page layout.)

### Multiple CSS properties

We can specify as many CSS properties as desired:

```javascript
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).animate({
    "opacity": 0.5,
    "font-size": `1rem`
  }, 2000);
});
```

### Using a callback

As with the fading and sliding effects about, which are essentially just animations, we can specify a callback function that will be called when the animation completes...

```javascript
$(`#button`).on(`click`, function(event) {
  // Fade to 0.5 opacity
  $(`#main-heading`).animate({
    "opacity": 0.5
  }, 2000, function() {
    // When the fade completes, set the CSS color property to red
    $(this).css(`color`, `#ff0000`);
  });
});
```

(**Note** the use of `this` works here too, with `this` referring to the target of the animation in this case.)

### Using the options object

We can get **much** more sophisticated with our animations by providing an options object to the `.animate()` method, including changing the nature of the easing and adding other callback functions.

```javascript
$(`#button`).on(`click`, function(event) {
  $(`#main-heading`).animate({
    "opacity": 0.5
  }, {
    duration: 2000,
    easing: `linear`,
    complete: function() {
      $(this).css(`color`, `#ff0000`);
    }
  });
});
```

Read the `.on()` documentation to really get into this. Note, too, that animation-related methods like `.fadeIn()` and `.slideIn()` are also able to use the same kind of options object for greater control.

### What can I `.animate()`?

You can animate pretty much any **numeric** CSS property, like `opacity`, `height`, `width`, `font-size`.

But not everything you might expect will work. For example you cannot animate the `transform` property this way. Additionally you cannot animate **colors** unless you also use the jQuery UI library.

---

## `.each()`

One particularly useful jQuery method it's worth knowing about is `.each()`. This allows us to call a function for each element in a selection, more or less like looping through them all with a `for` loop, but a little faster to write out.

Imagine you want to select all the header elements and, for each one, reverse its text. We could use `.each()` to achieve this...

```javascript
$(`.header`).each(function() {
  // Get the reversed text of the current heading's text
  let reverseText = $(this).text().split(``).reverse().join(``);
  // Set the new reverse text
  $(this).text(reverseText);
});
```

**Note** that, as you can see, `this` refers to the current element being acted on inside the `.each()`.

---

## Advanced selection

Sometimes you want to select elements on a page according to more complicated rules than are easily possible through CSS selectors. jQuery provides a host of additional options for selection that are worth looking into if you find yourself in this situation. Their [Selectors](https://api.jquery.com/category/selectors/) documentation will give you the details here.

---

## Oh my!

So, there's a lot more to jQuery than simply reproducing the basic ideas in the plain DOM API. It's well worth looking at examples and reading the documentation to dive deeper on subjects you find particularly valuable!

---

# }
