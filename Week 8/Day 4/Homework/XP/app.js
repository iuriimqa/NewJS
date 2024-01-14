const express = require("express");
const {rout_1} = require("./routes/routes.js");
const bp = require("body-parser");
const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.listen(3021,()=>{
    console.log('SErver Running');
})

app.use(rout_1);
