// function download(locationOfFile, errorHandler) {
//   // try to download the file
//   let gotError = true;
//   let reasonCode = "Cannot reach server";
//   if (gotError) {
//     errorHandler(reasonCode);
//   }
// }

// function errorDetected(url, reason) {
//   // handle the error
//   console.log(url, "!!!", reason);
// }

// let url = "https://example.com/foo.txt";
// download(url, errorDetected.bind(null, url));

//

// function makeLogger1(identifier) {
//   return function (msg) {
//     console.log(identifier + " " + msg);
//   };
// }

// function makeLogger2(identifier) {
//   return function (msg) {
//     console.log(identifier, msg);
//   };
// }

// let logger1 = makeLogger1("Red");
// let logger2 = makeLogger2("Green");

// logger1("Alert");
// logger2("Alert");
