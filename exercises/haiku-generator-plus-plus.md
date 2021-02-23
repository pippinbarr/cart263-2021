# Exercise 5: Haiku Generator++ {

#### Grade
- 1.25% of final grade (see guidelines at bottom)  

#### Deadlines
- Section A (Tuesdays): 11:59PM, 9 March 2021.
- Section B (Thursdays): 11:59PM, 11 March 2021.

---

## Objectives
* Playing with HTML, CSS, and the DOM!

---

## Setup

1. Start a new project by duplicating your Haiku Generator activity project folder and renaming it `haiku-generator-plus-plus` (or something else).
2. Move this new project folder into your `exercises` folder in your course repository
3. Commit these changes to your repository with an appropriate message like `E5: Starting code`
4. Open the project in Atom and begin!

## Brief

Your objective is to add functionality to the existing *Haiku Generator* to make it more interesting and engaging. Or more strange, or disturbing, or funny, or something else entirely! Implement **at least three** of the following:

* Tidy up the program as per the suggestions in the activity and any other thoughts you have
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

Some of these are straightforward and some are not. Choose wisely such that you get some good programming practice and challenge yourself, but not so that you stress out!

If you have other ideas for additions and changes, go ahead, so long as you add at least three new things and learn something.

## Submission

Submission will take place on **Moodle**. Go to the appropriately named **exercise** on the Moodle and then submit your work there.

Your submission should just be plain text that includes (substituting your GitHub username and any difference in the folder names):

1. A link to your exercise code (e.g. https://github.com/pippinbarr/cart263/tree/master/exercises/haiku-generator-plus-plus/)
2. A link to your project on the web (e.g. https://pippinbarr.github.io/cart263/exercises/haiku-generator-plus-plus/)

## Evaluation

Grading for exercises is pass/fail. Passing requires **all** of the following to be satisfactory:

- **Runs** and **meets the brief**
- Is **well structured**, with new code added in sensible places in sensible orders
- Includes a **starting commit** and then a reasonable number of commits throughout the work that include **descriptive messages** about what was done. Messages should be **prefixed by `E5:`** (e.g. `E5: Added mouseover to all characters in poem that leaves a sparkling trail!`).
- Follows all **style guidelines** (see the [Style Guide](../guides/style-guide.md))

---

# }
