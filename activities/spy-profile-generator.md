# Activity: Spy Profile Generator {

## Objectives

* Using JSON data for fun!
* Using the Web Storage API for... profit? Not really! Just fun again!

---

## The idea

When the user first loads our program it will ask for their name in a text prompt. Once provided, the program will generate and save the user's super secret spy profile using random JSON data to determine an **alias**, **secret weapon**, and **password**. When the user comes back later, they will need to enter their generated password to view their profile again.

---

## Create a new project

1. Start a p5 template project in your `activities` folder and name it `spy-profile-generator` ([template-p5-project.zip](../templates/template-p5-project.zip))
2. Open the project folder in Atom to start work
3. Set the title of the project in `index.html` to something appropriate like `** TOP SECRET **`
4. Commit the changes to your repository with a commit message

---

## The plan

There are a couple of major tasks our program has to carry out that we can work through step by step. In particular there's the initial **name entry** and profile display, there's the random **profile generation** parts, there's **saving** and **loading** that information with the Web Storage API, and there's the **password check**.

Here's a plan:

1. Get the user's name and display a default profile
2. Generate a profile instead using JSON data
3. Save and load the generated profile
4. Add a password check

---

## 1. Get the user's name and display a default profile

Our first task is to ask for the user's name and then once they provide it to display a default profiles. Let's start with our default profile data, which will just be an JavaScript object:

1. Declare a global variable `spyProfile` at the top of the script containing properties for `name`, `alias`, `secretWeapon` and `password`. Set them all to default values of "**REDACTED**"

Now let's ask the user for their name, we should do this in `setup()` so it happens at the start of our program:

1. Create a canvas of your preferred dimensions (the window width and height is reasonable)
2. Assign the return value of a `prompt()` function that asks the user's name to the `name` property of `spyProfile`
  * `prompt()` requires at least one argument, which is the prompt text as a string
  * You can add a second argument that provides a default option that will be prefilled

Finally, let's display the current state of the profile, which will include our default values, but with the name the user entered as well. We'll do this in `draw()`:

1. Fill the background with a color you like
2. Use `push()` and `pop()` around text options for displaying the profile (consider using Courier as a font?)
3. Inside the `push()` and `pop()` use `text()` to display all the values in the `spyProfile` (consider using a template string for this)

Now when we run this program it should ask for our name and, when we enter it, display a profile with that name and whatever defaults you set.

---

## 2. Generate a profile using JSON data

Now we want to be able to create a **hilarious** or perhaps **very serious** profile for the user after they give their name the first time. We'll do this by randomly choosing words or phrases from JSON data files. In this case we'll choose the alias from a list of instrument names, the secret weapon from a list of common objects, and the password from a list of keywords associated with a tarot card. (Naturally you should feel free to use any other JSON and any other form of selection.)

First we need to get hold of our JSON files. Let's load the JSON from Darius Kazemi's [corpora](https://github.com/dariusk/corpora/) project. We'll load the raw data from URLs. First we'll need some global variables:

1. Declare three global variables at the top of the program. One for `tarotData`, one for `objectData` and one for `instrumentData`

Next we will load JSON data into these variables in `preload()`

1. Find the URL for the raw tarot JSON and use `loadJSON()` to load it into the `tarotData` variable
2. Do the same for the object data
3. Do the same for the instrument data

Now our program loads the data, but we need to use it to populate our spy profile. So let's write a `generateSpyProfile()` function. In it:

1. Move the name prompt code into the function
2. Assign a random instrument to the `alias` property of the spy profile, but include "The" in front of it
3. Assign a random object to the `secretWeapon` property of the spy profile
4. Choose a random tarot card and store it in a variable called `card`
5. Choose a random keyword from the card and assign it to the `password` property of the spy profile

Now we need to call that function, so in `setup()`

1. After creating the canvas, call `generateSpyProfile()`

Now, when we run the program is asks for our name, and then generates a random profile and displays it! This is already pretty fun and we can reload a few times to see different possibilities.

---

## 3. Save and load the generated profile

Now that we've been able to generate a profile, the next step is to **save** the generated profile, and then **load** a generated profile if one is already present.

First let's save the generated profile. At the end of the `generateSpyProfile()` function:

1. Call the `setItem()` method of `localStorage`.
  * For a **key name** use something specific like "spy-profile-data".
  * For the **value** to save, use the `spyProfile` object.
  * Remember to use `JSON.stringify()` on the object first.

Now, when a profile is generated it will be saved to the user's browser. To make use of it, though, we now need to check if there is **already** a profile available before we ask for the name and generate a new one. So, back in `setup()` after creating the canvas:

1. Remove the call to `generateProfile()`
2. Declare a `data` variable and try to load profile data into it with the `getItem()` method of `localStorage`
  * For the **key** use the key name you used when saving
  * Remember to use `JSON.parse()` on the result to convert it back to an object
3. Write an `if` statement to check if there is data in the `data` variable
  * If there is then assign the properties in the `data` object across to the `spyProfile` object
  * If there is not, then call the `generateProfile()` function

Now, the next time we run the program it should save the profile generated, and the **next** times we load it, we should just see the saved profile each time!

---

## 4. Add a password check

To be really fancy, we will only allow the user to access the saved profile data if they remember their generated password. Top secret stuff.

We'll need to do this **after** we've successfully loaded a profile, so it'll go inside the part of the `if` statement that confirms that, **before** assigning the data to the profile:

1. Declare a variable called `password` and assign the return value of a `prompt()` function that asks for the password
2. Write an `if` statement that compares the `password` the user entered with the `password` property in the loaded data
  * If it matches, assign all the data's propreties across (just move that code into the `if` statement)
  * If it doesn't, do nothing (so that the profile will have the default censored values)

Now when the user loads the page if they already have a profile they will be asked their profile. If they get it right, they see the profile. If not, they don't! Ha!

Pretty neat. Spy stuff!

---

## 5. Improve the program

As always, there are improvements that can be made. Consider

* Move blocks of code into separate functions. How about a `setSpyData()` function to assign the properties of the spy profile from data?
* Move hard-coded values into constants or variables. How about constants for each of the URLs to the JSON data? How about a constant for the key name of the saved data?

---

## Done!

As with any simple program, we can imagine all kinds of improvements and changes?

* Add more categories to the profile and generate them with other data
* Add the ability to delete the current profile data with a keyboard command or button
* Improve the visual display of the profile
* Use voice synthesis and voice recognition for the identification process
* Find more creative ways to generate profile values, such as combining parts of different sets of data
* Allow the user to regenerate their entire profile (other than their name) if they don't like it
* Allow the user to selectively regenerate specific categories in the profile (by clicking on them? with keyboard keys? with their voice?) to get one they like
* Ask for a username and password instead of just a password (generate the username?)
* Allow the user to manually enter their entire profile if desired, and just use the random data as default values
* Allow for multiple users of the page by saving an **array** of profiles and loading the correct one based on the password entered
* ... and many more?!

---

# }
