/** Exercise 1 */

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// // Answer - I am John Doe from Vancouver, Canads.Latitude(49.2827),Longtitude(-123.1207)

/** Exercise 2 */

// function displayStudentInfo(objUser){
//     const firstname = objUser.first;
//     const lastname = objUser.last;
//     console.log(`Your full name is ${firstname} ${lastname}`);
// }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

/** Exercise 3 */

// const users = { user1: 18273, user2: 92833, user3: 90315 };

// const result = Object.keys(users).map((id) => {
//   return [id, users[id]*2];
// });
// console.log(result);

/** Exercise 4 */

// class Person {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   const member = new Person('John');
//   console.log(typeof member);

// //   Answer - object

/** Exercise 5 */

// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   };

// //   Answer - 2
//   class Labrador extends Dog {
//     constructor(size,name) {
//       super(name);
//       this.size = size;
//     }
//   };

// const Pet = new Labrador('small','Bobik');
// console.log(Pet.name);

/** Exercise 6 */
// 1
// console.log([2] === [2]);
// console.log({} === {});

// Answer - false
// 2
// const object1 = { number: 5 };
// const object2 = object1;
// const object3 = object2;
// const object4 = { number: 5};

// object1.number = 4;
// console.log(object2.number)
// console.log(object3.number)
// console.log(object4.number)
// // Answer - 4,4,5 because it's one instance of object - object1,except object4

// 1
// class Animal {
//   constructor(name, type, color) {
//     this.name = name;
//     this.type = type;
//     this.color = color;
//   }
// }

// class Mamal extends Animal {
//   constructor(name, type, color) {
//     super(name, type, color);
//   }
//   sound(sounds) {
//     return `${sounds}, I am a ${this.type}, named ${this.name}, and I am ${this.color}`;
//   }
// }

// const farmerCow = new Mamal("Lily", "cow", "brown and white");
// console.log(farmerCow.sound("Moooo"));
