// 1.

// var foo = function () {
//   console.log("Bye");
// };

// function foo() {
//   console.log("Hello");
// }

// foo(); // "Bye"

// 2.

// for (var index = 0; index < 2; index += 1) {
//   console.log(foo);
//   if (index === 0) {
//     var foo = "Hello";
//   } else {
//     foo = "Bye";
//   }
// }

// console.log(foo);
// console.log(index);

// 3.

// bar();

// function bar() {
//   console.log("foo!");
// }

// 4.

// var bar = 82;
// function foo() {
//   var bar = bar - 42;
//   console.log(bar);
// }

// foo(); // NaN

// 5.

// function foo(condition) {
//   let bar;
//   console.log(bar);

//   let qux = 0.5772;

//   if (condition) {
//     qux = 3.1415;
//     console.log(qux);
//   } else {
//     bar = 24;

//     let xyzzy = function () {
//       let qux = 2.7183;
//       console.log(qux);
//     };

//     console.log(qux);
//     console.log(xyzzy());
//   }

//   qux = 42;
//   console.log(qux);
// }

// foo(true);
// foo(false);
