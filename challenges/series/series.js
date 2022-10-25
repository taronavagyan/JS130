class Series {
  constructor(number) {
    this.number = number;
  }

  slices(length) {
    if (length > this.number.length) throw new Error("Use a shorter length.");
    let subSeries = [];
    for (
      let charIdx = 0;
      charIdx <= this.number.length - length;
      charIdx += 1
    ) {
      subSeries.push(
        this.number
          .slice(charIdx, charIdx + length)
          .split("")
          .map((digit) => Number(digit))
      );
    }
    return subSeries;
  }
}

module.exports = Series;
