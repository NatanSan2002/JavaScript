const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req,r) => {

fs.readFile("./1.html",(error,file) => {

r.writeHead(200,{"Content-Type":"text/html"});

r.write(file);

r.end();

});


})

server.listen(port,console.log(`Serve Run At: ${port} Port`))