const http = require("http");
const port = process.env.PORT || 3000;

const events = require("events");

const EventoEmissor = new events.EventEmitter();



EventoEmissor.on("mensagem",() => {console.log("Mensagem Default")});

const End = () => {console.log("Fim Do Evento: ")}

EventoEmissor.on("fim",End);

EventoEmissor.emit("mensagem");

const server = http.createServer((req,r) => {
EventoEmissor.emit("mensagem");

r.writeHead(200,{"Content-Type":"text/plain"});



r.write("Teste Write ");


EventoEmissor.emit("fim");

r.end();
})

server.listen(port,console.log("Server Running"));