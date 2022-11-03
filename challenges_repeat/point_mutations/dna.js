"use strict";

class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(otherStrand) {
    let shorter =
      this.strand.length > otherStrand.length
        ? otherStrand.length
        : this.strand.length;

    let hammingDistance = 0;
    for (let charIdx = 0; charIdx < shorter; charIdx += 1) {
      if (this.strand[charIdx] !== otherStrand[charIdx]) hammingDistance += 1;
    }

    return hammingDistance;
  }
}
module.exports = DNA;
