const express = require("express");

const app = express();

const port = 8080;

app.get("/home", (req, res) => {
res.contentType("application/html");
res.status(200).send("<h1> Home Com Express</h1>")
} )


const users = [
    {name:"Joao",email:"Joao@Joao.com"},
    {name:"Leon",email:"LeonCapcom@RE.com"},
    ]

app.get("/users", (req, res ) => {
res.status(200).json(users);
})

app.listen(port, () => console.log("Rodando Servidor Express na porta:"+port))

