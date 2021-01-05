## New: Functions are objects!

- JavaScript has what are called "first class functions"
- This means that functions are "just" another kind of object
- For our purposes this means: you can store functions in variables (and also in the properties of objects)

---

## A function in a variable

```javascript
function square(x) {
  return x * x;
}

let mySquareFunction = square;

console.log(mySquareFunction(10)); // 100
```

- We define a function called square
- We declare a variable called `mySquareFunction` which will contain the function and __assign__ the `square` function to it
- Then we can __call__ the function by writing the name of the variable with the function in it (`mySquareFunction`) and then parentheses with the arguments, and it works

---

## An anonymous function in a variable

```javascript
let square = function (x) {
  return x * x;
};

console.log(square(10)); // 100
```

- Note the difference in syntax here
- We declare a variable called `square` which will contain the function
- We define the function __without a name__, but otherwise the same: just `function` and the parentheses with its arguments and the body of the function inside curly brackets and __store__ it in the variable `square`
- Again, we __call__ the function by writing the name of the variable and then parentheses with the arguments
- A function without a name like this is called an __anonymous function__

---

## Functions as arguments!

- This means you can pass a function as an argument to a function
- A classic example of this is with `setTimeout()` which takes a __function__ as a parameter as well as the __delay__ after which to call it

```javascript
let hello = function () {
  console.log("Hello, World!");
}

setTimeout(hello, 1000); // Prints "Hello, World!" after 1000 milliseconds
```

- Or even...

```javascript
setTimeout(function () {
  console.log("Hello, World!");
}, 1000); // Prints "Hello, World!" after 1000 milliseconds
```

---

## Extra: Arrow functions

- Just so you know, there's another way to write anonymous functions in an abbreviated style

```javascript
setTimeout(function() {
  console.log("... one second later!");
},1000);
```

becomes

```javascript
setTimeout(() => {
  console.log("... one second later!");
},1000);
```

???

- There are a few important differences with arrow functions
- Obviously they're a bit more compact
- Perhaps most "interestingly" they preserve the existing context when you use `this` inside the function, which can be helpful especially with object oriented programming - essentially with a normal anonymous function a new context (and therefore a new `this`) is created, but with arrow functions this doesn't happen

```javascript
class Tiger {
  constructor() {
    this.name = "Tony";
  }

  sayNameAfterDelay() {
    setTimeout(function () {
      console.log(this.name); // undefined
    },1000);
  }
}
```

- The above doesn't work because the `this` inside the anonymous function actually refers to the context of the anonymous function and __not__ the class, it will print `undefined`

```javascript
class Tiger {
  constructor() {
    this.name = "Tony";
  }

  sayNameAfterDelay() {
    setTimeout(() => {
      console.log(this.name); // Tony
    },1000);
  }
}
```

- The above arrow function version does work because the arrow function __doesn't__ create a new context (or `this`), and so the `this` still refers to the `Tiger`.

- Read more here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions (or Google it)
