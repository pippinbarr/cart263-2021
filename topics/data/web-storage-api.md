# localStorage {

---

## Memory

- To this point our webpages are like newborn babies each time we load the page
- They have no sense of history or memory - they just load the HTML/CSS/JavaScript and off they go
- But sometimes it would be nice to have a page/application/game/thing that could __persist over time__
- We might want a webpage that Knows What We Did Last Summer, or a game that remembers your high scores, an "AI" that knows how often you visit it, or simply something that remembers your name and greets you next time you show up...
- To do any of that we need some way to __store data__ between sessions on the page

---

## Security!

- The most obvious thing we might think of is storing a file on the user's computer, maybe even some JSON!
- The problem with this is that security in web browsers makes this process cumbersome and the user would have to give permission for the save every time, as well as manually load the file when they want to use it
- If we want the easy and continuous ability to access persistent data, this won't cut it

---

## `localStorage`

- In JavaScript there is an object called `localStorage` that does what we need
- It saves data (basically like variables with values in them) in the browser so that they stick around until next time
- Luckily, using `localStorage` is relatively simple...

---

## `setItem()`

- To __save data__ we use `setItem()` with two parameters:
  - a __key__, which is like a variable name
  - and the __data__ itself

```javascript
localStorage.setItem("meaningOfLife", "Be excellent to each other.");
```

- The above will __save__ the string `"Be excellent to each other."` with the key/name `"meaningOfLife"`.
- The key is always a __string__
- The data is any JavaScript value (e.g. a string, a number, a boolean, etc.)
- (Saving arrays and JavaScript objects are special cases we'll get to later)

---

## `getItem()`

- To __load data__ we use `getItem()` with one parameter:
  - the __key__ of the data we want to load

```javascript
let meaning = localStorage.getItem("meaningOfLife"); // "Be excellent to each other."
```

- If we use a key for which there is __no data__ we get back `null`

```javascript
let moaning = localStorage.getItem("moaningOfLife"); // null
```

- That means we can __check__ if some specific data has been saved before or not by trying to load it and then checking whether it's `null` (no data) or not `null` (there is data)

---

## Strings!

- It is very important to know that `localStorage` actually __saves everything as strings__!
- You can still save numbers and booleans etc., but when you load them they'll be strings...

```javascript
localStorage.setItem("myBoolean",true);
localStorage.setItem("myFloat",0.1);
localStorage.setItem("myArray",[1,2,3]);
...
let myBoolean = localStorage.getItem("myBoolean"); // "true" (NOT the boolean value true)
let myFloat = localStorage.getItem("myFloat"); // "0.1" (NOT the number 0.1)
let myArray = localStorage.getItem("myArray"); // "1,2,3" (NOT the array [1,2,3])
```

- This is very frustrating, because we would rather get back the kind of value that we put in
- To get back the correct data we need to take another step

---

## Objects to the rescue!

- The best and easiest way to ensure we keep our data in the format we want is to save __JavaScript objects__ containing our data, instead of individual values
- But to do this we have to convert the object to a string when we save it, and convert it back from a string when we load it
- Luckily there are two functions for exactly this!
  - `JSON.stringify()` converts an object (or other data) to a string
  - `JSON.parse()` converts an object (or other data) from a string
- (See the slide notes for a more extensive discussion of other approaches to saving and loading.)

???

#### Aside: saving and loading individual values

- If you really want to, you can still save individual values and convert them back from strings as you load them
- So for a boolean we could do something this:

```javascript
localStorage.setItem("myTruth",true);
...
let truthString = localStorage.getItem("myTruth"); // "true"
let truth = (truthString === "true"); // true
```

- For an integer we could do something like this:

```javascript
localStorage.setItem("myInt",20);
...
let intString = localStorage.getItem("myInt"); // "20"
let integer = parseInt(intString); // 20
```

- But this is pretty annoying because it requires __knowing__ what kind of value everything is meant to be and using the correct conversion method.
- We could use `JSON.parse()` to get around this most of the time:

```javascript
localStorage.setItem("myTruth",true);
localStorage.setItem("myInt",20);
...
let truthString = localStorage.getItem("myTruth"); // "true"
let truth = JSON.parse(truthString); // true

let intString = localStorage.getItem("myInt"); // "20"
let integer = JSON.parse(intString); // 20
```

- In the end it's a lot easier to just wrap our data in an object

---

## Saving data with an object

We save our data by storing it in an object and using `JSON.stringify()` before we save it:

```javascript
let data = {
  text: "Be excellent to each other.",
  number: 10,
  boolean: true,
  array: [1,2,3]
}
let dataString = JSON.stringify(data); // Stringify it!
localStorage.setItem("myData", dataString); // Save it!
```

We restore our data by loading it (as a string) and then converting it back to an object using `JSON.parse()`:

```javascript
let loadedDataString = localStorage.getItem("myData"); // Load the string!
let loadedData = JSON.parse(loadedDataString); // Parse the real data!
```

---

## Surgical Removal!

- It's entirely possible you might want to __stop__ remembering something in `localStorage` (maybe you want a forgetful webpage?!)
- For the specific case we use `removeItem()`

```javascript
let childhoodData = {
  years: [1999,2000,2001,2002],
  nickname: "Geezer"
};
localStorage.setItem("childhood",JSON.stringify(childhoodData)); // Save it one step!

...

JSON.parse(localStorage.getItem("childhood")); // The data is there and loads!

...

localStorage.removeItem("childhood"); // Delete the data!
JSON.parse(localStorage.getItem("childhood")); // null
```

---

## Nuclear Removal!

- For the nuclear case of removing __all stored data__ we use `clear()`

```javascript
let childhood = {
  description: "Sunny, happy, good"
}
let adolescence = {
  description: "Who am I???"
}
localStorage.setItem("childhoodData",JSON.stringify(childhood));
localStorage.setItem("adolescenceData",JSON.stringify(adolescence));

...

localStorage.clear();

localStorage.getItem("childhoodData"); // null
localStorage.getItem("adolescenceData"); // null
```

---

## Where is the data?

- `localStorage` saves and loads data based on the __domain__ its used on into the __browser__ that is viewing the page
- This means that a script running on a different domain __cannot__ see the stuff you save in `localStorage` on your domain
- This also means that a different browser viewing the __same page__ will not see any data saved by a different browser
- Naturally, then, different users (using different browsers) won't access the same data, it's quite __personalized__!
- (Also note that in a browser's "incognito" or "private" mode, `localStorage` is cleared when the window is closed.)

???

- For example, if I use `localStorage` in a program on my `pippinbarr.github.io` domain, then I'll be saving each of my keys with `setItem()` into the browser linked to that domain
- If I write two programs that both use the same key name, and that both run on the same domain, then they will __share__ that information (could be interesting, could be annoying)

---

## sessionStorage

- There is another place to save data called `sessionStorage`
- It works in __exactly__ the same way as `localStorage` with one difference: the data is cleared when you close the window/tab with the page running in it
- It's a bit like incognito mode/private browsing
- So it's a much more temporary place to save data

---

## I remember you...

- We often end up wanting to use a particular kind of structure a lot of the time
- Consider an example where you want a program to greet the user by name after they've entered it
- When the page loads we first try to __load__ the name data (with `getItem()`)
    - If it returns `null` we know __we don't know their name yet__, so we should ask them to enter their name with an `input` or something, and then use `setData()` to save it when they do
    - If it return data, then the name has been saved already, so we can just go ahead and display a greeting
- This process of first checking for pre-existing data and then reacting to whether it's there or not is often important
- See the __Animal Lover__ example for a simple version of this

---

# }
