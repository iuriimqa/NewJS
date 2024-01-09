// Exercise 3
const fs = require("fs");
// import path from "path";

const writeF = (file, data) => {
  let result = fs.writeFileSync(`${file}`, `${data}`, "utf-8");
  return result;
};

const readF = (filepath) => {
  let result = fs.readFileSync(`${filepath}`, "utf-8");
  return result;}

module.exports = {writeF,readF};

