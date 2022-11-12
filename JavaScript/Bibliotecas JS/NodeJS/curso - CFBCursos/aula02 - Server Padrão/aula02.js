const http = require("http");

http.createServer((pedido,resposta) => {
resposta.writeHead(200,{"Content-Type":"text/plain"}); /*Status 200 OK, {Content-Type: Tipo de Conteudo}*/
resposta.write("CFB Cursos \n");  // Resposta escrita na tela
resposta.end(); //finalização

}).listen(1337); //Visualizar na porta: 1337