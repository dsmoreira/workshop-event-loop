// function sum(getX, getY, callback) {
//   var x, y;
//   getX(function (result) {
//     x = result;
//     //if (y !== undefined) {
//     callback(x + y);
//     //}
//   });
//   getY(function (result) {
//     y = result;
//     //if (x !== undefined) {
//     callback(x + y);
//     //}
//   });
// }

// function fetchX(resolve) {
//   resolve(5);
// }

// function fetchY(resolve) {
//   resolve(10);
// }

// sum(fetchX, fetchY, function (result) {
//   console.log(result);
// });

// function fetchX() {
//   return Promise.resolve(5);
// }

// function fetchY() {
//   return Promise.resolve(10);
// }

// function sum(xPromise, yPromise) {
//   return Promise.all([xPromise, yPromise]).then(function (values) {
//     return values[0] + values[1];
//   });
// }

// sum(fetchX(), fetchY()).then(function (sum) {
//   console.log(sum);
// });
