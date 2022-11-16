const mongo = require("mongodb").MongoClient;

require("dotenv").config();



const URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cfbcursos.wra7obs.mongodb.net/?retryWrites=true&w=majority`;



mongo.connect(URL, (error,banco) =>{
if(error){throw error};

const dbo = banco.db("Nome_Banco(Treinamento)");

const obj_cursos = [
    {idcurso:01, curso:"C++", autor:"CFB Cursos"},
    {idcurso:02, curso:"HTML", autor:"CFB Cursos"},
    {idcurso:03, curso:"CSS", autor:"CFB Cursos"},
    {idcurso:04, curso:"JavaScript", autor:"CFB Cursos"},
    {idcurso:05, curso:"PHP", autor:"CFB Cursos"},
    {idcurso:06, curso:"NodeJS", autor:"CFB Cursos"},
    {idcurso:07, curso:"React", autor:"CFB Cursos"},
    {idcurso:08, curso:"React-Native", autor:"CFB Cursos"},
    {idcurso:09, curso:"Arduino", autor:"CFB Cursos"},
    {idcurso:10, curso:"Photoshop", autor:"CFB Cursos"},
    {idcurso:11, curso:"AppInventor", autor:"CFB Cursos"},
    {idcurso:12, curso:"Flash", autor:"CFB Cursos"},
    {idcurso:13, curso:"Unity", autor:"CFB Cursos"},
    {idcurso:14, curso:"C#", autor:"CFB Cursos"},
    {idcurso:15, curso:"Java", autor:"CFB Cursos"},
    {idcurso:16, curso:"QT Creator", autor:"CFB Cursos"},
    {idcurso:17, curso:"SQL", autor:"CFB Cursos"},
    {idcurso:18, curso:"Python", autor:"CFB Cursos"},
];

const colecao = "Cursos";

let obj_aulas = [];

for(i=0,y=20;i<18;++i,y+=20){    // looping para inserir objetos porque tava com preguiça :p
obj_aulas[i] = {idcurso:i+1,aulas:y}
}


const colecao2 = "Aulas";




/*dbo.collection(colecao2).insertMany(obj_aulas, async (error,result) =>{  //Inserindo Dados
if(error) throw error;

await console.log(result.insertedCount+" Novo(s) Curso(s) Inserido(s)");
banco.close();
} );/*

/*dbo.collection(colecao).find({},{projection:{_id:0}}).toArray((error,result) =>{ //Busca de Dados
    if(error){throw error};
    
    console.log(result);
    banco.close();
    } ); */

    /*const query = { curso: 'Curso de C++'};   Colocando busca em uma variavel 

    dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((error,result) =>{ 
    if(error){throw error};
    
    console.log(result);
    banco.close();
    } ); */
     
    /*const ordenacao = {curso:-1}   // Ordenando Com Sort()

    const query = {};  

    dbo.collection(colecao).find(query).sort(ordenacao).toArray((error,result) =>{ 
    if(error){throw error};
    
    console.log(result);
    banco.close();
    } ); */

     

    /*let query = {curso: 'Curso de HTML'};  

    dbo.collection(colecao).deleteOne(query,(error,result) =>{  ||| //Deletando Uma Linha (objeto) apenas
    if(error){throw error};
    
    console.log("1 linha deletada");*/

    /*let query = {curso: 'Curso de NodeJS'};                  //Deletando Todas as Linhas (objetos) 

    dbo.collection(colecao).deleteMany(query,(error,result) =>{ 
        if(error){throw error};
        
        console.log(result.deletedCount+" - varias linhas deletada");
    
    } ); 

     query = {};  


    dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((error,result) =>{  // Buscando Dados na coleção
    if(error){throw error};
    
    console.log(result);
    banco.close();
    } ); */



    /* let query = {curso: 'Curso de NodeJS'};

    let new_value = {$set:{curso: 'Curso de Node', autor: "update_test"}}  



    dbo.collection(colecao).updateMany(query,new_value,async(error,result) => {  // Atualizando Dados Na Coleção
     if(error){throw error};
     
    
     await console.log(result.modifiedCount+" dados(s) atualizados(s)");
    //banco.close();
    } ); */





   /* query = {curso:"Curso de Node"};       // Busca Dados Coleção (Testes Recorrente da aplicação)


    dbo.collection(colecao).find(query,{projection:{_id:0}}).limit(2).toArray((error,result) =>{  
    if(error){throw error};
    
    console.log(result);
    banco.close();
    } ); */

});



