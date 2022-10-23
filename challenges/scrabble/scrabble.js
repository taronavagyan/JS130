class Scrabble {
  static table = {
    D: 2,
    G: 2,
    B: 3,
    C: 3,
    M: 3,
    P: 3,
    F: 4,
    H: 4,
    V: 4,
    W: 4,
    Y: 4,
    K: 5,
    J: 8,
    X: 8,
    Q: 10,
    Z: 10,
  };
  constructor(word) {
    this.word = word ? word : "";
  }

  static score(word) {
    return new Scrabble(word).score();
  }

  score() {
    let word = this.word.toUpperCase();
    return this.word
      .toUpperCase()
      .replace(/[^A-Z]/g, "")
      .split("")
      .reduce((runningCount, char) => {
        let charValue = Scrabble.table[char] || 1;
        runningCount += charValue;
        return runningCount;
      }, 0);
  }
}

module.exports = Scrabble;
