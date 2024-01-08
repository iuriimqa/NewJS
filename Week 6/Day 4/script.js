// let y = 2;

// function greet(){
//     let x = 1;
//     return x+y;
// }

// greet();
// console.log(greet());

// function numbers() {
//     for (let i = 0; i < 5; i += 1) {
//       console.log(i);
//     }
//       console.log(i);
//   }
//   numbers();

// Default Parameters
// function mulitply(a,b = 1){
//     return a*b
// }

// console.log(mulitply())

// Ternary operator

// function getFee(isMember){
//     return isMember ? "2.00" : "10.00";
// }


// let user = prompt("What year today?");
// let count = user > 2000;


// function yeaar(count){
//     return count ? "You are in the 21th century" : "You live in the Middle Age"
// }
// console.log(yeaar(count));

// function year(){
//     let user = prompt("What your year?");
//     let check = user>2000 ? "You are in 21th century" : "You are in the Middle Age"
//     console.log(check);
// }

// year();

// Baclticks
// console.log(`teext 1
// teext 324`);

// Function expression and declaration
// declaration
// function some(params){
//     // code
// }

// expression
// const funk = function some(params){
//     // code
// }

// Arrow function

// div.addeventListener("click",()=>{})

// const myFunc2 = (x,y) => x+y;

// const calc = (x,y,operator)=> {
//     return operator === "+"? x+y:
//     operator === "-" ? x-y:
//     operator === "*" ? x*y:
//     operator === "/" ? x/y:
//     "Invalid operator"
// }

// console.log(calc(1,2,"+"));

// (function (name) {
//     alert("Hello " + name);
// })("Sarah")

// Closures

// function outside(x){
//     function inside(y){
//         return x+y;
//     }
//     return inside
// }

// let fnInside = outside(3);
// console.log(fnInside);

// let result = fnInside(4);
// console.log(result);


// let add = (function () {
//     let counter = 0;
//     function calculus() {
//         counter += 1;
//         return counter
//     }
//     return calculus
// })();

// console.log(add());
// console.log(add());
// console.log(add());

// Currying

// const add = a => b => a + b;
// const result = add(2)(3)
// console.log(result) // console.log 5

// Uncurrying
// const curriedAdd = (x)=> (y) => x+y;
// const uncurried = (x,y) => curriedAdd(x)(y);
// console.log(uncurried(1,2)); 

// REfrence or value

// Objects
// let user = new Object(); // "object constructor" syntax
// let user = {};  // "object literal" syntax

// Dot-Notation
// let myCar = new Object();
// myCar.make = "Ford";
// myCar.model = "Mustang";
// myCar.year = 1969 ;

// console.log(myCar.make);
// let property ="make";
// console.log(myCar["make"]);

// const person = {
//     name: 'Lydia',
//     age: 21,
//   };
  
//   for (const item in person) {
//     console.log(`${item} ${person[item]}`);
//   }


// Advanced JS methods
// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");

// const str = "string";
// console.log(str.includes("sea"));
// str = str.padStart(str.length+3, "CAT");
// console.log("string".padStart(9,"CAT").padEnd(12,"DOG"));
