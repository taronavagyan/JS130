var foo = function () {
  console.log("Bye");
};

function foo() {
  console.log("Hello");
}

foo(); // "Bye"
