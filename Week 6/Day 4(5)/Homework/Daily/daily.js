// Daily 1

// const gameInfo = [
//     {
//       username: "john",
//       team: "red",
//       score: 5,
//       items: ["ball", "book", "pen"]
//     },
//     {
//       username: "becky",
//       team: "blue",
//       score: 10,
//       items: ["tape", "backpack", "pen"]
//     },
//     {
//       username: "susy",
//       team: "red",
//       score: 55,
//       items: ["ball", "eraser", "pen"]
//     },
//     {
//       username: "tyson",
//       team: "green",
//       score: 1,
//       items: ["book", "pen"]
//     },
//    ];

//    let usernames = gameInfo.map((e) => {
//     return e.username +"!";
//    });

//    console.log(usernames);

//    let winners = gameInfo.filter((e) => {
//     return e.score > 5 ? e : console.log();
//    }).map((e)=>{
//     return e.username;
//    })

//    console.log(winners);

//    let score = gameInfo.reduce((acc,val) =>{
//     return acc + val.score;
//    },0);

//    console.log(score);


//    Daily 2


// const inventory = [
//     { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//     { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//     { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//     { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//     { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
//   ];

// 1

// let getCarHonda = () => {
//     let result = inventory.find((e) => {
//         return e.car_make === 'Honda'? `This is a ${e.car_make} ${e.car_model} from ${e.car_year}`:console.log();});
//         console.log(`This is a ${result.car_make} ${result.car_model} from ${result.car_year}`);
// }

// getCarHonda(inventory)

// 2

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

  function sortCarInventoryByYear(x){
    let result = x.sort(function (x, y) {
        return x.car_year - y.car_year;
    })
    console.log(result);
  };

  sortCarInventoryByYear(inventory);