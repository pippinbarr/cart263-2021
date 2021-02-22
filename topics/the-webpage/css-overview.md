# CSS Overview {

---

## Summary

CSS (Cascading Style Sheets) is the language we use to express the **style** and some **layout** of web pages. It uses **selectors** to target parts of a page to style, and **properties** to specify the style. Excellent documentation in the [Mozilla CSS documentation](https://developer.mozilla.org/en-US/docs/Web/CSS).

---

## Contents

* What is CSS?
* Styling HTML with CSS
* Too much information?
  * CSS file vs. `<style>` tag vs. `style` attribute

---

## What is CSS?

CSS stands for (**C**)ascading (**S**)tyle (**S**)heets. It's the language we use to express **style** and some more sophisticated **layout** for a webpage.

CSS works by using **selectors** to target which parts of a webpage to style (e.g. paragraphs or sections or headers) and **properties** to specify the styling itself (e.g. colors or fonts or margins).

CSS perhaps most ideally lives in a text file with extension `.css`, but can also be included in a `<style>` tag inside the `<head>` tag of an HTML file, or even as a `style` attribute for a specific HTML tag.

What we're really interested in it building toward doing things with CSS via JavaScript! So, this discussion is not intended to make anyone a master of CSS, but rather to get the basics of its structure and use.

Let's style a very simple webpage using CSS to illustrate key component parts.

---

## An HTML file

Here's some simple HTML that we can style using CSS:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
  </head>
  <body>
    <header>
      <h1>Main heading</h1>
    </header>

    <section>
      <h2>Sub-heading</h2>
      <p>A paragraph of text. Here is an <em>emphasized</em> word.</p>
    </section>

    <section>
      <h2>Another sub-heading</h2>
      <p>Another paragraph of text. <strong>This is important</strong>.</p>
      <p>Here is a <a href="https://thi.cc/">thicc link</a>.</p>
    </section>

    <footer>
      <strong>Contact details</strong>: don't call me, I'll call you.
    </footer>
  </body>
</html>
```

Let's put that in an `index.html` file in a project folder so that we have a website we can work with. If we view it in our browser right now it'll just be standard HTML with no extra styling.

---

## A CSS file

We write CSS inside a plain text file with the extension `.css`. The file can have any name, but `style.css` is quite a common default. This file will represent the styling information for any webpage that uses it.

So, to begin with we create an empty text file called `style.css`. If we're being organized, it's a nice idea to put it in a `css/` folder.

Given that this file is empty, it won't do anything of course. But it **also** won't do anything because we have to tell our webpage to **use** it.

### Linking the CSS file

In order to tell a webpage to **use** the CSS in our file, we need to use a `<link>` tag inside the `<head>` tag. It works like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>

    <!-- NEW! Link to the style sheet file! -->
    <link href="css/style.css" rel="stylesheet">

  </head>
  <body>
    <header>
      <h1>Main heading</h1>
    </header>

    <section>
      <h2>Sub-heading</h2>
      <p>A paragraph of text. Here is an <em>emphasized</em> word.</p>
    </section>

    <section>
      <h2>Another sub-heading</h2>
      <p>Another paragraph of text. <strong>This is important</strong>.</p>
      <p>Here is a <a href="https://thi.cc/">thicc link</a>.</p>
    </section>

    <footer>
      <strong>Contact details</strong>: don't call me, I'll call you.
    </footer>
  </body>
</html>
```

As you can see the `<link>` tag uses two key attributes:

* `href` is set to point to the file itself
* `rel` is set to `stylesheet` to inform the browser of the type of file being linked

Now the style sheet file is **linked** to our HTML file and any styling information we put in `style.css` will be applied to the contents of `index.html`.

Again, there's no actual styling information in the file, so nothing new is happening yet!

---

## Selectors and properties

In order to use CSS we need to know about **selectors** and **properties**.

**Selectors** are used to target specific parts of our HTML for styling. We can most obviously select **tags**.

**Properties** specify the style we want to apply to the selected HTML.

So if we want to style everything inside the `<body>` tag so that it uses the font Helvetica, we could write the following in `style.css`:

```css
body {
  font-family: Helvetica;
}
```

`body` is the **selector**. It tells the browser that the styling information will be applied to everything inside the `<body>` tag. (Note we don't include the angle brackets when selecting the tag, just the tag name.)

We specify the styling properties inside **curly brackets** after the selector.

The property and its value require the following:

* `font-family` is the **property name**, it tells us the specific kind of styling we want to apply to the `<body>` tag, which is to set its font.
* `:` (a colon) separates the property name from the value
* `Helvetica` is the **value** we want to set the property to, in this case the name of the font to use (no quote marks!),
* `;` (a semi-colon) indicates the property and value are complete.

If we look at the page and we have Helvetica installed on our computer, everything inside the `<body>` tag will be using that font.

### Fallback options

If a user **doesn't** have Helvetica, they'll end up with a default, which is probably some kind of serifed font, which we probably didn't want given Helvetica is a sans-serif font.

If we want to specify fallback options for the `font-family` property, we can list more options separated by commas. It's common to include a generic option like `sans-serif` or `serif` to indicate a very broad preference:

```css
body {
  font-family: Helvetica, sans-serif;
}
```

Now, even if the user doesn't have Helvetica, they'll get a default sans-serif font.

---

## More specific selectors

We targeted the entire `<body>` tag above, but we can target something more specific like the `<h2>` tag if we want to only style our **sub-headings** this way:

```css
h2 {
  font-family: Helvetica, sans-serif;
}
```

Now the `<h2>` tags use Helvetica (or sans-serif)

---

## Multiple properties

For any given selector we can specify **multiple** styling properties. So we could include a `color` property, for example...

```css
h2 {
  font-family: Helvetica, sans-serif;
  color: #ff8888;
}
```

Now the sub-headings are in Helvetica **and** they're pink.

---

## Multiple selectors

We can have as many selectors as we wish in our CSS styling, and this allows us to really specifically target particular parts of our document!

```css
h1 {
  font-size: 3rem;
}

h2 {
  font-family: Helvetica, sans-serif;
  color: #ff8888;
}

p {
  color: #444444;
}
```

Now we've set the font size of the main heading (`<h1>`), the font and color of the sub-heading (`<h2>`), and set the color of text in paragraphs (`<p>`). We could go on like this forever!

---

## Selecting more than thing at once

We can apply specific styling to a set of different targets by listing the selectors in a comma-separated list:

```css
h1 {
  font-size: 3rem;
}

h2 {
  font-family: Helvetica, sans-serif;
  color: #ff8888;
}

p {
  color: #444444;
}

/* Style both strong and em tags */
strong, em {
  color: #4488aa;
}
```

---

## Values and units

We've already seen three different kinds of **values** used in our CSS so far:

* Font sizes specified in the `rem` unit (this is a "root em", where `1rem` is the default for the overall `html` tag and you can change font sizes based on that knowledge, thus `3rem` is three times larger than the default)
* Typefaces specified as text (e.g. `Helvetica` or `sans-serif`)
* Colors specified as hexademicals (e.g. `#4488aa`)

There are many different kinds of values and units available in CSS and we need to make sure we **read the documentation** for any property we're using to check the available possibilities.

Note, for example, how the documentation for the [`color` property](https://developer.mozilla.org/en-US/docs/Web/CSS/color) tells us that we can specify the color in many different ways, not just hexademical.

---

## Documentation

Once again, central to using CSS well is to **read the documentation**. The [Mozilla CSS documentation](https://developer.mozilla.org/en-US/docs/Web/CSS) and especially the [Mozilla CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) are invaluable places to look up all the specifics you might be wondering about, as well as just to browse the sheer variety of possible properties and values.

---

## `id` and `class`

So far we've looked at using selectors that can target specific **tags** on our webpage. This is clearly really useful, but it can make it hard to target more specific elements or sets of elements.

For this reason, we often use the `id` or `class` attributes in our HTML elements to make them easily selectable in CSS.

The `id` attribute is used for a **unique** HTML element that is the only one of its kind that we want to select with CSS.

The `class` attribute is used for a **set** of HTML elements that we want to select with CSS.

### Adding `id` and `class` attributes

So, in our example, we might give an `id` to our first `<section>` tag and a `class` to the `<p>` tags inside our our second section...

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
    <!-- Link to the style sheet file! -->
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <header>
      <h1>Main heading</h1>
    </header>

    <!-- NEW! This section now has an id attribute -->
    <section id="first-section">
      <h2>Sub-heading</h2>
      <p>A paragraph of text.</p>
      <p>A paragraph of text. Here is an <em>emphasized</em> word.</p>
    </section>

    <section>
      <h2>Another sub-heading</h2>
      <!-- NEW! These two paragraphs now have the same class attribute -->
      <p class="second-section-paragraph">
        Another paragraph of text. <strong>This is important</strong>.
      </p>
      <p class="second-section-paragraph">
        Here is a <a href="https://thi.cc/">thicc link</a>.
      </p>
    </section>

    <footer>
      <strong>Contact details</strong>: don't call me, I'll call you.
    </footer>
  </body>
</html>
```

### Selecting an `id`

With this in place we can target the `id` `first-section` in our CSS by adding a selector like this:

```css
#first-section {
  background-color: rgb(200,200,200);
}
```

Note that we select the `id` by writing its **name prefixed with a `#`**.

Now the entire first section has a light grey background!

### Selecting a `class`

We can target the `class` of `second-section-paragraph` in our CSS by adding a selector like this:

```css
.second-section-paragraph {
 background-color: rgb(200,255,255);
}
```

Note that we select the `class` by writing its **name prefixed with a `.`**.

Now the individual paragraphs in the second section have a light cyan background!

---

## Use `id` and `class`

Both `id` and `class` are a **very** powerful way to style your webpage because they allow you to target really specific parts of the document.

Just remember that you use `id` when there's only **one** element that will use a style, and you use `class` when there are multiple elements that will share a style.

---

## `<span>` tags

An HTML element that is specifically useful when used with `CSS` is the `<span>` tag. This enables to us to put specific content inside a tag that we can target with CSS.

Unlike a `<div>` or other sectioning tag, the `<span>` tag is not structural, it will purely select what's inside it, most obviously some text. So, for example...

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
    <!-- Link to the style sheet file! -->
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <p>
      This is the <span class="time">time</span> and this is the record of the <span class="time">time</span>.
    </p>
  </body>
</html>
```

We can now target the text inside those `<span>` tags and style them however we'd like to...

```css
.time {
  font-family: monospace;
}
```

A useful little idea to keep in mind when you want to target really specific parts of your HTML but it's not wrapped in a specific tag already.

---

## Pseudo-classes

A quick word about pseudo-classes, which allow us to add on top of the existing selectors with some specific extra ideas. We add them to **existing** selectors...

* `:hover` selects an element that has the mouse hovering over it
* `:nth-child(2)` selects the elements that are the second child of the specified parent
* `:invalid` selects form elements that are not validated successfully

So if we want our links to change color when the user's mouse is over them, we could add:

```css
a:hover {
  color: yellow; /* Yes, you can just write some color names in English! */
}
```

There are many of these and they're worth reading about! Again, the [Mozilla Pseudo-classes documentation](https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes) is excellent.

---

## There is a lot more to CSS

There are a lot of possibilities within CSS and it can be overwhelming. The most important ideas and approaches are:

* Fundamentally, CSS is about **selecting** elements in the HTML and **styling** them via properties and values
* **Read the documentation** (again, the [Mozilla CSS documentation](https://developer.mozilla.org/en-US/docs/Web/CSS) is great) to understand what's available
* **Layout** is a whole impressive part of CSS that you can investigate. The [Mozilla CSS Layout documentation](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout) is a good place to start on this. CSS grid has become popular.
* **Animation** is a nice feature of contemporary CSS, check out the [Mozilla CSS animation documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) if you're interested.
* **Do tutorials** like the [freeCodeCamp CSS lessons](https://www.freecodecamp.org/learn/responsive-web-design/basic-css/) if you're feeling unsure of yourself.
* **Look at other people's CSS** if you want to get ideas for how to accomplish things (you can use the "Inspector" option in your browser to examine the CSS on a page). Be aware this can get overwhelming quickly.

---

## Too much information?

### CSS in the `<head>` tag

We can include a `<style>` tag inside the `<head>` of an HTML file to specify CSS to be applied to that page. This will **override** CSS specified in any linked style files.

```html
<head>
  <title>The Big Red Page</title>
  <style>
  /* Style paragraphs to be big and red */
  p {
    color: #ff0000;
    font-size: 2rem;
  }
  </style>
</head>
```

---

### CSS in the `style` attribute

We can include a `style` attribute with any HTML element to apply CSS to that element. This will override **all** other styling. For example:

```html
<p style="color: #ff0000; font-size: 2rem;">This is large, red text.</p>
```

# }
