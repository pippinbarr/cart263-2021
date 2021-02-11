# UNDER CONSTRUCTION

## To do

* Get to manipulation much earlier, show getElementById and do stuff based on that before showing other selection forms

# Introducing the DOM {

---

## DOM

- Stands for __Document Object Model__
- It is a representation of the __currently loaded webpage__ along with special functions and properties (an API) that we can access in __JavaScript__ through the `document` object
- Has the exact same __structure__ as the HTML on the page
- Allows us to dynamically add, remove, examine, and change elements on a webpage through code
- Includes the ability to manipulate CSS and event handlers

---

## Waiting for the page to load

- When we're writing code that accesses the DOM, we need to delay it until the page has loaded
- For this we can add a function as a callback for `window.onload`, which will be called only when the page has loaded

```javascript
window.onload = setup;

function setup() {
  console.log("The page has loaded!");
  console.log("Now we can do stuff with the DOM of the page!");
}
```

- This template, of writing your code in a function assigned to `window.onload` is a typical pattern for doing DOM-based JavaScript
- (I'm calling our function `setup()` for its familiarity in the context of p5 - it runs __once__ when the page loads.)

???

- Although it's most typical to use `window.onload` to set up this situation, you can also use the `addEventListener` function to achieve the same result:

```javascript
window.addEventListener('load',setup);

function setup() {
  console.log("The page has loaded!");
  console.log("Now we can do stuff with the DOM of the page!");
}
```

- The above is functionally identical to the example on the main slide.

---

## `document`

- The representation of the current webpage is loaded into a variable called `document` which we can use in our JavaScript

```javascript
window.addEventListener('load',setup);

function setup() {
  console.log(document);
}
```

- The above will let us see the entire content of the current webpage in the console (including the various functions and properties associated with its representation in JavaScript)

---

## Selection

- A central action we usually need to perform when working with the DOM is to __access specific elements on the page__ so that we can manipulate them etc.
- Perhaps the most common function used for this operates at the level of the document as a whole, via the `document` object, and is called `getElementById()`
- As the name suggests, we can use `getElementById()` to obtain a single element on the page with the corresponding `id` (remember that `id` attributes are meant to be unique)

```javascript
let mainHeading = document.getElementById('main-heading');
console.log(mainHeading);
// mainHeading will contain the HTML element with an id of "main-heading"
// or null if there is no such element
```

---

## More selection

- There are a number of other ways to select elements on a page relative to a specific element in its hierarchy, including
  - `getElementsByClassName()`
  - `getElementsByTagName()`
  - `querySelector()` and `querySelectorAll()`
- Note that these functions can be applied to __any__ element of the document (since it's a hierarchy)

---

## `getElementsByClassName()`

- Again a pretty self-explanatory name, `getElementsByClassName()` returns __all__ the elements with the specified `class` attribute that are children of the element it's called on
- It returns what is __effectively__ an array (you can use array indexes with it and it has a `.length` property), but isn't really

```javascript
let imagesDiv = document.getElementById('images');
let gameIcons = imagesDiv.getElementsByClassName('game-icon');
// gameIcons contains an array (kind of) containing all the elements
// with a class of "game-icon"
// If there aren't any the (kind of) array will have a .length of 0
for (let i = 0; i < gameIcons.length; i++) {
  console.log(gameIcons[i]);
}
```

???

- What is returned by `getElementsByClassName()` isn't actually an array, it's an object of class `HTMLCollection` that can be treated like an array in terms of indexes (e.g. `gameIcons[0]`) and its `.length` property.
- You can also access individual items in the `HTMLCollection` using its `item()` method

---

## `getElementsByTagName()`

- One more self-explanatory name, `getElementsByTagName()` returns __all__ the elements with the specified tag, returning the same array-like object as `getElementsByClassName()`

```javascript
let images = document.getElementsByTagName('img');
// images contains an array (kind of) containing all the "img" elements on the page
// If there aren't any the (kind of) array will have a .length of 0
for (let i = 0; i < images.length; i++) {
  console.log(images[i]);
}
```

???

- Just like `getElementsByClassName()`, `getElementsByTagName()` really returns an `HTMLCollection`

---

## `querySelector()` and `querySelectorAll()`

- If we have more complex selection needs, there are special selection functions that allow us to use CSS selectors instead
- `querySelector()` returns the first child element matching a specified CSS selector
- `querySelectorAll()` returns all child elements matching a specified CSS selector


```javascript
let introLinks = document.querySelectorAll('#introduction-text a');
// introLinks contains an array (kind of) containing all the link elements on the page
// that are inside an element with id 'introduction-text'
// If there aren't any the (kind of) array will have a .length of 0
for (let i = 0; i < introLinks.length; i++) {
  console.log(introLinks[i]);
}
```

---

## `style`

- One of the key things we often want to do within the DOM of our page is manipulate the CSS of a selected element for visual effect
- We can do this via the element's `style` property, which provides access to the style __attribute__ of the element (not the style file!)
- Note that the properties are written in camelCase rather than the CSS syntax which uses lowercase words separated by hyphens (`backgroundColor` rather than `background-color`)

```javascript
let heading = document.getElementById('main-heading');
heading.style.color = 'yellow';
heading.style.backgroundColor = 'black';
```

- When in doubt, consult a [DOM CSS Properties Reference](https://www.w3schools.com/jsref/dom_obj_style.asp)

???

- In order to access the reset of the style settings of an element (such as those in a `<style>` tag or in a `.css` file, we need to use something like `getComputedStyle()` for the element. Look it up.)

---

## Changing the content of elements

- Many HTML elements can contain text (think of `p`, `h1`, `em` and other tags)
- One thing that can be useful is to alter that text from within JavaScript
- This might most obviously be used to dynamically generate content on a webpage or to display "live" information

---

## .innerText

- If all we want to do is change the raw text inside an element, we can use its `.innerText` property

```javascript
let heading = document.getElementById('main-heading');
heading.innerText = "This is not my beautiful house";
```

- After the above code executes, the heading's text will be changed to the new string specified

---

## .innerHTML

- Sometimes we might want to be able to use HTML tags in the text we insert into an element's contents, in which case we use its `.innerHTML` property

```javascript
let heading = document.getElementById('main-heading');
heading.innerHTML = "This is <strong>not</strong> my beautiful house";
```

- Here we can use the `strong` tag inside the string because we're injecting it into the element specifically as HTML content

---

## Creating and adding elements

- We can add new elements to a page dynamically using a set of functions

```javascript
let newImage = document.createElement('img');
newImage.setAttribute('src', 'https://www.pippinbarr.com/assets/images/game_icons/lets-play-ancient-greek-punishment-chess-edition-300x300.png');
newImage.setAttribute('alt', 'Chess position in Ancient Greek Punishment, Chess Edition');
newImage.setAttribute('class', 'game-icon');

let imagesDiv = document.getElementById("images");
imagesDiv.appendChild(newImage);
```

???

- `document.createElement()` creates a new element of the specific tag type and return it (we store it in a variable so we can manipulate it)
- `setAttribute()` is used to set specific attributes of our new element, such as its `src`, `alt` and `class` attributes, which make it show up properly on a page
- `appendChild()` is used to add our new element as a child of a specific element on the page

---

## Removing elements

- Unsurprisingly, we can remove elements as well!
- Importantly, we can only remove immediate __children__ via their __parent__

```javascript
let heading = document.getElementById('main-heading'); // The element to remove
heading.parentElement.removeChild(heading); // Removing the child
```

- Usefully, all elements have a `.parentElement` property that specifies their parent element in the hierarchy

---

## There is a lot more to the DOM

- The DOM is a large API (Application Programming Interface), there is more to it than we have seen
- The key takeaway is that it provides JavaScript access to the currently loaded webpage and all its elements
- There are resources to learn more, such as
  - DOM references like the [W3 Schools DOM Reference](https://www.w3schools.com/jsref/default.asp)
  - DOM CSS references like the [W3 Schools DOM CSS Reference](https://www.w3schools.com/jsref/dom_obj_style.asp)
  - DOM Event references like the [W3 Schools DOM Event Reference](https://www.w3schools.com/jsref/dom_obj_event.asp)
  - Tutorials like the [W3 Schools DOM Introduction](https://www.w3schools.com/js/js_htmldom.asp)
  - Googling specific function or property names or questions and reading the documentation

---

# }
