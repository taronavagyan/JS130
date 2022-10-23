class Anagram {
  constructor(word) {
    this.word = word;
  }

  match(candidateAnagrams) {
    let anagrams = [];
    let wordChars = this._getChars(this.word);
    candidateAnagrams.forEach((candidate) => {
      if (candidate.toLowerCase() === this.word.toLowerCase()) return;
      if (candidate.length !== this.word.length) return;

      let candidateChars = this._getChars(candidate);
      let keys = Object.keys(wordChars);
      for (let key of keys) {
        if (wordChars[key] !== candidateChars[key]) return;
      }
      anagrams.push(candidate);
    });
    return anagrams;
  }

  _getChars(word) {
    word = word.toLowerCase();
    let chars = {};

    for (let char of word) {
      if (!chars[char]) chars[char] = 0;
      chars[char] += 1;
    }
    return chars;
  }
}

module.exports = Anagram;
