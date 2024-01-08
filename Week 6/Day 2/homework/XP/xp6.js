// Exercise 6
// let div = document.querySelector("div")
// div.setAttribute("id","socialNetworkNavigation");

// let li = document.createElement("li");
// let txtnod = document.createTextNode("Logout");
// li.appendChild(txtnod);

// let ul = document.querySelector("ul");
// ul.appendChild(li);

// console.log(ul.firstElementChild);
// console.log(ul.firstElementChild.textContent);
// console.log(ul.lastElementChild);
// console.log(ul.lastElementChild.textContent);

// Exercise 7

let allBooks = [{title:"Rich Dad, Poor Dad",author:"Kiosaki",image:"https://main-cdn.sbermegamarket.ru/big1/hlr-system/584/008/450/927/112/8/100041636672b0.jpg",alreadyread:false},{title:"Harry Potter",author:"Roling",image:"https://ae04.alicdn.com/kf/A1bc1ad4e2a984680ae308978b45abe533.jpg",alreadyread:true}];

let rich = document.createElement("div");
let harry = document.createElement("div");

let section = document.querySelector("section")

section.appendChild(rich);
section.appendChild(harry);

let divs = document.querySelectorAll("div");

rich = divs[0];
console.log(rich);
harry = divs[1];

let img = document.createElement("img");
let img2 = document.createElement("img");
let title1 = document.createElement("h2");
let title2 = document.createElement("h2");
let auth1 = document.createElement("h3");
let auth2 = document.createElement("h3");
let isread1 = document.createElement("p");
let isread2 = document.createElement("p");

img.setAttribute("src",allBooks[0].image);
// img.setAttribute("width","400px");
// img2.setAttribute("width","400px");
img.style.width = "400px";
img2.style.width = "400px";
title1.innerText = rich.title;
title2.innerText = harry.title;
rich.append(img,title1,auth1,isread1);
harry.append(img2,title12,auth2,isread2);

// rich.appendChild(img);
img2.setAttribute("src",allBooks[1].image);
// harry.appendChild(img2);

