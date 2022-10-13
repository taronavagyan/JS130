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

// 3.

// function newStack() {
//   let stack = [];

//   return {
//     push(newItem) {
//       stack.push(newItem);
//     },

//     pop() {
//       return stack.pop();
//     },

//     printStack() {
//       console.log(stack.reduce((list, item) => list + "\n" + item));
//     },
//   };
// }

// let stack = newStack();

// stack.printStack();

// 4.

// function delegate(obj, methodName) {
//   let partialArgs = [].slice.apply(arguments, [2]);

//   return function () {
//     obj[methodName].apply(obj, partialArgs);
//   };
// }

// let foo = {
//   name: "test",
//   bar: function (greeting) {
//     console.log(greeting + " " + this.name);
//   },
// };

// let baz = {
//   qux: delegate(foo, "bar", "hello"),
// };

// baz.qux(); // logs 'hello test';

// foo.bar = function () {
//   console.log("changed");
// };

// baz.qux(); // logs 'changed'

// 5.

// const Account = {

//   init(email, password, firstName, lastName) {

//     return (function () {
//       let displayName = (function anonymize() {
//         const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
//         let randomStr = "";
      
//         while (randomStr.length < 16) {
//           let randomChar = characters[Math.floor(Math.random() * characters.length)];
//           randomStr += randomChar;
//         }
      
//         return randomStr;
//       })();

//       return {
        
//         displayName,

//         reanonymize(currentPassword) {
//           if (password !== currentPassword) return "Invalid Password!";
//           const characters = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
//           let randomStr = "";
        
//           while (randomStr.length < 16) {
//             let randomChar = characters[Math.floor(Math.random() * characters.length)];
//             randomStr += randomChar;
//           }
        
//           this.displayName = randomStr;
//           return true;
//         },

//         resetPassword(currentPassword, newPassword) {
//           if (currentPassword !== password) return "Invalid Password";
//           password = newPassword;
//           return true;
//         },

//         firstName(currentPassword) {      
//           if (password !== currentPassword) return "Invalid Password";
//           return firstName;
//         },

//         lastName(currentPassword) {
//           if (password !== currentPassword) return "Invalid Password";
//           return lastName;
//         },

//         email(currentPassword) {
//           if (password !== currentPassword) return "Invalid Password";
//           return email;
//         }, 
        
//       }
//     })();
//   },



// };

// let fooBar = Object.create(Account).init('foo@bar.com', '123456', 'foo', 'bar');
// console.log(fooBar.firstName);                     // returns the firstName function
// console.log(fooBar.email);                         // returns the email function
// console.log(fooBar.firstName('123456'));           // logs 'foo'
// console.log(fooBar.firstName('abc'));              // logs 'Invalid Password'
// console.log(fooBar.displayName);                   // logs 16 character sequence
// console.log(fooBar.resetPassword('123', 'abc'))    // logs 'Invalid Password'
// console.log(fooBar.resetPassword('123456', 'abc')) // logs true

// let displayName = fooBar.displayName;
// fooBar.reanonymize('abc');                         // returns true
// console.log(displayName === fooBar.displayName);   // logs false

// let bazQux = Object.create(Account).init('baz@qux.com', '123456', 'baz', 'qux');
// // Note that the foillowing two lines of code are correct as written.
// // There are no mistakes. We are attempting to demonstrate that the
// // code does not work as might be intended.
// console.log(fooBar.firstName('abc'));           // logs 'baz' but should log foo.
// console.log(fooBar.email('abc'));               // 'baz@qux.com' but should 'foo@bar.com'




//// Miscellaneous ////

// 1.

// function sum(...values) {
//   return values.reduce(function (a, b) {
//     return a + b;
//   });
// }

// sum(1, 4, 5, 6); // 16

// 2.

// function formatName(firstName, middleName, lastName) {
//   return `${lastName}, ${firstName} ${middleName[0]}.`;
// }

// fullName = ["James", "Tiberius", "Kirk"];

// console.log(formatName(...fullName));
// // logs: Kirk, James T.
