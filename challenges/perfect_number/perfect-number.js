class PerfectNumber {
  static classify(number) {
    if (number < 1) throw new Error();

    let aliquotSum = PerfectNumber._getDivisors(number).reduce(
      (a, b) => a + b,
      0
    );

    if (aliquotSum === number) return "perfect";
    if (aliquotSum < number) return "deficient";
    return "abundant";
  }

  static _getDivisors(number) {
    let divisors = [];
    for (let count = 0; count < number; count += 1) {
      if (number % count === 0) divisors.push(count);
    }
    return divisors;
  }
}

module.exports = PerfectNumber;
