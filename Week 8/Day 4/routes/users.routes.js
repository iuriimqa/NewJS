const express = require("express");
const { auth } = require("../middlewares/utils.js");
const { users } = require("../config/db.js");
const { getAllUsers } = require("../controllers/users.controller.js");
const { getUser } = require("../controllers/users.controller.js");
const { addUser } = require("../controllers/users.controller.js");
const { searchUser } = require("../controllers/users.controller.js");
const app = express();

const users_router = express.Router();

users_router.get("/users", auth, getAllUsers);

// Read
users_router.get("/users/:user_id", getUser);

// // query

app.get("/search", searchUser);

// app.get("/api", (req, res) => {
//   res.send(`<h1 style="color:green;">API</h1>`);
// });

// app.post("/users/",(req,res) => {
//     response.send("<h1>Hello new user</h1>")
// });

// app.use('/aaa/',express.static(__dirname + "/public"));

// console.log(__dirname);

/** Create - a new user */
users_router.post("/users", addUser);

// /** Update - update a user - PUT */
// /** user id that you want to update - params
//  * data - name, email to update - body
// */
// app.put("/users/:idx", (req,res) =>{
//   const {idx} = req.params;
//   const { name, email } = req.body;
//   const index = users.findIndex(item => {
//     return item.id == idx});
//     if(index === -1) return res.sendStatus(404);
//     users[index] = {...users[index],name:name,email:email};
//     res.json(users)
// });

// /** Deletet - delete a user */
// /** id as params - delete user */

// app.delete("/users/:idx"),(req,res) =>{
//   const {idx} = req.params;
//   const index = users.findIndex((item) =>
//     item.id == idx);
//     if(index === -1) return res.sendStatus(404);
//   users.splice(index,1)
//   res.json(users);
// };

module.exports = { users_router };
