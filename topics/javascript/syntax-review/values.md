## Types of values

- JavaScript has a specific sets of __types__ of data we can put into variables (and manipulate and use more generally in our programming)
- They are:
  - `undefined` (nothing)
  - Number (numbers like `6` and `3.14`)
  - `NaN` (not a number)
  - Boolean (`true` or `false`)
  - String (`"Text in quotation marks"`)
  - Object (a more complex data structure)
  - `null` (also nothing)

???

- See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures

---

## Undefined

- As we have already seen, `undefined` is what is stored in a variable by default if nothing is assigned to it

```javascript
let x;
console.log(x); // undefined
```

- You can set something to `undefined` on purpose if you want

```javascript
let meaningOfLife = undefined; // So true
```

---

## Number

- We can store numbers in variables

```javascript
let x = 10;
let pi = 3.14159;
```

- To write a number value we just write it like you'd expect

---

## NaN (Not a Number)

- If you use certain functions that return a number, but something goes wrong and they can't give a number back, they return NaN
- You can't check if something is NaN with the equality operator, you need to use `isNaN()`

```javascript
let i = Math.sqrt(-1); // The square root of -1 is not a number (it's irrational)
console.log(i); // NaN
console.log(i === NaN); // false
console.log(isNaN(i)); // true
```

???

- Similarly you can get NaN with nonsense-y things like the following:

```javascript
let x = Math.floor("hello!");
console.log(x); // NaN
let y = parseInt("This is not a number!");
console.log(y); // NaN
```

---

## Boolean

- Boolean values are limited to being `true` or `false` and are the basis of logic in our programming

```javascript
let programmingIsMyPassion = true;
let programmingIsTooHardForMe = false;
```

- So to write the value `true` or `false` you just write the word, no special syntax

---

## String

- String values allow us to store text of any length in a variable
- You write a string __inside quotation marks__

```javascript
let theLetterA = "a";
let greeting = "Hello, World";
let mobyDick = "Call me Ishmael. Some years ago, ... only found another orphan. THE END.";
```

- You can also use __single quotes__

```javascript
let greeting = 'Hello, World!';
```

???

- You might choose single quotes because you want to include double quotes in your string itself, like

```javascript
let sheSaid = 'She said, "This is the life!"';
```

---

## Addition and strings

- You can combine strings using `+`:

```javascript
let greeting = "Hello" + ", " + "World" +"!";
console.log(greeting); // "Hello, World!"
```

- You can even add other kinds of values into strings

```javascript
let sentence = "My favorite number is ";
let number = 7;
let sayFavoriteNumber = sentence + number + "!";
console.log(sayFavoriteNumber); // "My favorite number is 7!"
```

---

## Template literals

- There is a special extra way of writing strings in ES6 called template literals, where you write your string inside backtick characters

```javascript
let greeting = `Hello, World!`;
```

- They're special for two reasons. One, they respect formatting:

```javascript
let greeting = `Hello, World!
How are you?`; // The carriage return is part of the string
```

- Two, you can include variables (or any expression) using `${expression}`:

```javascript
let name = "World";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, World!"
```

???

- More here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

---

## Math

- We can do the obvious kinds of maths using numbers

```javascript
3 + 3 // 6
3 - 3 // 0
3 * 3 // 9
3 / 3 // 1
3 ** 3 // 27 (power of)
```

---

## Math and variables

- We often use variables instead of literal values for this kind of math
- We often assign the results into variables

```javascript
let x = 10;
let y = 15;
let z = x * y; // z is 150
```

---

## More math

- There are other operators specifically for changing variables

```javascript
let x = 10;
x++; // x is now 11 (++ increases by one)
x--; // x is now 10 (-- decreases by one)
x += 3; // x is now 13 (+= adds the amount to the variable)
x -= 3; // x is now 10 (-= subtracts the amount from the variable)
x *= 2; // x is now 20 (*= multiplies the variable by the amount)
x /= 2; // x is now 10 (/= divides the variable by the amount)
```

---

## Type coercion

- In JavaScript there is the idea of __type coercion__
- This means JavaScript will try where possible to __convert values__ into types that will make sense in the context, for example

```javascript
2 + true; // 3 (true is converted to 1)
2 + false; // 2 (false is converted to 0)
```

- This becomes more weird with conditionals
- Generally just __avoid ever relying on type coercion__

???

- See more: https://medium.freecodecamp.org/js-type-coercion-explained-27ba3d9a2839

---

## Object

- The concept of an object is more complex than other data types
- In essence an object is a data type that __structures__ other data
- The most basic version of this is an __object literal__
- (But we also create objects via Object Oriented Programming)

---

## Object literals (declaring)

- We can declare objects literals like this

```javascript
let mobyDick = {
  author: "Herman Melville",
  title: "Moby Dick",
  alternateTitle: "The Whale",
  pages: 585,
  greatBook: true
};
```

- This kind of object is declared inside curly brackets, with a list of __properties__ and __values__ separated by commas inside them
- Each property has a name (with the same rules as variables) and can store any kind of data type as its value
- They're super useful for organizing related information together!

---

## Object literals (accessing)

- We access the properties of any object with __dot notation__

```javascript
let miffy = {
  name: "Miffy",
  age: 63
}
console.log(miffy.name); // "Miffy"
console.log(miffy.age); // 63
```
