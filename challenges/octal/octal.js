class Octal {
  constructor(number) {
    this.number = number;
  }

  toDecimal() {
    if (this._isInvalid()) return 0;
    let reversedNumber = String(this.number).split("");
    let power = 0;
    return reversedNumber.reduceRight((sum, digit) => {
      sum += digit * Math.pow(8, power);
      power += 1;
      return sum;
    }, 0);
  }

  _isInvalid() {
    if (Number.isNaN(this.number * 0)) return true;
    let digits = String(this.number).split("");
    if (digits.some((digit) => digit > 7)) return true;
    return false;
  }
}

module.exports = Octal;
