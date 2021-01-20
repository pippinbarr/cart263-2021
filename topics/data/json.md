# JSON {

---

## Summary

JSON is a format for writing data files in. Its format is very, very similar to JavaScript's object literal syntax. We can use JSON to store and access data relevant to our program in a separate file to the program itself. We can also access data in JSON format from websites that provide an API for this.

---

## Contents

* What is JSON?
* The JSON format
* Obtaining JSON data
* Loading JSON files
* Loading JSON from URLs
* Loading JSON from an API
* CORS
* Too much information?
  * Loading JSON arrays in `preload()`
  * CORS anywhere proxy

---

## What is JSON?

JSON stands for (**J**)ava(**S**)cript (**O**)bject (**N**)otation. It's a format for **describing structured data** that we can then load into our programs.

Generally speaking, we'll either have JSON data stored in a file or we'll access it through an API on the internet. Both cases use the same format.

JSON is great because it allows us to work with potentially huge amounts of data and keep that data **separate** from our actual program. Modularity! Reuse!

---

## The JSON format

For the moment, let's think about a **file** with JSON data in it. These files have the extension `.json` and they're just **plain text files** that are written in a specific way, following the JSON format.

A JSON file can either contain an **object** or an **array**.

### A JSON object in a file

One option for JSON data in our file is to store it all inside an **object**, which allows us to use the standard form of **properties** (officially called **names** in JSON) and **values**. Here's some selected data about character archetypes in JSON form:

`archetypes.json`
```json
{
  "Hero": {
    "synonyms": ["protagonist"],
    "qualities": ["brave","willing","determined"],
    "nature": "good"
  },
  "Anti-hero": {
    "synonyms": ["antagonist"],
    "qualities": ["unwilling","reluctant"],
    "nature": "neutral"
  },
  "Fool": {
    "synonyms": ["joker","jester","idiot"],
    "qualities": ["thoughtless","silly","amusing"],
    "nature": "evil"
  }
}
```
(Adapted from Darius Kazemi's [character.json](https://github.com/dariusk/corpora/blob/master/data/archetypes/character.json))

As you can see, this looks just like a standard JavaScript Object! It's a series of properties and values. In this case we have properties named for character archetypes (Hero, Anti-hero, and Fool) and inside each of these is another object that contains properties about that character type (synonyms, qualities, and nature).

There are a couple of specific rules in JSON, though:

* The **property names** (`Hero`, `synonyms`, etc.) **must be surrounded in double quotes**
* The **values** in the properties are standard JavaScript values (string, number, object literal, array, boolean, `null`)
* You **cannot** have a comma after the final value in an object or array

---

## A JSON array in a file

The other option for JSON data in a file is that it is presented as an array. Such as this JSON data giving the names of (four) muppets...

`muppets.json`
```json
[
  "Grover",
  "Kermit",
  "Miss Piggy",
  "Animal"
]
```

As you can see, this looks just like a standard JavaScript array! It's a comma-separated list of values inside square brackets. In this case we have the names of muppets as strings.

As we saw with the JSON object, you **cannot** have a comma after the final value in an array.

---

## Complex JSON

The two key perks of JSON are:

1. To store (often large amounts of) data in a separate file because separating data and code is desirable
2. To represent potentially complex data through its structure

Let's consider a reduced version of [`egyptian_gods.json`](https://github.com/dariusk/corpora/blob/master/data/mythology/egyptian_gods.json) from Darius Kazemi's corpora.

```json
{
  "description":  "Gods and goddesses from Egyptian mythology",
  "egyptian_gods":  {
    "Aani": {"depictions": ["ape"], "genders": ["male"], "keywords": ["ape", "protection"]},
    "Abu": {"depictions": [], "genders": ["male"], "keywords": ["light"]},
    "Ahti": {"depictions": ["hippopotamus"], "genders": ["female"], "keywords": ["hippopotamus"]},
    "Aker": {"depictions": [], "genders": ["male"], "keywords": ["earth", "horizon"]},
    "Amathaunta": {"depictions": [], "genders": ["female"], "keywords": ["ocean", "sea"]},
  }
}
```

Here we can start to see how nested data can powerfully represent **organized** information. Let's think about the hierarchy in place here...

* We have a JSON **file** which contains a single **object**, which contains
  * a property called **description** containing a string describing the file itself
  * a property called **egyptian_gods** which contains an **object**...
    - ... with **properties** named for each **god** containing **objects** with property/value pairs about the god:
      - **depictions** contains an **array** of physical forms (sometimes empty)
      - **genders** contains an **array** of genders
      - **keywords** contains an **array** of keywords relevant to the god

With the data structured this way, we could find out something like Ahti's gender(s) by following the path:

Main object > `egyptian_gods` property > `Ahti` property > `genders` property > an array containing the list of Ahti's genders.

---

## Arbitrary levels of complexity

JSON files can be as complicated and "nested" as is necessary to represent the kind of data being organized.

Take a look at these [tarot interpretations](https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json), for instance, or this [zodiac data](https://github.com/dariusk/corpora/blob/master/data/divination/zodiac.json).

---

## Obtaining JSON data

There are essentially two key ways to obtain JSON data for a project.

You can **write it yourself** to structure data that you're generating yourself and want to store in an organized format outside your code. This can often make otherwise messy or bloated programming much more structured and clear. It also forces you to think about your program in terms of code/logic and data separately, which is healthy.

You can **find existing JSON-formatted data**, such as in [Darius Kazemi's corpora](https://github.com/dariusk/corpora), and use it. This can be a great way to have new ideas, because data often tells a story or suggests a possible use...

*Tarot interpretations makes me think of a tarot reader with a creepy ResponsiveVoice telling you you're going to meet the love of your life tomorrow...*

*Sports names makes me think of randomly generating sports names...*

*A list of everyday objects makes me think of a spy using them as a secret weapon...*

---

## Loading JSON files

### 1. Get a file

Before we can load a JSON file we're going to need... a JSON file. Let's obtain [`tarot_interpretations.json`](https://github.com/dariusk/corpora/blob/master/data/divination/tarot_interpretations.json) from Darius Kazemi's corpora project. To get hold of it, we need to

1. View the "raw" version of the file (with the "Raw" button) because we want just the plain text of the data
2. Save the file to our computer.
3. Move the file into our project in `assets/data` (create the folder if needed)

Note that the `assets/data` location is just a suggestion, not a rule. If you have a different preference feel free to use that instead.

### 2. Load the file

Many libraries (including p5) provide specific functions for **loading** JSON data from a file. In p5, that function is called [`loadJSON()`](https://p5js.org/reference/#/p5/loadJSON).

The easiest way to use `loadJSON()` is, as with `loadImage()` and `loadSound()`, to put it in the `preload()` function so that you don't need to worry about **how long** a file takes to load.

Just as with the other `load` functions, when used in `preload()`, `loadJSON` will return a value we can store in a variable...

```javascript
// A global variable to store our data in
let tarot;

function preload() {
  // Used in preload, loadJSON will just return the data into our variable
  tarot = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {

}

function draw() {

}
```

Now when our program starts the `tarot` variable will have the data in it!

### 3. Access the data

The beauty of loading JSON in `preload()` is that it's just ready to use once our program starts in `setup()`.

Importantly, because the JSON format mirrors JavaScript, when we load the **object** in `tarot_interpretations.json` it will be stored as an **object** structured in exactly the same way in our `tarot` variable.

Now, if we want to access some specific part of the data, we'll need to understand the structure of the `tarot_interpretations.json` file.

#### An easy example

The simplest piece of data in the file we could access is its `description` property, which is just a property of the main object. Because it's a property of the main object in the file, it will have been loaded as a property of the object in our `tarot` object.

So...

```javascript
// A global variable to store our data in
let tarot;

function preload() {
  // Used in preload, loadJSON will just return the data into our variable
  tarot = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Get the description in a variable by following the correct path through the tarot object
  let description = tarot.description;

  // Display the meaning
  push();
  textSize(32);
  textAlign(CENTER);
  fill(255,255,0);
  text(description,width/2,height/2);
  pop();
}
```

#### A more complex example

Let's try access to the **Fool** card's first "shadow meaning" and display it on the canvas.

Again, to do this, we need to be able to access that part of the data in our `tarot` variable. So, looking at the JSON we can see that we need to access it through...

* `tarot_interpretations` (the property all the cards are in, containing an array of objects)
* `[0]` (we want the object at position `0` because that's the Fool card)
* `meanings` (within that object we want the `meanings` property which contains different kinds of meanings as properties)
* `shadow` (we want to access the shadow meaning property, which contains an array of potential meanings as strings)
* `[0]` (we want the first shadow meaning, which is the first element in the array)

So to access this and display it in our code we need...

```javascript
// A global variable to store our data in
let tarot;

function preload() {
  // Used in preload, loadJSON will just return the data into our variable
  tarot = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Get the first shadow meaning into a variable by following the path through the tarot object
  let firstShadowMeaning = tarot.tarot_interpretations[0].meanings.shadow[0];

  // Display the meaning
  push();
  textSize(32);
  textAlign(CENTER);
  fill(255,255,0);
  text(firstShadowMeaning,width/2,height/2);
  pop();
}
```

All going to plan, we see "Being gullible and naive" on our canvas.

---

## A random fortune?

Now that we have some understanding of how the structure of the JSON corresponds to the structure loaded into our variable, we can turn our mind toward doing more interesting things. Most obviously with `tarot_interpretations.json` we might want to pull out a random card from the "deck" and choose a random fortune to show to the user...

To get a **random card** we'll need to select one from the array in the `tarot_interpretations` property.

To get a **random fortune** from that specific card, we'll need to select one from its `fortune_telling` property.

```javascript
// A global variable to store our data in
let tarot;
// A global variable to store our fortune in
let fortune;

function preload() {
  // Used in preload, loadJSON will just return the data into our variable
  tarot = loadJSON("assets/data/tarot_interpretations.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Choose a random card
  let card = random(tarot.tarot_interpretations);
  // Choose a random fortune
  fortune = random(card.fortune_telling);
}

function draw() {
  background(0);

  // Display the fortune
  push();
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 255, 0);
  // Center the resulting text box
  rectMode(CENTER);
  // Use width and height properties to break up the text
  text(fortune, width / 2, height / 2, width / 2, height / 2);
  pop();
}
```

Hey presto, each time we load this program, we see a randomly selected fortune displayed.

---

## `loadJSON()` with a callback

To this point we've been loading our JSON in `preload()` and that works well. It's worth at least knowing, though, that we can also load JSON data at any time in our program so long as we deal with the fact that it takes **time** to load it (it's not instantaneous).

To do so, we call `loadJSON()` and provide a **function** to call when the data is loaded. We call that function a "callback" or "event handler".

So, if we wanted to load the tarot data when the user **clicks** and then display their fortune, it would look like this:

```javascript
// A global variable to store our data in
let tarot;
// A global variable to store our fortune in
let fortune = `No fortune loaded.`;

function preload() {
  // NOTHING in preload because we will load the data dynamically on click
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Display the fortune
  push();
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 255, 0);
  // Center the resulting text box
  rectMode(CENTER);
  // Use width and height properties to break up the text
  text(fortune, width / 2, height / 2, width / 2, height / 2);
  pop();
}

function mousePressed() {
  // Call loadJSON as before, but provide a callback function to call when
  // the data has finished loading. The loaded data will be provided as an
  // argument when it is called.
  loadJSON("assets/data/tarot_interpretations.json", tarotLoaded);
}

// Note that our callback function has a PARAMETER that will have the loaded
// JSON data in it when the function is called
function tarotLoaded(data) {
  // Save the data loaded into our tarot variable for later if we need it
  tarot = data;
  // Choose a random card
  let card = random(tarot.tarot_interpretations);
  // Choose a random fortune
  fortune = random(card.fortune_telling);
}
```

Why might we want to do this? Well, it lets the program run immediately because we're not waiting for the file to load up front. This might allow us to load it in the background while the user is interacting with our program so they don't even notice!

---

## JSON from a URL

So far we've worked with JSON stored in a **file** inside our project. However, when we're giving the location of JSON data, we can also use a URL that points to a website hosting a file!

For example, the `tarot_interpretations.json` file we downloaded is available online here, as we've seen:

```
https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json
```

Instead of downloading the file ourselves, we can also just provide this URL when loading the file with `loadJSON()`. Everything else remains exactly the same...

```javascript
// A global variable to store our data in
let tarot;
// A global variable to store our fortune in
let fortune;

function preload() {
  // Load the JSON data from a file online!
  tarot = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Choose a random card
  let card = random(tarot.tarot_interpretations);
  // Choose a random fortune
  fortune = random(card.fortune_telling);
}

function draw() {
  background(0);

  // Display the fortune
  push();
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255, 255, 0);
  // Center the resulting text box
  rectMode(CENTER);
  // Use width and height properties to break up the text
  text(fortune, width / 2, height / 2, width / 2, height / 2);
  pop();
}
```

This is neat because we don't have to download the file, but of course will have problems if we don't have internet access or if the server hosting the file goes down, etc.

So, generally speaking it's probably **safer** to have the data in your actual project as a file, but this is still good to know!

---

## JSON from APIs

One big reason it's great we can load JSON through a URL is that there are various services out there that provide JSON data **dynamically** when you ask for it. Rather than just having a static file on the server, when you request JSON from their URL, the server at the other end will **generate** the JSON data and return it.

For example, the [Official Joke API](https://github.com/15Dkatz/official_joke_api/blob/master/README.md) provides access to jokes in JSON format! You can see from the documentation that depending on what URL you use, the server will return different JSON data, so that

`https://official-joke-api.appspot.com/random_joke` will return a single random joke, whereas

`https://official-joke-api.appspot.com/jokes/programming/ten` will return ten programming jokes.

If you paste the URL into your browser, you can see the kind of JSON data that comes back right there. Here we can see that in all cases it's an **array** containing **objects** that represent jokes. Each joke object has an `id`, `type`, `setup`, and `punchline` as properties.

So we can load the data and access the joke in the array...

```javascript
let jokeText = ``; // The current joke.
let jokeData = undefined; // The loaded joke data

function preload() {
  jokeData = loadJSON(`https://official-joke-api.appspot.com/jokes/programming/random`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // We get the joke object as the first element of the array
  let joke = jokeData[0];
  // Set the joke text as the setup and punchline properties together
  jokeText = `${joke.setup}\n\n${joke.punchline}`;
}

function draw() {
  background(0);

  // Display the current joke
  push();
  fill(255, 255, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  text(jokeText, width / 2, height / 2, width / 2, height / 2);
  pop();
}
```

For some complicated reasons, the `jokeData` above isn't **really** an array. Although you can still access the different elements by index number as above, you **cannot** use array methods. See **Too Much Information?** if you want to know more.

---

## So many JSON APIs

There are many, many APIs out there that will give you JSON data when you use the appropriate URL. Taking a look around at the possibilities is a fun way to think about projects. A helpful listing can be found on sites like

* [Any API](https://any-api.com/)
* [Public APIs](https://github.com/public-apis/public-apis)

Note that many APIs will require you to register for an **API key** that you will need to include when you request data from them. This is no big deal and generally the API's documentation will explain how to get the key and how to use it. The general principle is that your key will be a random sequence of numbers and letters, and that you will include it in the URL when you use `loadJSON()`.

---

## CORS

Now that we're sometimes requesting data from other websites, we can run into problems around the security features built into the internet. In particular, it can be the case that some browsers in combination with some websites **refuse** to let you access URLs because of "CORS policy".

CORS stands for **Cross-Origin Resource Sharing**. "Cross-origin" as in your program is on one server and the data you're requesting is on another server. This could obviously lead to potential security threats, so there are extra measures in place.

If you run into a CORS problem, it will give you an error message something like this:

```
Access to fetch at 'URL_YOU_WERE_TRYING_TO_GET_TO' from origin 'http://127.0.0.1' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.
```

The simplest advice here is to simply **not use this kind of data source** because it can get complicated. Instead, look for APIs that say that they are "open CORS", and therefore will accept requests from any old program.

The more complex advice is available in **Too Much Information?** below.

---

## So, JSON!

JSON is wonderful because

1. It gives us a standard format for creating data files we can use with our programs, rather than having out data cluttering up the `.js` files themselves. **Modularity! Reuse!**
2. We can find JSON-formatted data out in the wild that we can incorporate into our programs, including files like those in [Darius Kazemi's corpora project](https://github.com/dariusk/corpora/) and dynamically generated JSON from various APIs.

The key skills we need in order to be able to participate in this wonderful world are

1. The ability to read and write the JSON format itself. Not very different from understanding JavaScript objects and arrays.
2. The ability to load JSON data into our program. In p5 we use `loadJSON()` for this.
3. The ability to access the loaded data by following chains of properties and array indexes to the correct value(s). No different to accessing any JavaScript object or array in any program.

It's a wonderful and dataful world out there. Time to play!

---

## Too much information?

### Loading JSON arrays in `preload()`

We saw earlier that if we use `loadJSON()` in `preload()` it can be tricky to load JSON data formatted as an **array**. Again, the reason it's tricky is because the data will actually be loaded as an **object**! This is because p5 can't **tell** what kind of data is going to come out of `loadJSON()` when you call it and so it defaults to assuming it will be an **object**.

As we saw, you can **still** treat the resulting object like an array in terms of accessing individual array elements by number, but you can't use any array methods like `push()` or `join()` or `sort()` etc.

One workaround is to use the **callback** version of `loadJSON()` which **does not** have this problem...

```javascript
let jokeText = ``; // The current joke.

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  // Display the current joke
  push();
  fill(255, 255, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  text(jokeText, width / 2, height / 2, width / 2, height / 2);
  pop();
}

function mousePressed() {
  // Load a random joke from the API...
  loadJSON("https://official-joke-api.appspot.com/jokes/programming/random", setJoke);
}

function setJoke(data) {
  // We get the joke object as the first element of the array
  let joke = data[0];
  // Set the joke text as the setup and punchline properties together
  jokeText = `${joke.setup}\n\n${joke.punchline}`;
}
```

Another option is to use `preload()` but convert back to an array after you load the data using `Object.keys()` which returns a list of the resulting object's property names (which are the array indexes):

```javascript
let jokeText = ``; // The current joke.
let jokeDataObject = undefined; // To store the object version of the joke data
let jokeData = []; // The loaded joke data

function preload() {
  // Load the jokes array (as an object)
  jokeDataObject = loadJSON(`https://official-joke-api.appspot.com/jokes/programming/random`);
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // CONVERT THE DATA OBJECT BACK INTO AN ARRAY
  
  // Get the full list of property names in the joke data object
  let jokeKeys = Object.keys(jokeDataObject);
  // Go through the keys and populate the actual data array with the associated values
  for (let i = 0; i < jokeKeys.length; i++) {
    let key = jokeKeys[i];
    let element = jokeDataObject[key];
    jokeData.push(element);
  }

  // We get the joke object as the first element of the array
  let joke = jokeData[0];
  // Set the joke text as the setup and punchline properties together
  jokeText = `${joke.setup}\n\n${joke.punchline}`;
}

function draw() {
  background(0);

  // Display the current joke
  push();
  fill(255, 255, 0);
  textSize(32);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  text(jokeText, width / 2, height / 2, width / 2, height / 2);
  pop();
}
```

Honestly, that's pretty complicated. It's only necessary if you

1. **Do not** want to use a callback and
2. **Do** need to use array methods on the data

---

### CORS anywhere proxy

If this happens to you it's likely only to be a problem when you're running your program locally and won't happen when you're running it online. Consider the following use of the MetaWeather API, which fails if you run it because of CORS:

```javascript
let weather;

function preload() {
  weather = loadJSON(`https://www.metaweather.com/api/location/3534`);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);

  let forecast = weather.consolidated_weather[0].weather_state_name;

  push();
  textAlign(CENTER);
  textSize(64);
  fill(255,255,0);
  text(forecast, width/2, height/2);
  pop();
}
```

There are various solutions, but the **easiest** is probably to use the CORS anywhere helper url. This is a **different** API that will take the URL you want to access and fix the CORS issue by serving as a proxy (an intermediary that requests the data for you and then gives it to you).

In a nutshell, you add `https://cors-anywhere.herokuapp.com/` in front of the actual URL you want to access...

```javascript
let weather;

function preload() {
  // Adding the CORS anywhere helper
  weather = loadJSON(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/3534`);
}

function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0);

  let forecast = weather.consolidated_weather[0].weather_state_name;

  push();
  textAlign(CENTER);
  textSize(64);
  fill(255,255,0);
  text(forecast, width/2, height/2);
  pop();
}
```

This has its own problems though. Notably, if the CORS anywhere server goes down or doesn't work for some other reason, then your program won't work even if the weather server is working because you're reliant on the CORS anywhere proxy!

---

# }
