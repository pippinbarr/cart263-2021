# First-class functions {

---

## Summary

Functions in JavaScript are called "first-class" because they're treated like any other kind of **value**. That means functions can be assigned to variables, stored in arrays or object properties, passed as arguments to other functions, and more! Anonymous functions (functions without a name) are particularly common in JavaScript programming, and are important to recognize.

---

## Contents

* First-class functions?
* Functions as arguments
* Anonymous functions
* Too much information?
  * Arrow functions

---

## First-class functions?

In JavaScript functions are "first-class", as in they are "first-class citizens of the program"!

In essence this means that functions are treated like any kind of **value** in your program. This means they can be assigned to variables, stored in arrays or the the properties of objects, passed as arguments to other functions, among other things things...

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
alert(onePlusOne); // 2
```

In fact, all function names are essentially just the **variable name** that the function is stored inside!

---

## Functions as arguments

A common use of this nature of functions is passing a function as an **argument** to some other function. `setTimeout()` is a classic example of this!

When we call `setTimeout()` we have to provide two arguments:

1. a **function** to call,
2. a delay in milliseconds to call it after...

```javascript
function hello() {
  alert(`Hello!`); // Pop up an alert dialog that says "Hello!"
}

setTimeout(hello, 5000); // Call the hello() function after 5000 milliseconds
```

Here we pass the `hello` function to `setTimeout()` as an **argument**. Note we do **not** write parentheses after `hello` because we don't want to **call** the function, we want to **pass** the function to `setTimeout()`.

---

## Anonymous functions

Because functions are just another kind of **value**, we can actually create them without giving them a name at all. When we do this they are called **anonymous functions**. We define them in the same way, just without the name part.

### Assigning an anonymous function into a variable

Here's an example of creating an anonymous function, storing it in a variable, then passing that variable to `setTimeout()` so it will be called after a delay...

```javascript
let hello = function () { // Note how the function definition has no name!
  alert(`Hello!`);
};

setTimeout(hello, 5000); // Call the function inside the hello variable after 5000 milliseconds
```

It's a subtle distinction from the previous example, but the key here is that we define the function itself with **no name**.

### Using an anonymous function as an argument

Because we end up using functions like `setTimeout()` that expect a function as an argument a lot, we will quite often write the anonymous function definition itself **directly** inside the argument list!

```javascript
setTimeout(function () {
  alert(`Hello!`)
}, 5000); // Call the anonymous function provided after 5000 milliseconds
```

This will have the exact same result as the previous example, popping up a "Hello!" message after 5000 milliseconds. Here, though, the function to be called by `setTimeout()` is **defined inside the argument list** of the `setTimeout()` call.

This can take some getting used to.

But it's **worth** getting used to. For one thing, you'll see it a lot out there on the ol' internet! It can be a very **clear** way of programming because it puts the code that will be run exactly where you're dealing with it in the program, rather than somewhere else in a separate function definition.

---

## Too much information?

### Arrow functions

There's another way to write anonymous functions in an abbreviated style called an **arrow function**. You don't **have** to use them, but they're quite popular and you will end up seeing them in people's code, so it's worth at least knowing the basics.

#### Writing an arrow function

Previously, we wrote an anonymous function like this...

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

Hopefully you can see this is really quite similar! The key different is that we no longer write the word **function** and instead put an "arrow" (the `=>`) after the parentheses that would contain any parameters. The code the arrow function will run is still just inside curly brackets as per usual.

#### Arrow functions and `this`

One of the big advantages of arrow functions is that they don't change the meaning of `this` inside the block of code they run (unlike regular functions). This can be especially helpful when using something like `setTimeout()` inside a class, which **doesn't** work with a method...

`script.js`
```javascript
let tiger = new Tiger();
```

`Tiger.js`
```javascript
class Tiger {
  constructor() {
    this.name = "Tony";

    // Say name one second after being created?
    setTimeout(this.sayName, 1000);
  }

  sayName() {
    alert(this.name); // undefined! Being called by setTimeout changes the meaning of "this"
  }
}
```

And also doesn't work with a standard anonymous function...

`script.js`
```javascript
let tiger = new Tiger();
```

`Tiger.js`
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

The above doesn't work because the `this` inside the anonymous function actually refers to the context of the anonymous function and __not__ to the class, thus, it will print `undefined` because `this.name` doesn't exist inside the function. The whole question of what `this` means in different places in a program is relatively complicated! If you're really interested, consider reading [The many faces of 'this' in javascript](https://blog.pragmatists.com/the-many-faces-of-this-in-javascript-5f8be40df52e) or researching further online.

We can fix this with an arrow function which does **not** change the meaning of `this`:

`script.js`
```javascript
let tiger = new Tiger();
```

`Tiger.js`
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
alert(onePlusOne); // 2
```

#### Even more abbreviated arrow functions

If your function only needs to return the result of an expression (like our adding functions) you don't even need the curly brackets or the `return`!

```javascript
let add = (a, b) => a + b;
let onePlusOne = add(1, 1);
alert(onePlusOne); // 2
```

Now that is getting seriously abbreviated!

---

# }
