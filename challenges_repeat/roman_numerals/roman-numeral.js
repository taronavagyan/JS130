"use strict";

const ROMAN = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

class RomanNumeral {
  constructor(arabicNum) {
    this.arabicNum = arabicNum;
  }

  toRoman() {
    let romanNum = "";
    let num = this.arabicNum;

    Object.keys(ROMAN).forEach((key) => {
      while (num - ROMAN[key] >= 0) {
        romanNum += key;
        num -= ROMAN[key];
      }
    });

    return romanNum;
  }
}

let number = new RomanNumeral(4);
console.log(number.toRoman());

module.exports = RomanNumeral;
