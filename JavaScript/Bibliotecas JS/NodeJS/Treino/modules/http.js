const http = require("http");

const port = 8080;

const server = http.createServer( (req, res) => {
if (req.url === "/home"){
 res.writeHead(200 /*200 significa sucesso*/,{"Content-Type": "text/html"});
 res.end("<h1>Home Page</h1>")
}

if (req.url === "/users"){
const users = [
{name:"Joao",email:"Joao@Joao.com"},
{name:"Leon",email:"LeonCapcom@RE.com"},
]

res.writeHead(200, {"Content-Type": "application/json"});
res.end(JSON.stringify(users)); //tudo Que vem no end tem que ser String, por isso o método para converter para String
}
});


server.listen(port , () => console.log(`Rodando na Porta: ${port}`))

// Ai para acessar no navegador colocar http://localhost:8080/home  para o home com <h1>

//// http://localhost:8080/users  para o array de usuarios