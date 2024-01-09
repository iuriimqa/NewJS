const { getUsers } = require("./script.js");

getUsers().then((res) => {
  res.forEach(element => {
    console.log(element.name);    
  });
});

