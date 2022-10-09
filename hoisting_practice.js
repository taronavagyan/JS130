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

bar();

function bar() {
  console.log("foo!");
}
