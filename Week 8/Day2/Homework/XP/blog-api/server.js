const express = require("express");
const path = require("path");
const bp = require("body-parser");
const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.listen(3021, () => {
  console.log("Server works on 3021");
});

const data = [
  { id: 1, title: "first", content: "something1" },
  { id: 2, title: "second", content: "something2" },
  { id: 3, title: "third", content: "something3" },
];

app.get("/posts", (req, res) => {
  res.send(data);
});

app.get("/posts/:idx", (req, res) => {
  const { idx } = req.params;
  const post = data.find((item) => item.id === idx);
  if (!post) return res.status(404).json({ msg: "not found" });
  res.json(post);
});

app.post("/posts", (req, res) => {
  // console.log(req.body);
  const new_post = { id: data.length + 1, ...req.body };
  data.push(new_post);
  res.json(data);
});

app.put("/posts/:id", (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const indx = data.findIndex((item) => item.id == id);
  if (indx === -1) return res.sendStatus(404);
  data[indx] = { ...data[indx], title: title, content: content };
  res.json(data);
});

app.delete("/posts/:id",
  (req, res) => {
    const { id } = req.params;
    const indx = data.findIndex((item) => item.id == id);
    if (indx === -1) return res.sendStatus(404);
    data.splice(indx, 1);
    res.json(data);
  });
