const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const app = express();



app.listen(process.env.PORT, () =>{
    console.log(`Server runs on the port ${process.env.PORT}`);
})