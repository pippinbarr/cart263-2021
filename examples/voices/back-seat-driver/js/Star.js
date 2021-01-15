/**
Class representing a star based on this p5 example
https://p5js.org/examples/form-star.html
*/
class Star {

  /**
  Create a star with properties for displaying it.
  - Position
  - Inner and outer radius control the "pointiness"
  - Points is the number of points of the star
  */
  constructor({
    x,
    y,
    innerRadius,
    outerRadius,
    points
  }) {
    this.x = x;
    this.y = y;
    this.innerRadius = innerRadius;
    this.outerRadius = outerRadius;
    this.points = points;
  }

  /**
  Display the star
  */
  update() {
    this.display();
  }

  /**
  Display star according to properties. Code is from p5 example cited above.
  */
  display() {
    push();
    fill(255, 255, 0);
    let angle = TWO_PI / this.points;
    let halfAngle = angle / 2.0;
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
      let sx = this.x + cos(a) * this.outerRadius;
      let sy = this.y + sin(a) * this.outerRadius;
      vertex(sx, sy);
      sx = this.x + cos(a + halfAngle) * this.innerRadius;
      sy = this.y + sin(a + halfAngle) * this.innerRadius;
      vertex(sx, sy);
    }
    endShape(CLOSE);
    pop();
  }
}