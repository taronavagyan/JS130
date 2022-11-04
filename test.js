let foo = 1;

function bar() {
  if (foo === 1) {
    foo = 2; // you can change this line
  } else if (foo === 2) {
    let foo = 3; // you can change this line
  } else {
    foo = 4; // you can change this line
  }
}

bar();
bar();
bar();
console.log(foo); // 2
