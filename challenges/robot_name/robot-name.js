"use strict";

const CHARS = "ZXCVBNMASDFGHJKLQWERTYUIOP";
const NUMS = "1234567890";

class Robot {
  static NAME_RECORD = [];
  constructor() {
    let generatedName = this._genName();
    while (Robot.NAME_RECORD.includes(generatedName)) {
      generatedName = this._genName();
    }
    this.roboName = generatedName;
    Robot.NAME_RECORD.push(generatedName);
  }

  _genName() {
    let name = "";
    while (name.length < 5) {
      if (name.length < 2) {
        name += CHARS[Math.floor(Math.random() * CHARS.length)];
      } else {
        name += Number(NUMS[Math.floor(Math.random() * NUMS.length)]);
      }
    }
    return name;
  }

  name() {
    return this.roboName;
  }

  reset() {
    let newName = this._genName();
    while (Robot.NAME_RECORD.includes(newName)) {
      newName = this._genName();
    }
    this.roboName = newName;
  }
}

module.exports = Robot;
