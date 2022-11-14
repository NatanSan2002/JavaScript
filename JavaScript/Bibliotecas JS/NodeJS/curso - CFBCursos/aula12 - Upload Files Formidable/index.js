const formidavel = require("formidable");

const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;


const server = http.createServer((req,r) => {

if(req.url == "/envioDeArquivo"){
const form = new formidavel.IncomingForm();
form.parse(req,(error,campos,files) => {
const old_url = files.filetoupload.filepath;
const new_url = "C:/Users/regra/Downloads/"+files.filetoupload.name;


fs.rename(old_url,new_url, (error) => {
if (error)throw error;

r.write("Arquivo Movido Com Sucesso");
r.end();

})
})

}else{ 

    r.writeHead(200,{"Content-Type":"text/html"});

r.write("<form action='envioDeArquivo' method='post' enctype='multipart/form-data'>");
r.write("<input type='file' name='filetoupload'><br>");
r.write("<input type='submit' value='Enviar'>");
r.write("</form>");

return r.end();
}

})


server.listen(port,console.log(`Server Running In ${port} Port`));

