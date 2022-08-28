function map(array, callback) {
  let mappedArray = [];

  for (let idx = 0; idx < array.length; idx += 1) {
    mappedArray.push(callback(array[idx]));
  }

  return mappedArray;
}

let numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, (number) => number * 3)); // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, (number) => number + 1)); // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, (value) => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]
