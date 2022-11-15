const mongo = require("mongodb").MongoClient;

require("dotenv").config();



const URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cfbcursos.wra7obs.mongodb.net/?retryWrites=true&w=majority`;



mongo.connect(URL, (error,banco) =>{
if(error){throw error};

const dbo = banco.db("Nome_Banco");

const obj = [
    {curso: "Curso de JS",autor:"Canal CFB Cursos"},
    {curso: "Curso de JS",autor:"Canal CFB Cursos"},
    {curso: "Curso de JS",autor:"Canal CFB Cursos"}
];

const colecao = "Cursos";

/*dbo.collection(colecao).insertMany(obj, async (error,result) =>{  //Inserindo Dados
if(error){throw error};

await console.log(result.insertedCount+" Novo(s) Curso(s) Inserido(s)");
banco.close();/*
} );

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

     query = {};  */


    dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((error,result) =>{ 
    if(error){throw error};
    
    console.log(result);
    banco.close();
    } ); 


});

