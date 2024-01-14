const express = require("express");
const bp = require("body-parser");
const app = express();
const {things} = require("./routes/todos.js");

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(things);

app.listen(5011,()=>{
    console.log("Todo Server is running");
})

