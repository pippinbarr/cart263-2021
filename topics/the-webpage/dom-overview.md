# DOM Overview {

---

## Summary

The DOM (Document Object Model) is a representation in JavaScript of the webpage your program is running on. It's stored in a variable called `document` and the browser provides various methods to access and manipulate HTML elements and CSS on the page in your program.

---

## Contents

* What is the DOM?
* Waiting for the DOM
* Accessing the DOM
* Selection by `id`
* Setting CSS
* Setting attributes
* More selection methods
* Creating, adding, and removing elements

---

## What is the DOM?

DOM stands for (**D**)ocument (**O**)bject (**M**)odel. It is a representation of the **currently loaded webpage** along with special methods and properties (an API) that we can access in **JavaScript** through a variable called `document`.

The API associated with the DOM allows us to dynamically add, remove, access, and change elements on a webpage through code, including the ability to manipulate CSS and respond to events.

So we could, for instance, change the color of some text when the user clicks a button. Or we could detect when the user scrolls the page and cause elements to move at different rates in the window to create a parallax effect. Essentially we can manipulate the entire webpage in any way we can imagine doing with code.

---

## A webpage

In order to work with the DOM, we'll need an actual webpage! Let's use the following HTML and CSS files. Note you'll need a file in `assets/images/clown.png` to match the `<img>` element on this page (feel free to substitute for something else).

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Introducing the DOM</title>

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />
  </head>

  <body>
    <h1 id="main-heading" class="header">Introducing the DOM</h1>
    <section id="well-section">
      <h2 class="header">Well...</h2>
      <p>
        Well, here <span id="pronoun">we</span> are, using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">DOM</a>.
      </p>
    </section>

    <section id="clown-section">
      <h2 class="header">A clown</h2>
      <img id="clown-image" src="assets/images/clown.png" alt="A clown emoji.">
    </section>
  </body>
</html>
```

`style.css` (should be placed in a `css` folder)
```css
body {
  font-family: sans-serif;
}
```

---

## Waiting for the DOM

When we're writing code that accesses the DOM, we need to wait until it's actually loaded. There are a couple of ways of doing this, but the simplest is that when we include the `<script>` tag linking to our script in `index.html` we should place it at the **end** of the `<body>` tag. This way your script will be loaded last, when the DOM is ready.

Let's add our script to the end of the `<body>`...

`index.html`
```html
<!DOCTYPE html>
<!DOCTYPE html>
<html>
  <head>
    <title>Introducing the DOM</title>

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />
  </head>

  <body>
    <h1 id="main-heading" class="header">Introducing the DOM</h1>
    <section id="well-section">
      <h2 class="header">Well...</h2>
      <p>
        Well, here <span id="pronoun">we</span> are, using the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model">DOM</a>.
      </p>
    </section>

    <section id="clown-section">
      <h2 class="header">A clown</h2>
      <img id="clown-image" src="assets/images/clown.png" alt="A clown emoji.">
    </section>

    <!-- NEW! We add our script at the bottom of the body element. -->
    <script src="js/script.js"></script>
  </body>
</html>
```

---

## Accessing the DOM

Once the DOM is loaded, the representation of the current webpage is in a variable called `document` which we can use in our JavaScript:

`script.js`
```javascript
console.log(document);
```

The above will let us see the entire content of the current webpage in the console! Depending on which browser you view it in you might see the webpage elements (**Chrome**) or the JavaScript representation of the webpage, which includes various methods and properties (**Firefox**).

We use `document` to access and manipulate the DOM and thus the active webpage!

**Note** how we didn't write our code in any kind of special function like `setup()` or similar. Because our script is loaded at the **end** of the webpage, we're able to execute our code right away, outside any functions!

If it feels better, you can still use a function:

```javascript
setup();

function setup() {
  console.log(document);
}
```

It's really up to you how you want to approach it!

---

## Selection by `id`

A central action we usually need to perform when working with the DOM is to **access specific elements on the page** so that we can manipulate them etc.

Perhaps the most common function used for this uses the `id` of elements on a page to access them. It's called, rather straightforwardly `getElementById()` and because it's a method of the DOM, we write `document.getElementById("id-goes-here")`.

So if we want to get access to our `<h1>` tag in the example, we can use its `id` of `main-heading` to do so and we could, for instance, change its color using CSS (more on this later)...

```javascript
// Get the <h1> element with id "main-heading" and store it in a variable
let mainHeading = document.getElementById(`main-heading`);
// Set its color property
mainHeading.style.color = `#339966`;
```

---

## Changing the CSS of elements

As we have just demonstrated, a key thing we can do via the DOM is alter the **CSS** of elements on the page via their `style` property. Because CSS is what lets us radically alter the visual representation of a webpage, this is central to how we can **dynamically** change that representation.

The `style` property of any element on the page lets us change any CSS property for that element.

```javascript
// Get the <h1> element with id "main-heading" and store it in a variable
let mainHeading = document.getElementById(`main-heading`);
// Change some of the heading's CSS properties
mainHeading.style.color = `#339966`;
mainHeading.style.fontSize = `5rem`;
mainHeading.style.fontFamily = `Helvetica, sans-serif`;
mainHeading.style.backgroundColor = `#000000`;
```

Note that **all CSS properties are stored as strings**. More on the implications of this later.

### Naming CSS properties

Notice how we write multiword CSS properties like `font-family` in camelCase, e.g. `fontFamily`. That's the way it works! All hyphenated CSS properties should be written in camelCase when writing them as property names in JavaScript. `background-color` becomes `backgroundColor`, `font-size` becomes `fontSize` and so on.

We can write the **standard CSS property names** by using a slightly different notation:

```javascript
// Get the <h1> element with id "main-heading" and store it in a variable
let mainHeading = document.getElementById(`main-heading`);
// Change some of the heading's CSS properties
mainHeading.style[`color`] = `#339966`;
mainHeading.style[`font-size`] = `5rem`;
mainHeading.style[`font-family`] = `Helvetica, sans-serif`;
mainHeading.style[`background-color`] = `#000000`;
```

This is just another way to access a JavaScript object's properties and works on any object, in fact. We might argue that here it is a **better** approach since it maintains consistency between the CSS name and the name we use in our code. But really it's up to you!

### CSS priority

When we set CSS properties in JavaScript this way we are setting them in the **`style`*attribute** of the element. As you may remember, this means that the properties set here have **priority** over CSS in a `<style>` tag and CSS in a `.css` file.

In other words, if you set CSS properties this way, it will override any other CSS that might be applied to the element.

### What CSS to set...

At this point, knowing we can arbitrarily set the CSS for any element, we have a **lot** of power at our fingertips. We can consult a reference like the [Mozilla CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) to start to dream about what we might change!

---

## Changing the text content of elements

Many HTML elements can contain text (think of `p`, `h1`, `em` and other tags) and one thing that can be useful is to read or alter that text from within JavaScript.

To access the plain text in an element we can use its `.innerText` property:

### Changing the `.innerText`

This might most obviously be used to dynamically generate content on a webpage or to display "live" information.

```javascript
let pronoun = document.getElementById(`pronoun`);
pronoun.innerText = `you`;
```

Here, we've changed the pronoun used to address the reader from "we" to "you". This clearly opens the door to webpages that change their content!

### Reading the `.innerText`

Because `.innerText` is just a property of the element that contains its current text, we can also use this as information in our program...

```javascript
let pronoun = document.getElementById(`pronoun`);
// Set the pronoun to "you" if it is currently "we"
if (pronoun.innerText === `we`) {
  pronoun.innerText = `you`;
}
```

---

## Changing the HTML content of elements

When we use `.innerText` we can only work with plain text, but we might want to use HTML tags in the content we're adding. In that case we should work with the `.innerHTML` property, which is an HTML representation of the content of an element. It's the same, but with HTML!

```javascript
let pronoun = document.getElementById('pronoun');
pronoun.innerHTML = "<strong>you</strong>";
```

Here we can use the `strong` tag inside our string because we're setting it in the element specifically as **HTML** content.

Again, we can also use this to read the HTML content of an element if that's useful to us.

---

## Attributes

Perhaps the other most important feature of HTML elements after their CSS styling and actual content are their **attributes**. As you might expect, there are methods for working with these attributes...

### Setting an attribute

We use `.setAttribute()` to set specific attributes on any element...

```javascript
// Get the image element
let image = document.getElementById(`clown-image`);
// Set its src attribute to a new image (a URL for a random clown image in this case)
image.setAttribute(`src`, `http://loremflickr.com/320/240/clown`);
```

The clown image is dynamically changed by our code into a different image!

### Reading an attribute

We use `.getAttribute()` to read specific attributes of any element...

```javascript
// Get the image element
let image = document.getElementById(`clown-image`);
// Get the value of the src property (which is the image path or URL)
let src = image.getAttribute(`src`);
// Check if the src property includes the word "clown"
if (src.includes(`clown`)) {
  // If it does, set the src property to a random clown image
  image.setAttribute(`src`, `http://loremflickr.com/320/240/clown`);
}
```

---

## More selection methods

So far we've only looked at selecting elements on a page by `id`, which is useful, but it's not the only way to go about things! As you might imagine, there are additional ways to select HTML elements in JavaScript...

### By class

We can select elements on the page by the `class` attribute using `.getElementsByClassName()`. The most important thing to realize here is that we may well get back **multiple** elements (because more than one element can have the same class). That being the case, we get back a kind of **array** of elements that we can manipulate.

```javascript
// Get all elements with class "header" on the page
let headers = document.getElementsByClassName(`header`);
// Loop through all the elements returned
for (let i = 0; i < headers.length; i++) {
  // Set the color style property to red for each one
  headers[i].style.color = `#ff0000`;
}
```

#### About that "array"...

What is really returned by `getElementsByClassName()` isn't actually an array, it's an `HTMLCollection` object. However, it can be treated like an array in terms of having numbered indexes and a `.length` property, so you don't need to worry so much about it.

---

### By tag

We can access elements by their tag name using `.getElementsByTagName()`. It returns the same kind of array-like object because we might have more than instance of the same tag type in our page.

```javascript
// Get all h2 elements
let h2 = document.getElementsByTagName(`h2`);
// Loop through them
for (let i = 0; i < h2.length; i++) {
  // Set their color to red
  h2[i].style.color = `#ff0000`;
}
```

This essentially achieves the same thing as our previous example because all the `<h2>` elements also had the "header" class.

---

### By CSS selector

Finally, we can also select elements on a page using CSS selectors, which can potentially enable us to be super specific and tricky. Or we may just be more comfortable using CSS-style selectors. There are two methods involved here...

#### `.querySelector()`

This method allows us to get the **first** element that matches our CSS selector...

```javascript
// Get the first element matching the CSS selector .header (e.g. the header class)
let header = document.querySelector(`.header`);
// Set its color to red
header.style.color = `#ff0000`;
```

#### `.querySelectorAll()`

This method allows us to get **every** element that matches our CSS selector...

```javascript
// Get every element matching the CSS selector .header (e.g. the header class)
let headers = document.querySelectorAll(`.header`);
// Loop through them
for (let i = 0; i < headers.length; i++) {
  // Set their font color to red
  headers[i].style.color = `#ff0000`;
}
```

---

## Creating and adding elements

So far we have worked with **existing** elements on our page, but a fairly obvious thing we might want to do is create and add **new** elements to the page. We can do this with `.createElement()` and `.appendChild()`.

So if we wanted to add a paragraph at the end of the section with the clown image in it we could do the following...

```javascript
// Create a <p> element (it starts out totally empty)
let clownInfoP = document.createElement(`p`);
// Set the text inside the new <p> element so it has something to say!
clownInfoP.innerText = `Clowns are here to stay.`;
// Select the section about clowns by its id
let clownSection = document.getElementById(`clown-section`);
// Append the new <p> element to the end of the clown section
clownSection.appendChild(clownInfoP);
```

(Note that if you want to add an element to more specific locations inside an element you should look into `.insertBefore()` as well as other properties such as `.firstChild` or `.nextSibling`.)

---

## Removing elements

Perhaps unsurprisingly, we can remove elements from the webpage. Importantly, though, we can only remove elements through their **parent** element (the element they are inside). Again, HTML is very hierarchical.

The easiest way to do this is by knowing that every element has a `.parentElement` property that contains the parent element of that element. This makes it easy to remove them!

```javascript
// Select the item we want to remove by id
let heading = document.getElementById(`main-heading`);
// Remove the element by accessing its parent and using .removeChild()
heading.parentElement.removeChild(heading); // Removing the child
```

Hey presto, the heading is gone!

---

## The DOM!

So, the DOM is a large API that lets us access and manipulate HTML elements on our website. It lets us change their CSS properties, set their attributes, and change their content. It also lets us create and add brand new elements to the page and remove elements from the page. Essentially, the entire webpage content is like putty in our programmer hands!

Like many major APIs, working with the DOM is something that we need to practice over time, in particular spending a lot of time with the **documentation** as we try to figure out how precisely to do the kinds of things we're interested in.

---

# }
