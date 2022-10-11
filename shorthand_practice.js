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
