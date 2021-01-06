# Conditionals {

---

## Summary

Conditionals allow us to make **decisions** in our code. They are most obviously represented by the classic `if`-statement.

---

## Contents

* `if` statements
* Conditional operators
* `else`
* `else if`
* Logic operators
* `switch` statements

---

## `if` statements

An `if` statement lets us do something **only if a logical expression is true**.

```javascript
let x = 10;
if (x < 20) {
  console.log(`x is less than 20`);
}
```

The key is the **conditional expression** inside the parentheses after the word `if`. This expression has to be something that evaluates to either `true` or `false`.

If it's `true` the code inside the curly brackets will run!

---

## Conditional operators

The kinds of conditions you can check are all premised on simple math:

```javascript
let x = 10;
let y = 20;
let z = 30;

x + y === z // equality, true
x - y !== z // inequality, true
x < y // less than, true
z > y // greater than, true
x <= z // less than or equal, true
z >= y // greater-than or equal, true
```

Note we always prefer **`===` to check for equality** and **`!==` to check for inequality**. Do not use `==` and `!=` please.

Why? Because `==` and `!=` can lead to weird results:

```javascript
let iAmHappy = true;
let numberOfNosesOnMyFace = 1;

console.log(iAmHappy === numberOfNosesOnMyFace); // false (quite right too!)

console.log(iAmHappy == numberOfNosesOnMyFace); // true! (terrible)
```

---

## `else`

We can make conditionals more flexible by specifying what to do if the conditional expression is `false` using an `else`:

```javascript
let r = Math.random(); // Math.random() returns a random number between 0 and 1

if (r < 0.5) {
  console.log(`I'm happy!`);
}
else {
  console.log(`I'm sad!`);
}
```

The `else` code here is run when the condition of the `if` is `false` (that is, when `r >= 0.5`)

And now we have a highly realistic simulation of life.

---

## `else if`

We can create more complex conditions by checking a series of conditions:

```javascript
let r = Math.random();

if (r < 0.2) {
  console.log(`I'm happy!`);
}
else if (r < 0.4) {
  console.log(`I'm sad!`);
}
else if (r < 0.6) {
  console.log(`I'm confused!`);
}
else {
  console.log(`I feel nothing anymore.`);
}
```

Each subsequent `else if` and the final `else` are **only checked if the previous condition(s) were `false`**.

Is life really this complex? Surely not!

---

## Logic operators

We can make more efficient conditional expressions with the three logic operators

```javascript
a && b // true if both a AND b are true, false otherwise

a || b // true if one or both of a and b are true, false if both are false

!a // true if a is false, false if a is true
```

`a` and `b` both need to be something that is true or false (i.e. conditional expressions themselves)

---

## `switch` statement

A useful way of writing a set of conditions where you want to check the value in a variable against a list of possibilities is a `switch` statement, which works as follows:

```javascript
let mood = `HAPPY`;

switch (mood) {
  case `SAD`:
  console.log(`*sob*`);
  break;

  case `AMBIVALENT`:
  console.log(`*shrug*`);
  break;

  case `HAPPY`:
  console.log(`*wheeeeee!*`);
  break;

  default:
  console.log(`*hmm*`);
}
```

The switch statement checks the value in the variable provided (`mood` in this example) and compares it with each `case` listed. If it matches the value specified by a case it executes the code inside the case.

We include `break;` after a case so that code doesn't keep executing into the next case, which is usually not what we want.

We use the `default` case at the end to have a response if the variable doesn't match **any** of our specific cases.

So the above program would print `"*wheeeeee!*"`, because `mood` is `HAPPY`.

---

# }
