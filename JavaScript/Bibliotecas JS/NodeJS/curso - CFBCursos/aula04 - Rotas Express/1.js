const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.get("/",(req,res) => {
 res.send("Teste Express Server Send");   
});
app.get("/pag2",(req,res) => {
    res.json({
              Nome33:"Carlos",
              Idade:"25",
              Email:"Etcetcet@gmail.com"
               })   
   })
   

app.listen(port,"127.0.0.1",console.log(`Server Run At Port: ${port}`))
