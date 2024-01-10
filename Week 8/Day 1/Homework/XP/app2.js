const {readF} = require("./fileManager.js");
const {writeF} = require("./fileManager.js");


// console.log(readF('./Hello World.txt'));
console.log(readF("./Hello World.txt"));
writeF("./Bye world.txt","Writing to the file");


