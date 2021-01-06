# `"use strict";` {

---

## Summary

This module is here to tell you to use `"use strict";`!

---

## Contents

- `"use strict";`

---

## `"use strict";`

In this class we will include the `"use strict";` directive at the top of our `.js` files (unless they define a class).

`"use strict";` will turn on special rules that will help us to find errors in our code more easily. In reality, it mostly comes down to one rule: **it won't let us use variable we haven't explicitly declared**.

This is helpful because it lets us avoid deeply frustrating bugs that occur when we accidentally create a new variable instead of assigning to an existing one, usually thanks to a typo:

### Without `"use strict";`

```javascript
let circleWidth;
let circleHeight;

circleWitdh = 50; // This generates a NEW VARIABLE called circleWitdh and assigns it 50
circleHeight = 50;

// This won't work as expected because circleWidth is STILL undefined (we assigned 50 to
// circleWitdh, not circleWidth)
ellipse(0,0,circleWidth,circleHeight);
```

Our circle won't be drawn, because `circleWidth` is `undefined`, but we won't see any errors! This makes it hard to see what went wrong, especially if this were a larger program.

### With `"use strict";`

```javascript
"use strict";

function setup() {
  let circleWidth;
  let circleHeight;

  circleWitdh = 50; // This will be an ERROR in the console
  circleHeight = 50;

  ellipse(0,0,circleWidth,circleHeight);
}
```

Our circle won't be drawn, still, but now we will see an error message in the console:

```
ReferenceError: circleWitdh is not defined
```

That error then helps us to see our mistake! Phew!

---

## Use `"use strict";`!

It is your friend and it wants to help you.

---

# }
