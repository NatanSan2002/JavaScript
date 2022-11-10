const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req,r) => {



})

server.listen(port,console.log(`Serve Run At: ${port} Port`))