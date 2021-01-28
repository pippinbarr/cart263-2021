/**

A class representing the user's mouth as detected by Facemesh predictions.
Is able to update basic mouth position information according to updated
prediction data.

*/

class Mouth {
  constructor() {
    // The position of the center of the mouth (between top and bottom lip)
    this.x = undefined;
    this.y = undefined;
    // We have properties representing the position of the center of the
    // top and bottom lips
    this.topLip = {
      x: undefined,
      y: undefined
    };
    this.bottomLip = {
      x: undefined,
      y: undefined
    };
    // The amount in pixels the mouth is open (distance between
    // top and bottom lip)
    this.openSize = undefined;
    // The threshold amount to decide whether the mouth is open or closed
    // (less than this amount counts as closed)
    this.openThreshold = 10;
    // Whether or not the mouth is currently open
    this.open = false;
  }

  /**
  Provided with Facemesh predictions data, this will update the mouth data
  accordingly.
  */
  update(predictions) {
    // Don't update if there are no predictions
    if (!predictions || predictions.length === 0) {
      return;
    }

    // Get the array of keypoints from the predictions (called scaledMesh)
    const keypoints = predictions[0].scaledMesh;

    // Set the top lip positions according to the keypoint 13
    this.topLip.x = keypoints[13][0];
    this.topLip.y = keypoints[13][1];

    // Set the bottom lip positions according to the keypoint 14
    this.bottomLip.x = keypoints[14][0];
    this.bottomLip.y = keypoints[14][1];

    // Calculate the center point of the mouth
    this.x = this.topLip.x + (this.bottomLip.x - this.topLip.x) / 2;
    this.y = this.topLip.y + (this.bottomLip.y - this.topLip.y) / 2;

    // Calculate how open the mouth is
    this.openSize = dist(mouth.topLip.x, mouth.topLip.y, mouth.bottomLip.x, mouth.bottomLip.y);

    // Store whether the mouth is open or closed by checking the threshold
    this.open = mouth.openSize > this.openThreshold;
  }

  /**
  Returns true if the mouth overlaps the fly
  */
  overlap(fly) {
    let d = dist(this.x, this.y, fly.x, fly.y);
    if (d < this.openSize / 2 + fly.size / 2) {
      return true;
    }
    else {
      return false;
    }
  }

  /**
  For debugging purposes displays a circle representing the mouth's area
  */
  display() {
    push();
    fill(255, 0, 0, 50);
    ellipse(this.x, this.y, this.openSize);
    pop();
  }

}