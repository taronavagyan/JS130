class Diamond {
  static chars = " ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  static makeDiamond(char) {
    if (char === "A") return "A\n";
    let charIdx = Diamond.chars.indexOf(char);
    let middleSpace = 1;
    let maxWidth = charIdx - 1;

    let top = [" ".repeat(maxWidth) + "A" + " ".repeat(maxWidth)];
    let middle = "";
    maxWidth -= 1;

    for (let lvl = 2; lvl <= charIdx; lvl += 1) {
      if (lvl === charIdx) {
        middle =
          " ".repeat(maxWidth) +
          Diamond.chars[lvl] +
          " ".repeat(middleSpace) +
          Diamond.chars[lvl] +
          " ".repeat(maxWidth) +
          "\n";
        continue;
      }
      top.push(
        " ".repeat(maxWidth) +
          Diamond.chars[lvl] +
          " ".repeat(middleSpace) +
          Diamond.chars[lvl] +
          " ".repeat(maxWidth)
      );

      middleSpace += 2;
      maxWidth -= 1;
    }
    let bottom = top.reduceRight(
      (bottomHalf, step) => (bottomHalf += step + "\n"),
      ""
    );
    top = top.reduce((topHalf, step) => (topHalf += step + "\n"), "");
    return top + middle + bottom;
  }
}

console.log(Diamond.makeDiamond("E"));

module.exports = Diamond;
