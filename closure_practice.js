"use strict";

// 1.

// let counter = 0;

// function makeCounter() {
//   return function () {
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// incrementCounter = makeCounter();
// console.log(incrementCounter()); // 3
// console.log(incrementCounter()); // 4

// 2.

// function makeCounter() {
//   return function () {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 1

// incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 1

// 3.

// function makeCounter() {
//   let counter = 0;

//   return function () {
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// incrementCounter = makeCounter();
// console.log(incrementCounter()); // 1
// console.log(incrementCounter()); // 2

// 4.

// function makeCounter() {
//   let counter = 0;

//   return function () {
//     counter += 1;
//     return counter;
//   };
// }

// let incrementCounter1 = makeCounter();
// let incrementCounter2 = makeCounter();

// console.log(incrementCounter1()); // 1
// console.log(incrementCounter1()); // 2

// console.log(incrementCounter2()); // 1
// console.log(incrementCounter2()); // 2

// 5.

// function makeMultipleLister(multiple) {
//   return function () {
//     let factor = 1;
//     while (true) {
//       if (factor * multiple >= 100) break;
//       console.log(factor * multiple);
//       factor += 1;
//     }
//   };
// }

// let lister = makeMultipleLister(17);
// lister();

// 6.

// let runningTotal = 0;

// const add = (num) => {
//   runningTotal += num;
//   console.log(runningTotal);
// };
// const subtract = (num) => {
//   runningTotal -= num;
//   console.log(runningTotal);
// };

// add(1); // 1
// add(42); // 43
// subtract(39); // 4
// add(6); // 10

// 7.

// function foo(start) {
//   let prod = start; // 24
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// }

// let bar = foo(2);
// let result = bar(3);
// result += bar(4);
// result += bar(5);
// console.log(result); // 150

// 8.

// function later(func, arg) {
//   return function () {
//     func(arg);
//   };
// }
// const logger = (message) => console.log(message);
// let logWarning = later(logger, "The system is shutting down!");
// logWarning(); // The system is shutting down!

// 9.

// function later2(func, msg) {
//   return function (time) {
//     func(msg, time);
//   };
// }

// const notify = function (message, when) {
//   console.log(`${message} in ${when} minutes!`);
// };

// let shutdownWarning = later2(notify, "The system is shutting down");
// shutdownWarning(30); // The system is shutting down in 30 minutes!

// 10.

// function bind(context, func) {
//   return function () {
//     return func.call(context);
//   };
// }

// let obj = {};
// let boundFunc = bind(obj, function () {
//   this.foo = "bar";
// });

// boundFunc();
// console.log(obj); // { foo: 'bar' }

//////

// 1.

// function makeCounterLogger(startNum) {
//   return function (targetNum) {
//     let count = startNum;
//     if (targetNum > startNum) {
//       while (count <= targetNum) {
//         console.log(count);
//         count += 1;
//       }
//     } else {
//       while (count >= targetNum) {
//         console.log(count);
//         count -= 1;
//       }
//     }
//   };
// }

// let countLog = makeCounterLogger(5);
// countLog(8);
// countLog(2);
