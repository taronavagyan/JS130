// sumOfSquares.js

"use strict";

const { getNumbers } = require("./addNumber");

function sumOfSquares() {
  return getNumbers().reduce((sum, number) => {
    return square(number) + sum;
  });
}

function square(value) {
  return value * value;
}

module.exports = { sumOfSquares };
