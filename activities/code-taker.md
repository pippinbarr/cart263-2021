# Activity: Code Taker {

## Objectives

* Working with jQuery UI

---

## The idea

The user is the Tom-Hanks-in-the-Da-Vinci-Code of classic poetry, seeing coded messages in poems. The user reads a poem and searches it with their mouse to uncover special letters. If they drag the letters in the correct order into a special solution area, they crack the code! Code taker! Da Vinci!?

---

## Create a new project

1. Start a plain javascript template project in your `activities` folder and name it `code-taker` ([plain-javascript-project.zip](../templates/plain-javascript-project.zip))
2. Open the project folder in Atom to start work
3. Set the title of the project in `index.html` to something appropriate like `Code Taker`
4. Add jQuery to the project by adding the appropriate script tag from a CDN such as [code.jquery.com](https://code.jquery.com) to `index.html`
5. Add jQuery UI sto the project by adding the appropriate script tag and CSS link from a CDN such as [code.jquery.com](https://code.jquery.com) to `index.html`
6. Commit the changes to your repository with a commit message

---

## The plan

We need to have some HTML to represent the poem, the secret letters within it, and an area to drag the letters to create the answer. We will probably want at least some CSS to make this look more interesting that the default. Then we need to be able to find the letter via a mouseover event, and then drag them into the answer area to form the answer. Finally, we need to check if the answer is correct and, if so, display a dialog that congratulates the user.

We can roughly divide this project up into six steps:

1. Create the HTML
2. Create the CSS
3. Findable letters
4. Draggable letters
5. Droppable letters
6. An ending dialog

---

## 1. Create the HTML

In the interest of focusing on the jQuery UI components of this project, here's some HTML for the project's `<body>` defining:

* The poem *This Is Just To Say* by William Carlos Williams
* The secret letters as spans within the poem (spelling out the message "theremin")
* The answer area to drag letters into

```html
<!-- The poem, secret letters are in spans with class "secret" -->
<section id="poem">
  <h2><span class="secret">T</span>his Is Just To Say</h2>
  <p>
    I <span class="secret">h</span>ave eaten<br />
    the plums<br />
    that wer<span class="secret">e</span> in<br />
    the icebox
  </p>
  <p>
    and which<br />
    you we<span class="secret">r</span>e probably<br />
    saving<br />
    for br<span class="secret">e</span>akfast
  </p>
  <p>
    Forgive <span class="secret">m</span>e<br />
    they were del<span class="secret">i</span>cious<br />
    so sweet<br />
    a<span class="secret">n</span>d so cold
  </p>
  <h4>William Carlos Williams</h4>
</section>

<!-- The secret answer area-->
<section id="answer"></section>
```

Now the webpage displays the poem. Good poem, that one.

---

## 2. Create the CSS

Now we'd like to do some general styling of our page so it looks a touch more interesting to the eye. The majority of what we need here is cosmetic, so to a large extent do what you wish, but you should **at least**:

1. Set a `height` for the `#answer` section so that there's a space to drag into
2. Add a `border` for the `#answer` section so the user can see it's there

Now when we look at the page we see the poem and answer area looking more like an interface we could work with.

---

## 3. Findable letters

So, we want the user to be able to spectacularly solve this puzzle by waving their mouse magically over the poem while reading it and finding out there are special hidden letters. A simple way to do this would be to change the color of the letters on mouseover, and a nice way to do that would be to add a CSS class to them.

In our `style.css` let's...

1. Add a class selector called `.found`
2. Set the `color` property to something noticeable like red

In our `script.js` we need to add this class when the user mouses over a secret so...

1. Select all the elements with a class of `secret` and add a `mouseover` event listener, the handler function should:
  * Add the `found` class as an animation (specify an animation duration like `500` say)

All going to plan, when we mouse over the secret letters they should animate to red!

---

## 4. Draggable letters

It's all very well to find the correct letters, but to make this more interesting we want the user to be able to drag the letters individually into the answer area. To do that the first thing is making the actual letters draggable. In the interests of keeping the poem in tact, we'll use a the **clone** feature of the "helper" option for dragging rather than dragging the letter itself...

So, in our `script.js`...

1. Select the secret elements and make them **draggable**
2. Add an option to the `.draggable()` method that creates a clone of the element when dragging (look up the `helper` option in the documentation or the "Visual feedback" demo)

Now you should be able to drag the secret letters around on the page as a clone of the original letter. When you let go, they just disappear for now because we haven't handled dropping them in the right place...

---

## 5. Droppable letters

For this code cracking extravaganza to really work, we need to be able to give the effect of the user dragging the letters into the answer box and having them appear there to construct the secret word! To do this the answer area needs to be "droppable" and needs to react appropriate to a dropped letter by at least adding that letter to the box.

It would also be nice if the letter would then stop being highlighted in the poem and wouldn't be interactive anymore, to emphasize that it's "done".

So, onwards in `script.js`...

1. Make the answer area droppable by selecting it and using the `.droppable()` method
2. Add the `drop` option to the `.droppable()` method and provide a function that:
  * Receives the `event` and `ui` parameters
  * Creates a `character` variable and assigns the text inside the dragged element (remember `ui.draggable`)
  * Adds the character to the answer section (you can use `.append()` here most easily)
  * Stops the dragged element from being draggable (remember the `disable` method for Draggables)
  * Removes the `found` class from the dragged element (animate the removal)
  * Disables the mouseover for the dragged element (remember `.off()`)

Quite a lot of action, but now when you drag one of the letters into the answer area the letter should appear in it and should stop being highlighted and interactive in the poem. Lovely.

---

## 6. An ending dialog

It would be nice if the webpage recognized when the user has cracked the code. To do this we need to be able to **check** if the answer area contains the correct word, and we need to **react** to that. Let's react with a dialog box congratulating the user.

To create a dialog box, let's add some HTML **after** the answer section in `index.html` that will be our dialog box. Remember that we can create a dialog box out of a simple `<div>` with a `title` attribute and containing some text. Let's just use the following:

```html
<div id="solved-dialog" title="Da Vinci?!">
  <p>
    You are soooooo smart!
  </p>
</div>
```

If we look at the page we just see that text sitting there, plain and boring, and the bottom of the page. We want it to be a dialog, so let's make that happen in `script.js`:

1. Select the dialog `<div>` by its id and use the `.dialog()` method to turn it into a dialog

Lovely. Let's add a button that closes the dialog so that the user can feel even smarter...

1. Add a `button` option to the `.dialog()` method that creates a button that says "I know." which closes the dialog when clicked

Now the dialog lets the user be condescending, which is even better. Make sure it closes when you click the button. Still, this dialog shouldn't be visible at the start...

1. Make the dialog hidden when the page loads (look up the `autoOpen` option in the documentation for this)

Great. Now we just want to open the dialog when the user actually gets the secret message correct. To do that we should check whether they've got the answer (**Theremin**) correct each time they add a letter, so...

At the bottom of the function handling the `drop` event for the `.droppable()`...

1. Write an `if` statement that checks whether the text in the answer section matches the secret code `Theremin`
2. If it does, make the dialog appear using the `open` method of the Dialog Widget (read the documentation if you need to)

Now, if you go through and add all the letters in the right order, you should see the dialog box pop up! Sooooo clever! We're done!

---

## 7. Improve the program

As always, there are probably improvements that can be made. Consider

* It might be clearer to change anonymous functions into named functions
* We should store the animation durations for our class changes in a constant
* We should store the secret answer `Theremin` in a constant

---

## The future!

We can imagine all kinds of improvements and changes!

* Rework the HTML and CSS to make this a more engaging presentation of the idea
* Change to a different text and secret message to make it your own
* Add a modal instructions dialog when the page loads that explains to the user what they're meant to be doing
* Change to a different style of secret message (use words? user emojis? have things out of order? have multiple possible messages?)
* Add some more impressive effects to the different actions like finding secret letters, dragging them, dropping them, and getting the secret answer
* Add a sound effect using the [HTMLAudioElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement#basic_usage) that plays when the user solves the puzzle
* Allow the user to remove letters from the answer area in case they mess up
* Add the ability to view the secret letters in situ with a special button or keyboard command that fades out the rest of the poem
* Reverse the idea by having the user drag and drop words **into** a poem (or other text), a bit more like Mad Libs
* Translate the idea to use images instead of text to create a pictogram version of the challenge
* Use a library like [Splitting.js](https://splitting.js.org/guide.html) to make **all** the characters (or words) in the text draggable but give the user hints as to the correct answer they need to build up
* Change to a different style of interaction than dragging and dropping (make the words build up and move with the cursor on selection?)
* ... and many more?

---

# }
