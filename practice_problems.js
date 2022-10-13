// 1.

// function myBind(func, obj) {
//   return function () {
//     func.call(obj, arguments);
//   };
// }

// 2.

// function myBind(func, ctx) {
//   let partialArgs = [].slice.apply(arguments, [2]);

//   return function () {
//     let remainingArgs = [].slice.apply(arguments);
//     let fullArgs = partialArgs.concat(remainingArgs);

//     return func.apply(ctx, fullArgs);
//   };
// }

// 3.

// function newStack() {
//   let stack = [];

//   return {
//     push(newItem) {
//       stack.push(newItem);
//     },

//     pop() {
//       return stack.pop();
//     },

//     printStack() {
//       console.log(stack.reduce((list, item) => list + "\n" + item));
//     },
//   };
// }

// let stack = newStack();

// stack.printStack();

// 4.

// function delegate(obj, methodName) {
//   let partialArgs = [].slice.apply(arguments, [2]);

//   return function () {
//     obj[methodName].apply(obj, partialArgs);
//   };
// }

// let foo = {
//   name: "test",
//   bar: function (greeting) {
//     console.log(greeting + " " + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, "bar", "hello"),
// };

// baz.qux(); // logs 'hello test';

// foo.bar = function () {
//   console.log("changed");
// };

// baz.qux(); // logs 'changed'

//// Miscellaneous ////

// 1.

// function sum(...values) {
//   return values.reduce(function (a, b) {
//     return a + b;
//   });
// }

// sum(1, 4, 5, 6); // 16

// 2.

// function formatName(firstName, middleName, lastName) {
//   return `${lastName}, ${firstName} ${middleName[0]}.`;
// }

// fullName = ["James", "Tiberius", "Kirk"];

// console.log(formatName(...fullName));
// // logs: Kirk, James T.
