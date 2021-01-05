## Classes

- We can also define objects via classes

```javascript
class Rabbit {
  constructor(name, age, cuteness) {
    this.name = name;
    this.age = age;
    this.cuteness = cuteness;
  }

  sayHi() {
    console.log(`Hello, my name is ${this.name}!`);
  }

  getAge() {
    return this.age;
  }
}
```

---

## Creating objects from classes

- We create objects from classes using the special word `new` and their constructor function (which has the same name as the class)

```javascript
let miffy = new Rabbit("Miffy", 63, 100);
```

- We use these objects with the same dot notation we already saw for object literals

```javascript
miffy.sayHi(); // "Hello, my name is Miffy!"
let miffyAge = miffy.getAge(); // miffyAge is set to 63
```

---

## Inheritance with `extends`

- We can create classes based on other classes using __inheritance__

```javascript
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name}!`);
  }
}
```

```javascript
class Rabbit extends Animal {
  constructor(name, age, cuteness) {
    super(name, age); // Calls the parent's (Animal's) constructor
    this.cuteness = cuteness; // A new property just for a Rabbit
  }

  isCute() { // A new method just for a Rabbit
    return (this.cuteness > 50); // true if cuteness is greater than 50
  }
}
```

---

## Using classes with inheritance

- A class that extends another class has all the properties and methods of the parent class as well as anything the child class adds on

```javascript
let miffy = new Rabbit("Miffy", 63, 100); // Creates a Rabbit object

miffy.sayHi(); // "Hi, my name is Miffy!" because it uses the Animal properties and method

if (miffy.isCute()) { // true because we set miffy's cuteness to 100
  console.log("Miffy is cute!"); // "Miffy is cute!"
}
```

---

## null

- `null` is used to indicate the absence of an object
- You can use it yourself in cases where a variable is intended to contain an object but doesn't right now (maybe you need to create the object later)

```javascript
let miffy = null;
```

- `null` is often returned in cases when a function that normally returns an object needs to return an empty/not-found value

```javascript
// getElementById returns null if it can't find an element
let div = document.getElementById("wrapper");
// Assuming there is no element with id wrapper, div will be null
```
