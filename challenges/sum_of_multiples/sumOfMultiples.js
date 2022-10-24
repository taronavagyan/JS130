class SumOfMultiples {
  static to(target) {
    return new SumOfMultiples().to(target);
  }
  constructor(...numbers) {
    this.setOfMultiples = numbers[0] ? [...numbers] : [3, 5];
  }

  to(target) {
    let validMultiples = [];
    this.setOfMultiples.forEach((multiple) => {
      let currNum = multiple;
      while (currNum < target) {
        if (!validMultiples.includes(currNum)) {
          validMultiples.push(currNum);
        }
        currNum += multiple;
      }
    });
    return validMultiples.reduce((a, b) => a + b, 0);
  }
}

module.exports = SumOfMultiples;
