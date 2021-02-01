// SausageDog
// An extension of the Animal class
// Adds the idea of being found when clicked
// and spinning when found

class SausageDog extends Animal {
  // constructor(x,y,image)
  // Calls the super constructor
  // Adds properties for being found and for a rotation speed
  constructor(x, y, image) {
    super(x, y, image);

    this.found = false;
    this.rotationSpeed = 0.25;
  }

  // update()
  // Calls the super update() and changes angle if found (to rotate!)
  update() {
    super.update();
    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  // mousePressed()
  // Checks if this sausage dog was clicked and remembers it was found if so
  mousePressed() {
    if (!this.found && this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }
}