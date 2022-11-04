// addNumber.js

"use strict";

let numbers = [];

function addNumber(value) {
  numbers.push(value);
}

function getNumbers() {
  return [...numbers];
}
module.exports = { addNumber, getNumbers };
