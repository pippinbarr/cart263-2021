// Animal
// A class defining an animal that can be displayed as an image

class Animal {
  // constructor(x, y, image)
  // Stores position and image as properties
  // Creates an angle property for potential rotation
  constructor(x, y, image) {
    this.x = x;
    this.y = y;
    this.image = image;
    this.angle = 0;
  }

  // update()
  // Calls the display method
  update() {
    this.display();
  }

  // display()
  // Displays this animal's image on the canvas at its position and rotation
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }

  // overlap(x,y)
  // Checks whether the position x,y is inside this animal's image
  // Returns: true if the click was inside the image and false otherwise
  overlap(x, y) {
    // Check if the x is greater than the left side and less that the right side
    // and greater than the top and less than the bottom of the image
    // Uses the width and height properties of the image to track its size
    if (x > this.x - this.image.width / 2 &&
      x < this.x + this.image.width / 2 &&
      y > this.y - this.image.height / 2 &&
      y < this.y + this.image.height) {
      return true;
    }
    else {
      return false;
    }
  }
}