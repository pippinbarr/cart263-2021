# jQuery UI Widgets {

---

## Summary

jQuery UI provides numerous **widgets** that let us create standard user interface elements such as sliders, dialogs, buttons, and more. These widgets are highly style-able via CSS, and very flexible in terms of options.

---

## Contents

* Introduction
* Setting up
* Dialog

---

## Introduction

jQuery UI Widgets are the standard user interface elements that we're accustomed to seeing in applications. Since jQuery UI's initial introduction, HTML5 has become standard and offers a great suite of UI elements natively in HTML, but jQuery UI's tools are still really interesting for their sophistication and ease of use.

There are an impressive array of jQuery UI widgets to choose from, including buttons, sliders, accordion menus, tooltips, and more, but the **Dialog Widget** is perhaps the most detailed and flexible, so let's take a look at it as an example of what's on offer.

---

## Setting up

Let's continue the prisoner example we've been developing. Here's the HTML, CSS, and JavaScript involved if you need it...

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

.prisoner-dragging {
  color: #4444ff;
  text-decoration: underline;
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
// Prisoner shakes with rage at the start
$(`#prisoner`).effect({
  effect: `shake`,
  duration: 1000,
  times: 10,
  distance: 5,
  complete: makePrisonerDraggable
});

// Escape tunnel is droppable
$(`#escape-tunnel`).droppable({
  // Elements dropped on escape tunnel are removed from the page
  drop: function(event, ui) {
    ui.draggable.remove();
    $(this).hide({
      effect: `blind`,
      duration: 500
    });
  }
});

/**
Makes the prisoner draggable
*/
function makePrisonerDraggable() {
  $(`#prisoner`).draggable();
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

---

## Dialog

If we look at the [Demos page for Dialog](https://jqueryui.com/dialog/) we get the overall idea pretty swiftly. It implements that core idea of an independent window that can pop up to offer us information, buttons to click, and perhaps much more.

### The simplest dialog

The most basic example we see is purely informational. If we look at the source code, we see that the dialog contents are created out of a `<div>` with standard HTML in it. Also notable is that jQuery UI uses a `title` attribute in the `<div>` to give a title to the dialog. The dialog itself is created when we call the `.draggable()` method in our script on the selected `<div>`.

So, if we wanted an informational panel at the start of our prison "simulation", we could create a `<div>` on our page in much the same way, and use `.dialog()` on it...

In `index.html` we could add...
```html
<div id="introduction-dialog" title="Welcome to prison!">
  <p>
    Escape using the escape tunnel!
  </p>
</div>
```

And we could turn that into a dialog in `script.js` by selecting the `<div>` and calling the `.dialog()` method...
```javascript
$(`#introduction-dialog`).dialog();
```

Now we have a fancy introduction when our program begins.

### A modal dialog

One thing we might want is to make sure the user closes the information dialog before they actually interact with the prisoner, just for clarity. A dialog that prevents all other interactions with an application or webpage is described as **modal**.

If we look at the "Modal message" example, we see we can add that to our dialog as an **option** in an options object. The property name is `modal` and it can be `true` or `false`. So, if we do want our dialog to be modal...

```javascript
$(`#introduction-dialog`).dialog({
  modal: true
});
```

Now you have to close the dialog before interacting with the page.

### Buttons

One of the most common things we expect in a dialog are some buttons to click! jQuery UI makes this really easy by including the idea of buttons as another **option** when we create a dialog, so we don't have to mess around creating and styling the buttons in HTML.

It we take a look at the "Modal confirmation" example, we see a modal dialog that has two buttons at the bottom the user can click. In the source code, we see there's a `buttons` options which contains an **object** whose **properties** are the button **names** and whose values are the **function** to call when the button is clicked.

Importantly, we can see that in both the example buttons you have to **explicitly** close the dialog using `.dialog("close")` if you're wanting it to disappear. (The "X" button at the top right does that automatically already.) So we could add a couple of buttons to add some character to our simulation.

Let's change the content of the dialog a little bit in `index.html`...
```html
<div id="introduction-dialog" title="Welcome to prison!">
  <p>
    How're you going to escape?
  </p>
</div>
```

And then create relevant button titles that just close the dialog in our `script.js`...
```javascript
$(`#introduction-dialog`).dialog({
  modal: true,
  buttons: {
    "Imagination": function() {
      $(this).dialog(`close`);
    },
    "Escape tunnel": function() {
      $(this).dialog(`close`);
    }
  }
});
```

This is nice, we have a way for the user to inject a little personality into the experience.

However, that "imagination" option isn't looking so good? It's kind of funny that it doesn't work, but let's make it work.

### Buttons that actually do something

It's likely we want our buttons to do more than just close the dialog. They should probably affect something more relevant in our program.

Let's make it so that the escape tunnel is only available if the user clicks the "Escape tunnel" button first, leaving the "Imaginative" user to languish with only their imagination to keep them company.

To do this, we should **hide** the tunnel at the beginning of the program, and then **show** it when the user clicks the appropriate button...

```javascript
// Hide the escape tunnel initially
$(`#escape-tunnel`).hide();

$(`#introduction-dialog`).dialog({
  modal: true,
  buttons: {
    "Imagination": function() {
      $(this).dialog(`close`);
    },
    "Escape tunnel": function() {
      // If they want an escape tunnel, give it to them...
      $(`#escape-tunnel`).show();
      $(this).dialog(`close`);
    }
  }
});
```

Clearly you could do some cute animations etc. with the `.show()` thanks to jQuery UI's effects.

### Imagination

Just for fun, let's give the imaginative user something to do to. Let's **remove** the containment effect on the prisoner for this option so that they can just drag the prisoner our of the prison anyway! We will do this using the `option` method with `.draggable()` to set the `containment` option to `none`...

```javascript
// Hide the escape tunnel initially
$(`#escape-tunnel`).hide();

$(`#introduction-dialog`).dialog({
  modal: true,
  buttons: {
    "Imagination": function() {
      // NEW!
      // Remove the restriction of the prisoner being contained by the prison!
      $(`#prisoner`).draggable(`option`,`containment`,`none`);
      $(this).dialog(`close`);
    },
    "Escape tunnel": function() {
      // If they want an escape tunnel, give it to them...
      $(`#escape-tunnel`).show();
      $(this).dialog(`close`);
    }
  }
});
```

Does the prisoner truly escape when they're still always on the page? **You be the judge!**

---

## jQuery UI Widgets!

So, there's quite a lot of fun to have just with dialog boxes, and remember that there are **many other** widgets available to play around with. Again, the key source of inspiration is probably the demos, but you can always dip into the API documentation if you want to really expand your knowledge or look up something really specific.`

---

# }
