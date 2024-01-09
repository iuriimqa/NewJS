import express from "express";
import { fetchPosts } from "./data/dataService.js";

const app = express();

app.listen(5000, () => {
  console.log("Server run on 5000 port");
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
  } catch (err) {
    console.log(err);
  }
});
