
// let we can change(redefine) everytime
// const we can't change so easy

// let username;

// do{
//     username = promt("what is your username?");
// }while(username !== "admin");

// const meArr = [1,2,3,4,5];
// we can do meArr.push("some"):
// we can't meArr = something;

// let num = 0;
// for(let x = 1;x<6;X++){
//     num++
// }
// console.log(num);


// Functions

// function drinkCoffee(){
//     console.log("I drink coffee")
// }

// drinkCoffee()

// function userInfo(userName, userAge){
//     console.log(`My name is ${userName} and my age is ${userAge}`)
// }
// userInfo("Yuri",32)

// function calculate(a,b,c,d){
//     console.log(a+b+c+d)
// }

// Default parameters
// function userInfo(userName, userAge = "unknown"){
//         console.log(`My name is ${userName} and my age is ${userAge}`)
//     };
// userInfo()

// Local variables

// function userMoreInfo(userName,userAge){


// }

// function agizm(age){
//     console.log(`My mum age is ${age*2} and my dad age is ${age*2*1.2}`)
//     return result
// }
// let age = Number(prompt("What is your age?"));
// agizm(age)

// function calc(a,b){
//     return a + b
// }
// console.log(calc(1,2)+calc(2,3))

// function isDivisible(number, divasible){
//     if(number % divasible === 0){
//         // console.log("it's work")(it works only before return)
//         return "number is even"
//     }else{
//         return "number is odd"
//     }
// }

// console.log(isDivisible(2,2))
// console.log(isDivisible(133,3))
// console.log(isDivisible(50,5))

// function agizm(age=18){
//     console.log("I need to think...")
//     return `My mum is ${age*2}`
// }
// agizm(23)
// console.log(agizm())

// Exceptions
// try{
//     const frui = "apple";
//     // frui = "banana";
//     throw new Error("Ooops..");
// }catch(err){
//     console.log(err.name)
//     console.log(err.message)
//     console.log(err.stack)
// }finally{
//     console.log("I can run it with errors")
// }


// const person = {
//     firstName:"Sarah",
//     eyeColor:"Blue",
//     eat:function(){
//         console.log(`My name is ${this.firstName} and I love chocolate`)
//     }
// }

// console.log(person.eat())


// DOM
// query
// const li = document.querySelector("#second");
// console.log(li);

// const listitems = document.querySelectorAll("li");
// console.log(listitems);

// const firstlist = document.querySelector(".first")
// console.log(firstlist.children)

// const lis = document.getElementsByClassName("first")
// console.log(lis)

// const h2 = document.createElement("h2");
// h2.innerText = "This is our first create element";

// const div = document.querySelector("#container");

// div.append(h2);

// firstlist.remove()


// console.log(ul.matches("#second"));


// let div = document.querySelector("div");
// let div2 = document.getElementById("container");
// console.log(div);
// console.log(div2);



// let ul = document.querySelectorAll("ul");
// let ul2 = document.getElementsByClassName("list");

// console.log(ul[0].children[0]);
// console.log(ul[0].children[1]);
// console.log(ul[1].children[1]);
// console.log(ul2);

// for(let u in ul){
//     for(let l in ul.children){
//         console.log(l);
//     }
// }

// Attributes
// const div = document.querySelector("div");
// const img = document.createElement("img");
// console.log(div.hasAttribute("id"));
// div.setAttribute("id", "red");

// img.setAttribute("src","https://img.freepik.com/free-photo/a-picture-of-fireworks-with-a-road-in-the-background_1340-43363.jpg?size=626&ext=jpg");
// div.append(img);

// let link = document.querySelector("a");
// let hrefx = link.href
// console.log(hrefx);
// let hrefxlang = link.hreflang;
// console.log(hrefxlang);
// let relx = link.rel;
// console.log(relx);
// let targetx = link.target;
// console.log(targetx);
// let typex = link.type;
// console.log(typex);

// let link = document.querySelector("a");
// link.classList.add("aclass");

// Forms
// const forms = document.forms;
// console.log(forms[0]);

// let personform = document.forms.personform;
// let dogform = document.forms.dogform;

// console.log(personform);
// console.log(dogform);

// personform.age.value = "I am another value";

// console.log(personform.children.age.form);

// let form = document.forms.radioForm;

// console.log(form.elements.form);

// const select = document.querySelector("#fruits");
// const select = document.querySelector("#school-type");

// console.log(select.options[1].value);

// let option = new Option("Work");
// select.append(option);

// let option2 = new Option("Primary School");
// select.prepend(option2);
// select.options[3].selected = "true";

// let button =document.createElement("button");
// let text = document.createTextNode("Button");
// button.append(text); 

// function selected(){
//     for(i=0;i<select.options.length;i++)
//     {if(select.options[i].selected == "true"){
//         alert(`The selected is ${select.options[option].value}`)
//     }
//     }

// };


// button.setAttribute("onClick","selected()");
// let body = document.querySelector("body");
// body.append(button);

// selected();