function makeAllCaps(arr) {
  const check = new Promise((resolve, reject) => {
    const checker = arr.every((e) => typeof e === "string");
    console.log(checker);
    if (checker == true) {
      let resulz = arr.map((item) => {
        return item.toUpperCase();
      });
      console.log(resulz);
      return resolve(resulz);
    } else {
      reject("Not all elements is string");
    }
  });
  console.log(check);
  return check;
}

makeAllCaps(["apple", "pear", "banana","popcorn","coconut"])
.then((arr) => sortWords(arr))
      .then((result) => console.log(result))
      .catch(error => console.log(error))



function sortWords(ARR){
    const check2 = new Promise((res,rej) =>{
        if(ARR.length > 4){
            return res(ARR.sort());
        }else{
            rej("Too short array")
        }
    })
    return check2
}




// let arr = ["apple", "pear", "banana"];

// let res = arr.map(item =>{ return item.toUpperCase()})

// console.log(res);

/** Daily 2 */

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

