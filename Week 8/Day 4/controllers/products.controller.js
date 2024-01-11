const { products } = require("../config/db.js");

const getAllProducts = (req, res) => {
  res.json(products);
};

const addProduct = (req, res) => {
    console.log(req.body);
    const new_product = {id: products.length + 1,...req.body};
    products.push(new_product);
    res.json(products);
  };


module.exports ={
    getAllProducts,addProduct
}