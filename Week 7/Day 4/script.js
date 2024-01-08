// const morse = `{
//     "0": "-----",
//     "1": ".----",
//     "2": "..---",
//     "3": "...--",
//     "4": "....-",
//     "5": ".....",
//     "6": "-....",
//     "7": "--...",
//     "8": "---..",
//     "9": "----.",
//     "a": ".-",
//     "b": "-...",
//     "c": "-.-.",
//     "d": "-..",
//     "e": ".",
//     "f": "..-.",
//     "g": "--.",
//     "h": "....",
//     "i": "..",
//     "j": ".---",
//     "k": "-.-",
//     "l": ".-..",
//     "m": "--",
//     "n": "-.",
//     "o": "---",
//     "p": ".--.",
//     "q": "--.-",
//     "r": ".-.",
//     "s": "...",
//     "t": "-",
//     "u": "..-",
//     "v": "...-",
//     "w": ".--",
//     "x": "-..-",
//     "y": "-.--",
//     "z": "--..",
//     ".": ".-.-.-",
//     ",": "--..--",
//     "?": "..--..",
//     "!": "-.-.--",
//     "-": "-....-",
//     "/": "-..-.",
//     "@": ".--.-.",
//     "(": "-.--.",
//     ")": "-.--.-",
//     " ": " "
//   }`;

// const toJS = (jsonString) => {
//   return new Promise((resolve, reject) => {
//     let objMorse;
//     try {
//       objMorse = JSON.parse(jsonString);
//     } catch (error) {
//       reject("This json os not valid --- ERROR in toJs function");
//     }
//     if (Object.keys(objMorse).length === 0) {
//       reject("This json is empty --- ERROR in toJS function");
//     } else {
//       resolve(objMorse);
//     }
//   });
// };

// function toMorse(morseObj) {
//   return new Promise((resolve, reject) => {
//     const userStr = prompt("Enter a word");
//     if (!userStr) {
//       reject("No input provided");
//       return;
//     }
//     const arrStr = userStr.toLowerCase().split("");

//     const returnArr = arrStr.map((char) => {
//       if (char in morseObj) {
//         return morseObj[char];
//       } else {
//         reject(`Character ${char} doesn't exist in the Morse code json`);
//       }
//     });
//     resolve(returnArr);
//   });
// }

// // console.log(morse);

// const joinWords = (morseToHtml) =>{
//     return morseToHtml.map((element) => `<div>${element}</div>`);
// }

// toJS(morse)
// .then((result) => {
//   return toMorse(result);
// })
// .then((result) => {
//     return joinWords(result);
// })
// .then((htmlArr) =>{
//     document.getElementById("root").innerHTML = htmlArr.join("");
// })
// .catch((err)=>{
//     console.log(err);
// })

/** async /await ES8 */

// function simpleAsync() {
//   return new Promise((res, rej) => {
//     res(1);
//   });
// }

// simpleAsync()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function asyncFunction() {
//   return 10;
// }

// const arrowAsyncFunction = async () => {};

// asyncFunction()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log("catching my error=>", err);
//   });

// async function getResult() {
// try{
//   let result = await asyncFunction();

//   console.log(result);
// }catch(error){
//     console.log(error);
// }
// }

// getResult();

// const getX = () => {
//     return new Promise((res, rej) => {
//       setTimeout(() => {
//         res(5);
//       }, 2000);
//     });
//   };

const getY = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(6);
    }, 3000);
  });
};
//   function getXY() {
//     getX()
//       .then((resultX) => {
//         getY()
//           .then((resultY) => {
//             return resultX + resultY;
//           })
//           .then((sum) => {
//             console.log(sum);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }
//   getXY()

const getX = async () => {
  setTimeout(() => {
    return 5;
  }, 2000);
};

async function getXY() {
  try {
    let x = await getX();
    let y = await getY();
    console.log(x + y);
  } catch (error) {
    console.log(console.error());
  }
}

// Async/Await In Loops
// WARNING: async/await doesn't play nicely with.forEach() loops
// async/await plays nicely with for, for: of and while loops

const timeout = async (millisiconds, id) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(id, "Done");
      resolve();
    }, millisiconds);
  });
};

async function x() {
  console.log("before");

  //   ["first", "second", "third"].forEach(async (item) => {
  //     await timeout(2000, item);
  //   });
  for (item of ["first", "second", "third"]) {
    await timeout(2000, item);
  }
  console.log("after");
}

// x();

// const data = async() =>{
//     try{
//         const result await
//     }
// }

/** Fetch */


// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// const render = (arr) => {
//   const html = arr.map((item) => {
//     return `<div>
//         <h2>${item.name}</h2>
//         <h4>${item.username}</h4>
//         <p>${item.email}</p>
//         </div>`;
//   });
//   document.getElementById("root").innerHTML = html.join("");
// };

// const getData = async (id) => {
//   try {
//     const response = await fetch("https://users-18kl.onrender.com/userjson");
//     const data = await response.json();
//     render(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const post = {
//   name: "bal bla ljljh",
//   dody: "jkhjkhkjh hjkhjk hjkhjkhkjhk",
//   userID: 4,
// };

// getData(6);


// const handleSubmit = (e) => {
//     e.preventDefault();
//     const name = document.getElementById("name").value;
//     const username = document.getElementById("username").value;
//     const email = document.getElementById("email").value;
//     postAUser(name,email,username)
//   };
  
// const postAUser = async (name,email,username) =>{
//     try{
//         const options = {
//             method: "POST",
//             headers: {
//                   "Content-type": "application/json",
//                         },
//             body: JSON.stringify({name,username,email}),

//             }
   



// const res = await fetch("https://users-18kl.onrender.com/userjson", options);

// const data = await res.json()

// render(data)
// }catch(error){
//     console.log(error);
// }
// };


//   form -> name, username,email -> submit
// Post this "https://users-18kl.onrender.com/userjson"


