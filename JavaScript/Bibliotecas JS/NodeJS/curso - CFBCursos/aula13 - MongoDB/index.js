const mongo = require("mongodb").MongoClient;



const URL = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cfbcursos.wra7obs.mongodb.net/?retryWrites=true&w=majority`;

mongo.connect(URL, (error,banco) =>{
if(error){throw error};

const dbo = banco.db("Nome_Banco");

const obj = {curso: "Curso de HTML",autor:"Canal CFB Cursos"};

const colecao = "Cursos";

/*dbo.collection(colecao).insertOne(obj, (error,result) =>{  //Inserindo Dados
if(error){throw error};

console.log("1 Novo Curso Foi Inserido");
banco.close();
} );/*

/*dbo.collection(colecao).find({},{projection:{_id:0}}).toArray((error,result) =>{ //Busca de Dados
    if(error){throw error};
    
    console.log(result);
    banco.close();
    } ); */

    const query = { curso: 'Curso de C++'};

    dbo.collection(colecao).find(query,{projection:{_id:0}}).toArray((error,result) =>{ //Busca de Dados
    if(error){throw error};
    
    console.log(result);
    banco.close();
    } ); 


});

