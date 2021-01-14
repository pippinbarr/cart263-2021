# ResponsiveVoice {

---

## Summary

[ResponsiveVoice](https://responsivevoice.org/) is a JavaScript library designed to make it easier to access a browser's text-to-speech functionality. That is, it facilitates making the computer talk.

---

## Contents

* What is ResponsiveVoice?
* How to meet a library
* Meeting ResponsiveVoice

---

## What is ResponsiveVoice?

It's a speech synthesis library.

Most contemporary browsers (with exceptions) have speech built into them that we can use via JavaScript. Overall, this is known as the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API). It includes text-to-speech as well as things like speech recognition.

**Important:** text-to-speech isn't available in every single browser. Check out the [Can I use Speech Synthesis API](https://caniuse.com/speech-synthesis) page. It's pretty broadly supported.

The Web Speech API is a little complicated to use, however, and [ResponsiveVoice](https://responsivevoice.org/) is a JavaScript library designed to make it easier to use the text-to-speech component. That is, it facilitates making the computer talk! It takes care of a bunch of the underlying details and presents us with a simplified way of getting our computer to say things.

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

The ResponsiveVoice homepage is at [https://responsivevoice.org/](https://responsivevoice.org/).

The first thing we run into is a little text box that lets us **try out** the text-to-speech ResponsiveVoice facilitates. Try typing something into the box and pressing Play - you should hear your computer say what you typed! Appealing! You can also change the voice being used to say the text. Nice!

The other thing we probably notice about the page is that it's pushing itself as a **commercial solution** to text to speech in the browser. There's mention of their pricing model and there's a lot of extra layers of "product" that are about getting text-to-speech working **without** programming.

---

## Find resources

The site has a menu across the top pointing to the key sections of information available:

* **Pricing** contains information about the features available depending on how much you pay (including a free option). This tell us we will need to register to get access.
* **API** contains information about the ResponsiveVoice API (Application Programming Interface), which is essentially the set of JavaScript functions and objects that ResponsiveVoice makes available (very useful for us!)
* **Blog** is their blog. Useful if we want to keep up to date with what they're doing, but in generally looks quite commercial oriented.
* **Support** includes various help options, including the **API** documentation again but mostly tutorials for using their more commercially oriented products. Also includes a list of the potential **Languages** (voices) available.
* **Sign in** is of course for signing in. This is useful when we want to manage our personal access to the lirbary.

Really the key things we need to care about on the site are:

1. Registering for a **free** trial of the library and get our API key
2. **Signing in** to our account as needed to get key information
3. Looking at the **API** documentation to understand how to use the library

---

## Register

Since we need to Register to use ResponsiveVoice, we should do that first. You can go to the **Pricing** page and click on "Start Trial" to access the library for free. You'll need to provide your email address and your name and a password while registering.

When you finish the process, you'll end up being given a script tag that you can include to use ResponsiveVoice, something like this:

```html
<script src="https://code.responsivevoice.org/responsivevoice.js?key=API_KEY"></script>
```

Where `API_KEY` is a string of numbers and letters that is your personal **API key**. An API key is used to identify yourself when you access certain libraries. This is most obviously important when you're **paying** for that usage, but also helps the people running the library identify how much you use it etc. API keys are **very** common in programming, and this is the most basic version - you include your key as part of the script tag for the library.

Now, whenever you use ResponsiveVoice you should use your API key in the same way. If you forget it, you can go and find it by **signing in** on the ResponsiveVoice website.

---

## Look at examples, browse the API

The ResponsiveVoice homepage doesn't provide a separate set of examples for how we might use the library, so we'll actually want to go directly to looking at the **API** to find some basics.

[https://responsivevoice.org/api/](https://responsivevoice.org/api/)

When we look at the API for the first time, what we want to find are the basic **kinds** of things we can do with the library, and ideally some example JavaScript of how you do it. Fortunately, the ResponsiveVoice API documentation does this fairly well.

### Script tag

The first thing we see in the API is, again, the script tag needed to use the library in a project. Again, you would put your own personal API key in here. It's always nice to be reminded that we need a script tag in order to use a library.

After the script tag information, we see a fairly long list of functions that the ResponsiveVoice API makes available, starting with the most important, the `speak()` function...

### `speak()`

Since the `speak()` function is really the major thing we'll end up using most of the time, let's go into some detail on how it is documented here. Reading API documentation is a skill we need to build up as developers.

The documentation style isn't the absolute best, but it's not bad and not dissimilar to something like p5.js's reference. It's pretty representative of the kind of information we'll tend to see when reading API documentation, so it's well worth paying attention to its structure and approach.

#### Function signature

```
speak(string text, [string voice], [object parameters])
```

This is how the function is called, and tells us that it has three parameters: the text to speak, the voice to say it in, and an object with other parameters.

Note how each parameter has the **type** of value it is listed ("string" for the text, "string" for the voice, and "object" for the other paramters). This can be a helpful way to quickly know what kind of argument to provide.

Note how the second two parameters (voice and object parameters) have **square brackets** around them, which means they are **optional** and don't have to be used. So we could just call this function with only the text to speak.

#### Description

> Starts speaking the text in a given voice.

This tells us **very briefly** what the function does.

#### Parameter list

> text: String  
> The text to be spoken.  
> voice: String  
> Defaults to “UK English Female”. Choose from the available ResponsiveVoices.  
> parameters: Object  
> Used to add optional pitch (range 0 to 2), rate (range 0 to 1.5), volume (range 0 to 1) and callbacks.  
> Pitch, rate and volume may not affect audio on some browser combinations, older versions of Chrome on Windows for example.

Here we see the parameters listed again, this time with more detail about what each one means.

Note that alongside the voice parameter there's a link to the available voices. Useful to remember.

Note that the object parameters one tells us what those parameters can be (pitch, rate, volume, and callbacks)

Note that for the pitch, rate, and volume object parameters we're told the acceptable **range** of values (worth remembering)

#### Examples

Finally we come to perhaps the most clearly useful part of the documentation, which is a series of **examples** of how to actually use it in a program.

Reading these examples is great because it shows us concrete uses of the `speak()` function, including how to set the rate, pitch, and volume of the voice when it says the text.

One odd thing we do **not** see here is how to combine rate, pitch, and volume settings, but that is actually as simple as including all three properties when we use the function:

```javascript
responsiveVoice.speak("hello world", "UK English Male", {
  pitch: 2,
  rate: 1.5,
  volume: 1
});
```

The other element that is not well explained are the **callbacks**. These allow us to specify specific **functions** to call when specific speech events occur. In particular we have a property called `onstart` that lets us specify a function to call when the voice **starts** speaking, and a property called `onend` that lets us specify a function to call when the voice **finishes** speaking. Could be useful.

### Other functions

While `speak()` is the most crucial function to understand, it's worth also browsing through the others in order to have some picture in our head of what else can be done. In particular, we might take note of

* `cancel()` to stop the voice while it's speaking
* `getVoices()` to get a list of voices supported by a browser
* `isPlaying()` to check if a voice is currently speaking
* `pause()` and `resume()`

There are other things in there, and we can certainly be curious about those as well if we want!

---

## Obtaining the library

We've already seen how to obtain the ResponsiveVoice library, it's just the script tag listed at the top of the API, which we will put into our `index.html` in a project. We need to remember that we'll insert our own API key into the script tag though! (We can also get the correct script tag by signing into the ResponsiveVoice website.)

---

## Start experimenting

We've now completely a fairly good review of the library. As we get more confident with all this, we might actually choose to start experimenting with a library **before** conducting this kind of review, but at least initially it's a good idea to sit down and read through the available documentation before we start writing any code.

However, now it's time to get a project running and to start trying this thing out.

---

## Set up a project to use ResponsiveVoice

1. Download the [template p5 project](../../templates/template-p5-project.zip)
2. Add the script tag with your API key to the `index.html` **above** your `script.js` script tag

If you run the program and look in the console, you should see the message

```
ResponsiveVoice r1.7.0
```

(Or possibly a different version number than 1.7.0 if they update the library!)

---

## Say something

Let's return to the API and run some of their examples. To do this, we'll need to incorporate the ResponsiveVoice code into our p5 template.

Because most of the time audio only works after a user interaction, let's use a `mousePressed()` function to trigger the voice.

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);
}

function mousePressed() {
  responsiveVoice.speak("hello world");
}
```

Well, that's nice. Depending on which browser you're using, you may hear different **default** voices being used, but you should hear your computer say "hello world"!

---

## Experiment!

It's a good idea to **experiment** with the possibilities of **any** given function or parameter that a library provides - you might find something interesting! So in the spirit of experimentation, what can we play around with here? Just the text right?

But that could be interesting? Let's edit the string ResponsiveVoice is saying with some other options and listen...

Punctuation?

```javascript
responsiveVoice.speak("hello... world?");
```

Another language?

```javascript
responsiveVoice.speak("Salut, monde. Comment ça va?");
```

Numbers?

```javascript
responsiveVoice.speak("23948903284023");
```

Nonsense?

```javascript
responsiveVoice.speak("sdjfhlsfhlasdmuhleuwifmla");
```

There's already a lot to think about just from the ways that the voice responds to these different kinds of texts.

---

## Changing voices

The second `speak()` example points out we can change the voice that speaks with the second parameter, a string containing the name of a voice. One possible voice is called `UK English Male`, so let's try that out...

```javascript
responsiveVoice.speak("hello world", "UK English Male");
```

The choice of voice clearly changes a **lot** in terms of the experience of hearing the voice! All the qualities of a voice convey **meaning** after all. What does "UK English Male" seem to mean to you? What kind of person is he? What kinds of things "should" he say?

```javascript
responsiveVoice.speak("I say! Pip pip! Toodle-oo!", "UK English Male");
```

What kinds of things "shouldn't" he say?

```javascript
responsiveVoice.speak("I am crawling on the ceiling just above your head right now, watching you...", "UK English Male");
```

There's a huge range of possibilities in the relationship of speech to accent, language, and gender.

---

## Any voice?

While it would be amazing if you could just specify any voice at all...

```javascript
responsiveVoice.speak("hello world", "Frida Kahlo as performed by Salma Hayek");
```

It's not like that.

Instead, there's a [list of voices you can use](https://responsivevoice.org/text-to-speech-languages/), linked in the "Support" menu (as well as in the API) that mostly correspond to different **languages**.

So we can say something in "French" by using the "French Female" voice for example...

```javascript
responsiveVoice.speak("hello world", "French Female");
```

Interesting! Different voices say the "same thing" differently! Clearly another site for **experimentation**. Note that not every voice is available ("Latin Male" doesn't work for me). If we really want to know what voices are available we'd need to use `getVoices()` (by reading its documentation).

And, of course, "French Female" can probably do a better job of speaking actual French?

```javascript
responsiveVoice.speak("Bonjour! Comment ça va?", "French Female");
```

---

## Changing parameters

The API also shows examples of controlling three key options for a voice, the `pitch`, `rate`, and `volume`. Again, they show these all being used separately, but because they are being specified in an object, we can combine them:

```javascript
responsiveVoice.speak("Hello world", "UK English Male", {
  pitch: 2,
  rate: 2,
  volume: 1
});
```

Another huge opportunity to **experiment**! What values can we use for `pitch` and `rate` especially? The documentation tells us `pitch` can be between `0` to `1` and `rate` can be between `0` to `1.5`, so we should really try out various combinations...

Fast and squeaky?

```javascript
responsiveVoice.speak("Hello world", "UK English Male", {
  pitch: 2,
  rate: 2,
  volume: 1
});
```

Slow and scary?

```javascript
responsiveVoice.speak("Hello world", "UK English Male", {
  pitch: 0.2,
  rate: 0.5,
  volume: 1
});
```

Shudder.

---

## Callbacks

As we know from reading the API, ResponsiveVoice also provides two **callback** options with the `speak()` function.

We can call a function when the speech **starts** with the `onstart` option, and call a function when the speech **ends** with the `onend` option. This gives us the chance to do specific things when the voice is speaking. We could display the text being spoken for example...

```javascript
let phrase = `Hello, world!`;
let saying = ``; // Track what is currently being said

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // Display what is currently being said...
  background(255);

  push();
  textSize(32);
  textAlign(CENTER);
  text(saying, width / 2, height / 2);
  pop();
}

function mousePressed() {
  responsiveVoice.speak(phrase, "UK English Male", {
    onstart: showSpeaking,
    onend: hideSpeaking
  });
}

function showSpeaking() {
  saying = phrase;
}

function hideSpeaking() {
  saying = ``;
}
```

---

## Example: Random voice

As mentioned earlier, we can get access to **all** the voices available on the computer by using `getVoices()`. This returns an **array** of objects representing all the available voices, and we could then pick one at random...

```javascript
let voices; // To remember the array of voices
let currentVoiceName = ``;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Get the array of voices
  voices = responsiveVoice.getVoices();
}

function draw() {
  background(255);

  push();
  textSize(32);
  textAlign(CENTER,CENTER);
  text(currentVoiceName,width/2,height/2);
  pop();
}

function mousePressed() {
  // Choose a random voice object from the list
  let voice = random(voices);
  // We need the "name" property of our
  // randomly chosen voice object
  let currentVoiceName = voice.name;

  // Say the text using the randomly chosen voice and with
  // random rate and pitch.
  responsiveVoice.speak("Now I talk like this.", currentVoiceName);
}
```

**Note** that not all voices work!? Annoying!

---

## Hey presto!

Unlike huge libraries like p5.js, ResponsiveVoice isn't really all that complex and so there isn't that much to learn! This sort of library is more modular and specific - it does one job and it does it quite well.

What's important, then, is **what you do with it**. Experimenting with the **technical possibilities** in conjunction with the **meaning of voices** in terms of socio-cultural impact is a good start? As is more aesthetic experimentation with voices as **sounds**? What else could you do?

---

# }
