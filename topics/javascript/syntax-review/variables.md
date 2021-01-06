# Variables {

---

## Summary

---

## Contents

* What is a variable?
* Declaring a variable
* Declaring a variable with a value
* Assigning a value later
* Too much information?
  * `let` versus `var`
---

## What is a variable?

A variable is a **named container for data**.

---

## Declaring a variable

```javascript
let x;
let pi;
let greetingText;
```

The above declares **three** variables called `x`, `pi` and `greetingText` respectively. We use `camelCase` for variable names (first letter lower case, subsequent words capitalized, no spaces).

Because these variables have **no value stored in them** they will contain `undefined` by default.

We can also declare multiple variables at once by using commas. The following will declare the same three variables as the previous example, all containing `undefined`.

```javascript
let x, pi, greetingText;
```

---

## Declaring a variable with a value

```javascript
let x = 10;
let pi = 3.14159;
let greetingText = "Hello, World!";
```

The above declares the same three variables but now they begin their lives with the specific values. We put those values into the variables using the **assignment operator** which is a **single** `=` sign

Again, we can do this with the comma separation if we want to:

```javascript
let x = 10, pi = 3.14159, greetingText = "Hello, World!";
```

Given that this is quite a lot less clear, you should limit your use of this style.

---

## Assigning a value later

We can declare a variable in one place (often at the top of our script) and then **assign** a new value to it later on in our program:

```javascript
let x = 100; // Declare x with a value of 100

// Image more lines of code here

x = 101; // Change the value in x to 101
```

Once we've **declared** a variable, we can use the assignment operator to set its value any time afterwards.

---

## Too much information?

### `let` versus `var`

In many examples of JavaScript you'll see, variables will be declare using the special word `var` instead of `let`. They **both** declare a new variable, bringing it into existence, so what's the difference?

The difference is related to **scope**. The scope of a variable tells us where in our program we can use that variable based on where it was declared.

#### `var`

Variables declared with `var` are visible/usable anywhere within the **function** they are declared in or, if declared outside all functions, they are visible everywhere.

```javascript
var globalVariable = 10; // Visible everywhere!

function setup() {
  var localVariable = 20; // Visible inside setup()!

  if (localVariable > 10) {
    var anotherLocalVariable = 30; // Visible inside setup()
  }

  console.log(globalVariable); // 10
  console.log(localVariable); // 20
  console.log(anotherLocalVariable); // 30
}

function draw() {
  console.log(globalVariable); // 10
  console.log(localVariable); // ReferenceError: localVariable is not defined
  console.log(anotherLocalVariable); // // ReferenceError: anotherLocalVariable is not defined
}
```

#### `let`

Variables declared with `let` are visible/usable only within the **block** they are declared in (the curly brackets they are inside) or, if declared outside all blocks, they are visible everywhere

```javascript
let globalVariable = 10; // Visible everywhere!

function setup() {
  let localVariable = 20; // Visible inside setup()'s curly brackets

  if (localVariable > 10) {
    let anotherLocalVariable = 30; // Visible inside this if statement's curly brackets
  }

  console.log(globalVariable); // 10
  console.log(localVariable); // 20
  console.log(anotherLocalVariable); // ReferenceError: anotherLocalVariable is not defined
}

function draw() {
  console.log(globalVariable); // 10
  console.log(localVariable); // ReferenceError: localVariable is not defined
  console.log(anotherLocalVariable); // ReferenceError: anotherLocalVariable is not defined
}
```

It's the different behaviour of `anotherLocalVariable` here that's the key. When we use `let` we are guaranteeing our variable will **only** exist within its current curly brackets. This is much more consistent than the behaviour of `var` and that's why we prefer `let`!

---

# }
