const rotas = require("./rotas.js");

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.use("/",rotas);

app.get("*",(req,r) => {
r.send("Caminho Padrao")
})


app.listen(port,console.log(`Serve Run At ${port} Port`));