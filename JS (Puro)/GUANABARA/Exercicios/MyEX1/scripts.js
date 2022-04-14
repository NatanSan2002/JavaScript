function ver() {
var pais = document.getElementById("pais").value; 
var estado = document.getElementById("estado").value;
var cidade = document.getElementById("city").value;
var endereco = document.getElementById("endereco").value;

var check = [pais,estado,cidade,endereco];

var msg = document.getElementById("msg");

msg.innerHTML = ``;

if(check.indexOf("") === -1){
    
    var dados = ["País: "+pais,"Estado: "+estado,"Cidade: "+cidade, "Endereço: "+endereco];
    
    msg.innerHTML = `Suas Informaçoes: <br> `;
    for(i=0;i<dados.length;++i){msg.innerHTML += `${dados[i]} `} 
}
else{
msg.innerHTML = `Não Deixe Nenhum Campo Vazio!`;
}





}