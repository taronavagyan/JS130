// P

// Write a program to determine whether a triangle is equilateral, isosceles, or scalene.

// An equilateral triangle has all three sides the same length.

// An isosceles triangle has exactly two sides of the same length.

// A scalene triangle has all sides of different lengths.

// all sides must be of length > 0

// sum of the length of any two sides must be greater than the length of the third side

// How do I get the input?

// E

// 10, 10, 10 => equi
// 10, 7, 7 => isosceles
// 10, 7, 8 => scalene

// D

// array with length of sides

// A

// Ask user for length of triangle sides
// Use triangle logic to determine triangle type

// C

class Triangle {
  constructor(side1, side2, side3) {
    let allSides = [side1, side2, side3];
    if (allSides.some((side) => side <= 0)) throw new Error();
    let allSidesDescending = allSides.sort((a, b) => b - a);
    if (allSidesDescending[0] >= allSidesDescending[1] + allSidesDescending[2])
      throw new Error();
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
  }

  kind() {
    let repeats = 0;
    console.log(this.side1, this.side2, this.side3);

    if (this.side1 === this.side2) repeats += 1;
    if (this.side1 === this.side3) repeats += 1;
    if (this.side2 === this.side3) repeats += 1;

    switch (repeats) {
      case 0:
        return "scalene";
      case 1:
        return "isosceles";
      case 3:
        return "equilateral";
    }
  }
}

module.exports = Triangle;
