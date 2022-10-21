class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(comparisonStrand) {
    let minLength =
      this.strand.length < comparisonStrand.length
        ? this.strand.length
        : comparisonStrand.length;

    let hammingDistance = 0;

    for (let charIdx = 0; charIdx < minLength; charIdx += 1) {
      if (this.strand[charIdx] !== comparisonStrand[charIdx])
        hammingDistance += 1;
    }

    return hammingDistance;
  }
}

module.exports = DNA;
