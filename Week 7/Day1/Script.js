// let b = 3, d = b, u = b;

// const tree = ++d * d*b * b++ +
//     + --d+ + +b-- +
//     + + d*b+ +
//     u

// console.log(tree);

// ++x
// x++

// let obj = {};
// obj.email = 'dan@mail.com';

//     let obj1 = new Object();
//     obj1.nama = "john";
//     obj1["email"] = "john@mail.com";

// console.log(obj);
// console.log(obj1);

// let name = obj.name;
// console.log(name);

// let email = obj["email"];
// console.log(email);

// // dynamic key

// let a = "ghghjhjh";

// let obj2 = {
//     [a]:'Marry'
// }

// console.log(obj2[a]);

// let e = "org_email";
// let un = "username";

// let obj3 = {
//     [e]:'john@njkj.com',
//     [un]:'johnjohn'
// }
// console.log(obj3);

// console.log(obj3.org_email);
// console.log(obj3["org_email"]);
// console.log([e]);

// loop

// let obj = {
//     name : "dan",
//     age: 16,
// };

// for(x in obj){
//     console.log(x,obj[x]);

// };

// Object keys

// const keys = Object.keys(obj);
// console.log(keys);
// keys.forEach(item => {
//     console.log(item);
// });

// Object.values
// const values = Object.values(obj);
// console.log(values);
// Object.values(obj).forEach(item => {
//     console.log(item);
// });

// Object.entries(keys and values in arrays in array [[],[]])

// const entries = Object.entries(obj);
// console.log(entries);
// // for(x of entries){
// //     console.log(x[0],x[1]);
// // };

// // Object.FromEntries

// let cities = [
//     ["tokyo",30000000],
//     ["delhi",70000000],
//     ["Tel Avuv",700000]
// ]

// console.log(cities);

// let fromEntries = Object.fromEntries(cities);
// console.log(fromEntries);

// let obj = {
//     name:"dan",
//     age:16,

// };

// let obj1 = obj;

// obj1.age = 20;

// clone

// let obj2 = {...obj};
// obj2.age = 30;

// console.log('obj=>',obj);
// console.log('obj2=>',obj2);

// let obj = {
//     name:"dan",
//     age:16,
//     address: {
//         city:"Tel Aviv"
//     }
// };

// let obj2 = {...obj};

// obj2.name= "Marry";
// obj2["age"] = 25;
// obj2.address.city = "Paris";

// console.log('obj=>',obj);
// console.log('obj2=>',obj2);

// /*Json*/

// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj);

// let newObj = JSON.parse(jsonObj);
// console.log("newObj=>",newObj);

// newObj.address.city = "New York";

/* Merging */
// let obj = {
//     name:"dan",
//     age:16,
// };

// let obj2 ={
//     city:"TLV",
//     name:"marry",
// };

// obj.city = obj2.city;

// console.log(obj);

// let obj3 = {...obj, ...obj2};
// console.log(obj3);

/** Destructuring */

// let obj = {
//     fname:"dan",
//     age:16,
// };

// const name = obj.fname;
// const age = obj["age"];

// console.log(name,age);

// let arr = ["one","two"];

// const [a,b] = arr;

// console.log(a,b);

// /** Spreading */

// let obj1 = {...obj, city:'tlv',lastnamr:'cohen',age:30};

// console.log(obj1);

/** Nested Object DEstructuring */

// let obj = {
//     fname:"dan",
//     age:16,
//     address:{
//         city:'ny',
//         country:'USA'
//     }
// };

// const {fname,age,address:{city,country}} = obj;

// console.log(fname,age,city,country);

// function fullName(obj){
//     const {fname,age,address:{city,country}} = obj;
//     return fname+ " "+ age+ " " + city + " "+ country;
// }

// console.log(fullName(obj));

let formvalus = {};

function handleInput(e) {
  formvalus[e.target.name] = e.target.value;
  console.log(formvalus);
}

// function handleInputPassword(e) {
//   formvalus.password = e.target.value;
//   console.log(formvalus);
// }

// function handleInput(e) {
//     formvalus.password = e.target.value;
//     console.log(formvalus);
//   }
  
// let users = [
//     {id:'user1',age:44,name:'picard'},
//     {id:'user2',age:12,name:'sisko'},
//     {id:'user3',age:109,name:'janeway'}
// ];

// let result = users.filter((e) =>{
//     if(e.age > 30){
//         return e
//     }
// }).map((elem)=>{
//    const {id,age,name} = elem;
//     return `${id},${age},${name}`
// });

// console.log(result);

// let fil = users.filter((e)=>{
//     if(e.age>30){
//         return e
//     }
// });

// console.log(fil);

// const usersKeys = Object.keys(users);
// console.log(usersKeys);

// const usersMore30 = usersKeys.filter((key)=>users[key].age>30);

// const resultx = usersMore30.map(id=> id);

// console.log('arrmap=>',result);

// const adult = Object.keys(users).filter((key) => users[key].age > 30).map((id)=> ({id,...users[id]}));
// console.log(adult);

// let name = "marry";
// let email = 'm@gmail.com';

// let obj = {
//     name,
//     email
// };

// console.log(obj);

/** object method */

// let obj = {
//     name:'john',
//     getName:function(){
//         return this.name
//     }
// }

// let username = obj.getName();
// console.log(username);


/** Class */

class Animal {
    constructor(animalname){
        this.name = animalname;
    }
    makeSound = () => {
        return`${this.name} makes a sound`;
    }
    }

const animalA = new Animal('Dog');
const animalB = new Animal('Lion');
// console.log(animalA.makeSound());
// let sounda = animalA.makeSound();
// let soundb = animalB.makeSound();
// console.log(sounda);
// console.log(soundb);

class Dog extends Animal{
    constructor(name){
        super('Dog')
        this.mydogname = name
    }
    // getters
    bark(){
        return `My ${this.name}, ${this.mydogname} bark`

    }
    getName(){
        return this.mydogname
    }
    // setters
    setName(val){
        this.mydogname = val;
    }
}
class Chinto extends Dog {
    
}


const myDog = new Dog('Tony');

let sound = myDog.bark();
let soundanimal = myDog.makeSound();
console.log(sound);
console.log(soundanimal);

myDog.setName('Boby');
console.log(myDog);

