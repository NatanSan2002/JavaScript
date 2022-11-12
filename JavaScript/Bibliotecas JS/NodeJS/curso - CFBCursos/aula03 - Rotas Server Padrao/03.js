const http = require("http");
const port = 3000;
const host = "127.0.0.1";

const server = http.createServer((request,r) => {
r.writeHead(200,{"Content-Type":"text/html"})
if(request.url == "/"){
r.write("<h1>Seja Bem Vindo a Home!</h1>")
}
else if(request.url == "/canal"){
r.write("<h1>Canal Page</h1>")
}
else if(request.url == "/curso"){
r.write("<h1>Curso Pag</h1>")
}
r.end();
})

server.listen(port,host,() => {console.log("Servidor Runing in Port: "+port)})