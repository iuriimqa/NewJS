// Exercise 1
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// let choose = colors.map((e,id) => {
//     return `the #${id+1} is ${e}`
// })
// console.log(choose);

// let somes = colors.some((e) => e == "Violet")
// somes ? console.log("Yeah"):console.log("No");
// console.log(somes);


// Exercise 2
// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];

// let combo = colors.map((e,id) => {
//     idx = id +1;
//     idx > 4? console.log(`${idx}${ordinal[0]} choise is ${e}`):
//     idx === 1 ? console.log(`${idx}${ordinal[1]} choise is ${e}`):
//     idx === 2 ? console.log(`${idx}${ordinal[2]} choise is ${e}`):
//     idx === 3 || idx === 4 ? console.log(`${idx}${ordinal[3]} choise is ${e}`):
//     console.log()
// })

// console.log(combo);

// Exercise 3

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// Answer - ['bread', "carrot", "potato", 'chicken', "apple", "orange"]

// ------2------
// const country = "USA";
// console.log([...country]);

// Answer - ["U","S","A"]

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// Answer - [undefined, undefined]

// Exercise 4

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

// let welcome = users.map((e) => {
//     return `Hello ${e.firstName}`
// })

// console.log(welcome);

// let Fstacks = users.filter((e)=> {
//     return e.role === 'Full Stack Resident'
// }).map((e)=>{
//     return e.lastName;
// });

// console.log(Fstacks);


// Exercise 5
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

// let redduc = epic.reduce((acc,val) => {
//     return acc +" "+ val;
// })

// console.log(redduc);

// Exercise 6

// const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
//                {name: "Liam", course: "Computer Science", isPassed: false}, 
//                {name: "Jenner", course: "Information Technology", isPassed: true}, 
//                {name: "Marco", course: "Robotics", isPassed: true}, 
//                {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
//                {name: "Jamie", course: "Big Data", isPassed: false}];

// let res = students.filter((e) =>{return e.isPassed?e:console.log()
// }).forEach((e) => {
//     console.log(`Good job ${e.name}, you passed the course in ${e.course}`)
// })

// console.log(res);