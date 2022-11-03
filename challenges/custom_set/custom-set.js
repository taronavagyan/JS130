class CustomSet {
  constructor() {
    this.set = [...arguments].flat();
  }

  isEmpty() {
    return this.length() === 0;
  }

  length() {
    return this.set.length;
  }

  getSet() {
    return this.set;
  }

  contains(elem) {
    return this.set.includes(elem);
  }

  isSubset(otherSet) {
    for (let elem of this.set) {
      if (!otherSet.contains(elem)) {
        return false;
      }
    }
    return true;
  }

  isDisjoint(otherSet) {
    for (let elem of this.set) {
      if (otherSet.contains(elem)) {
        return false;
      }
    }
    return true;
  }

  isSame(otherSet) {
    return this.length() === otherSet.length() && this.isSubset(otherSet);
  }

  add(elem) {
    if (!this.contains(elem)) this.set.push(elem);

    return this;
  }

  intersection(otherSet) {
    let shared = [];
    for (let elem of this.set) {
      if (otherSet.contains(elem)) shared.push(elem);
    }
    return new CustomSet(shared);
  }

  difference(otherSet) {
    let difference = [];
    for (let elem of this.set) {
      if (!otherSet.contains(elem)) difference.push(elem);
    }
    return new CustomSet(difference);
  }

  union(otherSet) {
    let unitedSet = new CustomSet(this.getSet());
    otherSet.getSet().forEach((elem) => unitedSet.add(elem));
    return unitedSet;
  }
}

module.exports = CustomSet;
