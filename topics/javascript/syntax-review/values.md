# Values {

---

## Summary

A quick look at the different types of values we can store inside JavaScript variables, pass as arguments, and `return`.

---

## Contents

* Types of values
* Numbers
* Booleans
* Strings
* Template literals
* Object literals
* Objects
* Arrays
* "Nothings"

---

## Types of values

JavaScript has a specific sets of **types** of data we can put into variables (and manipulate and use more generally in our programming):

* Numbers (like `6` or `3.14159`)
* Booleans (`true` or `false`)
* Strings (`"This is a string!"`)
* Template literals (\``This is a template literal!`\`)
* Object literals (more complex structures of data made up of properties and methods)
* "Nothings" (there are different values to indicate there is "nothing" in a variable, including `undefined`, `null`, and `NaN`)

See also: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

---


## Numbers

We can store numbers in variables. They look just like numbers!

```javascript
let x = 10;
let pi = 3.14159;
```

We can also do basic math with our numbers using the appropriate symbols...

```javascript
3 + 3 // 6
3 - 3 // 0
3 * 3 // 9
3 / 3 // 1
3 ** 3 // 27 (power of)
```

Math with our numbers is usually more interesting when we're using numbers in variables...

```javascript
x = x + vx; // Add velocity to horizontal position
y = y + vy; // Add velocity to vertical position
```

Programmers feel cool when they use abbreviations of common maths expressions, like adding or subtracting numbers and variables...

```javascript
x++; // Add 1 to x
x--; // Subtract 1 from x
x += 3; // Add 3 to x
x -= 3; // Subtract 3 from x
x *= 2; // Multiple x by 2
x /= 2; // Divide x by 2
```

---

## Booleans

Boolean values are limited to being `true` or `false` and are the basis of logic in our programming. We use the idea of `true` or `false` constantly, though we don't necessarily always **write it out explicitly** like this...

```javascript
let programmingIsMyPassion = true;
let programmingIsTooHardForMe = false;
```

So, to write the value `true` or `false` you just write the word, no quote marks, no special syntax

---

## Strings

Strings allow us to store text of any length in a variable. We write string values inside quotation marks, and the type of quotation marks matter.

We can use double quotes:

```javascript
let theLetterA = "a";
let greeting = "Hello, World";
let mobyDick = "Call me Ishmael. Some years ago, ... only found another orphan. THE END.";
```

We can also use single quotes for the exact same effect:

```javascript
let theLetterA = 'a';
let greeting = 'Hello, World';
let mobyDick = 'Call me Ishmael. Some years ago, ... only found another orphan. THE END.';
```

The main reason to use one of the other is to avoid trouble when you have single or double quotes in the text you actually want to store in the string. So if we have text that includes double quotes, we might use single quotes:

```javascript
let sheSaid = 'She said, "This is the life!"';
```

We can also do basic addition (called concatenation) with strings using the `+` operator:

```javascript
let greeting = "Hello" + ", " + "World" +"!"; // "Hello, World!"
```

Which is mostly useful as a way to include variables in our strings:

```javascript
let sentence = "My favorite number is ";
let number = 7;
let myFavoriteNumber = sentence + number + "!"; // "My favorite number is 7!"
```

---

## Template literals

There is a better form of string in ES6 called a template literal. All it really involves is using back-tick characters instead of single or double quotes:

```javascript
let greeting = `Hello, World!`;
```

But we get some extra special powers.

One, we can include formatting in our strings:

```javascript
let greeting = `Hello, World!
How are you?`; // We can write multiline strings!
```

Two, we have a better way to include the values in variables (or any expression) using `${expression}`:

```javascript
let name = "World";
let greeting = `Hello, ${name}!`; // "Hello, World!"
```

Generally speaking, we should use template literals for our strings.

---

## Object literals

Object literals are a nice way to organize a collection of data into a single value that can be stored in a variable. They allow us to have a single object with multiple **properties**:

We can declare objects literals like this:

```javascript
let mobyDick = {
  author: "Herman Melville",
  title: "Moby Dick",
  alternateTitle: "The Whale",
  pages: 585,
  greatBook: true
};
```

This kind of object is declared by writing curly brackets with a list of **properties** and **values** separated by commas inside them. Each property has a name (with the same rules as variables) and can store any kind of data type as its value (including another object literal!). In the above, `author`, `title`, `alternateTitle`, `pages`, and `greatBook` are all **properties** of the object literal in the `mobyDick` variable. Note how they store **different** types of values, and how all the properties are **related** (they're all information about a book).

Object literals super useful for organizing related information together!

We access the properties of any object with **dot notation**:

```javascript
let miffy = {
  name: "Miffy",
  age: 63
}
console.log(miffy.name); // "Miffy"
console.log(miffy.age); // 63
```

---

## Objects

We also create objects when we use **Object-Oriented Programming** (OOP). That is, when we define a `class` and then create a `new` instance of the class we end up with an **object**. We'll cover the OOP syntax in a separate module.

---

## Arrays

Arrays are technically a kind of **object**, but it makes sense to think about them separately most of the time. We'll cover their syntax in a separate module.

---

## "Nothings"

Because we store values in variables and pass them as arguments and receive them as `return`s from functions, we also need some way of dealing with situations where there's **nothing there**.

There are three key kinds of "nothing" that can end up in variable.

### `undefined`

`undefined` is what is stored in a variable by default if nothing is assigned to it:

```javascript
let x;
console.log(x); // undefined
```

You can also set something to `undefined` on purpose if you want:

```javascript
let meaningOfLife = undefined; // So true. So true.
```

### `null`

`null` is traditionally used when we **would** have an object in a variable (or return or argument) but for some reason there's nothing instead. This happens most often when you call a function that would normally return an object, but it can't for some reason, so it returns `null` instead.

To use an example from web programming, if we ask the browser to give us a reference to an element on the current webpage that doesn't exist, we get back `null`...

```javascript
let element = document.getElementById("nonexistent-id");
console.log(element); // null
```

### `NaN` (Not a Number)

When you use certain functions that are designed to return a number, sometimes something goes wrong and they can't give back a sensible number, so they return `NaN`.

```javascript
let i = Math.sqrt(-1); // NaN, because the square root of -1 is not a number (well, it's irrational)
```

You can't check if something is `NaN` with the equality operator, though:

```javascript
let i = Math.sqrt(-1);
console.log(i === NaN); // false
```

Instead, you need to use `isNaN()`:

```javascript
let i = Math.sqrt(-1);
console.log(isNaN(i)); // true
```

You might most obviously get `NaN` in one of your variables if you try to add an `undefined` variable to it, e.g.

```javascript
let x = 10; // x is 10
let y; // y is undefined
let z = x + y; // z is NaN
```

---

# }
