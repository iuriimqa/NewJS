const express = require('express');
const app = express();
const quizz = express.Router();
const {triviaQuestions} = require('../models/model.js');



quizz.get("/",(req,res)=>{
    res.json(triviaQuestions);
})

quizz.post("/",(req,res) =>{
    const plus = {id:triviaQuestions.length+1,...req.body};
    triviaQuestions.push(plus);
    res.json(triviaQuestions);
})

module.exports = {quizz};