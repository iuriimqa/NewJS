// // Exercise 1
// const people = ["Greg", "Mary", "Devon", "James"];
// people.splice(0, 1);
// people.splice(2, 1, "Jason");
// console.log(people);
// people.push("Yura");
// console.log(people);
// let id = people.indexOf("Mary");
// console.log(id);
// let sliced = people.slice(1, 3);
// console.log(sliced);
// id = people.indexOf("Foo");
// console.log(id);
// // cause it's not in array
// let idx = people.length;
// let last = people[idx - 1];
// console.log(last);
// // Part 2 Loops

// // for (i = 0; i < idx; idx++) {
// //     console.log(people[i])
// // };

// for(i = 0; i < people.length; i++){
//     if(people[i-1] == "Devon"){
//         break;
//     }
// console.log(people[i]);
// }

// // Exercise 2
// let colors = ["yellow","black","orange","blue","red"];
// let suff = ["st","nd","rd","rd","th"]
// for(i=0;i<colors.length;i++){
//     console.log(`My ${i+1}${suff[i]} choice is ${colors[i]}`)
// }

// // Exercise 3
// let num = Number(prompt("What number?"));

// while(num >10){
//     console.log(`${num} >= 10`);
//     num = Number(prompt("What new number?"))
// };

// // Exercise 4
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }

// console.log(building.numberOfFloors);
// console.log(building.numberOfAptByFloor.firstFloor);
// console.log(building.numberOfAptByFloor.thirdFloor);
// console.log(building.nameOfTenants[1]);
// console.log(building.numberOfRoomsAndRent.dan[0]);

// if(building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]>building.numberOfRoomsAndRent.dan[1]){
//     building.numberOfRoomsAndRent.dan[1] = 1200;
// }
// console.log(building.numberOfRoomsAndRent.dan[1]);

// // Exercise 5
// let family = {name:"Alex",surname:"Borov",role:"father"};

// let keys = "";
// for(let keys in family){
//     console.log(keys)
//     keys += keys+ " ";
// };

// let vars = "";
// for(let x in family){
//     vars+=family[x]+" "
// }

// console.log(vars);

// // Exercise 6
// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
//   }

// for(let keys in details){
//     console.log(keys+" " +details[keys])
// }

// // Exercise 7 
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// let society = "";
// for(i = 0; i<names.length; i++){
//     society+=names[i][0]
// }
// console.log(society);


// Daily Challenge
// // Stars
// let star = "*"
// for(i =0;i<6;i++){
//     console.log(star);
//     star+="*"
// }


// Not Bad
let sentence = "The movie is not that bad, I like it";
let senarr = sentence.split(" ");
console.log(senarr);
for(i=0;i<senarr.length;i++){
    if("not" in senarr){
        let wordNot = indexOf("not");
        console.log(wordNot)}
    if("bad" in senarr){
            let wordBad = indexOf("bad")
            console.log(wordBad)
            senarr.splice(wordNot,wordBad)
    }
    }

console.log(senarr)

//XP GOLD
// Exercise 1
// let numbers = [123, 8409, 100053, 333333333, 7]


