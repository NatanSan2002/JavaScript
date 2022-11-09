const mongoose = require("mongoose");

const connect = async () => {
 await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@treinomongodb.uvfvd3e.mongodb.net/?retryWrites=true&w=majority`,
 (error) => {
    if(error){
    return console.log("Ocurreu um Erro ao Se conectar ao MongoDB: "+error)
    }else{
    return console.log("Conexão ao MONGODB Foi feita com Sucesso")
    }
 })
}


module.exports = connect;

