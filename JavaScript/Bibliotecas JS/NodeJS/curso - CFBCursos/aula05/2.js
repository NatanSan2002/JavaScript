const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req,r) => {

fs.appendFile("./testeFile.txt","Conteudo escrito",(error) => {
if(error) throw error;
console.log("Arquivo Criado Com Sucesso");
});


})

server.listen(port,console.log(`Serve Run At: ${port} Port`));