# jQuery UI Effects {

---

## Summary

The jQuery UI effects allow us to create animated transitions of various kinds, including **color**-based animations that were a glaring omission from standard jQuery.

---

## Contents

* Introduction
* Setting up
* Color animation
* Class-based animation
* Shaking and other built-in effects

---

## Introduction

jQuery UI somewhat oddly includes a nice set of animated transition methods as well as the ability to animate **colors**. These let us include a bit of extra flavor in our programs that can make a huge difference in terms of user experience.

---

## Setting up

Let's continue the prisoner idea from our discussion of jQuery UI Interactions! Here's the HTML, CSS, and JavaScript involved if you need it...

`index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>

    <title>The Prisoner</title>

    <!-- CSS stylesheet(s) -->
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />

    <!-- Library script(s) go here -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js" integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=" crossorigin="anonymous"></script>
  </head>

  <body>
    <div id="prison">
      <span id="escape-tunnel">Escape</span>

      <span id="prisoner">The Prisoner</span>
    </div>

    <!-- My script(s) -->
    <script src="js/script.js"></script>
  </body>
</html>
```

`style.css`
```css
#prison {
  width: 30vw;
  height: 30vw;
  border: 5px dashed black;
  display: grid;
  justify-content: center;
  align-content: center;

}

#prisoner {
  font-size: 2rem;
}

#escape-tunnel {
  width: 5vw;
  height: 5vw;
  border: 2px dashed black;
  border-radius: 100%;
  display: grid;
  justify-content: center;
  align-content: center;
}
```

`script.js`
```javascript
// Prisoner is draggable
$(`#prisoner`).draggable({
  // Prisoner cannot be dragged out of the prison
  containment: `#prison`,
  // Prisoner gets an underline when dragging starts
  start: function(event, ui) {
    $(this).css(`text-decoration`, `underline`);
  },
  // Prisoner loses underline when dragging stops
  stop: function(event, ui) {
    $(this).css(`text-decoration`, `none`);
  }
});
```

---

## Color animation

When we include jQuery UI in our project, we gain the ability to animate **colors** with the `.animate()` method that comes with standard jQuery.

If we look at the demo for this, we see from the source code that essentially it's just adding the ability to use color-based CSS properties in `.animate()` in exactly the way we might expect.

So, if we wanted to animate the prisoner's text color while we're dragging them, and animate back to black when we stop we can add `.animate()` calls into the `start` and `stop` event handlers...

```javascript
// Prisoner is draggable
$(`#prisoner`).draggable({
  // Prisoner cannot be dragged out of the prison
  containment: `#prison`,
  // Prisoner gets an underline and turns blue when dragging starts
  start: function(event, ui) {
    $(this).css(`text-decoration`, `underline`);
    // NEW! Color animation!
    $(this).animate({
      "color": `#4444ff`
    }, 1000);
  },
  // Prisoner loses underline and turns black when dragging stops
  stop: function(event, ui) {
    $(this).css(`text-decoration`, `none`);
    // NEW! Color animation!
    $(this).animate({
      "color": `#000000`
    }, 1000);
  }
});
```

A nice little additional effect that emphasizes the dragging action.

---

## Class-based animation

If you're someone who prefers to keep their CSS and visual styling in their `.css` files for modularity purposes (which is very reasonable), it's worth knowing that jQuery UI also enhances the `addClass()`, `removeClass()` and `toggleClass()` methods to be able to **animate** to the new CSS rules when they take effect.

So, you can use `addClass()` to **animate to** the new class being added, for example. Again, the "addClass demo" for this does a pretty reasonable job of showing us how this works. Along with the name of the class to add, we can include the **duration** of animation and a **callback function** to call when the animation is complete, if needed.

So we could do arguably a better job of animating our prisoner's dragging state above if we added a CSS rule to `style.css` that expresses how the prisoner should look when being dragged. Even better, we can include the `underline` property to our CSS to do everything at once.

```css
.prisoner-dragging {
  color: #4444ff;
  text-decoration: underline;
}
```

Then, instead of using `.animate()` in our code we could **add** and **remove** this class with animation to achieve the same effect...

```javascript
// Prisoner is draggable
$(`#prisoner`).draggable({
  // Prisoner cannot be dragged out of the prison
  containment: `#prison`,
  // Prisoner gets an underline and turns blue when dragging starts
  start: function(event, ui) {
    // NEW! Animated class adding
    $(this).addClass(`prisoner-dragging`, 1000);
  },
  // Prisoner loses underline and turns black when dragging stops
  stop: function(event, ui) {
    // NEW! Animated class removal
    $(this).removeClass(`prisoner-dragging`, 1000);
  }
});
```

This is a lot neater to look at and keeps the idea of how things **look** in the domain of CSS and our of our code. Something to aspire to!

---

## Shaking and other built-in effects

The last idea we should touch on when looking at the jQuery UI effects is the actual `.effect()` method! This allows us to apply a number of predefined animations to elements such as shaking, pulsating, exploding, and more! It's pretty fun, and pretty straightforward.

If we go look at the "Effect demo" we get to look at all the different effects available. If we look at the code it's a little confusing because they've implemented an actual interface for testing out effects rather than showing individual examples of them.

The gist, though, is that we can call `.effect()` with just an `options` object, specifying at least the `effect` property, which names the effect. (We can find the names of the available effects, somewhat awkwardly, in the `value` attributes of the `<option>` elements in the example source HTML.)

### `shake`

If we want our prisoner to shake with rage when the page loads, the simplest version would be to add...

```javascript
// Prisoner shakes with rage at the start
$(`#prisoner`).effect({
  effect: `shake`
});
```

### Additional Effect options

If we read the [`.effect()`](https://api.jqueryui.com/effect/) documentation, we find there are numerous other basic properties, such as `duration` and `easing`, as well as the event listener `complete`. So maybe the prisoner should shake for a bit longer? We should add a duration...

```javascript
// Prisoner shakes with rage at the start
$(`#prisoner`).effect({
  effect: `shake`,
  duration: 2000
});
```

Weirdly, the prisoner now shakes kind of slowly, like they're trying to keep up a hula hoop. Why? It's because the shake effect works by shaking the element a specific **number of times** within the duration. We increased the duration, so it shakes more slowly.

### Additional Shake Effect options

That doesn't really match our "shaking with rage" idea, so we need to read more about the [Shake Effect](https://api.jqueryui.com/shake-effect/) specifically in the documentation. Here we find some extra options we can use with the effect to specify the number of **times** to shake, the starting **direction** (here we learn we can shake vertically too), and the **distance** to move when shaking.

Let's get a properly enraged shake going...

```javascript
// Prisoner shakes with rage at the start
$(`#prisoner`).effect({
  effect: `shake`,
  duration: 1000,
  times: 10,
  distance: 5
});
```

"Let me out!!! I was framed!!!" Nice.

### Uh oh! Conflicts...

But wait... now we can't drag the prisoner anymore! What happened? It's seems that the `shake` effect applied to the prisoner alters CSS rules applied to that element that conflict with it being draggable.

To avoid this, we should only make the prisoner draggable **after** the shaking effect finishes. We can do that by adding a `complete` option to the effect, and in the handler we can make the prisoner draggable...

```javascript
// Prisoner shakes with rage at the start
$(`#prisoner`).effect({
  effect: `shake`,
  duration: 1000,
  times: 10,
  distance: 5,
  complete: makePrisonerDraggable
});

/**
Makes the prisoner draggable
*/
function makePrisonerDraggable() {
  // Prisoner is draggable
  $(`#prisoner`).draggable({
    // Prisoner cannot be dragged out of the prison
    containment: `#prison`,
    // Prisoner gets an underline and turns blue when dragging starts
    start: function(event, ui) {
      $(this).addClass(`prisoner-dragging`, 1000);
    },
    // Prisoner loses underline and turns black when dragging stops
    stop: function(event, ui) {
      // NEW! Animated class removal
      $(this).removeClass(`prisoner-dragging`, 1000);
    }
  });
}
```

Much better. This is a useful problem to see, because these kinds of conflicts between the different kinds of CSS and DOM magic jQuery and jQuery UI do is something that comes up and we need to be able to work around them.

### Other effects

As you will have noticed, there are other effects besides `shake`, and they're all worthy of investigation. Want the prisoner to roll up like a `blind` for some reason? You can! Very Houdini!

There are also other effect **methods** besides `.effect()` that are worth a look too. Note that we can `.show()` and `.hide()` elements with an effect, for instance. Could be fun to make the escape tunnel disappear when the prisoner escapes?

```javascript
$(`#escape-tunnel`).droppable({
  // Elements dropped on escape tunnel are removed from the page
  drop: function(event, ui) {
    // Remove the dragged element
    ui.draggable.remove();
    // And let's hide the tunnel too for a sneaky effect!
    $(this).hide({
      effect: `blind`,
      duration: 500
    });
  }
});
```

---

## jQuery UI Effects!

As you can see, there's a **lot** of fun to be had with effects. They give us the ability to apply animation of CSS properties far more easily, let us animate colors, and even give us some kind of whacky default animations that can be quite expressive.

---

# }
