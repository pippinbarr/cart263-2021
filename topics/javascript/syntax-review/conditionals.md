## Conditionals

- A huge part of programming is deciding __whether or not to do something__ dynamically in response to the current state of the program
- To achieve this we use __conditionals__, also known as __if-statements__

```javascript
let x = 10;
if (x < 20) {
  console.log("x is less than 20");
}
```

- The key to an if-statement is the __conditional expression__ inside the parentheses after the word `if`
- This expression has to be something that evaluates to either `true` or `false`
- If it's `true` the code inside the curly brackets will run

---

## Conditional operators

- The kinds of conditions you can check are all based on simple math

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

- Note we should always prefer __`===` to check for equality__ and __`!==` to check for inequality__

???

- We prefer `===` and `!==` because they are more strict and don't allow type coercion to convert values "helpfully"
- For example:

```javascript
let x = true;
let y = 1;

console.log(x === y); // false, as you would hope since they aren't equal!

console.log(x == y); // true! Because 1 is converted to true before comparison. Boo!
```

---

## Else

- We can make conditionals more flexible by specifying what to do if the conditional expression is `false` using an `else`

```javascript
let r = Math.random(); // Math.random() returns a random number between 0 and 1
if (r < 0.5) {
  console.log("I'm happy!");
}
else {
  console.log("I'm sad!");
}
```

- The `else` code here is run when the condition of the `if` is false (i.e. when `r >= 0.5`)

???

- The example code is now a highly realistic simulation of life, day by day

---

## Else if

- We can create more complex conditions by checking a series of conditions

```javascript
let x = Math.random();
if (x < 0.2) {
  console.log("I'm happy!");
}
else if (x < 0.4) {
  console.log("I'm sad!");
}
else if (x < 0.6) {
  console.log("I'm confused!");
}
else {
  console.log("I feel nothing anymore.");
}
```

- Each subsequent `else if` and the final `else` are __only checked if the previous condition(s) were `false`__

---

## Logic operators

- We can make more efficient conditional expressions with the three logic operators

```javascript
a && b // true if both a AND b are true, false otherwise

a || b // true if one or both of a and b are true, false if both are false

!a // true if a is false, false if a is true
```

- `a` and `b` both need to be something that is true or false (i.e. conditional expressions themselves)

---

## Switch statement

- A useful way of writing a set of conditions where you want to check the specific value in a variable is a `switch` statement, which works as follows:

```javascript
let state = 1;

switch (state) {
  case 1:
  console.log("State 1!");
  break;

  case 2:
  console.log("State 2!");
  break;

  case 3:
  console.log("State 3!");
  break;

  default:
  console.log("None of the above!");
}
```

???

- So the switch statement checks the value in the variable provided (`state` in this example)
- It compares it with each `case` listed and if it matches the value specified by a case it executes the code inside the case
- We include `break;` after a case so that code doesn't keep executing into the next case
- We use the `default` case at the end to catch if the variable doesn't have any of our specific values in it
- So the above would print "State 1!"
- If we had used `let state = 3;` it would print "State 3!"
- If we had used `let state = 4;` it would print "None of the above!"

---

## Switch statement

- Switch statements don't have to check numbers:

```javascript
let state = "HAPPY";

switch (state) {
  case "SAD":
  console.log("*sob*");
  break;

  case "AMBIVALENT":
  console.log("Meh.");
  break;

  case "HAPPY":
  console.log("Wheeeee!");
  break;

  default:
  console.log("I feel really default.");
}
```
