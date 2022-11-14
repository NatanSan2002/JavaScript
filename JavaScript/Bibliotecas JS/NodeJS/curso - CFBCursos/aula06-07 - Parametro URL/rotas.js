const express = require("express");
const rotas =  express.Router();

let cursoInfo = [
{"curso": "NodeJS", "info":"Curso de Node "},
{"curso": "ReactJS", "info":"Curso de React"},
{"curso": "JAVA", "info":"Curso de Java"},
{"curso": "Arduino", "info":"Curso de Arduino "}
]


rotas.get("/",(req,r) => {
r.json({"ola":"Seja Bem-Vindo"});
})

rotas.get("/:cursoid",(req,r) => {
    const curso = req.params.cursoid;
    const cursoI = cursoInfo.find(i => i.curso == curso);

    if(!cursoI){
    r.status(404).json({"ERRO":`Curso ${curso} Not Found`});
    }else{
    r.status(200).json(cursoI)
    }
    })


module.exports = rotas;