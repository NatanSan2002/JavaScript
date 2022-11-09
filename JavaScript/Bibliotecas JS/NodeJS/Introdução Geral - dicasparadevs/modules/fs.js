const fs = require("fs");
const path = require("path");

//criar uma pasta

// cria arquivo    da a localização    função de callback  
//fs.comando      (path.join(diretorio), (error) => {})

// comentado pra não ficar dando erro (pois a pasta ja foi criada)

/*fs.mkdir(path.join(__dirname,"./test"), (e) => {
if (e){
return console.log("error:"+e)
}

console.log("pasta criada com sucesso ")
} )

*/ 

// Criando Arquivo 

//comentario pra não ficar dando erro
/*fs.writeFile(path.join(__dirname,"./test","test.txt"), "Conteudo do Arquivo*", (e) => {
if(e){
return console.log("error: "+e)
}
console.log("Arquivo Criado Com Sucesso")
})*/

/*fs.appendFile(path.join(__dirname, "./test", "test.txt"), "Conteudo acrescentado depois*", (e) => {
if(e){
return console.log("erro: "+e)
}
console.log("Alteração feita com Sucesso")
})*/ 


//ler arquivo

fs.readFile(path.join(__dirname,"./test","test.txt"), "utf8", (e,data) => {
if(e){
return console.log("error: "+e)
}
console.log(data)
})