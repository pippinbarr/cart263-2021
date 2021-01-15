/**
Class representing a simple car that can drive around on the canvas and display
*/

class Car {
  /**
  Sets the basic properties of a car up
  */
  constructor(x, y) {
    // Position
    this.x = x;
    this.y = y;
    // Currently not moving
    this.speed = 0;
    // Specify dimensions
    this.width = 30;
    this.height = 10;
    // Randomise starting rotation
    this.angle = random(0, TWO_PI);
    // Define maximum speed of movement
    this.maxSpeed = 2;
    // Maximum turning rate
    this.turnMax = 0.5;
  }

  /**
  Change the car's angle to turn left
  */
  turnLeft() {
    this.angle -= this.turnMax;
  }

  /**
  Change the car's angle to turn right
  */
  turnRight() {
    this.angle += this.turnMax;
  }

  /**
  Make the car move forwards
  */
  drive() {
    this.speed = this.maxSpeed;
  }

  /**
  Stop the car
  */
  stop() {
    this.speed = 0;
  }

  /**
  Move, wrap, and display the car
  */
  update() {
    this.move();
    this.wrap();
    this.display();
  }

  /**
  Calculate velocity based on speed and angle, then add to position
  */
  move() {
    let vx = this.speed * cos(this.angle);
    let vy = this.speed * sin(this.angle);

    this.x += vx;
    this.y += vy;
  }

  /**
  Check if the car is off the canvas and make it appear on the other side if so
  */
  wrap() {
    if (this.x > width) {
      this.x -= width;
    }
    else if (this.x < 0) {
      this.x += width;
    }

    if (this.y > height) {
      this.y -= height;
    }
    else if (this.y < 0) {
      this.y += height;
    }
  }

  /**
  Display the car as a rectangle oriented to the angle
  */
  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    rect(0, 0, this.width, this.height);
    pop();
  }
}