# Activity: Slamina {

## Objectives
* Using ResponsiveVoice!
* Using annyang!!

---

## The idea
The program will speak the name of a common animal backwards and the user will have to say (with their voice) what they think it is in the form "I think it is **x**." If they get it right, their guess will be displayed in green, if they get it wrong, their guess will be displayed in red.

---

## Create a new project
1. Download [template-p5-project.zip](../templates/template-p5-project.zip) and unzip it
2. Rename the folder to `slamina`
3. Move the folder into the `activities` folder in your repository folder (create it if necessary)
4. Commit the changes to your repository with a commit message
5. Open the project folder in Atom to start work

---

## The plan

The idea here is really simple, but it has a few moving parts. We'll need to obtain a list of animal names in a useful format to make the user guess. We'll need to figure out how to make ResponsiveVoice say an animal's name backwards. And we'll need to have annyang listen to a user command representing a guess. Finally, we'll need to display whether they got it right somehow.

Here's a plan:

1. Obtain a list of animal names
2. Choose an animal and say it backwards
3. Setup annyang to listen to guesses
4. Display whether a guess is right or wrong

---

## 1. Animal names!

When we work on a project like this, one thing we need is nicely formatted data (the animal names) that we can easily use in our program. Fortunately for us, Darius Kazemi (a wonderful creative programmer worth looking up) has a [corpora](https://github.com/dariusk/corpora) project that contains all kinds of lists in easily accessible form. We'll use an [animal list](https://github.com/dariusk/corpora/blob/master/data/animals/common.json) he provides.

1. Go to [https://github.com/dariusk/corpora/blob/master/data/animals/common.json](https://github.com/dariusk/corpora/blob/master/data/animals/common.json)
2. Copy the **array** containing the list of animal names (including the square brackets at the start and end)
3. Declare a **constant** `animals` in your script and assign the array (paste it in)

Now we have a nice long list of animal names we can use for our guessing game.

---

## 2. Choose an animal and say it backwards

At the heart of this experience is having the computer say an animal's name backwards. The novelty being that it can be quite hard to work out what animal it is in this case. So we need to start the game by choosing an animal's name from the array, and then say it with ResponsiveVoice, but backwards! Given that it's best to trigger audio from a user event, we'll do this when the user clicks.

Because it's a little more complicated that is easy to just work out, we'll have the string reversing part provided.

First we need to have a way to track the current guess...

1. Declare a **variable** called `currentAnimal` and set it to an empty string. This is where we'll store the animal the user is guessing.

Now we need to be able to reverse a string of text.

1. Add the following function for reversing a string to your program:

```javascript
/**
Reverses the provided string
*/
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}
```

Finally, we need to trigger ResponsiveVoice to say the reversed animal name...

1. Include the ResponsiveVoice library in your project
  * Place the script tag for the library along with your API key in `index.html` (if you can't remember it, go to [responsivevoice.org](http://responsivevoice.org/) and sign into your App Dashboard to find it)
2. Define a `mousePressed()` function and in it
  * Assign a random animal name from the `animals` array to `currentAnimal` (remember you can use p5's `random()` function for this)
  * Declare a variable `reverseAnimal` and assign the reverse of `currentAnimal` to it by using `reverseString(currentAnimal)`
  * Use ResponsiveVoice to speak `reverseAnimal`

Now when the program starts, if the user clicks, they will hear the name of a random animal backwards.

---

## 3. Set up annyang! to listen to guesses

We want annyang! to listen to the user and hear when they make a guess. To do this we need to be able to listen to a guessing command like "I think it is..." and then capture what the actual guess is. We'll use annyang!'s "splat" feature for this. In order to give some feedback, we'll display the guess in the console.

First we want to set up annyang...

In `index.html`
1. Include the annyang! library in your project
  * Place the script tag for the library along in `index.html` (if you can't remember it go to [https://www.talater.com/annyang/](https://www.talater.com/annyang/) and find either download the file or use the hosted version of the library)

In `setup()`:
1. Write an `if` statement that checks if annyang is available and inside it:
  * Declare a `commands` variable and include a command `'I think is it *animal'` that calls a function called `guessAnimal` (we will write that function soon!)
  * Add the commands to annyang using its `addCommands()` method
  * Start annyang using its `start()` method
2. Set up some default text styling (perhaps a large text size, bold, and centering)

Now we need to handle guessing...

At the top of the program:
1. We need somewhere to store the user's guess, so declare a variable called `currentAnswer` containing an empty string (they haven't guessed yet!)

Below the `mousePressed()` function:
1. Define a function called `guessAnimal()` that has a single parameter `animal` (this will be called by annyang when it gears a guess). In it:
  * Assign the guess in `animal` to the `currentAnswer` variable (use `.toLowerCase()` on `animal` to convert it to a lowercase version when assigning it so that it matches the style of the `animals` list)
  * Use `console.log()` to print out `currentAnswer` so you can see what it is

Now if the user starts the program and clicks, they should be able to say "I think it is dog" (for example) and you should see "dog" in the console

---

## 4. Display whether a guess is right or wrong

Finally, we want to display the user's guess to the user themselves so they can understand whether they were right or wrong!

In `draw()`:
1. Set a background color
2. Write an `if` statement that checks if the current answer is correct (does it equal the current animal?)
  * If it does, set the fill (for the text) to green
  * It it doesn't, set the fill (for the text) to red
3. Display the `currentAnswer` variable as text on the canvas

Now if the user starts the program and clicks, they should be able to say "I think it is dog" (for example) and see the word "dog" appear on the canvas in green (if it's right) or green (if it's wrong). Hey presto! Our guessing game is complete!

---

## 5. Improve the program

Currently our program works, but there are some places where we could make it nicer. Consider breaking the code down into smaller functions like `sayAnimalBackwards(animal)`, `displayAnswer)`, and `nextQuestion()` to ask a new question.

---

## Done!

As with any simple program, we can imagine all kinds of improvements and changes?

* Add start and end screens
* Add more visual flair when you get an answer right or wrong
* Add sound effects when you get an answer right and wrong (could be criticism/praise via ResponsiveVoice?)
* Add a counter for how many correct guesses the user achieves
* Use a different set of answers from the corpora site to have the user guess something else
* Transform the answers in a different way than reversing them (anagrams? say them in a really hard to understand voice using ResponsiveVoice parameters?)
* Add a time limit for the user to name their guess in
* Completely change the dynamic away from a guess game to something else, what if the annyang! command was "I feel like a(n)..." or "I look like a(n)..."?
* Turn it into an attempt to guess as many real animals from the array as possible?
* Add multiple voice inputs for the user (maybe they can choose between two animals? Which is cuter?)
* ... and many more?!

---

# }
