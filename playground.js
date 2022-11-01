// const recordVideoOne = new Promise((resolve, reject) => {
//   console.log("a");
//   resolve("Video 1 Recorded");
// });

// const recordVideoTwo = new Promise((resolve, reject) => {
//   resolve("Video 2 Recorded");
// });

// const recordVideoThree = new Promise((resolve, reject) => {
//   resolve("Video 3 Recorded");
// });

// Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree]).then(
//   (messages) => {
//     console.log(messages);
//   }
// );

bar(); // logs "world"

function bar() {
  console.log("world");
}

var bar = "hello";
