const express = require("express");
const UserModel = require("../src/models/user.model.js")

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

app.post("/users", (req,res) => {
const user = UserModel.create(req.body);

res.status(201).json(user) //201 significa que a criação foi feita com sucesso
})

app.listen(port, () => console.log("Rodando Servidor Express na porta:"+port))

