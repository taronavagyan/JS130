// 1.

// (function delayLog() {
//   for (var num = 1; num <= 10; num += 1) {
//     setTimeout(() => console.log(num), num * 1000);
//   }
// })();

// 2.

// 11 is logged each time because var is function scoped

// 3.

// setTimeout(function() {   // 1
//   console.log('Once');    // 5
// }, 1000);

// setTimeout(function() {   // 2
//   console.log('upon');    // 7
// }, 3000);

// setTimeout(function() {   // 3
//   console.log('a');       // 6
// }, 2000);

// setTimeout(function() {   // 4
//   console.log('time');    // 8
// }, 4000);

// 4.

// function g() {}
// function f() {}
// function z() {}
// function d() {}
// function n() {}
// function q() {
//   console.log("q");
// }
// function s() {
//   console.log("s");
// }

// setTimeout(function () {
//   setTimeout(function () {
//     q();
//   }, 15);

//   d();

//   setTimeout(function () {
//     n();
//   }, 5);

//   z();
// }, 10);

// setTimeout(function () {
//   s();
// }, 20);

// setTimeout(function () {
//   f();
// });

// g();

// g(), f(), d(), z(), n(), s(), q()

// 5.

// function afterNSeconds(callback, ms) {
//   let secs = ms * 1000;
//   setTimeout(callback, secs);
// }

// afterNSeconds(() => console.log("boom!"), 3);
