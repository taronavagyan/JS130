# JS130 Notes

## var

### REPL Behavior

In REPL, `var` creates variables on the global variable when defined outside function scope.

```JavaScript
var bar = 42;
console.log(global.bar); // 42
let foo = 86;
console.log(global.foo); // undefined
```

NOTE: This works in the REPL, but not in a ".js" file. This is due to a function wrapper in which Node executes code. In other words, the code is run in a function scope, not global scope.

## Function scope vs Block scope

Variable namespace is reserved at the top of the function or block in which it is declared. Whether function or block depends on the declaration keyword.

### Function scope

Variables declared with `var/function` are accessible from anywhere inside the function where it is declared, even if it was declared in a block which is never executed.

### Block scope

Variables declared with `let/const/class`.

## Scope

### Declared Scope

How an identfier is declared (`let/const/class` for block scope, `var/function` for function scope).

```JavaScript
let foo1 = 1;      // declared scope is block scope
var bar1 = 2;      // declared scope is function scope

if (true) {
  let foo2 = 3;    // declared scope is block scope
  var bar2 = 4;    // declared scope is function scope
}

function xyzzy() { // declared scope is function scope
  let foo3 = 5;    // declared scope is block scope
  var bar3 = 6;    // declared scope is function scope

  if (true) {
    let foo4 = 7;  // declared scope is block scope
    var bar4 = 8;  // declared scope is function scope
  }
}
```

### Visibility Scope

Where an identifier is available for use: global, local block, or local function scope. Based on the identifier's declared scope and position relative to blocks and functions.

```JavaScript
let foo1 = 1;      // visibility scope is global
var bar1 = 2;      // visibility scope is global

if (true) {
  let foo2 = 3;    // visibility scope is local block
  var bar2 = 4;    // visibility scope is global
}

function xyzzy() { // visibility scope is global
  let foo3 = 5;    // visibility scope is local function
  var bar3 = 6;    // visibility scope is local function

  if (true) {
    let foo4 = 7;  // visibility scope is local block
    var bar4 = 8;  // visibility scope is local function
  }
}
```

### Lexical Scope

Variable accessibility or whether a variable is in the inner or outer scope relative to another location at any point in the program.
NOTE: `var/function` is always considered outer scope of a block statement.

```JavaScript
// Block-Scoped Examples

let foo1 = 1;      // outer scope of xyzzy, outer scope of if block on line 3

if (true) {
  let foo2 = 3;    // inner scope of if block on line 3
}

function xyzzy() {
  let foo3 = 5;    // inner scope of xyzzy, outer scope of if block on line 10

  if (true) {
    let foo4 = 7;  // inner scope of if block on line 10
  }
}

// Function-Scoped Examples

var bar1 = 1;      // outer scope of xyzzy, outer scope of if block on line 3

if (true) {
  var bar2 = 3;    // outer scope of xyzzy, outer scope of if block on line 3
}

function xyzzy() {
  var bar3 = 5;    // inner scope of xyzzy, outer scope of if block on line 10

  if (true) {
    var bar4 = 7;  // inner scope of xyzzy, outer scope of if block on line 10
  }
}
```

## Hoisting

A mental framework which explains how declarations are handled during the **creation phase** of a program. Hoisting is the process of making each variable available at the top of their respective scope (function or block).

### Differences by keyword

`var` : Initialized to `undefined`
`let/const/class` : Namespace is reserved without an initial value (throws `ReferenceError`).
`function` : Hoist entire body and declaration. Can be invoked successfully prior to declaration

NOTE: Declaring an identifier with both `var` and `function` may exhibit strange depending on the order in which the values are declared and accessed/invoked when they share the same name. `function` gets hoisted and `var` can reassign the function variable.

## Strict mode

Changes:

<li>
Implicit Execution is `undefined`, not `global`
Does not allow Octal literals
Prevents declaring two function parameters with the same name
Prevents using `let` and `static` as variable names
</li>

## Closures

The packaging of pointers to lexically in-scope variables along with a function when assigning a function as a variable. In order to make use of closures, you create a function which does the following:

<li>
Defines private data at the top of the function scope.
Returns another function or object which interacts with the private data within the closure.
</li>

```JavaScript
function closure() {
  let counter = 0; // => Declared in function scope along with the function below
  return function() {
    return counter += 1; // => access variable in outer scope
  };
}

let incrementer = closure(); // invocation returns a funciton with private variable counter
let anotherIncrementer = closure(); // invocation returns a function with its own, independent variable counter

console.log(incrementer()); // => 1
console.log(incrementer()); // => 2
console.log(incrementer()); // => 3
console.log(anotherIncrementer()); // => 1
console.log(anotherIncrementer()); // => 2
console.log(anotherIncrementer()); // => 3
```

When the returned function or object is assigned to a variable in another scope, the closure will ensure that the private data that was in the function scope which returned the object/function remains in scope whenever accessing that object or invoking the function or method which references it.

## Private Data

Closures allow a function to access variables which pull from the outer scope of the function declaration. This means at the point of invocation, the variable being accessed may be out of scope. This allows us to essentially package functions with private variables.

## Partial function application

When defining a closure, the outer function accepts one or more, but not all, of the parameters needed by the function returned in the closure.

```JavaScript
function makeAdder(firstNumber) {
  return function(secondNumber) {
    return firstNumber + secondNumber;
  };
}

let addFive = makeAdder(5); // => five is stored as firstNumber in the closure
let addTen = makeAdder(10); // => ten is stored as firstNumber in the closure

console.log(addFive(3));  // 8
console.log(addFive(55)); // 60
console.log(addTen(3));   // 13
console.log(addTen(55));  // 65
```

## IIFEs (Immediately Invoked Function Expressions)

IIFEs are function expressions which are defined and immediately invoked.

```JavaScript
(function() {
  console.log("hello");
})(); // => hello

((first,second) => first * second)(5, 6); // => returns 30
```

The function scope creates a private lexical namespace which can help you avoid unintentionally altering a previously declared variable. This applies to variables within the function, as well as the function name itself. Blocks can accomplish a similar effect.

```JavaScript
let arr = [1, 2, 3];

{
  let arr = [1, 2, 3];
  arr.pop();
  console.log(arr); // => [1, 2]
}

console.log(arr); // => [1, 2, 3]
```

Saving IIFEs to variables can be very convenient:

```JavaScript
const makeUniqueId = (function() {
  let count = 0;
  return function() {
    count += 1;
    return count;
  }
})();

makeUniqueId(); // 1
makeUniqueId(); // 2
makeUniqueId(); // 3
```

In this example, an IIFE creates a closure with a counter and stores a function which increments and returns a counter into a variable. This means the Id can be generated directly by calling makeUniqueId;

## Shorthand Notation

### Destructuring 1: Objects

```JavaScript
let obj = {
  prop1 : 1,
  prop2 : 2,
  prop3 : 3,
};

let prop1 = obj.prop1;
let prop2 = obj.prop2;
let prop3 = obj.prop3;

// can be shortened!

let { prop1, prop2, prop3 } = obj;
```

### Destructuring 2: Function Parameters

```JavaScript
function xyzzy({ prop1, prop2, prop3}) {
  console.log(prop1); // 1
  console.log(prop2); // 2
  console.log(prop3); // 3
}

let obj = {
  prop1: 1,
  prop2: 2,
  prop3: 3,
}
```

NOTE: Parameter names must match property key names.

### Destructuring 3: Arrays

```JavaScript
let foo = [1, 2, 3];
let [ first, second, third ] = foo;
```

## Spread Syntax

Use of `...arr` to separate array or object properties into separate items.

### Application 1: Pass
