import express from "express";
import { emojis } from "./emojis/emojis.js";
import path from "path";
import { log } from "console";

const app = express();

const __dirname = path.resolve();
app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

console.log(__dirname);

app.listen(3011, () => {
  console.log("run on 3011");
});

app.get("/emojis", (req, res) => {
  const randomIndx = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndx];
  const shuffleEmojis = shuffleArray(emojis);
  res.json({shuffleEmojis,randomEmoji});
});

app.post("/emojis",(req,res) =>{
  const {name,quess} = req.body;
  console.log(`${quess}|||${name}`);
  if(name === quess){return res.json({message: "Correct"})}else{
  res.json({message:"Not Corrrect"});}
});

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
