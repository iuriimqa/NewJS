const { error, log } = require("console");
const fs = require("fs").promises;
const fs2 = require("fs");
const path = require('path');


const read = async() => {
    const data = await fs.readFile('info',"utf-8");
    console.log(data);
}
read()




/** Sync / Async - default */
// try{
// const data = fs.readFileSync('info','utf-8');
// console.log(data);
// }catch(error){
//     console.log(error.message);
// }

// const info = fs.readFile("info.txt",'utf-8',(err,data)=>{
//     if(err) return console.log(err.message);
//     console.log(data);
// })

// let data = 'abcde4525245';

// fs.writeFile('newfile',data,"utf-8",err=> {
//     if(err) return console.log(err);
//     console.log("File created");
// })

// fs.appendFile('newfile',data,'utf-8', err => {
//     if(err) return console.log(err);
//     console.log("data is appended");
// })

// fs.copyFile("info.txt",'info', err=> {
//     if(err) return console.log(err);
// })

