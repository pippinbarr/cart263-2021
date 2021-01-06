# First-class functions {

---

## Summary

---

## Contents

* First-class functions?
* Functions as arguments
* Anonymous functions
* Too much information?
  * Arrow functions

---

## First-class functions?

In JavaScript functions are "first-class", as in they are "first-class citizens of the program"! In essence this means that functions are just another kind of **value** in your program. This means they can be stored in variables, stored in the properties of objects, passed as arguments to other functions, and other slightly surprising things...

Consider:

```javascript
// A function to add two numbers together and return the result
// (Amazing I know)
function add(a,b) {
  return a + b;
}

// We can create a new variable and ASSIGN the add function to it!
let plus = add;
// Now the variable "plus" has the add() function inside it

// And we can then CALL the function inside plus in the usual way!
let onePlusOne = plus(1,1); // Call the function inside plus (which is the add() function!)
console.log(onePlusOne); // 2
```

In fact, all function names are essentially just the **variable name** that the function is stored inside!

---

## Functions as arguments

A much more common use of functions in this way is when we pass a function as an **argument** to some other function. `setTimeout()` is a good example of this!

When we call `setTimeout()` we give it a **function** to call, and a delay to call it after...

```javascript
function hello() {
  alert(`Hello!`); // Pop up an alert dialog that says "Hello!"
}

setTimeout(hello, 5000); // Call the hello() function after 5000 milliseconds
```

Here we pass the `hello` function to `setTimeout()` as an argument. Note we do **not** include parentheses after `hello` because we don't want to **call** it, we want to pass the function itself to `setTimeout()`.

---

## Anonymous functions

Because functions are just another kind of **value**, we can actually create them without giving them a name at all. When we do this they are called **anonymous functions**. We define them in the same way, just without the name part.

### Assigning an anonymous function into a variable

Here's an example of creating an anonymous function, storing it in a variable, then passing that variable to `setTimeout()` so it will be called after a delay...

```javascript
let hello = function () {
  alert(`Hello!`)
};

setTimeout(hello, 5000); // Call the function inside the hello variable after 5000 milliseconds
```

It's a subtle distinction from the previous example, but the key here is that we define the function itself with **no name**.

### Using an anonymous function as an argument

Because we end up using functions like `setTimeout()` that expect a function as an argument a lot, we will very often write the anonymous function **directly** inside the argument list!

```javascript
setTimeout(function () {
  alert(`Hello!`)
}, 5000); // Call the anonymous function provided after 5000 milliseconds
```

This will have the exact same result as the previous example, popping up a "Hello!" message after 5000 milliseconds. Here, though, the function to be called by `setTimeout()` is defined **inside** the argument list of the `setTimeout()` call.

This can take some getting used to - it looks quite alarming! But it's **worth** getting used to. For one thing, you'll see it a lot out there on the internet! For another, it can be a very **clear** way of programming because it puts the code you want to run exactly where you're dealing with it in the program.

---

## Too much information?

### Arrow functions

There's another way to write anonymous functions in an abbreviated style called an **arrow function**. You don't **have** to use them, but they're quite popular and you will end up seeing them in people's code, so it's worth at least knowing the basics.

#### Writing an arrow function

Previously, we wrote out anonymous function like this...

```javascript
setTimeout(function () {
  alert(`Hello!`)
}, 5000); // Call the anonymous function provided after 5000 milliseconds
```

This would be written as follows as an arrow function...

```javascript
setTimeout(() => {
  alert(`Hello!`)
}, 5000); // Call the anonymous function provided after 5000 milliseconds
```

Hopefully you can see this is really quite similar! The key different is that we no longer write the word **function** and instead put an "arrow" (the `=>`) after the parentheses for any parameters. The code the arrow function will run is still just inside curly brackets as per usual.

#### Arrow functions and `this`

One of the big potential advantages of arrow functions is that they don't change the meaning of `this` inside the block of code they run (unlike regular functions). This can be especially helpful when using something like `setTimeout()` inside a class...

```javascript
class Tiger {
  constructor() {
    this.name = "Tony";

    // Say name one second after being created?
    setTimeout(function () {
      alert(this.name); // undefined! The function changes the meaning of "this"
    },1000);
  }
}
```

The above doesn't work because the `this` inside the anonymous function actually refers to the context of the anonymous function and __not__ to the class, thus, it will print `undefined` because `this.name` doesn't exist inside the function.

We can fix this with an arrow function which does **not** change the meaning of `this`:

```javascript
class Tiger {
  constructor() {
    this.name = "Tony";

    // Say name one second after being created?
    setTimeout(() => {
      alert(this.name); // Tony!
    },1000);

  }
}
```

Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

---

#### Arrow functions and parameters

If your function has parameters you would put them inside the parentheses. For example, we could create our silly `add` function again with an anonymous function assigned to a variable...

```javascript
let add = (a, b) => {
  return a + b;
};
let onePlusOne = add(1, 1);
console.log(onePlusOne); // 2
```

#### Even more abbreviated arrow functions

If your function only needs to return the result of an expression (like our adding functions) you don't even need the curly brackets or the `return`!

```javascript
let add = (a, b) => a + b;
let onePlusOne = add(1, 1);
console.log(onePlusOne); // 2
```

Now that is getting seriously abbreviated!

---

# }
