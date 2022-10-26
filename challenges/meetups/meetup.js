class Meetup {
  static DAYS_OF_WEEK = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday",
  };

  static DAYS_IN_MONTHS = {
    0: 31,
    1: 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31,
  };

  constructor(year, month) {
    this.month = month - 1;
    this.year = year;
    this.meetupDate = null;
  }

  day(weekday, schedule) {
    let daysInMonth = Meetup.DAYS_IN_MONTHS[this.month];
    if (this.month === 1 && this.year % 4 === 0) daysInMonth = 29;
    weekday = weekday.toLowerCase();
    schedule = schedule.toLowerCase();
    let daysOfMonth = [];
    for (let day = 1; day <= daysInMonth; day += 1) {
      let thatDay = new Date(this.year, this.month, day);
      daysOfMonth.push([
        Meetup.DAYS_OF_WEEK[thatDay.getDay()],
        thatDay.getDate(),
      ]);
    }
    let validWeekdays = daysOfMonth.filter((day) => day[0] === weekday);

    let date;
    switch (schedule) {
      case "teenth":
        this.meetupDate = validWeekdays.find((day) =>
          [13, 14, 15, 16, 17, 18, 19].includes(day[1])
        )[1];
        break;
      case "first":
        this.meetupDate = validWeekdays[0][1];
        break;
      case "second":
        this.meetupDate = validWeekdays[1][1];
        break;
      case "third":
        this.meetupDate = validWeekdays[2][1];
        break;
      case "fourth":
        this.meetupDate = validWeekdays[3][1];
        break;
      case "fifth":
        console.log(validWeekdays);
        if (validWeekdays.length < 5) return null;
        this.meetupDate = validWeekdays[4][1];
        break;
      case "last":
        this.meetupDate = validWeekdays[validWeekdays.length - 1][1];
    }
    return this;
  }

  toString() {
    let date = new Date(this.year, this.month, this.meetupDate);
    return date.toString();
  }
}

let meetup = new Meetup(2016, 2);

module.exports = Meetup;
