// Exrecise 1
// const fetching = async () => {
// try{ 
//   const res = await fetch(
//     "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
//   );
//   const data = await res.json();
//   console.log(data);
// }catch(err){
//     console.log(err);
// }}

// fetching();

// Exercise 2 

// const fetchingsun = async () => {
// try{ 
//   const res = await fetch(
//     "https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"
//   );
//   const data = await res.json();
//   console.log(data);
// }catch(err){
//     console.log(err);
// }}

// fetchingsun();

// Exercise 3
const starwars = async()=>{
    try{
    const res = await fetch("https://www.swapi.tech/api/starships/9/");
    const data =  await res.json(); 
    console.log(data)}catch(err){
        console.log(err);
    }}

    starwars();

// Exercise 4

// function resolveAfter2Seconds() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// }

// async function asyncCall() {
//     console.log('calling');
//     let result = await resolveAfter2Seconds();
//     console.log(result);
// }


// asyncCall();

// Answer - calling
        //  resolved

