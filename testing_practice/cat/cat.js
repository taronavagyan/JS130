class Cat {
  constructor(name) {
    if (!name) throw new Error();
    this.name = name;
  }

  miaow() {
    return `${this.name} is miaowing.`;
  }
}

module.exports = Cat;
