const express = require('express');
const app = express();
const rout_1 = express.Router();

rout_1.get("/",(req,res)=>{
    res.send(`<h1>Homepage</h1>`)
});

rout_1.get("/about",(req,res)=>{
    res.send(`<h1>About Us</h1>`)
});

module.exports = {rout_1}
