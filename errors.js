// let x = a;

function div(first, second) {
  if (second === 0) {
    throw new Error("Divide by zero!");
  }

  return first / second;
}

let result = div(1, 0);
console.log(result);
