const express = require("express");
const {todo_list}  = require("./routes/routes.js");

const bp = require("body-parser");
const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(todo_list);

app.listen(3011, () => {
  console.log("Server is running");
});
