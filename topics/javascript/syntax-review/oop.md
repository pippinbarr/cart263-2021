## Object-Oriented Programming {

---

## Summary

Object-Oriented Programming (OOP) allows us to define **classes** of objects with specific properties and behaviours. We can then create multiple objects (instances) out of these classes, leading to **modularity** and **reuse** of code. With **inheritance** we can base one class on another class, leading to further **reuse**.

---

## Contents

* Defining a class
* Creating objects from a class
* Inheritance

---

## Defining a class

We use the `class` syntax to define classes, including their name, their constructor, their properties, and their methods...

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
}
```

---

## Creating objects from a class

We create objects from classes using the special word `new` and their constructor function (which has the same name as the class)

```javascript
let miffy = new Rabbit("Miffy", 63, 100);
let jiffy = new Rabbit("Jiffy", 12, 20);
```

We use these objects with the same dot notation we already saw for object literals

```javascript
miffy.sayHi(); // "Hello, my name is Miffy!"
jiffy.sayHi(); // "Hello, my name is Jiffy!"
```

---

## Inheritance

We can create classes based on other classes using __inheritance__:

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

To create a class based on the `Animal` class, we use the `extends` keyword:

```javascript
class Rabbit extends Animal {
  constructor(name, age, cuteness) {
    super(name, age); // Calls the parent's (Animal's) constructor
    this.cuteness = cuteness; // A new property just for a Rabbit!
    // Our Rabbit already has name and age properties thanks to being an Animal
    // so we don't need to deal with them here
  }

  // Our Rabbit already has the sayHi() method thanks to being an Animal
  // so we don't need to define it here

  isCute() { // A new method just for a Rabbit
    return (this.cuteness > 50); // true if cuteness is greater than 50
  }
}
```

---

## Using classes with inheritance

A class that extends another class has all the properties and methods of the parent class as well as anything the child class adds on:

```javascript
let miffy = new Rabbit("Miffy", 63, 100); // Creates a Rabbit object

miffy.sayHi(); // "Hi, my name is Miffy!" because it uses the Animal properties and sayHi() method

// We can also use the Rabbit's new isCute() method and cuteness property:
if (miffy.isCute()) { // true because we set miffy's cuteness to 100
  console.log("Miffy is cute!"); // "Miffy is cute!"
}
```

---

# }
