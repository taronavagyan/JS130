function reduce(array, callback, accum) {
  let idx = accum ? 0 : 1;
  accum = accum || array[0];
  while (idx < array.length) {
    accum = callback(accum, array[idx]);
    idx += 1;
  }
  return accum;
}

let numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number)); // => 15
console.log(reduce(numbers, (prod, number) => prod * number)); // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3)); // => 360
console.log(reduce([], (accum, number) => accum + number, 10)); // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(
  reduce(
    stooges,
    (reversedStooges, stooge) => {
      reversedStooges.unshift(stooge);
      return reversedStooges;
    },
    []
  )
);
// => ["Curly", "Larry", "Mo"]
