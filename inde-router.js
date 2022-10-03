const express = require("express");


const ProdutoLugar = require("./Comprar/Produto");
const proprietarioLugar = require("./Comprar/Proprietario");

const app = express();

app.use("/Produto", ProdutoLugar);
app.use("/proprietario", proprietarioLugar);

const port = 9000;
app.listen(port, console.log(`Servidor rodando na porta ${port}`))