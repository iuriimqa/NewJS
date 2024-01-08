// Find the smallest distance between 2 numbers

// let arr = [2, 5, 3, 7, 2, 3, 6, 8, 6];

// function minimumDistance(arr) {
//   let distances = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i != arr.lastIndexOf(arr[i])) {
//       let mDistance = arr.lastIndexOf(arr[i]) - i;
//       distances.push(mDistance);
//     }
//   }
//   return distances.length === 0 ? undefined : distances.sort()[0];
// }

// console.log(minimumDistance(arr));

// const marioGame = {
//   detail: "An amazing game!",
//   characters: {
//     mario: {
//       description: "Small and jumpy. Likes princesses.",
//       height: 10,
//       weight: 3,
//       speed: 12,
//     },
//     bowser: {
//       description: "Big and green, Hates princesses.",
//       height: 16,
//       weight: 6,
//       speed: 4,
//     },
//     princessPeach: {
//       description: "Beautiful princess.",
//       height: 12,
//       weight: 2,
//       speed: 2,
//     },
//   },
// };

// let marioJSON = JSON.stringify(marioGame);
// console.log(marioJSON);

// let obj = {
//     name:"John",
//     age:30,
//     city:'Tel Aviv',
//     sensetiveInfo:'some sensitive data',
// }

// function replaceSensetive(key,value){
//     if(key === 'sensetiveInfo') return undefined;
//     if(typeof value === 'string') return undefined
//     return value
// }

// // obj,replacer, space
// console.log(JSON.stringify(obj,replaceSensetive,2));

/** Asynchronize JS */

// function getX() {
//   console.log("get x =>");
//   setTimeout(() => {
//     return 5;
//   }, 1);
//   return 5;
// }

// function getY() {
//   console.log("get y =>");
//   return 6;
// }

// function getXY() {
//   console.log("get xy =>");
//   let x = getX();
//   console.log("x=>", x);
//   let y = getY();
//   console.log("y=>", y);
//   console.log(x + y);
// }

// getXY();

// function doSomething(f) {
//   // .. get data from the server

//   f();
// }

// function myCallback() {
//   console.log("Callback extecuted !!!");
// }

// doSomething(myCallback);

// function fetchDataFromServer(callback) {
//   setTimeout(() => {
//     const data = "Data from server";
//     callback(data);
//   },2000);
// }

// function processData(data) {
//   console.log("REceived:" + data);
// }

// fetchDataFromServer(processData);

/**  */
// function getX(callback) {
//   setTimeout(() => {
//     callback(5);
//   }, 2000);
// }

// function getY(callback) {
//   callback(6);
// }

// function getXY() {
//   getX(function (x) {
//     getY(function (y) {
//       console.log(x + y);
//     });
//   });
// }

// getXY();

/** Promises
 * - Pending
 * - resolve - fulfiled
 * - reject - fulfiled
 */

/**
 * new Promise((resolve,reject) => {})
 */

// const p = new Promise((resolve, reject) => {
//   resolve(10);
//   reject(2);
// });

// console.log(p);

// const flip = () => {
//   const coin = Math.floor(Math.random() * 3);
//   return coin < 2 ? (coin === 0 ? "head" : "tail") : "side";
// };

// // console.log(flip());

// const flipcoin = new Promise((res, rej) => {
//   setTimeout(() => {
//     const flipResult = flip();
//     if (flipResult === "head" || "tail") {
//       res(flipResult);
//     } else {
//       rej(flipResult);
//     }
//   }, 1000);
// });

// // console.log(flipcoin);
// flipcoin
//   .then((result) => {
//     return JSON.stringify(result,null,4);
//   })
//   .then((result) => {
//     // return JSON.parse(result);
//     console.log(result);
//   })
// //   .then((result) => {
// //     console.log(result);
// //   })
//   .catch((error) => {
//     console.log("rej=>", error);
//   });

// function getX(callback) {
//   setTimeout(() => {
//     callback(5);
//   }, 2000);
// }

// function getY(callback) {
//   callback(6);
// }

// function getXY() {
//   getX(function (x) {
//     getY(function (y) {
//       console.log(x + y);
//     });
//   });
// }

// getXY();

// const getX = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(5);
//     }, 2000);
//   });
// };
// const getY = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       res(6);
//     }, 3000);
//   });
// };
// const getXY = () => {
//   return new Promise((res, rej) => {
//     let x = getX();
//     console.log("x=>", x);
//     x.then((resultX) => {
//       console.log("resultX=>", resultX);

//     let y = getY();
//     console.log(("y=>", y));
//     y.then((resultY) => {
//       console.log("resultY=>", resultY);
//       return resultX + resultY;
//     })
//       .then((sum) => {
//         console.log(sum);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     });
//   }).catch((err) => {
//     console.log(err);
//   });
// };

// getXY();

/** SimulsateAsyncOperation -> get some array of object from server as json
 * setTimeout -> 5 seconds
 * return Promise with the data
 *
 * call this function and log the data as an array datatype
 */

// function getX(callback) {
//   setTimeout(() => {
//     callback(5);
//   }, 2000);
// }

// function getY(callback) {
//   callback(6);
// }

// function getXY() {
//   getX(function (x) {
//     getY(function (y) {
//       console.log(x + y);
//     });
//   });
// }

// function getData() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const arr = [
//         { common: "Israel", official: "State of Israel" },
//         { official: "Государство Израиль", common: "Израиль" },
//       ];
//       res(JSON.stringify(arr));
//     }, 2000);
//   });
// }

// getData()
//   .then((res) => {
//     return JSON.parse(res);
//   })
//   .then((data) => {
//     showdata(data);
//   });

// const showdata = (arr) => {
//   const html = arr.map((item) => {
//     return `<div>
//             ${item.common},${item.official}
//             </div>`;
//   });
//   document.getElementById("root").innerHTML = html.join("");
// };

/**
 * Promise Static methods
 *
 * Promise.all(arr_of_promises)
 * Promise.allSettled(arr)
 * Promise.race(arr)
 */

// const promise1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res("Resolve Promise 1");
//   }, 2 * 1000);
// });

// const promise2 = new Promise((res, rej) => {
//       res("Resolve Promise 2")});

// const promise3 = new Promise((res, rej) => {
//     setTimeout(()=>{
//       res("Resolve Promise 3");
// },5*1000);
// });

// Promise.all([promise1,promise2,promise3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// });

// Promise.allSettled([promise1,promise2,promise3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

// Promise.race([promise1,promise2,promise3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })

