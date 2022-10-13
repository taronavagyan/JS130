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
