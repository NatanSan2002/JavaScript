const mongoose = require("mongoose")


// Criando a estrutura que os usuarios vão ter dentro desse Banco 

const userSchema = new mongoose.Schema({
firstName:{
   type: String,
   required:true, //required torna esse campo como obrigatorio a ser prenchido 
},
lastName: {
type: String ,
required: true,
},
email:{
type:String,
required:true,
},
password:{
type:String,
required:true,
minlength: 7
},
})

const UserModel = mongoose.model("User",userSchema)
                          //nome do model, modelo

module.exports = UserModel;