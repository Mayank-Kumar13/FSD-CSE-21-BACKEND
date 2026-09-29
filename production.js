const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
  fs.readFile("./product.json", "utf8", (err, data) => {
    try {
      const products = JSON.parse(data);

      res.json(products);
    } catch (err) {
      console.error("Error parsing products.json:", err);

      res.status(500).json({
        message: "Invalid JSON data",
      });
    }
  });
});

module.exports = app;