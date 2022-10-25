class Robot {
  static robotNamesRecord = [];

  constructor() {
    let generatedName = this.name();
    while (Robot.robotNamesRecord.includes(generatedName)) {
      generatedName = this.name();
    }
    this.roboName = generatedName;
    Robot.robotNamesRecord.push(generatedName);
  }

  name() {
    if (this.roboName) return this.roboName;
    const LETTERS = "QWERTYUIOPASDFGHJKLZXCVBNM";
    const NUMBERS = "1234567890";
    let name = "";
    for (let idx = 0; idx < 2; idx += 1) {
      name += LETTERS[Math.floor(Math.random() * LETTERS.length)];
    }
    for (let number = 0; number < 3; number += 1) {
      name += NUMBERS[Math.floor(Math.random() * NUMBERS.length)];
    }
    return name;
  }

  reset() {
    this.roboName = null;
  }
}

module.exports = Robot;
