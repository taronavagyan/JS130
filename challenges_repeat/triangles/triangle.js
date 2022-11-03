"use strict";

class Triangle {
  constructor(side1, side2, side3) {
    this.triangle = [...arguments];
    [this.side1, this.side2, this.side3] = [...this.triangle];
    this._isValid();
  }

  _isValid() {
    if (this.triangle.some((length) => length <= 0)) throw new Error();
    let sortedLengths = this.triangle.sort((a, b) => a - b);
    if (sortedLengths[0] + sortedLengths[1] <= sortedLengths[2]) {
      throw new Error();
    }
  }

  kind() {
    if (this.triangle.every((length) => length === this.side1))
      return "equilateral";
    if (
      this.side1 === this.side2 ||
      this.side2 === this.side3 ||
      this.side1 === this.side3
    )
      return "isosceles";
    return "scalene";
  }
}

module.exports = Triangle;
