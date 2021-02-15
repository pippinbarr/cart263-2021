# HTML Overview {

---

## Summary

HTML (HyperText Markup Language) is the language we use to express the **structure** and **content** of web pages. It uses **tags** to express structural parts of a webpage such as headings, numbered lists, paragraphs, images, buttons, navigation, and so on. Excellent documentation is available from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML).

---

## Contents

* What is HTML?
* Creating a simple webpage in HTML

---

## What is HTML?

HTML stands for (**H**)yper(**T**)ext (**M**)arkup (**L**)anguage. It's the language we use to express the **structure** and **content** of a webpage. It's fundamentally premised on the idea of a webpage as a **document** and thus privileges the idea of a **linear presentation of formatted text** (and other elements).

HTML is recognizable for its use of specific **tags** like `<html>`, `<p>`, `<img>` to indicate the structure of a document. These tags essentially **are** HTML, they are the **markup**.

HTML generally lives in a text file with extension `.html` (sometimes you'll see `.htm`).

What we're really interested in is building toward doing things with HTML via JavaScript! So, this discussion is not intended to make anyone a master of HTML, but rather to get the basics of its structure and use.

Let's put together a very simple webpage using HTML to illustrate key component parts.

---

## The file

We write HTML inside a plain text file with the extension `.html`. You're probably familiar with the typical file called `index.html` that represents the main page in a specific folder of a website. `index.html` is a special name because it will **automatically** load if you navigate to the folder it's in with a browser.

You can name HTML files other names too, but let's work with `index.html`. So, make a folder and create a single `index.html` file inside it and run a local server to check it out. While the file is empty you will unsurprisingly see nothing!

---

## The `DOCTYPE`

These days, every HTML file must begin with the "document type" declaration:

```html
<!DOCTYPE html>
```

This tells the user's browser what kind of information is in the file (guess what, it's HTML!!!).

---

## The `<html>` tag

We use the `<html>` tag around the entire webpage's contents. Make sense, it tells the browser "here is the HTML to render this page with!"

```html
<!DOCTYPE html>
<html>
  <!-- Webpage contents go in here -->
</html>
```

A very important point to know with the vast majority of HTML tags is that we need to **open** and **close** them explicitly. The same basic pattern is repeated each time:

* We **open** a tag by writing the name of the tag inside angle brackets, e.g. `<html>`.
* We **close** a tag by doing the same thing, but with a forward slash in front of the name, e.g. `</html>`.

### Comments

Note how in the above example we also have a **comment** tag that allows us to write things in our HTML that won't be processed by the browser. As you can see it begins with `<!--` and ends with `-->`. We can use this to make notes in our HTML about what different parts mean.

---

## The `<head>` and `<title>` tags

The `<head>` tag is used to include **information** about the webpage that won't actually be displayed as part of the webpage itself. This perhaps most importantly includes the `<title>` tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
  </head>
</html>
```

Including the `<title>` tag sets the title of the webpage that will appear in the browser, as well as its title when bookmarked etc.

There are **many** other things we can put inside the `<head>` tag. This includes things like links to the **CSS** the page uses, links to **JavaScript** the page uses, various `<meta>` tags, and more (see the [`<head> documentation`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)).

For now, we will just stick with the title.

### Hierarchy

HTML is **hierarchical**. Most good text editors will make this explicit through indentation. You can see that the `<title>` tag is **inside** the `<head>` tag, which is itself **inside** the `<html>` tag.

This idea is what allows us to **structure** our webpage content quite carefully.

---

## The `<body>` tag

The actual content of a webpage goes inside a `<body>` tag after the `<head>` tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
  </head>
  <body>
    <!-- The actual page content goes in here -->
  </body>
</html>
```

If we wanted to, we could start writing plain text inside the `<body>` tag and it would appear on the webpage. It's more likely, though, that we want to **structure** the content of our page more than just plain text.

---

## Paragraphs

We can create a paragraph of text using the `<p>` tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
  </head>
  <body>
    <p>A paragraph of text.</p>
    <p>Another paragraph of text.</p>
  </body>
</html>
```

Note how the two paragraphs are separated nicely from one another. `<p>` tags are the most basic way to include text on our page that connects with the idea of a document.

---

## Headings

We can create headings in our page using the heading tags. These allow us to specify different levels of headings using numbers. The `<h1>` tag is the highest level heading, generally used at the start of a page for its (visible) title. The `<h2>` tag is for sub-headings, the `<h3>` tag is for sub-sub-headings, all the way down to the `<h6>` tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
  </head>
  <body>
    <h1>Main heading</h1>

    <h2>Sub-heading</h2>
    <p>A paragraph of text.</p>

    <h2>Another sub-heading</h2>
    <p>Another paragraph of text.</p>
  </body>
</html>
```

As you can see, we're now building up a nicely structured, if not very interesting, document on our webpage. You could write a book this way! It's all about the content!

---

## Emphasis

There are two tags, `<em>` (for emphasis) and `<strong>` (for importance) that we can use around text we want to particularly stress.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
  </head>
  <body>
    <h1>Main heading</h1>

    <h2>Sub-heading</h2>
    <p>A paragraph of text. Here is an <em>emphasized</em> word.</p>

    <h2>Another sub-heading</h2>
    <p>Another paragraph of text. <strong>This is important</strong>.</p>
  </body>
</html>
```

Note that neither `<em>` nor `<strong>` dictate how their emphasis or strength should be visually represented! HTML isn't about visual aesthetics. That said, they're most often italic and bold respectively.

---

## Links

One of the most important features of HTML is the **hypertext** part. A text becomes a hypertext thanks to its ability to **link** to other texts. So, a webpage is a hypertext when you include links to other webpages. We do this with the `<a>` tag.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
  </head>
  <body>
    <h1>Main heading</h1>

    <h2>Sub-heading</h2>
    <p>A paragraph of text. Here is an <em>emphasized</em> word.</p>

    <h2>Another sub-heading</h2>
    <p>Another paragraph of text. <strong>This is important</strong>.</p>
    <!-- A link! -->
    <p>Here is a <a href="https://thi.cc/">thicc link</a>.</p>
  </body>
</html>
```

Here we see a link to the website [https://thi.cc/](https://thi.cc/). Note that the text that will become the visible link is **inside** the `<a>` tag. Note that the website linked to is specified using the `href` attribute.

### Attributes

Many HTML tags are complex enough that you can't just specify them with the tag and nothing else. The `<a>` tag **requires** that you specify the website to link to, for example. To achieve this, many tags include **attributes** for specifying extra information. It's a lot like the **arguments** we give to a function in programming.

Attributes are written **inside** the angle brackets of the **opening** tag, **after** the tag name itself. Attributes are written by writing

* the attribute name (e.g. `href`),
* an equals sine (`=`),
* the value to set the attribute to inside quote marks (e.g. `"https://thi.cc/"`).

The documentation for a tag will tell you the possible attributes you can use with that tag. See the [`<a>` tag documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a) for an example.

---

## Images

Everyone loves images! We can include images in a webpage in a couple of ways, but most obviously with the `<img>` tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
  </head>
  <body>
    <h1>Main heading</h1>

    <h2>Sub-heading</h2>
    <p>A paragraph of text. Here is an <em>emphasized</em> word.</p>
    <img src="assets/images/clown.png" alt="A clown emoji.">

    <h2>Another sub-heading</h2>
    <p>Another paragraph of text. <strong>This is important</strong>.</p>
    <p>Here is a <a href="https://thi.cc/">thicc link</a>.</p>
    <!-- An image! -->
    <img src="assets/images/clown.png" alt="A clown emoji.">
  </body>
</html>
```

As you can see, the `<img>` tag requires at least two **attributes**:

* The `src` attribute lets us specify the location of the image, which is generally
  * a relative path in our project folder, as above
  * a URL pointing to an image file
* The `alt` attribute lets us specify a description of the image, particularly for accessibility reasons such as someone using a screen-reader

### No closing tag

You may have noticed that the `<img>` tag is one of the (exceptional) HTML tags that doesn't require a closing tag. This is presumably because it wouldn't really make much sense to put something else "inside" an image? Even though that sounds kind of cool?

### Images as links

We can turn an image into a link by putting an `<img>` tag inside an `<a>` tag:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
  </head>
  <body>
    <h1>Main heading</h1>

    <h2>Sub-heading</h2>
    <p>A paragraph of text. Here is an <em>emphasized</em> word.</p>
    <img src="assets/images/clown.png" alt="A clown emoji.">

    <h2>Another sub-heading</h2>
    <p>Another paragraph of text. <strong>This is important</strong>.</p>
    <p>Here is a <a href="https://thi.cc/">thicc link</a>.</p>
    <!-- An image as a link! -->
    <a href="https://thi.cc/">
      <img src="assets/images/clown.png" alt="A clown emoji.">
    </a>
  </body>
</html>
```

Now the second clown image links to [https://thi.cc/](https://thi.cc/).

---

## Structure, not style

When we look at the page we've built up, we don't see something especially gorgeous. We see the absolute default settings that a browser renders HTML with, but it's not nothing. There are paragraph breaks, different font sizes for headings, italics for emphasis, underlined links that highlight when clicked, and so on.

However, it remains the case that HTML is intended to represent the **content** and **structure** of your webpage, and not what it will actually look like in the browser. The browsers naturally have default visual representations for the different tags, but that's up to them, not HTML.

Thus, the vast majority of tags are about structuring your content, as we've seen.

---

## More structure

The `<div>` tag is a generic way of dividing up parts of your webpage into meaningful units. We might do something like the following to create two individual sections of our page, thinking of the `<h2>` tags as denoting sections:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Title of webpage</title>
  </head>
  <body>
    <h1>Main heading</h1>

    <!-- The first div contains the first section -->
    <div>
      <h2>Sub-heading</h2>
      <p>A paragraph of text. Here is an <em>emphasized</em> word.</p>
      <img src="assets/images/clown.png" alt="A clown emoji.">
    </div>

    <!-- The second div contains the second section -->
    <div>
      <h2>Another sub-heading</h2>
      <p>Another paragraph of text. <strong>This is important</strong>.</p>
      <p>Here is a <a href="https://thi.cc/">thicc link</a>.</p>
      <a href="https://thi.cc/">
        <img src="assets/images/clown.png" alt="A clown emoji.">
      </a>
    </div>

  </body>
</html>
```

Adding these `<div>` tags doesn't do anything we can see on the webpage, it's **purely** structural, gathering together parts of the page.

---

## HTML sections and outlines

With HTML5 we have better named structuring tags than the very generic `<div>`! They are:

* `<nav>` for denoting a navigation component of your page (like its menu system)
* `<header>` to denote the header of the page (like the logo and probably the navigation)
* `<section>` for denoting a section of a page
* `<article>` for denoting an article on your page
* `<aside>` for denoting information related to a section/article/part of the page that isn't the main idea
* `<footer>` for denoting the information at the bottom of the page (things like contact details etc.)

So we could use some of these in our page as better human beings:

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
      <img src="assets/images/clown.png" alt="A clown emoji.">
    </section>

    <section>
      <h2>Another sub-heading</h2>
      <p>Another paragraph of text. <strong>This is important</strong>.</p>
      <p>Here is a <a href="https://thi.cc/">thicc link</a>.</p>
      <a href="https://thi.cc/">
        <img src="assets/images/clown.png" alt="A clown emoji.">
      </a>
    </section>

    <footer>
      <strong>Contact details</strong>: don't call me, I'll call you.
    </footer>
  </body>
</html>
```

Again, the page doesn't look any different, but we've structured it better in the HTML so that it's a bit easier to read, and it will be easier to understand and use with CSS later on.

---

## There is a lot more to HTML

We're now in a position to write simple HTML documents! This is the backbone of creating any webpage, so understanding these fundamentals is really important once we start wanting to do **dynamic** things with the HTML via JavaScript.

Again, there are many, many more tags to explore within HTML, we've only scratched the surface. Take a look at the [Mozilla HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) to learn more.

---

# }
