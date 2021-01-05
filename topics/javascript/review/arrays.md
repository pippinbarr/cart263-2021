## Arrays

- An array is a data type that allows us to store values in order
- The values (elements) in an array are numbered (indexed) starting at `0`
- We can declare an array with values in it when we create it
- We access array __elements__ by their __index__ (number)

```javascript
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers[0]); // 1
console.log(numbers[9]); // 10
numbers[9] = 20;
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 20]
```

- We can use an array element anywhere we would use a value
- And we can assign to array elements just like they're variables

---

## Pushing and popping

- We can use `push()` on an array to add an element to the end
- We can use `pop()` on an array to remove the element at the end

```javascript
let numbers = [1,2,3,4,5];
let endValue = numbers.pop();
console.log(endValue); // 5
console.log(numbers); // [1,2,3,4]
numbers.push(100);
console.log(numbers); // [1,2,3,4,100]
```

---

## Shifting and unshifting

- We can use `unshift()` to add an element to the front
- We can use `shift()` to remove an element from the front

```javascript
let numbers = [1,2,3,4,5];
let firstValue = numbers.shift();
console.log(firstValue); // 1
console.log(numbers); // [2,3,4,5]
numbers.unshift(100);
console.log(numbers); // [100,2,3,4,5]
```

---

## Length

- We can find out the length of an array using its `length` property

```javascript
let numbers = [1,2,3,4,5];
console.log(numbers.length); // 5
numbers.pop();
console.log(numbers.length); // 4
```

---

## Arrays are objects!

- You may have already worked out from the dot notation used with `push()`, `pop()`, `length`, etc. that arrays are another kind of object
- We can use arrays anywhere you would use a value: in a variable, as an argument for a function, as a property of an object, even as an element in another array!
