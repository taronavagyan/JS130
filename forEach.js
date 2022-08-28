function forEach(array, callback, thisArg) {
  for (let idx = 0; idx < array.length; idx += 1) {
    callback.call(thisArg, array[idx], idx, array);
  }
}

["a", "b", "c"].forEach(function (value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});
