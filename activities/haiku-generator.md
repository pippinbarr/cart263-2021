# Activity: Haiku Generator {

## Objectives

* Working with HTML, CSS, and the DOM

---

## The idea

We will create a webpage that displays a haiku where each line is chosen at random from a set of possibilities. If the user clicks on a line it will fade out and fade back in as a new randomly selected line.

---

## Create a new project

1. Start a plain javascript template project in your `activities` folder and name it `haiku-generator` ([plain-javascript-project.zip](../templates/plain-javascript-project.zip))
2. Open the project folder in Atom to start work
3. Set the title of the project in `index.html` to something appropriate like `Haiku Generator`
4. Commit the changes to your repository with a commit message

---

## The plan

We can roughly divide this project up into four steps:

1. Generate a random haiku in JavaScript
2. Display the poem on the webpage
3. Make individual lines change on click
4. Add a fade in and out transition effect

---

## 1. Generate a random haiku in JavaScript

Our first task is to actually create a haiku. If you're being pedantic, a haiku is a poem with three lines where the first and third lines have five syllables and the second line has seven syllables. An example from Matsuo Basho (he wrote it in Japanese, though):

> In the twilight rain  
> these brilliant-hued hibiscus -  
> A lovely sunset.  

To randomly generate one of these, we'll need to have a set of five and seven syllable lines to choose from randomly.

### Create haiku data

First let's create the set of lines to choose from.

1. Declare a variable called `fiveSyllableLines` and assign an array with at least five five-syllable strings in it.
2. Declare a variable called `sevenSyllableLines` and assign an array with at least five seven-syllable strings in it.

If you can't think of anything, you can use these hot, hot strings:

Five syllables:
`O, to be a tree`,
`The cat does not know`,
`We are all forests`,
`You have done your best`,
`They are all gone now`

Seven syllables:
`Say the things left unsaid`,
`Never believe the wind's lies`,
`The autumn stretches its legs`,
`Nothing can satisfy you`,
`They will not come back again`

### Generate the poem

Now we're ready to create the haiku, we should have each line in its own variable and randomly choose lines from our arrays. To help with this, let's first write a `random()` function that can return a random element from any array passed as an argument. Then we can use the function to choose and assign random lines to our haiku, then print it out in the console.

#### Write a `random()` function

1. Define a function at the bottom of your script called `random()` that takes one parameter called `array` (the array to choose a random element from), in it
  * Declare a variable `index` and assign a random index into the array provided (the formula for this is `Math.floor(Math.random() * array.length)`)
  * Return the element at position `index` in the `array`

#### Choose random lines

Back at the top of the program, after the arrays...

1. Declare a variable `line1` and assign a random element from the `fiveSyllableLines` array
2. Do the same for `line2` and `sevenSyllableLines`
3. Do the same for `line3` and `fiveSyllableLines`

#### Print the poem

We can now print out our random haiku in the console! After declaring our line variables...

1. Use `console.log()` to print the three variables containing the lines

Now when we run the program we should see a random haiku show up in the JavaScript Console! Job done! But only if we have a user who loves looking at webpages through the JavaScript Console... which is almost nobody!

---

## 2. Display the poem on the webpage

We want to display our haiku on the actual webpage rather than in the JavaScript console so we'll need to add some HTML structure to insert our lines into and then use JavaScript to insert the lines of the poem onto the page.

### Add HTML

First let's create a basic structure in the HTML to insert our haiku into

1. Add a `<section>` tag to contain the overall haiku, give it an `id` like `haiku`
2. In the section, add three `<p>` tags, with `id`s of `line-1`, `line-2`, and `line-3` to store the three lines of our haiku

### Insert lines in JavaScript

Back in our script, let's replace the `console.log()` of the haiku with code to actually insert the lines onto the page itself

1. Remove the `console.log()` statements
2. Use `document.getElementById()` to store the three `<p>` tags in three variables (called something like `line1P`, `line2P`, `line3P` or similar) according to their `id`s
3. Use the `.innerText` property of the elements to set each one with its appropriate line of the haiku

Now when the program runs you should see the haiku show up on the webpage itself, but it will look very... default.

### Add CSS

It doesn't look super inspiring, so this is an opportunity to add some CSS for our `haiku` section that will make things look a little nicer. So in the `style.css`...

1. Add a selector for the section using its `id` and add some styling. Consider at least `font-family` and `font-size`
1. Add a selector for the body using its tag name and add some styling. Consider at least a `background-color`, maybe add a `width`, some `margin`s etc. as you please

Now hopefully the page looks a little more alluring to the eye! No big deal!

---

## 3. Make individual lines change on click

We want to channel [Raymond Queneau](https://en.wikipedia.org/wiki/Raymond_Queneau) and be able to change individual lines of the haiku. We'll do that by letting the user click on a line and have it swap the line for another randomly chosen line from the appropriate array.

### Define a function for randomizing a line

1. Define a function called `setNewLine()` that takes an `element` as a parameter (the line to change)
2. Write an `if` statement that checks if the `element` matches the variable containing the element for line 1, 2, or 3
3. Depending on which one it matches it should set the element's `.innerText` to a random line from the appropriate array (line 1 and 3 get five syllable lines, line 2 gets a seven syllable line)

### Define a function for handling a click on a line

1. Define a function called `lineClicked()` at the bottom of your program, it should:
  * Receive a parameter called `event` (like any callback for `addEventListener()`)
  * Call `setNewLine()` and pass through the `event.target` element (the element that was clicked)

### Using the function in an event listener

1. Add a `click` event listener to the variable containing the first line element (e.g. `line1P`)
2. Use `lineClicked` as the event handler function you provide to the listener
3. Add similar event listeners for the other two lines

Now when you look at the page you should be able to click on individual lines and see them instantly change to a new random line each time. Have fun composing amazing new haiku!

---

## 4. Add a fade in and out transition effect

In order to be cool it would be nice if a clicked line would fade out, change while invisible, and then fade back in. That's just cool, right? To do so, we'll need animate the `opacity` of the line in JavaScript.

### Fade out

We want to edit `lineClicked()` (the event handler for a click on a line) to fade out the line over time. We'll use `requestAnimationFrame()` to do this with the browser's framerate.

Define a function `fadeOut()` that accepts two parameters
* One called `element` (which will receive the element to fade out)
* One called `opacity` (which will receive the current opacity of that element)

It should:
1. Reduce the `opacity` number by a small amount (perhaps `0.01`)
2. Set the `opacity` style property of `element` to the new `opacity` value so that it actually changes
3. Use an `if` statement to check if `opacity` is greater than `0`
  * If it is, include another call to `requestAnimationFrame()` with an anonymous function as an argument which calls `fadeOut()` with `element` and `opacity` as arguments, to keep fading
    * Note the use of an anonymous function here is key because it lets us pass **arguments** to the `fadeIn()` function!
  * If it isn't, do nothing for now, just write an empty `else` statement

In `lineClicked()`:
1. Replace the call to `setNewLine()` with a call to `fadeOut`, providing the `event.target` and `1` as arguments

If we run this version of the program we should see each line fade out when we click on it. And then they're just gone. The amazing disappearing haiku! Poignant! Sand mandala! Sad mandala!

### Switch the line and fade in

When the a line has faded out we want to switch the text of the line, and then fade it back in. This is a pretty similar process to the above...

Define a function `fadeIn()` (yes, a lot of this will be the same as `fadeOut()`) that accepts two parameters:
* One called `element` (which will receive the element to fade out)
* One called `opacity` (which will receive the current opacity of that element)

It should:
1. Increase the `opacity` by a small amount (perhaps `0.01`)
2. Set the `opacity` style property of `element` to the new `opacity` value
3. Use an `if` statement to check if `opacity` is less than `1`
  * If is, call to `requestAnimationFrame()` with an anonymous function as an argument which calls `fadeIn()` with `element` and `opacity` as arguments (to keep the fade going)
    * Note the use of an anonymous function here is again key because it lets us pass **arguments** to the `fadeIn()` function!
  * If it isn't, do nothing!

In `fadeOut()`:
1. In the part of the `if` statement that runs if the `opacity` has reached `0` add:
  * Call `setNewLine()` with the `element` as an argument to switch the line (the same line we deleted earlier)
  * Call `fadeIn()`, providing `element` and `0` as arguments (same idea as above, except fading in from `0`)

Now if we run the program, lines should fade out when clicked, then fade back in with a new line! It's alive!

---

## 5. Improve the program

As always, there are probably improvements that can be made. Consider

* The creation of our lines of poetry and their event listeners at the top is extremely repetitive - write a function to do this!
* We could consider avoiding separate variables for the lines of the haiku and instead just working directly with the `.innerText` of the elements

---

## The future!

We can imagine all kinds of improvements and changes!

* Tidy up the program as per the suggestions above and any other thoughts you have
* Significantly improve the HTML and CSS presentation of the haiku
* Add a randomly generated title for the poem (will need an element on the page and code to create the random title and inject it into the element)
* Add another DOM event into the user interaction that changes the poem somehow (maybe key presses or mouseovers change the color of the text?)
* Make the program work at the level of replacing words randomly instead of lines (could be like a Mad Libs haiku, you'd need `<span>` tags around the words you can change, could be fun with a rhyme scheme)
* Use CSS animations to spice things up (replace the current fading code with a CSS animation that does it instead? Make the background cycle through different colors?)
* Turn the program into a sonnet generator (or some other poetic form)
* Listen to `mouseenter` and `mouseleave` events on the lines and trigger visual (or other) changes for those events too
* Make individual characters react to mouseover by changing their color or size or something else (you'll need to break each line into characters each time you generate it and wrap each character in a `<span>` to do this)
* Make a synthesized voice read out the poem each time it changes or on a separate user interaction
* Make the user read the poem out correctly and then generate a new poem? An infinite poetry recital?
* Change or add to the basic transition of a fade in and out (could you make new lines appear with a typewriter effect?)
* Use JSON to generate the poem lines by adding random words to the poems from the [corpora repository](https://github.com/dariusk/corpora/tree/master/data) (watch out for syllable counts if your poem form cares about that though, maybe blank verse is better)
* Use the Sentiment feature of ml5.js to change the color of the page background or something similar based on a sentiment analysis of the poem
* Use the CharRNN feature of ml5.js to generate lines of poetry instead of the current technique of picking them from arrays
* Use a text-oriented library like [Tracery](https://tracery.io/) or [RiTa](https://rednoise.org/rita) to generate the poem or parts of it
* Add a print button that lets the user print out their poem (or save it as a PDF)
* ... and many more?

---

# }
