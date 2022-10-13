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
