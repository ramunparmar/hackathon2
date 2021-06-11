const express = require("express");
const router = express.Router();
const fs = require("fs");
// const { v4: uuidv4 } = require("uuid");

function loadProducts() {
    return JSON.parse(fs.readFileSync("./data/products.json"));
  }

router
  .get("/", (req, res) => {
    console.log("this is the product route")
    const products = loadProducts();
    res.json(products);
  })

module.exports = router;