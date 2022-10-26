class Clock {
  static MAX_MINUTES = 60;
  static MAX_HOURS = 24;
  static at(hour, minutes) {
    minutes = minutes ? minutes : 0;
    return new Clock(hour, minutes);
  }

  constructor(hour, minutes) {
    this.time = [hour, minutes];
  }

  add(minutes) {
    for (let addedTime = 0; addedTime < minutes; addedTime += 1) {
      this.time[1] += 1;
      if (this.time[1] === Clock.MAX_MINUTES) {
        this.time[0] += 1;
        if (this.time[0] === Clock.MAX_HOURS) this.time[0] = 0;

        this.time[1] = 0;
      }
    }
    return this;
  }

  subtract(minutes) {
    for (
      let subtractedTime = 0;
      subtractedTime < minutes;
      subtractedTime += 1
    ) {
      this.time[1] -= 1;
      if (this.time[1] === -1) {
        this.time[0] -= 1;
        if (this.time[0] === -1) this.time[0] = Clock.MAX_HOURS - 1;
        this.time[1] = Clock.MAX_MINUTES - 1;
      }
    }
    return this;
  }

  toString() {
    console.log(this.time);
    let hour = this.time[0];
    let minutes = this.time[1];
    if (hour < 10) hour = "0" + String(hour);
    if (minutes < 10) minutes = "0" + String(minutes);

    return `${hour}:${minutes}`;
  }

  isEqual(otherClock) {
    return this.toString() === otherClock.toString();
  }
}

let clock = Clock.at(10).add(3);
console.log(clock.toString()); //.toBe("10:03");

module.exports = Clock;
