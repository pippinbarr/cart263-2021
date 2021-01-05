## Functions

- Functions create reusable code that is separate out from the rest of our program

```javascript
// Function definition
function sayYouLoveJavaScript() {
  console.log("I love JavaScript!");
}

// Function call
sayYouLoveJavaScript(); // "I love JavaScript!"
```

- We __define a function__ by writing `function`, then the name of the function in camelCase, then parentheses, then curly brackets with the code for that function inside them
- We __call a function__ by writing its name with parentheses

---

## Functions with arguments

- We can define arguments for our functions to be able to pass values into them for them to use

```javascript
function sayTo(person, text) {
  console.log("Hey " + person + " ...");
  console.log(text);
}

sayTo("Susie", "I love programming!"); // "Hey Susie..." "I love programming!"
```

- You can have as many arguments as you want (separated by commas) and they can contain any kind of value you want
- You use them in your function just like other variables

---

## Functions with return values

- We can define functions that give information back using `return`

```javascript
function square(x) {
  let result = x * x;
  return result;
}

console.log(square(2)); // 4
console.log(square(10)); // 100
```

- We use `return` to "send back" a value from the function
- If a function has a return value we can use the function anywhere we want to use the value it returns (the function call is "replaced" by the value returned)
