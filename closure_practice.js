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
