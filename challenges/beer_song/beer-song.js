class BeerSong {
  static verse(beers) {
    if (beers === 0) return BeerSong.finalLine;
    let beersBefore = BeerSong.beerPhrase(beers);
    let beersAfter = BeerSong.beerPhrase(beers - 1);
    let beerNoun = beers > 1 ? "one" : "it";
    let line1 = `${beersBefore} of beer on the wall, ${beersBefore} of beer.\n`;
    let line2 = `Take ${beerNoun} down and pass it around, ${beersAfter} of beer on the wall.\n`;
    return line1 + line2;
  }

  static verses(start, end) {
    let lines = "";
    for (let line = start; line >= end; line -= 1) {
      lines += BeerSong.verse(line);
      if (!(line - 1 < end)) lines += "\n";
    }
    return lines;
  }

  static lyrics() {
    return BeerSong.verses(99, 0);
  }

  static beerPhrase(beers) {
    if (beers === 1) {
      return "1 bottle";
    }
    if (beers === 0) {
      return "no more bottles";
    }
    return beers + " bottles";
  }

  static finalLine =
    "No more bottles of beer on the wall, no more bottles of beer.\n" +
    "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
}
module.exports = BeerSong;
