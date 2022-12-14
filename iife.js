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

// 4.

// (function countdown(start) {
//   while (start >= 0) {
//     console.log(start);
//     start -= 1;
//   }
// })(7);

// 5.

// (function foo() {
//   console.log("Bar");
// })();

// foo(); // ?

// The `foo` function is not accessible outside the scope created by the IIFE.

// 6.

// let bar = (function (start) {
//   let prod = start;
//   return function (factor) {
//     prod *= factor;
//     return prod;
//   };
// })(2);

// let result = bar(3);

// result += bar(4);
// result += bar(5);
// console.log(result);

// 7.

// (function countdown(num) {
//   console.log(num);

//   if (num === 1) {
//     console.log(0);
//   } else {
//     countdown(num - 1);
//   }
// })(7);
