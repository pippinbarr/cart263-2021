# jQuery UI Interactions {

---

## Summary

The jQuery UI interactions allow us to quickly include drag and drop, resizing and other interactions on a webpage. Given these are absolutely fundamental user interface concepts, this gives us access to some really powerful ideas that our users are likely already familiar with. Much fun can be had with this!

---

## Contents

* Introduction
* Setting up
* Draggable
* Droppable

---

## Introduction

Let's look at two of the most immediately interesting interactions: drag and drop. For each, we'll get some of the existing demo ideas working in our own project, and reach into the API documentation as needed for further information.

---

## Setting up

We'll need to start a new web project. Let's start from scratch with the following blank HTML.

### HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>

    <title>jQuery UI</title>

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />

    <!-- Library script(s) go here -->
  </head>

  <body>
    <!-- HTML would go here if needed. -->

    <!-- My script(s) -->
    <script src="js/script.js"></script>
  </body>

</html>
```

### Add a `style.css` file

Since it's already linked in the default HTML above, add a `style.css` file in a `css/` folder in the project so we can add any CSS we might need

### Add a `script.js` file

It's already referenced in the HTML, so let's add our `script.js` file to a `js/` folder so we have somewhere to write code.

### Obtain jQuery

Now let's add jQuery to our project by going to [code.jquery.com](https://code.jquery.com) and getting the CDN link to the latest compressed version. Insert the `<script>` tag in the `<head>` of the HTML in the libraries section.

### Obtain jQuery UI

Let's use the CDN to also add jQuery UI to our project.

Copy the latest minified library `<script>` tag and put that in the libraries section of the `<head>` **after** the jQuery library.

Copy the link to the `base` theme and include it in a `<link>` element in the CSS Stylesheets section of the `<head>`.

### Ready!

Now we're ready to go!

---

## Draggable

Let's begin with the Draggable feature of jQuery UI. As we've already seen, at heart it's a remarkably simple way to allow the user to drag any element on the web page to a new position. It's kind of ridiculous it can be this easy!

### Setting up

If we're going to play with this ourselves, we should add a couple of elements to our project that we can drag around. Let's build up the idea of a prisoner in a prison, because that's very cheerful.

We'll add a `<div>` in the HTML and style it a little bit in the CSS to represent a prison. And we'll add a `<span>` in the prison `<div>` to represent the prisoner...

In `index.html`
```html
<body>
  <div id="prison">
    <span id="prisoner">The Prisoner.</span>
  </div>
</body>
```

Let's style the prison so it looks like a containing square, and use the CSS grid to put the prisoner in the center to start. In `style.css`...

```css
#prison {
  /* Dimensions of the prison */
  width: 30vw;
  height: 30vw;
  /* The prison walls */
  border: 5px dashed black;
  /* CSS grid for alignment of elements in the prison */
  display: grid;
  justify-content: center;
  align-content: center;
}

#prisoner {
  font-size: 2rem;
}
```

We have a prisoner and a prison! But it's not interactive. Let's get dragging...

### Demos

#### Basic dragging

Looking at the main demo and its source, we see the most basic application of the Draggable feature to an element is that we **select** an element and call the `.draggable()` **method** on it. Selection and action, good old jQuery.

So, let's make the prisoner draggable...

```javascript
$(`#prisoner`).draggable();
```

Freedom! The prisoner can now escape the prison. So easy!

We could make the prison draggable too of course...

```javascript
$(`#prisoner`).draggable();
$(`#prison`).draggable();
```

Now we can drag the prison. Notice how the prisoner moves **relative** to the prison when we drag it, because it's still **inside** the prison in terms of the HTML structure. I guess you can never really escape...?

#### Constrain movement: axis

One of the nice parts of the "Constrain Movement" example is constraining the dragging of an element to a specific axis! We do this by providing an **options object** when we call the `.draggable()` method, letting us specify an `axis` option.

If we want our prisoner to only pace backwards and forwards on the horizontal axis, we could constrain them with `axis`...

```javascript
$(`#prisoner`).draggable({
  axis: `x`
});
```

Pacing, pacing. They can pace right out of the prison. Which remains weird, so...

#### Constrain movement: containment

Another nice idea in the "Constrain Movement" example is to limit dragging of an element to some containing element in the HTML hierarchy.

We can use the `containment` option of `.draggable()` to limit dragging of the prisoner to the prison. We make the prisoner `<span>` draggable, but contain it within the prison `<div>`...

```javascript
$(`#prisoner`).draggable({
  containment: `#prison`
});
```

Now it's a proper prison in terms of dragging! The prisoner element cannot be dragged outside the prison element.

#### Events

Finally, it's well worth taking a look at the events demo. The actual demo is terrifyingly dull, but the underlying idea, that we can listen for specific **dragging-related** events and trigger functions is very interesting.

As we can see from the example, we set the listener functions as values for the event properties `start`, `drag`, and `stop`.

So, if we wanted our prisoner to include a little bit of feedback on dragging, we could attach event handlers for `start` and `stop` that take care of that. Maybe we give the prisoner an underline...

```javascript
$(`#prisoner`).draggable({
  containment: `#prison`,
  start: function(event, ui) {
    $(this).css(`text-decoration`, `underline`);
  },
  stop: function(event, ui) {
    $(this).css(`text-decoration`, `none`);
  }
});
```

Note how we can use `$(this)` to refer to the affected element inside these event handlers.

#### And so on!

Clearly, a really fun way to engage with this library is literally to go through the demos and add them to our own project, playing around with the different options available as demonstrated.

### API

At some point, we'll likely need to read the API documentation, so let's quickly review that just to get a sense of how it works. Let's stick with the Draggable documentation right now, but the same ideas apply across jQuery UI.

#### Finding the right documentation

First we'll need to navigate to the documentation, which we can either do from the bottom of the Draggable demos, or by clicking through to the main **API Documentation** page and then through **Interactions** and **Draggable Widget**.

#### First impressions

You'll notice that the documentation page is **long**. Let's not actually read the entire thing, but instead get an overall sense of its structure and how to read it.

#### QuickNav

The navigation section at the top of the documentation is helpful because it lets us know the three major categories of documentation, though it doesn't really tell us much about what they are. Nonetheless, they are:

* **Options**, which are the options we can provide to the `.draggable()` method when we apply it to an element (or can change later on with a method) (e.g. we've already used `axis` and `containment`)
* **Methods**, which are methods we can tell the `.draggable()` method to run (e.g. there's a method to disable dragging temporarily()
* **Events**, which are the possible event listeners we can use to trigger our own functions when things happen with a draggable element (e.g. we've already used `start` and `stop`)

Each of these categories has a list of every possible option available and you can click through to read the specifics. It's potentially overwhelming, but think of it more as a directory for finding stuff you're interested in, rather than an obligation to read and know absolutely everything immediately.

#### Theming

If you want to get very deep into visual styling, there's a note here about the classes that are used with a Draggable element, including classes that are added or removed depending on what's going on. This would allow you to add CSS that would apply when these things are happening.

#### Options

Let's look at our friend `axis` to get a general sense of how the documentation is written. The documentation for all the aspects is pretty terse, but also quite clear. We get

* **Type**: what kind of value do we provide for this option? (A string)
* **Default**: what's the default value? (`false`, i.e. no constraint on any axis)
* **Description**: what does this option do? This includes a description of the available values (`"x"` and `"y"`)
* **Examples**: examples of setting the axis on initializing a Draggable element and also at any later time

So we have roughly the same knowledge gleaned from the demos in this case, but we can now read the **official** version.

#### Methods

The "methods" are specific instructions we can give to a draggable element at any time after creation. For example the `disable` method allows us to tell a draggable element not to be draggable until we reenable it.

We could make our prisoner element stop being draggable after two seconds...

```javascript
// Make the prisoner draggable
$(`#prisoner`).draggable();

// But disable dragging after two seconds
setTimeout(function() {
  $(`#prisoner`).draggable(`disable`);
}, 2000);
```

Think fast!

#### Events

The events are important because they tell us the kinds of events we can **listen** for and run our own functions in response. We've seen this via the demos already, but let's look at `stop`. The description is that it is "Triggered when dragging stops". Makes sense.

It's worth noting that we can also create an event listener in the standard jQuery way by listening for events, with the names provided here, such as `dragstart` and `dragstop`s.

```javascript
// Start our with normally dragging behaviour
$(`#prisoner`).draggable({
  containment: `#prison`
});

$(`#prisoner`).on(`dragstart`, function(event, ui) {
  $(this).css(`text-decoration`, `underline`);
});

$(`#prisoner`).on(`dragstop`, function(event, ui) {
  $(this).css(`text-decoration`, `none`);
});
```

It might be the case you prefer this way of doing things. It's also true that this approach means we can add and remove event listeners for the dragging events whenever we want, not just when we create a draggable element.

#### That API!

So that's the basic nature of the jQuery UI documentation. There are **many** options, methods, and event listeners available with every single Widget provided by the library. Again, the demos often suffice for many projects, but it's important to at least browse the API documentation to get a sense of the full breadth of possibilities.

And now we know how to read it!

---

## Droppable

Let's quickly review another interaction for the sheer fun of it. The Droppable interaction allows us to make the page respond to the action of dragging one element onto another. The most obvious use of this in our lives is when we drag files into folders etc. on our computers, but maybe our prisoner can escape in a more interesting way...

### Setup

Let's add an escape tunnel to our HTML inside the prison `<div>`...

```html
<div id="prison">
  <span id="escape-tunnel">An Escape Tunnel</span>

  <span id="prisoner">The Prisoner</span>
</div>
```

Add some CSS to `style.css` to make the tunnel look "tunnel-y"...

```css
#escape-tunnel {
  /* Tunnel dimensions */
  width: 5vw;
  height: 5vw;
  /* Tunnel outline */
  border: 2px dashed black;
  /* Make it a circle */
  border-radius: 100%;
  /* Use CSS grid to align the label in it */
  display: grid;
  justify-content: center;
  align-content: center;
}
```

Now let's look at the Droppable demos and figure out how to be able to drag our prisoner onto the tunnel and finally set them free...

### Demos

The "Default functionality" demo looks essentially like what we want. We use `.droppable()` to make any element "Droppable" (the potential target of a drag and drop action). We can drag an element (that is Draggable) onto a Droppable element and trigger some kind of reaction via the `drop` event option as in the example.

Let's say that when the prisoner is dragged onto the tunnel they should just disappear from the page, which feels very appropriate and meta! So, we'd want to write a `drop` event handler that removes the prisoner...

So let's add some code to our `script.js`...

```javascript
$(`#escape-tunnel`).droppable({
  drop: function(event, ui) {
    $(`#prisoner`).remove();
  }
});
```

This works! We drag the prisoner onto the escape tunnel and the prisoner vanishes from the webpage, presumably to live a good and honest life wherever removed HTML elements go. Freedom!

#### An issue...

**However**, this solution involves a classic programming no-no, which is that our code **specifically** targets the prisoner no matter what is dragged onto our escape tunnel. This works right now because the prisoner is the only draggable element on the page, but this would be a problem if there were more than one thing to drag into the tunnel...

Really we want to remove "the thing that was dropped". In the past, we've used `$(this)` to target the affected element of an interaction or animation or event, but here we can't do that because `$(this)` will refer to the **Droppable** element (the escape tunnel), since it's the primary element being affected by the drop.

### Read the documentation!

Let's be brave and read the **documentation** for the [`drop` event](https://api.jqueryui.com/droppable/#event-drop) in Droppable. The key thing to look at here is the details of the `ui` parameter of the handler function. In particular, it's telling us that `ui` has a `.draggable` property that contains a "jQuery object representing the draggable element."

And that's what we want! This gives us a reference to the thing **being dropped**. So we should use `ui.draggable`...

```javascript
$(`#escape-tunnel`).droppable({
  drop: function(event, ui) {
    ui.draggable.remove();
  }
});
```

(**Note** how we didn't need to **select** `ui.draggable` with `$()` because, as the documentation says, `ui.draggable` is **already** a jQuery object.)

Now **any** Draggable element we drop on the escape tunnel will disappear, not just the prisoner specifically. This is better programming.

(Even better programming would involve looking into the `accept` option, which lets us control which Draggable elements can and cannot be dropped onto a Droppable element.)

---

## jQuery UI Interactions!

There's a great deal of potential present in the jQuery UI interactions both to implement really standard interactivity that users are familiar with **and** to experiment with the expressive possibilities of those interactions in other ways!

Remember, too, that we didn't even touch on Resizable, Selectable, or Sortable! There's more to learn! Learn it at your leisure!

---

# }
