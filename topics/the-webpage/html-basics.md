# HTML Basics {

---

## Summary

HTML (HyperText Markup Language) is the language we use to express the **structure** and **content** of web pages. It uses **tags** to express structural parts of a webpage such as headings, numbered lists, paragraphs, buttons, and so on.

---

## Contents

---

## HTML

- Stands for **HyperText Markup Language**
- It is the language we use to express the **structure** and **content** of web pages
- Premised on the idea of a web page as a **document**
- Uses a very recognizable style of **tags**
- Generally lives in a text file with extension `.html`

---

## A document

```html
<!DOCTYPE html>
<html>
<head>
  <title>Chess-a-likes</title>
  <link rel="stylesheet" type="text/css" href="css/style.css" />
  <script src="js/script.js"></script>
</head>
<body>
  <h1 id="main-heading">Pippin Barr's Chess-a-likes!</h1>
  <div id="introduction">
    <h2 id="introduction-heading">Feeling the love</h2>
    <p id="introduction-text" class="introduction-paragraph">
      Pippin Barr <em>loves</em> making <a href="https://www.pippinbarr.com/category/games/">games</a> based on <strong>chess</strong>.
    </p>
  </div>
  <div id="images">
    <h2 id="images-heading">Game images</h2>
    <img class="game-icon"src="https://www.pippinbarr.com/assets/images/game_icons/chesses-300x300.png" alt="Image of chesses chess position">
    <img class="game-icon" src="https://www.pippinbarr.com/assets/images/game_icons/mobile-chogue-300x300.png" alt="Image of mobile chogue chess position">
  </div>
</body>
</html>
```

???

- Mostly importantly, note how we use **tags** to indicate special types of content
- Also note how tags (almost) always open and close around their content, e.g. `<h1>` is matched by `</h1>`
- In this simple webpage we can see a few of the key features of an HTML document
- The `<!DOCTYPE html>` tag at the top is there to tell the browser that this file contains HTML markup so that it can process it appropriately
- The `<html>` tag surrounds all the HTML content on the page
- The `<head>` tag surrounds information **about** the page that won't actually be displayed on the page
- Such as the `<title>` tag which sets the title displayed by the browser (and bookmarks)
- And the `<link>` tag we can use to point to a CSS file that will style the page visually
- And the `<script>` tag we use to point to JavaScript files to be included and run on this page
- The `<body>` tag surrounds the actual content to be displayed on the page itself
- The `<h1>` tag denotes a first (top) level heading
- The `<div>` tag surrounds related content
- The `<p>` tag denotes a paragraph of text
- The `<a>` tag denotes a link
- The `<img>` tag denotes an image
- All the tags open with their tag name in angle brackets `<name>` and close with their name prefixed with a forward slash in angle brackets `</name>`
- There are exceptions to this, including `<link>`, but generally speaking it's the rule

---

## Structure, not style

- Generally speaking HTML these days is used to represent the **content** of the page and its **structure**, not what it will actually look like
- Thus, the vast majority of tags are about structuring your content
- When we look at the page, we don't see an especially gorgeous webpage, just the absolute default settings that a browser renders with

---

## High level structure

- The classic tag for grouping together content on a webpage is the `<div>` tag
- It's kind of like an imaginary box

```html
<h1 id="main-heading">Pippin Barr's Chess-a-likes!</h1>
<div id="introduction">
  <h2 id="introduction-heading">Feeling the love</h2>
  <p id="introduction-text" class="introduction-paragraph">
    Pippin Barr <em>loves</em> making <a href="https://www.pippinbarr.com/category/games/">games</a> based on <strong>chess</strong>.
  </p>
</div>
```

- Here the `<p>` tag is inside (a child of) a `<div>`
- A `<div>` doesn't do a whole lot on its own, but we frequently use CSS to style them (and everything in them)

---

## More specific high level structure

- Since HTML5, we have a number of more specifically named tags that function more or less the same way as `<div>` tags, but just help to make our HTML more readable
- Some examples of these are
- `<article>` - to group the content of a specific article
- `<section>` - to group the content of a specific section (such as in an article)
- `<header>` and `<footer>` - to group content for the top or bottom of the page
- `<nav>` - to group content for navigating the website

---

## Mid-level structure

- In terms of the actual texts being displayed, we might often think in terms of headings and paragraphs
- `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, and `<h6>` represent diminishing headings
- We use `<p>` to surround paragraphs of text

```html
<h1 id="main-heading">Pippin Barr's Chess-a-likes!</h1>
<div id="introduction">
  <h2 id="introduction-heading">Feeling the love</h2>
  <p id="introduction-text" class="introduction-paragraph">
    Pippin Barr <em>loves</em> making <a href="https://www.pippinbarr.com/category/games/">games</a> based on <strong>chess</strong>.
  </p>
</div>
```

---

## Low-level structure

- At the level of specific text, we can think in terms of things like emphasis and linking
- We use `<em>` tags to represent emphasis and `<strong>` to represent importance
- We use the `<a>` tag to represent text that is a link

```html
<p id="introduction-text" class="introduction-paragraph">
  Pippin Barr <em>loves</em> making <a href="https://www.pippinbarr.com/category/games/">games</a> based on <strong>chess</strong>.
</p>
```

- The `href` attribute in the `<a>` tag provides the destination of the link

---

## Images

- The internet is a visual place, so HTML includes the ability to include images with the `<img>` tag

```html
<div id="images">
  <h2 id="images-heading">Game images</h2>
  <img class="game-icon"src="https://www.pippinbarr.com/assets/images/game_icons/chesses-300x300.png" alt="Image of chesses chess position">
  <img class="game-icon" src="https://www.pippinbarr.com/assets/images/game_icons/mobile-chogue-300x300.png" alt="Image of mobile chogue chess position">
</div>
```

- The `src` attribute provides the path (or link) to the image file
- The `alt` attribute provides an alternate text for the image (for browsers that can't load them or people who can't see them)

---

## `id` and `class`

- As with `<a>` and `<img>`, HTML tags can have a variety of extra information inside the opening tag called **attributes**
- Two of the most important attributes to know about are `id` and `class`
- The `id` attribute provides an identifier for a tag that is **unique** on the page
- The `class` attribute provides a class name for a tag that is (usually) **shared** with other tags on the page

```html
<div id="images">
  <h2 id="images-heading">Game images</h2>
  <img class="game-icon"src="https://www.pippinbarr.com/assets/images/game_icons/chesses-300x300.png" alt="Image of chesses chess position">
  <img class="game-icon" src="https://www.pippinbarr.com/assets/images/game_icons/mobile-chogue-300x300.png" alt="Image of mobile chogue chess position">
</div>
```

- `id` and `class` are how we chiefly style our HTML with CSS

---

## There is a lot more to HTML

- HTML is a whole thing
- The key is to remember it's there to structure your content (not style it)
- There are many resources to learn more, such as
  - Reference lists like the [W3 Schools HTML Reference](https://www.w3schools.com/tags/ref_byfunc.asp)
  - Tutorials like the [freeCodeCamp HTML lessons](https://www.freecodecamp.org/learn/responsive-web-design/basic-html-and-html5/)
  - Googling specific tag names or questions and reading the documentation
  - Using your browser's "View Source" option to look at the HTML of pages you're browsing

---

# }
