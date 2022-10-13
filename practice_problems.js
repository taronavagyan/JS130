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

// 6.

const ItemManager = {

  items : [],

  getSKUCode(name, category) {
    let identifier = "";

    for (let char of name) {
      if (identifier.length === 3) break;
      if (char !== " ") identifier += (char);
    }

    return (identifier + category[0] + category[1]).toUpperCase();
  },

  isInvalid(item) {
    let name = item.name.replace(/ /g, "");
    return (name.length < 5 || item.category.length < 5 || item.category.includes(" ") || !Number.isInteger(item.quantity));
  },

  create(name, category, quantity) {
    let item = {
      name, category, quantity,
      SKUCode : this.getSKUCode(name, category) 
    }

    if (this.isInvalid(item)) return { notValid: true };
    this.items.push(item);
  },

  update(identifier, sourceObj) {
    let target = this.findViaSKU(identifier);
    target = Object.assign(target, sourceObj);
  },

  delete(identifier) {
    let targetIndex = this.items.findIndex(item => item.SKUCode === identifier);
    this.items.splice(targetIndex, 1);
  },

  findViaSKU(identifier) {
    return this.items.find(item => item.SKUCode === identifier);
  },

  inStock() {
    this.items.forEach(item => {
      if (item.quantity > 0) console.log(item);
    });
  },

  itemsInCategory(category) {
    this.items.forEach(item => {
      if (item.category === category) console.log(item);
    });
  },
};

const ReportManager = {

  init(itemManager) {
    this.items = itemManager;
  },

  reportInStock() {
    this.items.inStock();
  },

  createReporter(identifier) {
    let item = this.items.findViaSKU(identifier);

    return {
      itemInfo() {
        Object.keys(item).forEach((prop) => {
          console.log(`${prop}: ${item[prop]}`)
        });
        console.log("");
      }
    }
  }
};

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item
// returns list with the 4 valid items
// console.log(ItemManager.items);
// console.log("---------------");
ReportManager.init(ItemManager);
// logs soccer ball,football,kitchen pot
// ReportManager.reportInStock();
// console.log("---------------");


ItemManager.update('SOCSP', { quantity: 0 });
// returns list with the item objects for football and kitchen pot
// ItemManager.inStock();
// console.log("---------------");
// football,kitchen pot
// ReportManager.reportInStock();
// console.log("---------------");


// returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.itemsInCategory('sports');
// console.log("---------------");

// ItemManager.delete('SOCSP');
// returns list the remaining 3 valid items (soccer ball is removed from the list)
// console.log(ItemManager.items);
// console.log("---------------");

let kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();

// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10

/////////////////////////

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
