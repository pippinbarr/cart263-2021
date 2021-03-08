# jQuery UI Overview {

---

## Summary

jQuery UI is a JavaScript library that builds on top of jQuery to provide access to a number of common user experience features you may want to include when creating a website. In particular, it includes interactions like drag and drop, widgets like dialog boxes, and adds to jQuery's animations and transitions.

---

## Contents

* What is jQuery UI?
* Getting to Know jQuery UI
* Demos
* API
* Getting jQuery UI
* Themeroller

---

## What is jQuery UI?

jQuery UI is a JavaScript library that builds on top of jQuery to provide access to a number of common user experience features you may want to include when create a website. In particular, it includes interactions like drag and drop, widgets like dialog boxes, and adds to jQuery's animations and transitions.

To a some extent, jQuery UI exists in response to limitations of HTML with respect to user input that have since been improved. Ideas such as drag and drop, for example, are now implemented, and the HTML input elements are quite sophisticated. However, jQuery UI still makes much of this programming both clearer and more immediately malleable. It's a neat library!

---

## Getting to Know jQuery UI

We should naturally start our engagement with this library at the jQuery UI homepage at [https://jqueryui.com/](https://jqueryui.com/). For the purposes of this overview, we'll spend some time on the website gathering information about the library and then experiment with writing code using it in other modules.

When we visit the website, we get less of an immediate idea of what jQuery UI does that with other library homepages. There's no example code on the front page for example. It's well organized, however, and there are a number of key places to look to get comfortable with jQuery UI:

* The **Demos** will show us what's possible with the library, including the code used to create them
* The **API documentation** will give us in-depth information about every feature of the library
* The **Download** page will show us one way to obtain the library for our projects
* The idea of **Themes** will show us how we can style the resulting UI elements

Let's take a look at each element of the website to build up our picture of jQuery UI.

---

## Demos

The jQuery UI demos are probably the best way both to get a sense of what's possible, as well as to get a relatively straightforward presentation of the code required. The demos are broken down into three major categories, **interactions**, **widgets**, and **effects**, but every demo works in much the same way structurally.

Let's look at the **Draggable** interaction as an example.

### Interactive demo

The first thing we probably notice is the interactive version of the demo, which lets us drag an HTML element around! This is pretty neat.

### Description

Each demo has a very short description. These tend to be pretty basic and you'll probably be able to understand just from the demo itself. In this case we get:

> Enable draggable functionality on any DOM element. Move the draggable object by clicking on it with the mouse and dragging it anywhere within the viewport.

### View Source

If we want to know how the demo we're looking at works at the level of the code, we should click on the **surprisingly small** "view source" link. This will bring the source HTML, CSS, and JavaScript into view.

Note that the example code is **all** written to be included in a single HTML file using tags to include CSS and JavaScript, rather than being split into individual files. They do this so you can see everything at once, but it means it's important to be able to pick out the different parts. Notably:

* The relevant CSS styling is inside a `<style>` element in the `<head>`
* The JavaScript is inside a `<script>` element in the `<head>`
* The key HTML being manipulated is in the `<body>` element

We can also see in the example code that they're including

* CSS for jQuery UI specifically as well as CSS for the demo
* Both the jQuery library and the jQuery UI library

Finally, the way the example is written, they use a slightly alarming style of jQuery code in order to actually run the demo in the `<script>` element:

```javascript
$( function() {
  $( "#draggable" ).draggable();
} );
```

It's not worth getting too preoccupied with the "wrapping" of an anonymous function here. Instead, let's just focus on the code **inside** which is the jQuery UI code actually being used to make this demo work!

```javascript
$( "#draggable" ).draggable();
```

One line of code to make an element draggable! We select the element using standard jQuery selection (it's a `<div>` with an `id` of `draggable` in the HTML), then we use the `.draggable()` method provided by jQuery UI to make it draggable and that's it. Wowsers.

As noted at the bottom of the demo, we can learn more about this specific method by looking at the **API documentation** and it provides a link to the specific feature. We'll get to that.

### Examples

In a menu on the right of the demo we have **more** examples of the Draggable feature of jQuery UI that introduce more sophisticated uses than simply calling the `.draggable()` method on a selected element. These mostly involve extra options you can set when using `.draggable()`.

All these features are documented in the API too, of course, but it's nice to browse through the examples, looking at the source code, to get a practical sense of what's possible and available.

### All the other demos!

And of course there are demos for every feature. Take some time to explore them and get a larger sense of what jQuery UI is making possible. It's quite nice!

---

## API

Although the demos and their source code are a great resource, at some point we'll probably want to know a really specific detail that they don't cover. Then we'll need to read the API documentation.

For now, let's just remember it's there when we need it. It contains significantly more information than the demos, including options and other ideas they don't cover.

---

## Getting jQuery UI

Well, we know what jQuery UI is and how writing jQuery UI code seems to work. Now we probably want to obtain the library itself so we can use it!

The first thing that's worth knowing is that jQuery UI requires **three** elements to work in your project:

* The **jQuery** library (ideally the latest version)
* A jQuery UI **CSS file** (this connects to the idea of themes)
* The **jQuery UI** library

### Get jQuery

So, we'd need to get hold of jQuery in the usual way (either downloading it from [https://jquery.com](https://jquery.com) or using a CDN).

### Get jQuery UI

Then we can get jQuery UI's basic CSS and library files either by:

* Clicking on the "Quick Download" button on the homepage, or
* Going to [code.jquery.com](https://code.jquery.com) and obtaining both the CSS and library via their CDN

In the interests of simplicity, using the CDN is probably going to be the more straightforward choice in most situations. Note that when you do this

* The CSS required is described as a "theme" and you can chose among many. `base` is the default. The link will take you to the `.css` file itself, so you'll need to include it using a `<link>` tag with the URL for the file in your `index.html`.
* The library link will give you a `<script>` tag to include in your `index.html`

So in summary, the easiest way to go is:

1. Include jQuery via the CDN `<script>` tag
2. Include the `base` jQuery UI theme link from the CDN in a `<link>` tag
3. Include the jQuery UI library using the CDN `<script>` tag

---

## Themeroller

If you're interested in styling the appearance of the UI elements available via jQuery UI (e.g. buttons, dialog boxes, etc.), you can either use one of their provided themes as above, or you can create your own with their **themeroller**.

You can access this using the **Themes** link on the homepage. The interface is relatively self-explanatory in terms of changing various colors and fonts.

When you're finished you click "Download Theme". You'll be asked to choose a version of jQuery UI and, if you want, select very specific parts of the jQuery UI library to actually include (it's usually easiest to include them all unless you're very worried about size).

Finally, you can Download the resulting theme as a `.zip` file that will contain the key parts of the library to include:

* The library itself, e.g. `jquery-ui.min.js` (put this in `js/libraries`)
* The required CSS, e.g. `jquery-ui.min.css` (put this in `css/`)
* An `images` folder (put this in `css/` as it goes with the CSS file)

Good luck!

---

## jQuery UI!

So! That's an overview of what jQuery UI is and what it can do. It's a really neat collection of sophisticated interactions and widgets you can use to make interactive websites. It leans a bit toward the corporate, just like jQuery, but it is a great opportunity for subversion and other approaches!

---

# }
