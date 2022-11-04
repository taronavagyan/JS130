try {
  foo();
} catch (error) {
  // error caught
  console.log("That's all, folks!"); // logged
}

console.log("End program"); //logged

function foo() {
  // hoisted
  try {
    doThis(); // not defined, ReferenceError thrown, skipped to catch block
    console.log("tried to run doThis");
  } catch (error) {
    if (error instanceof ReferenceError) {
      // truthy
      console.log("Got a ReferenceError exception"); // logged
      doThis(); // error, see line 3
    }
  }

  console.log("Done with foo()");
}
