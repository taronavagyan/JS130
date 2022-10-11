// 1.

// function foo(bar, qux, baz) {
//   return {
//     bar: bar,
//     baz: baz,
//     qux: qux,
//   };
// }

// 2.

// function foo() {
//   return {
//     bar: function () {
//       console.log("bar");
//     },
//     qux: function (arg1) {
//       console.log("qux");
//       console.log(arg1);
//     },
//     baz: function (arg1, arg2) {
//       console.log("baz");
//       console.log(arg1);
//       console.log(arg2);
//     },
//   };
// }

// 3.

// function foo(one, two, three) {
//   return {
//     bar: one,
//     baz: two,
//     qux: three,
//   };
// }

// let obj = foo(1, 2, 3);

// let baz = obj.baz;
// let qux = obj.qux;
// let bar = obj.bar;

// 4.

// function foo(arr) {
//   return [arr[2], 5, arr[0]];
// }

// let array = [1, 2, 3];
// let result = foo(array);
// let bar = result[0];
// let qux = result[1];
// let baz = result[2];

// 5.

// function product(num1, num2, num3) {
//   return num1 * num2 * num3;
// }

// let array = [2, 3, 5];
// let result = product(arr[0], arr[1], arr[2]);

// 6.

// function product() {
//   return [].reduce.call(arguments, (a, b) => a * b, arguments[0]);
// }

// let result = product(2, 3, 4, 5);

// 7.
