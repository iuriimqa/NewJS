// console.log("hello world")
// let longString = "This is a very long string which needs \
// to wrap across multiple lines because \
// otherwise my code is unreadable.";

// console.log(longString.length);
// let str = "Hello everyone, please say hello in the class";

// let posUppercaseHello = str.indexOf("Hello");
// console.log(posUppercaseHello);

// let posLowercaseHello = str.indexOf("hello");
// console.log(posLowercaseHello);

// console.log(str.substring(0,10));

let addressNumber = 7;
let streetNum = "Harakon street";
let country = "Israel";
let globalAdsress = "I live in" + " " + streetNum + " " + addressNumber + " " + "in" + " " + country;
console.log(globalAdsress);


let globelbutBetter = `I live in ${streetNum} ${addressNumber} in ${country}`;
console.log(globelbutBetter);

// Number Methods

// let op = "me";
// let num = 1;

// console.log(isNaN(op));
// console.log(isNaN(num));

let numTypenum = 1;
console.log(numTypenum);
console.log(numTypenum.toString());

let numbbb = 10.678;
console.log(numbbb.toFixed(1));


// let birthYear = 1991;
// let futureYear = 2024;
// let age = futureYear - birthYear;
// console.log(`I will be ${age} in ${futureYear}`);
// console.log(`I was born in ${birthYear}`);

// Boolean

console.log(Boolean(10 < 4));

// == by value
// === by type and value

// console.log(1>0 && 0<1);
// console.log(1<0 || 2>1);

let x = 1;
x = x + 1;
x++;
console.log(x);
x--;
console.log(x);

// alert("Hello");

// let tells = prompt("Tell what your age is?");
// console.log(tells);

// let conf = confirm("Are you Happy?");
// console.log(conf);


// Array Methods

let user1 = "John";
let user2 = "Johnes";
let user3 = "Junn";

let myArray = ["John", [1, 2, 3], "Bill", "Nancy"]
console.log(myArray[1]);
console.log(myArray[1][2]);

// add element to the end
let colors = ["blue", "orange", "black"];
console.log(colors[1]);
colors[1] = "pink";
console.log(colors[1]);
colors.push("white", "pink");
console.log(colors);

// delete last element
colors.pop();
console.log(colors);

//add or remove elements, changes original array
colors.splice(2, 1);
console.log(colors);
colors.splice(1, 0, "pink", "yellow");
console.log(colors);

// doest't touch original array
let newArr = colors.slice(0, 2);
console.log(newArr);

let colorsstring = colors.toString();
console.log(colors);
console.log(colorsstring);

let animals = ['snake', 'dog', 'fish', 'rabbit', 'cow'];
console.log(animals[1]);
animals.splice(3, 1, "horse");
console.log(animals);
console.log(animals.length);


// Objects

// let person = {fname:"Bob",lname:"Robb", age:"27"}
// console.log(person.fname);
// console.log(person.age);
// console.log(person["lname"]);
// delete person.fname;
// console.log(person);


// let person = { username: "Bob", password: "12345" }
// let database = [1, 2, person]
// let newsfeed = [{ username: "bob", timeline: "1" }, { username: "Bill", timeline: 3 }, { username: "Bobbee", timeline: "5" }]

// console.log(person);
// console.log(database);
// console.log(newsfeed);

// Conditionals if true 
// if(condition){
//     execute the code
// };

// let age = 20;
// age = 15

// if(age>18){
//     console.log("You are a MAN!")
// }
// else{
//     console.log("You can't drive and meet with girls!")
// };

// let age = 20 
// if(age === 18){
//     console.log("Its your birthday")
// }else if(age>18){
//     console.log("We can go to the pub together")
// }else(
//     console.log("Sorry, stay home")
// )

// let ages = prompt("What your age is?")
// if(ages<18){
//     alert("Sorry, you are too young to drive this car. Powering off")
// }else if(ages == 18){
//     alert("Congratulations on your first year of driving. Enjoy the ride!")
// }else{
//     alert("Powering On. Enjoy the ride!")
// }


// Switchcase

// let fruits = prompt("What you want?")

// switch(fruits){
//     case "Apples": console.log("Apples: 1 dollar/kilo")
//     break;
//     case "Bananas": console.log("Bananas: 2 dollar/kilo")
//     break;
//     case "Mangoes":
//     case "Papayas": console.log("Mangoes and Papayas: 1 dollar/kilo")
//     break;

//     default: console.log("Sorry, we don't have "+ fruits)

// }

// For Loops
// for(i = 0;i<10;i++){
//     console.log(`${i} is < 10 yet`)

// };

