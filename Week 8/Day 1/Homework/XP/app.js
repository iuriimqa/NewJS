import users from "./data.js";

// console.log(users);

function summz(arr) {
  let sum = arr.reduce((acc, item) => {
    return acc + item.age;
  }, 0);
  const average = sum / arr.length;
  return average;
}

console.log(summz(users));
