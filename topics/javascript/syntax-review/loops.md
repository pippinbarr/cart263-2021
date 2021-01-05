## Loops

- Quite often in programming it's useful to repeat the same or similar set of code over and over again
- We achieve this more efficiently using loops
- There are two main kinds of loops, `while` loops and `for` loops

---

## While loop

- A while loop keep executing the code inside it until its condition becomes `false`

```javascript
let x = 5;
while (x > 0) {
  console.log(`Loop ${x}!`);
  x--;
}
```

- Importantly, the condition used in a while loop needs to become `false` or you have a loop that will never stop!
- Above, we will see: "Loop 5" "Loop 4" "Loop 3" "Loop 2" "Loop 1"
- Then the loop will stop because `x` becomes `0`

???

- A simple infinite loop would be to just make `x` go up instead of down

```javascript
let x = 5;
while (x > 0) {
  console.log("Loop!");
  x++;
}
```

- This loop can't end because `x` starts out greater than `0` and keeps getting bigger!
- Clearly one could do this with a typo, so be careful!
- There is also such a thing as a do while loop
- A do while loop is exactly the same as a while loop, except that it executes the code before checking the condition

```javascript
let x = 5;
do {
  console.log(`Loop ${x}!`);
  x--;
} while (x > 0)
```

- Again, the loop runs five times

---

## For loop

- A for loop is a special kind of loop syntax that focuses on loops based on __counting__
- It creates a special variable called an __iterator__ and changes the iterator using the __update step__ until the loop's __condition__ becomes false

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

- Here `i` is the __iterator__, it goes up by 1 each time through the loop, and the loop stops when i is no longer less than 10
- The __condition__ is checked before the loop runs while the __update step__ (`i++`) is performed __after__ the loop has run
- `i` starts at 0, and then becomes 1, 2, 3, 4, 5, 6, 7, 8, 9 before the loop ends (because `i` becomes 10 and the condition becomes false)

---

## For loops and arrays

- For loops are especially marvelous at going through an array and doing stuff with it

```javascript
let numbers = [1,2,3,5,7,11,13];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

- Note the use of `numbers.length` to limit `i` (this guarantees it won't count past the end of the array)
- This code will print out the value of every element in the array (the prime numbers from 1 to 13)

---

## Extra: forEach loops

- There's another kind of loop specifically for arrays
- It works by calling a _function_ on each element in an array, passing the element as an argument

```javascript
let numbers = [1,2,3,5,7,11,13];
numbers.forEach(function (element) {
  console.log(element);
});
```

- `forEach` is __not guaranteed to go through the array in order__
- But it can be a nice way to do something to every array element when order doesn't matter, e.g.

```javascript
enemies.forEach(function (enemy) {
  enemy.update();
  enemy.display();
});
```

???

- Note that this is a classic use of an anonymous function!
- This kind of use of a function, passed as a parameter to some other function so it can be used at the appropriate time or with the appropriate data, is called a "callback" function
- If you dislike using anonymous functions (which is fine!) you can write a defined function instead:

```javascript
enemies.forEach(handleEnemy);

function handleEnemy(enemy) {
  enemy.update();
  enemy.display();
}
```
