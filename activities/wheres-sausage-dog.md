# Activity: Where's Sausage Dog? {

## Objectives
* Remembering JavaScript!
* Remembering p5.js!
* Enjoying programming!

---

## The idea
The canvas will display many random images of animals at random positions, one of which will be a sausage dog. The player has to click on the sausage dog to win the game. When clicked successfully, the sausage dog will start spinning.

---

## Create a new project
1. Download [template-p5-project.zip](../templates/template-p5-project.zip) and unzip it
2. Rename the folder to `wheres-sausage-dog`
3. Move the folder into the `activities` folder in your repository folder (create it if necessary)
4. Commit the changes to your repository with a commit message
5. Open the project folder in Atom to start work

---

## The plan

The key observation for this project is that it will be useful to make classes representing a generic "animal" and the specific sausage dog we're searching for. Because the sausage dog will be a lot like the other animals (an image displaying on the canvas) we can use inheritance.

Then, in the main script, we can add a bunch of animal images and a single sausage dog image in order to put together the game itself.

We'll need to do something like the following:

1. Obtain a set of images of animals, including a sausage dog
2. Create an Animal class for displaying animals on the canvas
3. Add many animal objects to the main script and display them
4. Create a SausageDog class to display the sausage dog and check if it's been found
5. Add a sausage dog object to the main script, display it, and check for clicking
6. Improve our code with constants, functions, etc.

---

## 1. Animal images!

Luckily for us, we have an appropriate set of animal images ready to go in a .zip file.

1. Download [animal-images.zip](animal-images.zip)
2. Unzip the file
3. Copy all the images into the `assets/images` folder in your project

---

## 2. The `Animal` class!

We want a class to represent a generic animal as just an image that can be displayed on the canvas. Because we will eventually want our sausage dog to rotate when found, and because rotation is a neat thing to be able to do, we'll also make this class include the idea of rotation.

1. Create an `Animal.js` file and add a `script` tag for it in `index.html` (remember to place the tag above the `script.js` one)
2. Write in the basic `class` structure for the `Animal`
3. Write a `constructor()` with parameters `x`, `y` and `image` and store each parameter in a property, also add an `angle` property set to `0`.
4. Write an `update()` method that just calls a `display()` method
5. Write a `display()` method that
  * Uses `push()`
  * Sets the image mode to center, translates to the animal's position, and rotates by its angle
  * Displays the animal image
  * Uses `pop()`

At this point our program doesn't really do anything because we're not using this wonderful `Animal` class just yet

---

## 3. Add animals to the program

Half of the magic of our program is going to be display lots of animals on the canvas at the same time. To do this, we need to load the animal images and we need to create the right number of animal objects and display them.

1. Declare global constants (with `const`) for the number of animal images (`10`) and the number of animals to display (`100`)
2. Declare global empty array variables for the animal images and for the animal objects
3. In `preload()` use a `for` loop to load all the animal images by using the iterator (`i`) as part of the filename to load (that's why they're numbered from `0` to `9`), adding each image to the animal images array
4. In `setup()`
  * Create a canvas the size of the window (use `windowWidth` and `windowHeight`)
  * Use a `for` loop to create all the animals at random positions and with a random image from the animal images array, adding each one to the animals array
5. In `draw()`
  * Fill the background with white
  * use a `for` loop to go through the animals array and call the `update()` method on each animal in it

After this we should be able to run the program and see 100 animal images display randomly all over the canvas!

---

## 4. The `SausageDog` class!

The star of our program is going to be a single sausage dog the player is trying to find. It will just be another image, but they can click on it to make it spin as a kind of victory. Because it's very similar to the `Animal` class, we'll extend that class and add some extra elements that are specific to the sausage dog.

1. Create an `SausageDog.js` file and add a `script` tag for it in `index.html` (remember to place the tag above the `script.js` one and below the `Animal.js` one)
2. Write in the basic `class` structure for the `SausageDog`
3. Write a `constructor()` with parameters `x`, `y` and `image` and
  * call the `super()` constructor, passing along the parameters
  * Add a `found` property set to `false` (for tracking finding!)
  * Add a `rotationSpeed` property set to something like `0.25` (for spinning!).
4. Write an `update()` method that
  * Calls the superclass's `update()` method
  * Checks if the `found` property is true and adds the `rotationSpeed` to the `angle` if it is (so that dog spins when it's found!)
5. Write a `mousePressed()` method that
  * Checks if the mouse position is inside the dimensions of the sausage dog's image (use the image's `width` and `height` properties, and remember the image is **centered** when it's displayed)
  * If the mouse was clicked inside the sausage dog, set its `found` property to true

---

## 5. Add the sausage dog to the program!

The other half of the magic of our program is that when we find the sausage dog and click on it, it reacts! To do this, we need to load the sausage dog image, we need to create a single sausage dog object, and we need to display it and also tell it when the mouse is clicked.

1. Declare global variables for the sausage dog image and the sausage dog object
2. In `preload()` load the sausage dog image into the sausage dog image variable
3. In `setup()` create a new `SausageDog` object at a random position and using the loaded sausage dog image and store it in the sausage dog object variable
4. In `draw()` call the `update()` method of the sausage dog object
5. Define a `mousePressed()` function and call the `mousePressed()` method of the sausage dog object inside it

After this we should be able to run the program and see 101 animal images display randomly all over the canvas, with the sausage dog somewhere among them. If we click the sausage dog we should see it start to spin!

We have met the brief!

---

## 6. Improve the program

Currently our program works, but there are some places where we could make it more modular and add some potential for reuse.

`script.js`
1. Add a global constant for the path and prefix of the animal images (e.g. `assets/images/animal`) and use it when loading them
2. Add a global constant for the path to the sausage dog image (e.g. `assets/images/sausage-dog.png`) and use it when loading it
3. Move the animal creation loop in `setup()` into a separate function called `createAnimals()`
4. Move the code for creating a specific random animal into function called `createRandomAnimal()` that returns the created animal
5. Move the sausage dog creation code in `setup()` into a function called `createSausageDog()`
6. Move the animal updating loop in `draw()` into a function called `updateAnimals()`
7. Move the sausage dog updating code in `draw()` into a function called `updateSausageDog()`

`Animal.js`
1. Write a method called `overlap(x,y)` that checks whether the provided coordinates are inside the animal's image dimensions and returns true if they are and false otherwise

`SausageDog.js`
1. Use the `overlap()` method in `mousePressed()` to check whether the mouse position was clicked inside the sausage dog

---

## Done!

Well that's one nice little program and quite a fun game in the end. You can probably imagine all kinds of ways to expand on this basic ideas here, such as...

* Add start and end screens
* Add more visual effects when finding the dog (make it bounce around the screen? Change colours? Leave a trail?)
* Add sound effects to the game (have all the animals make animal sounds randomly? Make the dog bark when you get close to it?)
* Add behavior to incorrect animals when clicked (make a sound, wiggle, do something else?)
* Add random rotations of animals when added so they're oriented in different ways
* Add a hint system to that the dog wiggles a bit if the player is taking too long to find it
* Add selectable difficulty levels (more animals? smaller? movement?)
* Add a countdown timer
* Add multiple levels
* Choose which animal is being found randomly and tell the player which one they're looking for
* And more!?

---

# }
