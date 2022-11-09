const http = require("http");
const url = require("url");
const port = 3000;
const host = "127.0.0.1";

const server = http.createServer((request,r) => {
r.writeHead(200,{"Content-Type":"text/html"})
r.write("<h1> URL: "+request.url+"</h1>");

const parameter = url.parse(request.url,true).query;

r.write("<br>"+parameter.nome+"<br>");
r.write("<br>"+parameter.curso+"<br>");
r.end();

})

server.listen(port,host,console.log("Servidor Runing in Port: "+port))