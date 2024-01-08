// Exercise 1
// let h1 = document.querySelector("h1");
// console.log(h1);

// let article = document.querySelector("article");

// let last = article.lastElementChild;
// console.log(last);
// last.remove();

// let h2 = document.querySelector("h2");
// h2.addEventListener("click",function(){h2.style.background = "red"});

// let h3 = document.querySelector("h3");
// h3.addEventListener("click",function(){
//     h3.style.display = "none";
// });

// let btn = document.createElement("button");

// function Boldx(){
//     article.style.fontWeight="bold"
// };
// btn.addEventListener("click",Boldx)
// let body = document.querySelector("body");
// btn.innerText = "Bold";
// body.append(btn);



// function Random(){
//     let num = Math.floor(Math.random() * 101);
//     console.log(num);
//     h1.style.fontSize = `${num}px`;
// };

// h1.addEventListener("mouseover",Random);
// // article.style.fontWeight = "bold";

// let p = document.querySelectorAll("p")[1];
// console.log(p);

// // p.style.opacity = 0;

// function shade(){
//     p.classList.add("fade-in-out");
// }

// p.addEventListener("mouseover",shade);

// Exercise 2
// let form = document.forms[0];
// let fname =document.getElementById("fname");
// let lname =document.getElementById("lname");
// // let fna1 =document.getElementsByName("firstname");
// // let lna1 =document.getElementsByName("lastname");

// let body = document.querySelector("body");
// let ul = document.querySelector("ul");
// let item1 = document.createElement("li");
// let item2 = document.createElement("li");
// ul.setAttribute("class", "userAnswers");
// body.append(ul);


// form.addEventListener("submit", submix);


// item1.innerText = "first name of user";
// item2.innerText = "last name of user";
// ul.append(item1,item2);

// function submix(e){
//     if(fname.value != 0 && lname.value != 0){
//     e.preventDefault(e)
//     console.log(fname.value)
//     console.log(lname.value)
//     item1.innerText = `Firstname :${fname.value}`;
//     item2.innerText = `Lastname: ${lname.value}`;
// }else{
//     alert("One of the strings is empty!")
// }}

// console.log(fna1);

// Exercise 3
let allBoldItems = [];
let pi = document.querySelector("p");
let arr = pi.children;


function getBoldItems(){
    // for(x =0;x<arr.length;x++){
    //     if(arr[x].style.fontWeight == "bold"){
    //         console.log(arr[x])
    //         allBoldItems+=arr[x];
    //     }
    // }
    // console.log(allBoldItems);
    // return allBoldItems;
    for (let element of arr){
        allBoldItems.push(element)
    }
    console.log(allBoldItems);
    console.log(arr);
}

getBoldItems()

// allBoldItems = pi.children;


// function highlight(){
// for(let item in allBoldItems){
//     item.style.color = "blue";
// }};

// function returnItemsToDefault(){
//     for(let item in allBoldItems){
//         allBoldItems[item].style.color = "black";
// }};

// pi.addEventListener("mouseover",highlight);
// pi.addEventListener("mouseout",returnItemsToDefault);

// Exercise 4
// let form = document.forms[0];
// let radius = document.getElementById("radius");
// let volume = document.getElementById("volume");


// console.log(radius.innerText);

// let p = 3.14159265359;

// function calc(e){
//     e.preventDefault();
//     let r = radius.value;
//     result = (4/3)*p*(r**3);
//     console.log(result)
//     // volume.value = result;
    
// }

// form.addEventListener("submit",calc);

function Move(){

}