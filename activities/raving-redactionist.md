# Activity: Raving Redactionist {

## Objectives

* Working with jQuery

---

## The idea

We will create a webpage of text with some passages "redacted" (covered in black bars). Over time the redactions will disappear, revealing the shocking secret text beneath them. The user is in charge of keeping the information secret, so they click the secret text to restore the redaction

---

## Create a new project

1. Start a plain javascript template project in your `activities` folder and name it `raving-redactionist` ([plain-javascript-project.zip](../templates/plain-javascript-project.zip))
2. Open the project folder in Atom to start work
3. Set the title of the project in `index.html` to something appropriate like `Haiku Generator`
4. Add jQuery to the project by adding the appropriate script tag from a CDN such as [code.jquery.com](https://code.jquery.com) `index.html`
5. Commit the changes to your repository with a commit message

---

## The plan

We can roughly divide this project up into four steps:

1. Create the HTML
2. Create the CSS
3. Make redactions disappear
4. Add user redaction

---

## 1. Create the HTML

The first thing we need is some HTML content to represent the top secret document the user is going to be working with. We'll use "lorem ipsum" text for the moment, though of course you could create this text in other ways. Importantly we'll need some structure in the document for our code to interact with, notably `<span>` elements containing the specific passages of text that should be redacted.

1. Add a `<section>` to your page to contain the redacted document, give it an `id` of `secret-document` or similar
2. Add an `<h2>` element to the new section with an impressive heading like "Top Secret"
3. Add a series of three paragraphs (`<p>`) containing "lorem ipsum" text ([here is a generator](https://www.lipsum.com/), or you can use another text as desired)
4. Add `<span>` tags to the lorem ipsum text around single or multiple words that will be your redacted information, give them a `class` of `redacted`

With this in place we should be able to see a very standard-issue webpage with "lorem ipsum" text in paragraphs on it. The "redacted" areas won't actually be redacted because we don't have any CSS to style them yet!

---

## 2. Create the CSS

Now we'd like to do some general styling of our webpage as well the very specific styling of our redacted passages so that they can't be seen by the user!

1. Add a selector for the `secret-document` section and use it to style the overall look of your document. Consider things like `font-family`, `font-size`, margins, etc.
2. Add a selector for the `redacted` class and use it to style the redacted secrets, you should at least:
  * Give it a background color of black (`background-color`)
  * Make it impossible for the user to select (`user-select`)
3. Add another selector for a `revealed` class we can use when our program reveals the secret text! It should stand out! It should:
  * Have a transparent background
  * Allow the user to select the text
  * Have colored text (red?)
  * Have an underline (`text-decoration`)

Now when we look at the page our redacted texts are hidden behind black bars censoring them! Perfect. You might want to style one or more of them with the `revealed` class just to see what it looks like, but remember to revert to `redacted` before moving on.

---

## 3. Make redactions disappear

The central idea of the program is that over time the redacted elements of the text become visible to the user (and potential spies!). To achieve that we need to swap the elements from the `redacted` class to the `revealed` class. We want to do that randomly every now and then, so we need some way to repeatedly randomly reveal some of the elements. We will do this in our `script.js` of course.

1. At the start of the program, use `setInterval()` to call a function called `revelation()` every 500 milliseconds or so.
2. Define the `revelation()` function, in it
  * Select all the currently **redacted** spans and for each one call a function called `attemptReveal()` (use `.each()`)
3. Define the `attemptReveal()` function, in it
  * Generate a random number between `0` and `1` (use `Math.random()`)
  * Check if the random number is less than `0.1` (so there is a 10% chance of this)
  * If it is:
    1. remove the `redacted` class from the current element (use `$(this)`)
    2. add the `revealed` class to the current element

If we run the program now, over time we should see the various secret passages become revealed! Terrible! We are losing our nation's most valuable Latin secrets!

---

## 4. Add user redaction

The final element we want to add is to allow the user to **re**redact the revealed parts of the text. We'll do this by having the user click on the elements to redact them.

To do this it will be nice if all our secret spans share another class called `top-secret`, so in the HTML:

1. Add a `top-secret` class to all the secret spans (note that to add multiple classes to an element in HTML you list the classes in the `class` attribute with spaces between them)

We'll only use this class to help in jQuery, so we don't need any CSS).

Back at the top of the program, before the `setInterval()`:

1. Add a `click` event listener to all the `.top-secret` elements on the page which calls a function called `redact()`
2. Define the `redact()` function, in it:
  * Remove the `revealed` class from the current element
  * Add the `redacted` class to the current element

Now when a secret is revealed, the user can click on the revealed text and it will be hidden again. The nation is safe! But then it might be revealed again randomly! We are at war! But then you can hide it again, so it's okay. But then...!

---

## 5. Improve the program

As always, there are probably improvements that can be made. Consider

* Storing the probability of a secret being revealed in a **constant** at the top of the program
* Storing the frequency of the revelation interval in a **constant** at the top of the program
* Anything else that might tidy things up (though it's a pretty simple program all things considered)

---

## The future!

We can imagine all kinds of improvements and changes!

* Improve the visual presentation by working with the CSS and HTML
* Find a different text to be redacted
* Add a counter to the page that tells the user how many currently revealed secrets there are (all jQuery selections have a `.length` property that tells you how many elements the selection found)
* Use a fading effect to fade the redaction effect in and out (this will likely require `.animate()`)
* Add a second task in which the user can mouse over specific words or even letters to reveal a hidden message in the text, each element should highlight when the user finds them
* Add audio to the experience (background music? the sound of a boring office? a pen squealing sound when you redact something? a gasp when something is revealed?)
* Allow the user to redact by clicking and dragging the mouse cursor over a reveal passage rather than clicking
* Allow the user to redact using their voice
* Add an ending of some kind to the experience if the user allows all the secrets to be revealed ("YOU LOST THE COLD WAR!!")
* Have a computer voice read out revealed secrets and have the user "lose" if the computer finishes reading before they've redacted it
* Make the secrets float off the "page" instead of just being revealed, and if they make it off the edge they're gone forever - clicking them makes them go back to where they started
* Generate a text for redaction in code instead of having it already in the HTML (you'll have to generate the redaction spans as well)
* Use ml5.js's text features of a library like RiTa to generate the text being redacted
* Reposition the user as someone trying to get the secrets with an interesting revelation mechanics (maybe if they successfully print the document they win???)
* ... and many more?

---

# }
