const express = require("express");
const todo_list = express.Router();
const fs = require("fs");

todo_list.get("/todos", (req, res) => {
  const data = fs.readFileSync("./json/tasks.json", "utf8");
  const jsonData = JSON.parse(data).forEach(item => {res.send(item)})
    return jsonData
  });

function addDataToFile(data) {
  const jsonData = JSON.stringify(data);

  fs.appendFile("./json/tasks.json", jsonData, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Data is appended");
    }
  });
}

todo_list.post("/todos", (req, res) => {
  const parseddata = req.body.data;

  addDataToFile(parseddata);
  res.sendStatus(200);
});

module.exports = { todo_list };
