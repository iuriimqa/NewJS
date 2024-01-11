/** API Restfulll API */
/** CRUD */

/**
 * server
 * |_config - connection to database
 * |_models - queries to database
 * |_controllers - function inplementation code
 * |_routes - route implementation codes.
 */

const express = require("express");
const bp = require("body-parser");

const app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.listen(3021, () => {
  console.log("run on port 3021");
});

/**
 * app.get
 * app.post
 * app.put
 * app.delete
 */

/**
 * CRUD
 * c - Create - POST
 * R - Read - GET
 * U - Update - PUT
 * D - Delete - DELETE
 */

const users = [
  { id: 1, name: "John", email: "jjj@gmail.com" },
  { id: 2, name: "Marry", email: "mmm@gmail.com" },
  { id: 3, name: "Anne", email: "aaa@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

// Read
app.get("/users/:user_id", (req, res) => {
  const { user_id } = req.params;
  const user = users.find((item) => item.id == user_id);
  if (!user) return res.status(404).json({ msg: "User not found" });
  res.json(user);
});

// query

app.get("/search", (req, res) => {
  const { name } = req.query;
  const filteredUser = users.filter((item) =>
    item.name.includes(name.toLowerCase())
  );
  res.json(filteredUser);
});

// app.get("/api", (req, res) => {
//   res.send(`<h1 style="color:green;">API</h1>`);
// });

// app.post("/users/",(req,res) => {
//     response.send("<h1>Hello new user</h1>")
// });

// app.use('/aaa/',express.static(__dirname + "/public"));

// console.log(__dirname);

/** Create - a new user */
app.post("/users", (req, res) => {
  console.log(req.body);
  const new_user = {id: users.length + 1,...req.body};
  users.push(new_user);
  res.json(users);
});


/** Update - update a user - PUT */
/** user id that you want to update - params 
 * data - name, email to update - body
*/
app.put("/users/:idx", (req,res) =>{
  const {idx} = req.params;
  const { name, email } = req.body;
  const index = users.findIndex(item => {
    return item.id == idx});
    if(index === -1) return res.sendStatus(404);
    users[index] = {...users[index],name:name,email:email};
    res.json(users)
});

/** Deletet - delete a user */
/** id as params - delete user */

app.delete("/users/:idx"),(req,res) =>{
  const {idx} = req.params;
  const index = users.findIndex((item) =>
    item.id == idx);
    if(index === -1) return res.sendStatus(404);
  users.splice(index,1)
  res.json(users);
};