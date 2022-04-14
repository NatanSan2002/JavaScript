
var exibicao = document.getElementById("exibir");

function converter() {
    
var metros = document.getElementById("inputmetros");
 metros = Number(metros.value);

 var conversao =  [];
conversao.push(metros/1000 + "km")
conversao.push(metros/100 + "hm")
conversao.push(metros/10 + "dam")
conversao.push(metros*10 + "dm")
conversao.push(metros*100 + "cm") 
conversao.push(metros*1000 + "mm")



exibicao.innerHTML = `A medida de: ${metros} corresponde a:<br><br>`; for(i=0;i<conversao.length;++i){
exibicao.innerHTML += conversao[i] + "<br><br>";
};

}