// Exercise 1
// function displayNumbersDivisible(divisor){
//     let summ = 0;
//     for(i=0;i<500;i++){
//         if(i % divisor === 0){
//             summ+=i;
//             console.log(i);
//         }
//     }
//     console.log(summ)
// }

// displayNumbersDivisible(23);

// Exercise 2

// const stock = { 
//     "banana": 6, 
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// };  

// const prices = {    
//     "banana": 4, 
//     "apple": 2, 
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }; 

// let shoppinglist = ["banana","orange","apple"];

// function myBill(){
//     let summ = 0;
//     for(let fruit of shoppinglist){
//        console.log( stock[fruit])
//         if(fruit in stock && stock[fruit] > 0){
//             summ+= prices[fruit];
//             stock[fruit]-=1;
//         }
//     }
//     console.log(summ);
//     console.log(stock);
// }

// myBill()

// Exercise 3
//     const quarter = 0.25;
//     const dimer = 0.10;
//     const nickel = 0.05;
//     const penny = 0.01;

// let amountOfChange = []



// function changeEnough(itemPrice, amountOfChange){

//     let quarter = amountOfChange[0] *= 0.25;
//     let dimer = amountOfChange[1] *= 0.10;
//     let nickel = amountOfChange[2] *= 0.05;
//     let penny = amountOfChange[3] *= 0.01;

// amountOfChange = quarter + dimer + nickel + penny;

// console.log(amountOfChange);
//  if(amountOfChange>=itemPrice){
//     return true
//  }else{
//     return false
//  }   
// }
// console.log(changeEnough(0.75, [0,0,20,5]));

// Exercise 4

// function hotelCost(){
//     const cost = 140;
//     let user = prompt("How many days you stay in the hotel?");
//     let total = user * cost;
//     // console.log(total)
//     return total;
// }
// // hotelCost()

// function planeRideCost(){
//     let plancost = 0;
//     plane = prompt("Where you want to fly?")
//         if(plane == "London"){
//         plancost = 183}
//         else if(plane == "Paris"){
//             plancost = 220;
//         }else{
//             plancost = 300;
//         }
//         // console.log(plancost)
//         return plancost;
//     }
//         // planeRideCost()
//     function rentalCorCost(){
//         let car = 0;
//         let rent = prompt("How many days you need a car?");
//         if(rent>10){
//             car = 40 * 0.95;
//         }else{
//             car = 40;
//         }

//         car = rent * car;
//         // console.log(car)
//         return car;
//     }
//     // rentalCorCost();

// function totalVacationCost(){
//     let full = hotelCost() + planeRideCost() + rentalCorCost();
//     console.log(full);
//     return full;
// }



// totalVacationCost()

// Exercise 5
// let dv = document.querySelector("div");
// console.log(dv);

// let ul = document.querySelector("ul");
// ul.children[1].innerText = "Richard";
// console.log(ul);

// let ul2 = document.querySelectorAll("ul")[1];
// let child = ul2.children[1];
// ul2.removeChild(child);
// console.log(ul2)

// let lists = document.querySelectorAll("ul");

// console.log(lists[0].children[0]);


// for(let list in lists){
//     let elem;
//     elem = lists[list].children[0];
//     elem.innerText = "Yura";
// };
// let lists = document.querySelectorAll("ul");

// console.log(lists[0]);


// for(let x in lists){
//     lists[x].classList.add("student_list");
// };

// let ul = document.querySelector("ul");
// ul.classList.add("university","attendance");
// console.log(ul);

// const divx = document.getElementById("container");
// console.log(divx);
// divx.style.background = "lightblue";
// divx.style.padding = "20px";

// let ulz = document.querySelectorAll("ul");
// ulz[1].children[2].style.display = "none";
// ulz[0].children[1].style.border = "3px black solid";
// const body = document.querySelector("body");
// body.style.fontSize = "larger";
// if(divx.style.background == "lightblue"){
//     alert("Hello x and y")
// }


// Exercise 6
