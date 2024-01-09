/** API Restfulll API */
/** CRUD */

const express = require("express");

const app = express();

app.listen(3021, () => {
  console.log("run on port 3021");
});

/**
 * app.get
 * app.post
 * app.put
 * app.delete
 */

const users = [
  { id: 1, name: "John", email: "jjj@gmail.com" },
  { id: 2, name: "Marry", email: "mmm@gmail.com" },
  { id: 1, name: "Anne", email: "aaa@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

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
