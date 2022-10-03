const express = require("express");
const Comprar = require("./Propie");

const Comprar = express.Router();

Comprar.get("/", (req, res) => {
  res.send("Produto - GET");
});

Comprar.post("/", (req, res) => {
  res.send("Produto - POST");
});

Comprar.put("/", (req, res) => {
  res.send("Produto - PUT");
});

Comprar.delete("/", (req, res) => {
  res.send("Produto - DELETE");
});

module.exports = Comprar;