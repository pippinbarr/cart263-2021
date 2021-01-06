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

# }
