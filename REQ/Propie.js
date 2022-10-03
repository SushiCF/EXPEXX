const express = require("express");

const Comprar = express.Router();

Comprar.get("/", (req, res) => {
  res.send("Proprietário - GET");
});

Comprar.post("/", (req, res) => {
  res.send("Proprietário - POST");
});

Comprar.put("/", (req, res) => {
  res.send("Proprietário - PUT");
});

Comprar.delete("/", (req, res) => {
  res.send("Proprietário - DELETE");
});

module.exports = Comprar;