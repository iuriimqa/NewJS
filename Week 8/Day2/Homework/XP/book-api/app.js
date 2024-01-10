import express from "express";
import bodyParser from "body-parser";
;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const books = [
  { id: 1, title: "Harry Potter", author: "J.K.Roling", publishedYear: 2000 },
  { id: 2, title: "Harry Potter2", author: "J.K.Roling", publishedYear: 2002 },
  { id: 3, title: "Harry Potter4", author: "J.K.Roling", publishedYear: 2005 },
  { id: 4, title: "Harry Potter6", author: "J.K.Roling", publishedYear: 2020 },
];

app.listen(5000, () => {
  console.log("Attention!!! Server is running!");
});

app.get("/api/books", (req, res) => {
  res.json(books);
});

app.get("/api/books/:idx", (req, res) => {
    const { idx } = req.params;
    const book = books.find((item) => item.id === parseInt(idx));
    
    if (!book) return res.status(404).json({ msg: "not found" });
    res.json(book);
    // res.status(200);
  });

app.post("/api/books", (req, res) => {
    console.log(req.body);
    const new_book = { id: books.length + 1, ...req.body };
    books.push(new_book);
    res.json(books);
  });
