// Exercise 1

// function compareToTen(num) {
//   return new Promise((res, rej) => {
//     if (num <= 10) {
//       return res("Success");
//     } else {
//       return rej("Too big number");
//     }
//   });
// }


// compareToTen(56)
//   .then(result => console.log(result))
//   .catch(error => console.log(error))


// Exercise 2

// const newby = new Promise((res,rej)=>{
//     setInterval(()=>{
//         res("success");
//     },2000)
// })

// newby.then((res)=>{
//     console.log(res);
// })

// Exrecise 3
// let pr1 = Promise.resolve(3).then((res) =>{
//     console.log(res);
// })

// let pr2 = Promise.reject("Boo").catch((err)=>{
//     console.log(err);
// })


