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
