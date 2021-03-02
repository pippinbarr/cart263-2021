# jQuery Overview {

---

## Summary

jQuery is a JavaScript library created to facilitate manipulation of the DOM, along with quite a few extras. It's as simple as that!

---

## Contents

* What is jQuery?
* Selection
* Setting CSS
* Setting attributes
* Creating, adding, and removing elements

---

## What is jQuery?

jQuery is a JavaScript library created to facilitate manipulation of the DOM, along with quite a few extras. It provides simplified methods for carrying out common programming tasks in connection with a webpage, such as changing CSS and content, adding and removing elements, listening for events, and more.

We should naturally start our engagement with this library at jQuery's homepage at [https://jquery.com/](https://jquery.com/). It's worth taking note of some key elements of the homepage:

* jQuery's own characterization of its purpose
* Brief examples of the library's use
* Link to the [jQuery API documentation](https://api.jquery.com/) we will need
* Link to the [jQuery Learning Centre](https://learn.jquery.com/) for tutorials and deeper explanations of the library
* A link to [Download jQuery](https://jquery.com/download/)

In the following discussions of the library, we'll look at key features and philosophies of the library, but always remember to return to the actual homepage and documentation any time you want to learn something in depth.

---

## A webpage

In order to work with the DOM, we'll need an actual webpage! Let's use the following HTML. As per usual when working with the DOM, we'll link our script at the **bottom** of the `<body>` element so it loads last.

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>

    <title>Title of webpage</title>

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <!-- Library script(s) go here -->
  </head>

  <body>
    <h1 id="main-heading" class="header">Main heading</h1>
    <section id="first-section">
      <h2 class="header">Subheading</h2>
      <p>
        This is some text in a paragraph. And here is <span id="example-span">some text in a span</span>.
      </p>
      <p>
        This is another paragraph. This is a <a id="thicc-link" href="https://thi.cc">link to another webpage</a>.
      </p>
    </section>

    <section id="second-section">
      <h2 class="header">Another subheading</h2>
      <p>
        You guessed it, this is another paragraph.
      </p>
    </section>

    <script src="js/script.js"></script>
  </body>
</html>
```

You'll also want to have a `script.js` file in your `js/` folder so you can write some jQuery-based JavaScript!

---

## Including the jQuery library

To obtain jQuery we have two basic options

1. We can download the library as a **file** and include it in our project files
2. We can obtain a **link** to the library on a CDN (Content Delivery Network) and use that instead

Both options are fine. Having a **file** means we can work offline, but we increase the size of our project. Having a **CDN link** means we can't work offline, but our webpage may run faster for the user thanks to caching.

### Downloading a file

If we opt for the file, we should go to the [jQuery Homepage](https://jquery.com/) and click through to [Download jQuery](https://jquery.com/download/). Here we see many different options for the library, but let's stick with obtaining the **compressed, production** version of jQuery.

If we click that link, we will end up with a file we can save to our computer and include as a library in the usual way (place it in `js/libraries` and use a `<script>` tag to link to it in your `index.html`).

### Using a CDN link

If we'd like to use a CDN link for convenience, we have to look a little more closely. We have to scroll down on the download page to the section about the CDN, and click through to [https://code.jquery.com/](https://code.jquery.com/). There we can obtain a link to the **minified** version of the library, and in fact we will get the entire `<script>` tag to simply paste into our `index.html`.

It's also possible to obtain jQuery from other CDNs. If you search for "jQuery CDN" online, you'll find multiple options, including from [jQuery](https://code.jquery.com/), [cdnjs](https://cdnjs.com/libraries/jquery), and [Google](https://developers.google.com/speed/libraries).

---

## Selection and action

jQuery is specifically designed to make selecting and acting on DOM elements very straightforward by using **CSS selection** expressions and a host of **methods** for manipulation.

If we want to get access to our `<h1>` tag in the example, we can use its `id` of `main-heading` to do so and we could, for instance, change its color using CSS...

`script.js`
```javascript
// Get the <h1> element by its id and store it in a variable
let $mainHeading = $(`#main-heading`);
// Set its color property using the .css() method
$mainHeading.css(`color`, `#339966`);
```

What's going on here?

### Selection

To **select** an element on the page we use the **jQuery function** which is rather neatly named `$()`, just a dollar sign! It's probably the most distinctive feature of using jQuery. All those dollar signs! It takes **one** argument:

* A string containing the CSS selector to use

```javascript
$(`#main-heading`);
```

Above, we **assign** the selection into a variable named `$mainHeading`. It's a useful practice when using jQuery to name variables that contain **jQuery selections** with a `$` as a prefix. That way you know what type of value is inside.

```javascript
let $mainHeading = $(`#main-heading`);
```

### Action

We **act** on the selected element by using one of jQuery's **many** methods. In this case we're using the `.css()` method, which allows us to set CSS properties on a selected element.

```javascript
$mainHeading.css(`color`,`#339966`);
```

### Selection and action

In fact, we don't need to separate out our selection and action steps. We don't have to assign the selection of our heading to a variable in order to use the `.css()` method, we could do it in a single step...

```javascript
$(`#main-heading`).css(`color`, `#339966`);
```

Here we select the main heading by id **and** change the CSS in a single line of code. This is possible because the first part

```javascript
$(`#main-heading`)
```

**returns** a jQuery selection that we can immediately call the `.css()` method on.

### Multiple-selection

One of the really helpful things about jQuery is that we can select and act on multiple elements at once very, very easily. For instance, if we want to change every element with the `header` class, we simple select and act on it in exactly the same was as above!

```javascript
$(`.header`).css(`color`, `#339966`);
```

Hey presto, every element with the class `header` is affected. No need for us to loop through each element or anything like that, it just works! This is quite lovely.


### When to use a variable?

If we can just act directly on a jQuery selection without first storing it in a variable, why ever bother with the variable?

It comes to down to a question of efficiency. Every time you call the jQuery function `$()` jQuery needs to go and analyze the current webpage to find all the elements that match your selector. This takes work!

```javascript
// This code causes jQuery to search for every element matching .header three times
$(`.header`).css(`color`,`red`);
$(`.header`).css(`background-color`,`black`);
$(`.header`).css(`font-size`,`3rem`);
```

So, in practice, if you're repeatedly using the same selector, it would be smart to store the jQuery selection in a variable so that you don't repeat that work every time.

```javascript
// This code causes jQuery to search for every element matching .header once
let $headers = $(`.header`);
$headers.css(`color`,`red`);
$headers.css(`background-color`,`black`);
$headers.css(`font-size`,`3rem`);
```

---

## What can we do with jQuery?

This is a big question and in these notes we'll answer with specific examples of common tasks jQuery is especially helpful for. For the rest, it's important to take a look at the [jQuery API documentation](https://api.jquery.com/), examples, tutorials, and more.

---

## Changing the CSS of elements

As we have just demonstrated, a typical thing we can do via jQuery is alter the **CSS** of elements on the page with the [`.css()`](https://api.jquery.com/css/) method. Because CSS is what lets us radically alter the visual representation of a webpage, this is central to how we can **dynamically** change that representation.

We can use the approach above to change multiple style properties...

```javascript
// Get the <h1> element by its id and store it in a variable
let $mainHeading = $(`#main-heading`);
// Set its CSS properties using the .css() method
$mainHeading.css(`color`, `#339966`);
$mainHeading.css(`font-size`, `5rem`);
$mainHeading.css(`font-family`, `Helvetica, sans-serif`);
$mainHeading.css(`background-color`, `#000000`);
```

### Setting multiple CSS properties at once

In fact, we don't need multiple calls to `.css()` here because we can use it in another mode. Instead of providing the property and the value as strings, we can provide an **object** containing properties and values to set. We can also return to the idea of using `.css()` directly on the selection instead of using an intermediate variable.

```javascript
$(`#main-heading`).css({
  "color": `#339966`,
  "font-size": `5rem`,
  "font-family": `Helvetica, sans-serif`,
  "background-color": `#000000`
});
```

This is quite nice and tidy!

**Note** that if we want to use the standard CSS property names which are often hyphenated, we should put them in double or single quote marks as above. Again, it seems desirable to follow the CSS standard, rather than the camelCase alternatives.

### What CSS to set...

We can arbitrarily set the CSS for any element, so we have a **lot** of power at our fingertips. We can consult a reference like the [Mozilla CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) to start to dream about what we might change!

---

## Changing the text content of elements

To access the plain text in an element we can use the `.text()` method:

### Changing text content

This might most obviously be used to dynamically generate content on a webpage or to display "live" information.

```javascript
$(`#example-span`).text(`a Spaniel`);
```

Here, we've set the text inside the span to "a Spaniel".

### Reading text content

We can also access the current text of an element by using `.text()` without an argument. This allows us to check or manipulate the text.

```javascript
// Get the current text in the span
let spanText = $(`#example-span`).text();
// Reverse it
let reverseSpanText = spanText.split(``).reverse().join(``);
// Set the span's text to the reversed version
$(`#example-span`).text(reverseSpanText);
```

---

## Changing the HTML content of elements

We can use the `.html()` method in the same way as `.text()`, except to set and read HTML content.

```javascript
// Get the HTML content of the span
let spanHTML = $(`#example-span`).html();
// Set the HTML content of the span as the original content wrapped in a <strong> tag
$(`#example-span`).html(`<strong>${spanHTML}</strong>`);
```

Here we can use the `strong` tag inside our new content because we're setting it in the element specifically as **HTML** content.

**Note** the use of the `$` inside the template string is **not** using jQuery, that's still the usual use of `${...}` inside a template string to include the value in a variable - in this case the current span text.

---

## Attributes

Perhaps the other most important feature of HTML elements after their CSS styling and actual content are their **attributes**. As you might expect, there are methods for working with these attributes...

### Setting an attribute

We use `.attr()` to set specific attributes on any element.

```javascript
$(`#main-heading`).attr(`contenteditable`, `true`);
```

Here we add the [`contenteditable`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/contenteditable) attribute to the heading, setting it to `true`. This allows the user to click on and edit the heading on the page. How empowering!

### Reading an attribute

We use `.attr()` with only the attribute name as an argument to read specific attributes of any element...

```javascript
if ($(`#thicc-link`).attr(`href`) === `https://thi.cc`) {
  $(`#thicc-link`).text(`thicc, thicc link`);
}
```

Here we check if the `href` attribute of our link does indeed point to `https://thi.cc` and if so we rewrite the text of the link to be more descriptive!

---

## Creating and adding elements

So far we have worked with **existing** elements on our page, but a fairly obvious thing we might want to do is create and add **new** elements to the page.

We can create new elements using the standard jQuery function `$()`, by writing out the full tag as an argument...

```javascript
// Create a <p> element
let $newP = $(`<p></p>`);
// Set the text inside the new <p> element so it has something to say!
$newP.text(`Hot off the presses!`);
```

And we can add this new element to the page using `.append()` to add it to the end of a selected element. So if we wanted to add our new paragraph to the end of the second section...

```javascript
// Add it to the second section (selected by id)
$(`#second-section`).append($newP);
```

Note jQuery also has other insertion possibilities for you:
* `.prepend()` adds an element to the start of the selected element
* `.after()` adds an element after a selected element
* `.before()` adds an element before a selected element

---

## Removing elements

Perhaps unsurprisingly, we can remove elements from the webpage. Importantly, though, we can only remove elements through their **parent** element (the element they are inside). HTML is very hierarchical.

jQuery provides a `.remove()` method to remove a selected element (and all its children!) from the page. Let's remove the main heading...

```javascript
$(`#main-heading`).remove();
```

Hey presto, the heading is gone!

---

## jQuery!

So, jQuery is a super helpful library...

 is a large API that lets us access and manipulate HTML elements on our website. It lets us change their CSS properties, set their attributes, and change their content. It also lets us create and add brand new elements to the page and remove elements from the page. Essentially, the entire webpage content is like putty in our programmer hands!

Like many major APIs, working with the DOM is something that we need to practice over time, in particular spending a lot of time with the **documentation** as we try to figure out how precisely to do the kinds of things we're interested in.

---

# }
