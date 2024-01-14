const express = require('express');
// const app = express();
const things = express.Router();

// Sample in-memory database for storing to-do items
const todos = [{id:1,title:"Clean dishes"},{id:2,title:"Clean table"},{id:3,title:"Clean plates"}
];

// Get all to-do items
things.get("/todos",(req,res)=>{
    res.json(todos);
})

things.post("/todos",(req,res) =>{
    const plus = {id:todos.length+1,...req.body};
    todos.push(plus);
    res.json(todos);
})

things.put("/todos/:idx"),(req,res) => {
    const {idx} = req.params;
    console.log(req.params);
    const {title} = req.body;
    const index = todos.findIndex(item => {return item.id == idx});
    if(index === -1) return res.sendStatus(404);
    todos[index] = {...todos[index],title:title};
    res.json(todos);
}


things.delete("/todos/:idx"),(req,res) => {
    const {idx} = req.params;
    const index = todos.findIndex(item => {return item.id == idx});
    if(index === -1) return res.sendStatus(404);
    todos.splice(index,1);
    res.json(todos);
}

// Add a new to-do item

// Update a to-do item by ID

// Delete a to-do item by ID

module.exports = {things}