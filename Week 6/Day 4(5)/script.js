// For Each
// const myArray = [2,3,4,5,6];
// const colors = ["red", "blue", "green","purple"];

// colors.forEach((element, theIndex,arr)=> {
//     console.log(element);
//     console.log(theIndex);
//     console.log(arr);
// })

// const numbers = [10,11,12,15,20];

// numbers.forEach((i) =>{
//     i % 2 === 0 ? console.log(i):console.log()
        
//     }
// );

// numbers.forEach((element)=> {
//     element % 2 === 0 && console.log(element);
// })


// some
// const myArr = [1,2,3,4,5,6,7,8];

// let someReturn = myArr.some((element) => {
//     console.log(element);
//     return element % 2 === 0;
// });
// console.log(someReturn);

// const words = ["wow","hey","bye"];

// let someLetter = words.some((e) => {
//     console.log(e);
//     return e[0] === "h" ;
// })

// console.log(someLetter);

// let returnSome = words.some((e) => {
//     console.log(e);
//     return e.startsWith("h");
// })

// console.log(returnSome);

// Every

// const myArr = [1,2,3,4,5,6,7,8];

// let returnEvery = myArr.every((e) => {
//     console.log(e);
//     return e <8;
// })

// console.log(returnEvery);

// const words = ["hello","hey","hola"];

// let returnEver = words.every((e) => {
//     console.log(e);
//     return e.startsWith("h");
// })

// console.log(returnEver)

// Map

const originalArr = [1,4,9,16];

// console.log(originalArr);

// const newArr = originalArr.map((element) =>{
//     if(element>4){
//         return element*2
//     }else{
//         return element
//     }
// });

// console.log(newArr);

// myArr = [10,20,30,40];

// let newArr = myArr.map((val, i) => {
//   return Math.floor(Math.random() *10) * val
// });

// console.log(newArr);

// Filter

// const words = ['spray','limit','elite','exuberant','destruction','present'];

// const newArr = words.filter((word) => {
//     return word.length > 5;
// });

// console.log(newArr);

// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const neew = numbers.filter((e)=> {
//     return e >3 && e< 8 
// });

// console.log(neew);

// Reduce 
// const Arr = [1,4,9,16];

// let sum = Arr.reduce((acc,val)=> acc + val);
//     // console.log(`accumulator: ${acc}`);
//     // console.log(`value: ${val}`);
 

// console.log(sum);

// const Arr = [1,4,9,16];

// let sum = Arr.reduce((acc,val)=> {
//     console.log(val);
//     return acc + val});

// console.log(sum);

// let party = [
//     {
//       desert: 'Chocolate Mousse',
//       calories: 30,
//     },
//     {
//       desert: 'Apple Pie',
//       calories: 15,
//     },
//     {
//       desert: 'Croissant',
//       calories: 50,
//     },
//     {
//       desert: 'Strawberry Icecream',
//       calories: 5,
//     },
//   ];

//   let redducc = party.reduce((acc,val)=>{
//     return val.desert != 'Apple Pie'? acc+val.calories:
//     acc

//   },0)

//   console.log(redducc);

// Destructuring

// let [a,b,c] = [10,20,30,40,50];
// let rest = [30,40,50];
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);

// let arr = ["Shlomi","Elhanan"];
// let [person1,person2] = arr;
// console.log(person1);
// console.log(person2);

// Spread

// let a = 10;
// let b = 20;
// let rest = [30,40,50];
// const arr = [a,b, ...rest];
// console.log(arr);

// Rest

// let a = 10;
// let b = 20;
// let rest = [30,40,50];
// let [a,b, ...rest] = [10,20,30,40,50];
// console.log(rest);
// console.log(a);
// console.log(b);

// const rainbow = ["red","orange","yellow"];
// // const rainbowClone = rainbow;

// // rainbow.push("black");
// // rainbowClone.push("white")

// let rainbowClone = [...rainbow];
// rainbowClone.push("black");

// console.log(rainbow);
// console.log(rainbowClone);

