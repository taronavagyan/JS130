class RomanNumeral {
  static ROMAN_NUMERALS = [
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["CD", 400],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["XL", 40],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ];

  constructor(number) {
    this.number = number;
  }

  toRoman() {
    let modernNumber = this.number;
    let romanNumber = "";
    RomanNumeral.ROMAN_NUMERALS.forEach((number) => {
      while (true) {
        if (modernNumber - number[1] >= 0) {
          modernNumber = modernNumber - number[1];
          romanNumber += number[0];
        } else {
          break;
        }
      }
    });

    return romanNumber;
  }
}

module.exports = RomanNumeral;
