## Variables

- A variable is a __named container for data__
- To create a variable we __declare__ it

---

## Declaring a variable

```javascript
let x;
let pi;
let greetingText;
```

- The above declares __three__ variables called `x`, `pi` and `greetingText` respectively
- We use `camelCase` for variable names (first letter lower case, subsequent words capitalized, no spaces)
- Because these variables have __no value stored in them__ they will contain `undefined` by default

???

- What is the difference between `let` and `var`?
- It's a difference in __scope__
- Variables declared with `var` are visible/usable anywhere within the __function__ they are declared in or, if declared outside all functions, they are visible everywhere
- Variables declared with `let` are visible/usable only within the __block__ they are declared in (the curly brackets they are inside) or, if declared outside all blocks, they are visible everywhere

---

## Declaring a variable with a value

```javascript
let x = 10;
let pi = 3.14159;
let greetingText = "Hello, World!";
```

- The above declares the same three variables but now they begin their lives with the specified values
- We put values into variables using the __assignment operator__ which is a __single__ `=` sign

---

## Using the assignment operator

```javascript
let x = 100;
...
x = 101;
```

- We can use the assignment operator to set the value at the moment of declaration or any time afterwards
