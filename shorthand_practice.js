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

// const { foo, ...rest } = { foo: 42, bar: 3.1415, qux: "abc" };
// console.log(foo); // 42
// console.log(rest); // { bar: 3.1415, qux: 'abc' }

// 8.

// const obj = {
//   first: "I am the first",
//   second: "I am the second",
//   third: [1, 2, 3],
//   rest: { a: "a", b: "b" },
// };

// let first = obj.first;
// let second = obj.second;
// let rest = {
//   third: obj.third,
//   rest: obj.rest,
// };

// console.log(rest);

// 9.

// function qux() {
//   let animalType = "cat";
//   let age = 9;
//   let colors = ["black", "white"];
//   return { type: animalType, age, colors };
// }

// let { type, age, colors } = qux();
// console.log(type); // cat
// console.log(age); // 9
// console.log(colors); // [ 'black', 'white' ]

// 10.

// function objFromStrings(first, str2, str3, str4, last) {
//   return { first, last, middle: [str2, str3, str4].sort() };
// }

// let stringsArr = ["a", "c", "b", "d", "e"];
// let { first, last, middle } = objFromStrings(...stringsArr);
