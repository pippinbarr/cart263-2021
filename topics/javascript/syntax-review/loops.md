## Loops {

---

## Summary

Quite often in programming it's useful to repeat the same or similar set of code over and over again. We achieve this more efficiently using loops. There are two main kinds of loops, `while` loops and `for` loops.

---

## Contents

* `while` loop
* `for` loop

---

## `while` loop

A while loop keep executing the code inside it until its condition becomes `false`:

```javascript
let x = 1;
while (x <= 5) {
  console.log(`Loop ${x}!`);
  x = x + 1;
}
```

This will print out:
```
Loop 1
Loop 2
Loop 3
Loop 4
Loop 5
```

Then the loop will stop because `x` goes up to `6` and the condition is false.

---

## `for` loop

A for loop is a special kind of loop syntax that focuses on loops based on **counting**. It creates a special variable called an **iterator** and changes the iterator using the **update step** until the loop's **condition** becomes false:

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

This will print out

```
0
1
2
3
4
5
6
7
8
9
```

`i` is the **iterator**, it goes up by 1 each time through the loop, and the loop stops when `i` is no longer less than 10.

The **condition** is checked before the loop runs while the **update step** (`i++`) is performed **after** the loop has run.

So, `i` starts at 0, and then becomes 1, 2, 3, 4, 5, 6, 7, 8, 9 until the loop ends when `i` becomes 10 and the condition becomes false.

---

## `for` loops and arrays

`for` loops are especially marvellous at going through an array and doing something with each element in it. We could add all the numbers in an array together for example...

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
