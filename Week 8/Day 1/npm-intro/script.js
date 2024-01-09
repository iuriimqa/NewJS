const axios = require("axios");
// import axios from 'axios';(add "type":"module" to package.json)

const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

const hello = () => {
  console.log("Hello");
};

// getUsers();
module.exports = { getUsers,hello};
