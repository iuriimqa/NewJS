const express = require('express');
const bp = require("body-parser");
const app = express();
const { quizz } = require("./routes/routes.js");

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.listen(3012, () =>{
    console.log("Server Working");
})

app.use(quizz);


