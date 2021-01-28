/**

A class representing a dog that can move across the canvas
at a set speed and angle

*/

class Dog {
  /**
  Sets basic movement and display properties based on parameters
  */
  constructor(x, y, angle, image) {
    this.x = x;
    this.y = y;
    this.angle = angle;
    this.image = image;
    this.speed = 10;
  }

  /**
  Calls methods required each frame for animation
  */
  update() {
    this.move();
    this.display();
  }

  /**
  Calculates velocity and moves the dog
  */
  move() {
    // Calculate the velocity based on speed and angle
    const vx = this.speed * cos(this.angle);
    const vy = this.speed * sin(this.angle);
    // Change position based on velocity
    this.x += vx;
    this.y += vy;
  }

  /**
  Displays the image of the dog in position and rotated appropriately
  */
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }
}