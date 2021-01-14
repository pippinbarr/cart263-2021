# annyang! {

---

## Summary

[annyang!](https://www.talater.com/annyang/) is a JavaScript library designed to make it easier to access a browser's speech recognition functionality. That is, it facilitates making the computer listen to you!


---

## Contents

* What is annyang!?
* How to meet a library
* Meeting annyang!

---

## What is annyang!?

It's a speech recognition library.

Most contemporary browsers (with exceptions) have speech built into them that we can use via JavaScript. Overall, this is known as the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API). It includes **speech recognition**.

**Important:** speech recognition is only available in a very, very limited number of browsers. Check out the [Can I use Speech Recognition API](https://caniuse.com/speech-recognition) page. Essentially, it only works in Chrome version 25 and up.

The Web Speech API is a little complicated to use, however, and [annyang!](https://www.talater.com/annyang/) is a library designed to make using speech recognition more straightforward. That is, it facilitates making the computer listen to you! It takes care of a bunch of the underlying details and presents us with a simplified way of getting our computer to listen.

Let's meet it.

---

## How to meet a library

1. **Go to the homepage** and read the introductory material
2. **Find resources** provided for learning the library, especially **examples** and **tutorials** and most fundamentally the **API**
3. **Look at examples** to get a broad sense of the usage
4. **Read/browse the API** to get a sense of the range of the library's abilities
5. **Obtain the library** itself and incorporate it into a blank project (may include API key)
6. **Start experimenting**!

---

## Go to the homepage

The annyang! homepage is at [https://www.talater.com/annyang/](https://www.talater.com/annyang/).

The first thing you'll see if you haven't enabled it before is that your browser will ask if you want to enable your microphone for this site. That's because annyang! requires the microphone to listen to you, understandably. If we want to use this site, we should agree.

Now, reading the page, we see a quick explanation of what the library is:

> annyang is a tiny javascript library that lets your visitors control your site with voice commands.
annyang supports multiple languages, has no dependencies, weighs just 2kb and is free to use.

After this, there's an invitation to just **try it**. So... try it. You say "Hello" and all going to plan it displays "Annyang!". You say "Show me cute kittens" and it shows you cute kittens.

This cements the basic idea of the library: you can speak a **command** and the website will **respond**.

---

## Find resources

At this point, we should search the website for specific resources that would help us to use annyang! successfully. If we look around we'll find some important elements:

* A **code example** on the homepage
* More **complex code examples** the homepage
* A link to the **annyang library file** at the bottom of the homepage
* A link to the **API documentation** at the bottom of the homepage
* A link to an **FAQ** at the bottom of the homepage

---

## Simple homepage code example

Let's look at the basic code example. It tells us a a lot, and its worth paying close attention to, rather than just eagerly pasting it into our code editor for example. In it we see:

* How to include the library with a script tag
* The idea of checking whether the annyang library is available
* The format for listing and adding voice commands
* How to start annyang

Quite a lot to unpack here, so let's think go through it step by step.

### The script tag

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
```

This is pretty conventional. A script tag that presents a link to the annyang library hosted online.

One potential oddity we see here is that there's no `http:` or `https:` in front of the `//` at the start of the URL. If you're not familiar with this, it will automatically add `http:` or `https:` depending on the current option being used on the site. Since the annyang! homepage on `talater.com` uses `https:`, that's what will be used for the script tag when you're on that site.

### Checking for annyang

You'll notice that we see all the annyang code inside an if statement:

```javascript
if (annyang) {
  // annyang code in here
}
```

This is provided as a simple way to check whether speech recognition is **available** in the current browser. Since you don't control what browser a user views your program, you can't guarantee it's a browser that supports speech recognition. This allows you to handle that case. You might do something simple like:

```javascript
if (annyang) {
  // annyang code in here
}
else {
  alert(`Sorry, this page requires speech recognition. Please use Chrome on a desktop computer.`);
}
```

### Listing voice commands

There's a specific format for telling annyang! what commands to listen for, demonstrated in the simple example...

```javascript
var commands = {
  'show tps report': function() {
    $('#tpsreport').animate({bottom: '-100px'});
  }
};
```

Here we need to decipher a relatively complicated use of JavaScript syntax, including at least one idea we may have never seen before (jQuery).

#### A variable

We can see that we need to create a **variable** that will contain all the commands annyang! should listen for (they have called it `commands`). Your ES6 brain should be telling you to replace that `var` with a `let` when you're actually using annyang!

#### A JavaScript object literal

Inside this variable we should store a JavaScript object literal. And inside the object we have **one property name per command**. That is, the property names in our object correspond to the exact commands that annyang! will listen for. So we have a property called `'show tps report'` and that's why annyang! responded to us saying "Show TPS Report". (**Note** how we can have property names in an object literal composed of multiple words by putting the property name in **quotes**.)

### Object properties names representing voice commands and functions to execute for them

Inside the **property** corresponding to a command, we have the **function** that should be called **when that command is heard**. That's the basic nature of annyang!, we have a command text it listens for, and a function to call when it hears it. Here that function is an **anonymous function**, defined **inside** the commands object, but it could be the name of the function somewhere else in the program, too.

#### jQuery inside the example function

Inside the **function** for showing the TPS report, we see some code that may well look like nonsense. It's written using a specific JavaScript library called jQuery. All we need to know for now is that it will animate the image of the TPS report onto the screen, so it's what gets **done** when the voice command works.

#### Adding voice commands

There's a difference between creating an object listing the commands and actually telling annyang! about those commands, so we then need:

```javascript
annyang.addCommands(commands);
```

Here we're telling the `annyang` object to add the commands listed in the `commands` variable to the set of things it listens for.

#### Starting annyang!

There's a difference between telling annyang! the commands to listen for and actually telling it to start listening. For that we need to use its `start()` method:

```javascript
annyang.start();
```

This is the moment that annyang! will actually try to access the microphone and your browser will pop up the permission dialog if you haven't already granted permission. From this point on, assuming the user grants permission, annyang! is listening.

---

## More complex examples

For now, let's also glance at the more complex examples below the first one. Let's just note that they provide us the more sophisticated commands. In particular, we can have commands that allow us to listen for **arbitrary** words from the user and pass those through to the function that responds to the command. And we can have commands that include **optional** words in them.

Good to remember for later in case we want to do that.

---

## API documentation

As always, it's worth browsing through the API documentation now that we have a general sense of how the library works. By reading the API we can both get **more detail** about elements of the library we already know, like `addCommands()` and `start()`, as well as find out about **new** elements of the library that weren't part of the basic examples on the homepage.

As you look through, some things to take note of might be:

* If you use `addCommands()` multiple times, **all** the commands added are listened to by annyang! (it doesn't **replace** the previous set of commands)
* There are `pause()` and `resume()` methods we can use if we want to stop and start the listening temporarily, which could be useful if you want to "ignore" the user for a while
* It's possible to listen to non-English languages using `setLanguage()`
* You can remove specific commands or **all** commands using `removeCommands()` (could be useful if the set of commands you want to listen to **changes** over time)
* There are many possible **callbacks** we can react to using `addCallback()`. This would allow us to respond to very specific annyang! events, like when it recognizes some speech (`result`) or when it recognizes speech that **doesn't** match a command (`resultNoMatch`). We could get pretty sophisticated with this.
* To avoid endlessly talking to our computer we can use `trigger()` to **pretend** to say something to annyang! but instead just send it as a string of text.
* Documentation about "splats" and "variables" and optional text in commands, allowing for significantly more sophisticated voice input if we want it

So there's quite a lot of noteworthy stuff in here! It's a neat library when it works well.

---

## FAQ

The FAQ is worth a quick read through just in case you see some questions you might want the answer to. I was personally interested in "Can annyang be used to capture the full text spoken by the user?" because that seems delightfully "surveillance-dystopia".

---

## Obtaining the library

Having immersed ourselves in the basics of the documentation for the library, we're ready to try it out!

There are two ways for us to use annyang! in a project. One is to use the script tag shown on the homepage:

### Online version

```html
<script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script>
```

This gives us access to a version of annyang that is **hosted online**. It's nice and convenient, but its one disadvantage is that if we're not online, we won't be able to use the library.

### Local version

Our other option is to **download** the library file using the link at the bottom of the homepage.

When we click that link we end up at the annyang! GitHub repository. This can be disorienting because it didn't just download the file like we may have expected. Instead, we need to **find** the file in the repository. When looking for this kind of thing, there is often a `dist` folder that contains the actually usable version of a library. `dist` stands for "distribution".

Inside the `dist` folder we find `annyang.min.js` which we can download by clicking on the filename, then on "Raw", and then saving that file from our browser to our computer.

Finally, we can copy the file into the `js/libraries` folder of our project and link to it in `index.html` once we start one.

---

## Start experimenting

Now it's time to get a project running and to start trying this thing out.

---

## Set up a project to use annyang!

1. Download the [template p5 project](../../templates/template-p5-project.zip)
2. Either add the script tag from the homepage or download the library file and put it in `js/libraries` then add a script tag linking to it

---

## Try out a simple command

We've seen the basic format for activating annyang with commands, so now we can incorporate this into our project. For now, let's assume we want to active annyang! when our program starts, so we'll put all its setup stuff in `setup()`.

Let's mimic the simple example and just have a single command that responds to the user's voice. We'll keep it ultra simple and just trigger an `alert()` message...

```javascript
function setup() {
  createCanvas(500, 500);
  // Check if annyang is available
  if (annyang) {
    // Create commands
    let command = {
      // If they say hello, say hi back!
      'hello': function() {
        alert(`Hi there!`);
      }
    }
    // Add the commands and start annyang
    annyang.addCommands(commands);
    annyang.start();
  }
}

function draw() {
  background(0);
}
```

### With named functions

We don't have to use **anonymous** functions with annyang! if we don't want to, we can also use **named** functions...

```javascript
function setup() {
  createCanvas(500, 500);
  // Check if annyang is available
  if (annyang) {
    // Create commands
    let command = {
      // If they say hello, say hi back by calling our sayHello() function!
      'hello': sayHello
    }
    // Add the commands and start annyang
    annyang.addCommands(commands);
    annyang.start();
  }
}

function draw() {
  background(0);
}

// Triggers an alert that says hello
function sayHello() {
  alert(`Hi there!`);
}
```

This is really just a matter of preference the vast majority of the time, so do what you feel comfortable with.

---

## Try out multiple commands

Because an object can have **more than one property** we can add **more than one command** to annyang! at once. For instance we could add another to the above example like this:

```javascript
let commands = {
  'hello': function() {
    alert(`Hi there!`);
  },
  'goodbye': function() {
    alert(`Ciao for now!`);
  }
};
```

Now if I say "Hello!", the page will pop up an alert saying "Hi there!". And if I say "Goodbye" I'd see "Ciao for now!".

---

## Simple commands integrated with p5

Currently we're writing out annyang! code in a p5 template, but we're not really using it to do anything very specific to p5 since `alert()` is just a generic JavaScript function.

Let's make the classic light switch...

```javascript
// Is the light on or off?
let on = false;

function setup() {
  createCanvas(500, 500);
  // Check if annyang is available
  if (annyang) {
    // Create commands
    let commands = {
      'Turn the light on': function() {
        on = true;
      },
      'Turn the light off': function() {
        on = false;
      }
    }
    // Add the commands and start annyang
    annyang.addCommands(commands);
    annyang.start();
  }
}

function draw() {
  // If on is true, make the background white, otherwise make it black
  if (on) {
    background(255);
  }
  else {
    background(0);
  }
}
```

We have the power to turn an imaginary light on and off with our voice! Actually pretty nice. It's like the Clapper, but way better!

We can, again, rewrite the above code with named functions if it feels more comfortable. In the above case, because the code to run for the command is so **simple**, we could argue that anonymous functions are a little clearer because they show you exactly what code gets run associated with the command.

---

## Continue experimenting

We already have the ability to control our program with our voice now. We can essentially **call functions in our program** using speech. This is very powerful, but of course we need to think about ways in which it might be significant and useful.

There are many paths we can go down, but just consider the emotional valence of speech as one possible example of this. We could write a program that's essentially the same as the light switch above, but tune it toward feelings...

```javascript
// The program's face
let face = `:-|`;

function setup() {
  createCanvas(500, 500);
  // Check if annyang is available
  if (annyang) {
    // Create commands
    let commands = {
      // They love me!
      'I love you': love,
      // They hate me!
      'I hate you': hate
    }
    // Add the commands and start annyang
    annyang.addCommands(commands);
    annyang.start();
  }
}

function draw() {
  background(0);

  // Draw the current face emoji in the center of the canvas
  // rotated to display more like a regular face
  push();
  translate(width / 2, height / 2);
  rotate(PI / 2);
  textSize(400);
  textAlign(CENTER, CENTER);
  fill(255);
  text(face, 0, 0);
  pop();
}

function love() {
  face = `:-)`;
}

function hate() {
  face = `:-(`;
}
```

This already feels quite different, because speech is very **personal**. Particularly if we use personal pronouns like "I" and "you". We can play on the idea of a social **relationship** between the user and computer that can go in all kinds of directions...

---

## "Splats"

When we were looking at the documentation we briefly saw the idea that we can get annyang! to recognize **arbitrary** words by using a special syntax in the command that would then send what the user said to our function as an argument.

Let's try that out.

In the API we see this the following example for displaying any search term from the Flickr photo service:

```javascript
const commands = {
  // annyang will capture anything after a splat (*) and pass it to the function.
  // e.g. saying "Show me Batman and Robin" will call showFlickr('Batman and Robin');
  'show me *tag': showFlickr,
};

const showFlickr = function(tag) {
  var url = 'http://api.flickr.com/services/rest/?tags='+tag;
  $.getJSON(url);
}
```

This opens up a larger set of expressive possibilities with annyang! than the standard commands because we don't have to know **in advance** everything that the user can say. In particular, this allows the user to provide specific data to our program with their voice, whether it's a tag to search on Flickr or information for a dating profile or something else.

For a simple example, let's create the same basic idea, but instead use it to greet the user by name...

```javascript
// Default name
let userName = `stranger`

function setup() {
  createCanvas(windowWidth, windowHeight);

  if (annyang) {
    let command = {
      // A command that listens for "my name is..." and the captures
      // whatever they say after that and sends it as an argument to setName()
      'My name is *name': setName
    }
    annyang.addCommands(command);
    annyang.start();
  }
}

// Sets the current username to whatever argument is passed to it by annyang!
// Now how what the user said will be passed into the parameter called name
function setName(name) {
  userName = name;
}

function draw() {
  background(0);

  // Greet the user
  push();
  fill(255, 255, 0);
  textSize(32);
  rectMode(CENTER);
  text(`Hi there, ${userName}!`, 100, 100);
  pop();
}
```

Fun! And opens up some new lines of potential experimentation!

What if you say something ridiculous as a name?

It just accepts it without question. There's some absurdity built into this which you can either fight against (by checking to make sure what is said makes sense) or not.

What if you just spout gibberish?

It tries to understand you! With sometimes bizarre results! Could this be a new form of divination?!

---

## Frustrations

annyang! is super exciting because speech recognition is exciting. But it does come with at least a couple of frustrating elements

* **One annyang! program running at a time**. You may well find that you need to make sure you only have one tab/window open in your browser that is using annyang!/speech recognition or they may conflict. If you're having trouble, try closing any windows using annyang! and restarting the program.
* **Speech recognition is not perfect**. You will inevitably experience situations where it just doesn't want to work, and that is life. Sometimes it's because your environment is too noisy. Sometimes it could be the way you speak. Sometimes it might just be in a bad mood?

It's still a lot of fun to play around with!

---

## "Done"

Unlike huge libraries like p5.js, annyang! isn't really all **that** complex and so there isn't that much to learn! This sort of library is more modular and specific - it does one job and it does it quite well.

What's important, then, is **what you do with it**. Experimenting with the **technical possibilities** in conjunction with the **meaning of speech** in terms of socio-cultural impact is a good start? As is more aesthetic experimentation with voices as **sounds**? What about the question of playing with **incorrect** speech recognition on purpose? What else could you do?

---

# }
