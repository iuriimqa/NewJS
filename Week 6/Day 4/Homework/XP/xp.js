// Exercise 1
    // #1
    // function funcOne() {
    //     let a = 5;
    //     if(a > 1) {
    //         a = 3;
    //     }
    //     alert(`inside the funcOne function ${a}`);
    // }


    //  #1.1 - run in the console:
    // funcOne()
    // #1.2 What will happen if the variable is declared 
    // // with const instead of let ?

    // Answer: We can use value of this function like veriable.
    // let - we can redefine value, const - we can't redefine value.Typeerror.

    //#2

    // function funcOne() {
    //     const a = 0;
    // function funcTwo() {
    //     a = 5;
    // }

    // function funcThree() {
    //     alert(`inside the funcThree function ${a}`);
    // }}


    // // #2.1 - run in the console:
    // funcThree()
    // funcTwo()
    // funcThree() 
    // Answer - funcThree is not defined
    // // #2.2 What will happen if the variable is declared 
    // // with const instead of let ?
    // Answer - funcThree is not defined


    // //#3
    // function funcFour() {
    //     window.a = "hello";
    // }
    // function funcFive() {
    //     alert(`inside the funcFive function ${a}`);
    // }

    // // #3.1 - run in the console:
    // funcFour()
    // funcFive()

    // Answer - alert 

    // //#4
    // const a = 1;
    // function funcSix() {
    //     const a = "test";
    //     alert(`inside the funcSix function ${a}`);
    // }


    // // #4.1 - run in the console:
    // funcSix()
    // // #4.2 What will happen if the variable is declared 
    // // with const instead of let ?
    // Answer - the same, cause it's different scoops

    // //#5
    // const a = 2;
    // if (true) {
    //     const a = 5;
    //     alert(`in the if block ${a}`);
    // }
    // alert(`outside of the if block ${a}`);

    // // #5.1 - run the code in the console
    // // #5.2 What will happen if the variable is declared 
    // // with const instead of let ?
    // Answer - the same, cause it's different scoops


// Exercise 2
// function winBattle(){
//     return true;
// }

// let winBtl = () => {return false};

// console.log(winBattle());
// console.log(winBtl());

// let experiencePoints = winBtl()? 10: 1;
// console.log(experiencePoints);

// Exercise 3
// let isString = (a) =>{return typeof a === "string" ? true: false};
// console.log(isString([1, 2, 4, 0]));

// Exercise 4
// let sum = (a,b) => {return a+b};
// console.log(sum(5,6));

// Exercise 5
// function Kilo(kg){
//     return kg*1000
// }

// console.log(Kilo(5));

// let kilo = function(kg){
//     return kg*1000
// }

// console.log(kilo(6));

// let kilo = (kg) => {return kg*1000};
// console.log(kilo(5));

// Exercise 6
// (function (number_of_children, partners_name, geographic_location, job_title) {
//     let result = `You will be an ${job_title} in ${geographic_location}, and married to ${partners_name} with ${number_of_children} kids.`
//     let h1 = document.createElement("h1");
//     let body = document.querySelector("body");
//     h1.innerText = result;
//     body.append(h1);
//   })(2,"Nataly","Israel","IOS developer");

// Exercise 7


// let form = document.forms.my;



// (function signUp(){

//     let nav = document.querySelector("nav");


//     let h2 = document.createElement("h2");
//     let img = document.createElement("img");
//     h2.innerText = "john";
//     let div = document.createElement("div");
//     div.append(h2,img);
//     nav.append(div)})()


// Exercise 8
// function makeJuice(size){
//     let div = document.querySelector("body");
//     let tex = document.createElement("h2");
//     div.append(tex);

//     let ingredients = [];
//     function addIngredients(a,b,c){
//         ingredients.push(a,b,c);
//         function displayJuice(){
           
//         tex.innerText = `The client wants a ${size} of juice, containing ${ingredients.join(" ,")}`;
        
//         }
//         displayJuice();
//     }
//     addIngredients("Strawberry","Peach","Pineapple");
//     addIngredients("Coconut","Beer","Cherry");
    
// }

// makeJuice("HUGE");

