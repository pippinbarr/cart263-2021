## Use strict

- In this class we will include the `"use strict";` directive at the top of every `.js` file we create
- This will turn on special rules that will help us to find errors in our code more easily
- For example, it won't let us use variable we haven't explicitly declared

```javascript
"use strict";

x = 10; // No! Error! x doesn't exist!

let x;
x = 10; // Good.
```

- It has other implications, but basically should make life better
