/**
A class representing a fly that can buzz around on the canvas randomly using
Perlin noise.
*/

class Fly {
  /**
  Sets up a fly with basic properties for moving around
  */
  constructor() {
    // Position of the fly will be generated through Perlin noise
    this.x = undefined;
    this.y = undefined;
    // Perlin noise time values initialized randomly to avoid mirrored behaviour
    // on x and y
    this.tx = random(0, 500);
    this.ty = random(500, 1000);
    // How erratically the fly moves
    this.buzziness = 0.005;
    // How big the fly's (circular) body is
    this.size = 10;
    // How big the fly's wings are
    this.wingSize = this.size / 2;
    // Whether the fly is currently in the user's mouth (overlapping it)
    this.inMouth = false;
  }

  /**
  Calls methods each frame
  */
  update() {
    this.move();
    this.display();
  }

  /**
  Calculates the fly's position using Perlin noise and updates the time step
  */
  move() {
    // Map the noise value to a position on the canvas
    this.x = map(noise(this.tx), 0, 1, 0, width);
    this.y = map(noise(this.ty), 0, 1, 0, height);
    // Increase the timestep to change position next frame
    this.tx += this.buzziness;
    this.ty += this.buzziness;
  }

  /**
  Dispays the fly as three artful circles on the canvas, one black body circle
  and two white wing circles
  */
  display() {
    push();
    stroke(0);
    fill(255);
    ellipse(this.x - this.size / 2, this.y, this.wingSize);
    ellipse(this.x + this.size / 2, this.y, this.wingSize);

    fill(0);
    ellipse(this.x, this.y, this.size);
    pop();
  }
}