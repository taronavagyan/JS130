// 1.

// function() {
//   console.log("Sometimes, syntax isn't intuitive!");
// }();

// The snippet won't execute because the function declaration must be converted to a function expression before it's invoked as an IIFE.

// 2.

// (function () {
//   console.log("Sometimes, syntax isn't intuitive!");
// })();

// 3.

// var sum = 0;
// sum += 10;
// sum += 31;

// let numbers = [1, 7, -3, 3];

// sum += (function sum(arr) {
//   return arr.reduce((sum, number) => {
//     sum += number;
//     return sum;
//   }, 0);
// })(numbers);

// console.log(sum);
