// function reduce(array, callback, accum) {
//   let idx = accum ? 0 : 1;
//   accum = accum || array[0];
//   while (idx < array.length) {
//     accum = callback(accum, array[idx]);
//     idx += 1;
//   }
//   return accum;
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(reduce(numbers, (accum, number) => accum + number)); // => 15
// console.log(reduce(numbers, (prod, number) => prod * number)); // => 120
// console.log(reduce(numbers, (prod, number) => prod * number, 3)); // => 360
// console.log(reduce([], (accum, number) => accum + number, 10)); // => 10
// console.log(reduce([], (accum, number) => accum + number));
// // => undefined

// let stooges = ["Mo", "Larry", "Curly"];
// console.log(
//   reduce(
//     stooges,
//     (reversedStooges, stooge) => {
//       reversedStooges.unshift(stooge);
//       return reversedStooges;
//     },
//     []
//   )
// );
// // => ["Curly", "Larry", "Mo"]

// Filter with reduce

// function filter(array, conditional) {
//   return array.reduce(function (acc, elem) {
//     return conditional(elem) ? [...acc, elem] : [...acc];
//   }, []);
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(filter(numbers, (number) => number > 3)); // => [ 4, 5 ]
// console.log(filter(numbers, (number) => number < 0)); // => []
// console.log(filter(numbers, () => true)); // => [ 1, 2, 3, 4, 5 ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(filter(values, (value) => typeof value === "string"));
// // => [ 'abc', 'xyz' ]

// Map with reduce

// function map(array, callback) {
//   return array.reduce(
//     (transformedArray, elem) => [...transformedArray, callback(elem)],
//     []
//   );
// }

// let numbers = [1, 2, 3, 4, 5];
// console.log(map(numbers, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
// console.log(map(numbers, (number) => number + 1)); // => [ 2, 3, 4, 5, 6 ]
// console.log(map(numbers, () => false));
// // => [ false, false, false, false, false ]

// let values = [1, "abc", null, true, undefined, "xyz"];
// console.log(map(values, (value) => String(value)));
// // => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
