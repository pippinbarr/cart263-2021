## Arrays {

---

## Summary

Arrays are a special data structure we can use to store a series of values in order. They're also useful even if we just want to group a set of related elements together (not worrying about order).

---

## Contents

* Declaring arrays
* Accessing array elements
* `push()` and `pop()`
* `unshift()` and `shift()`
* `length`
* `for` loops and arrays

---

## Declaring arrays

We can declare an array with values in it when we create it:

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

Each value inside an array is called an **element**, so the numbers in the above example are each elements in the array.

We can also declare an **empty** array to begin with and add things to it later on:

```javascript
let numbers = []; // No elements!
```

---

## Accessing array elements

We can get access to any individual element in an array using its **index**. Array elements are numbered from `0`, starting with the first element.

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers[0]); // 1 is the number at index 0
console.log(numbers[9]); // 10 is the number at index 9
```

When we access a specific element in this way, we can just treat it like a variable and assign values or use it in a maths expression or anything else...

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers[9] = 20; // Set the last element to 20
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 20]

numbers[0] = numbers[1] + numbers[4];
console.log(numbers); // [7, 2, 3, 4, 5, 6, 7, 8, 9, 20]
```

---

## `push()` and `pop()`

We can use `push()` on an array to add an element to the end, and we can use `pop()` on an array to remove the element at the end.

```javascript
let numbers = [1,2,3,4,5];

numbers.push(6); // Add 6 to the end of the array
console.log(numbers); // [1,2,3,4,5,6]

numbers.pop(); // Remove the last element in the array
console.log(numbers); // [1,2,3,4,5]

numbers.pop(); // Remove the last element in the array
console.log(numbers); // [1,2,3,4]

let endValue = numbers.pop(); // Remove the last element in the array and store it
console.log(endValue); // 4
console.log(numbers); // [1,2,3]
```

---

## `unshift()` and `shift()`

We can use `unshift()` to add an element to the front, and we can use `shift()` to remove an element from the front. Essentially the same thing, just working with the front of the array.

```javascript
let numbers = [1,2,3,4,5];

numbers.unshift(0); // Add 0 to the front of the array
console.log(numbers); // [0,1,2,3,4,5]

numbers.shift(); // Remove the first element in the array
console.log(numbers); // [1,2,3,4,5]

numbers.shift(); // Remove the first element in the array
console.log(numbers); // [2,3,4,5]

let frontValue = numbers.shift(); // Remove the first element in the array and store it
console.log(frontValue); // 2
console.log(numbers); // [3,4,5]
```

---

## `length`

- We can find out the length of an array using its `length` property

```javascript
let numbers = [1,2,3,4,5];
console.log(numbers.length); // 5
numbers.pop();
console.log(numbers.length); // 4
```

---

## `for` loops and arrays

`for` loops are especially marvellous in combination with arrays because we can go through every element in an array and do something with it. We could add all the numbers in an array together for example...

```javascript
let numbers = [1,2,3,5,7,11,13];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log(sum); // 42
```

Note the use of `numbers.length` to limit `i` (this guarantees we won't count past the end of the array).

When we're working with programs that contain arrays of objects we need to update, `for` loops are great there too, e.g. if we have an array of cat objects that will wander around on the screen with their `update()` method we can update all the cats in the array with a `for` loop:

```javascript
for (let i = 0; i < cats.length; i++) {
  cats[i].update();
}
```

---

# }
