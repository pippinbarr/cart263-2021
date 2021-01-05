
## Extra: Objects as parameters

- One nice way to deal with functions or constructors that have many parameters is to use an object literal instead

```javascript
class Animal {
  constructor(config) {
    this.age = config.age;
    this.name = config.name;
    this.weight = config.weight;
    this.legs = config.legs;
  }
}
```

```javascript
let config = {
  age: 10,
  name: "fido",
  weight: 55,
  legs: 4
}
let dog = new Animal(config);
```

- Note how this lets us explicitly name the parameters in a nice way, too
