const express = require("express");
const path = require("path");
const app = express();

app.listen(3021,()=>{
    console.log("Server works on 3021");
});

const data = [
    {id:1,title:"first",content:"something1"},
    {id:2,title:"second",content:"something2"},
    {id:3,title:"third",content:"something3"},
];

app.get("/posts",(req,res)=>{
    res.send(data)
});

app.get("/posts/:idx", (req, res) => {
    const { idx } = req.params;
    const post = data.find((item) => item.id === idx);
    if (!post) return res.status(404).json({ msg: "not found" });
    res.json(post);
  });

app.use("/render",express.static(path.join(__dirname, "./publicx")));
// console.log(__dirname+"/public");