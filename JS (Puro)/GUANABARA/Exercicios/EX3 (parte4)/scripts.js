function Calcular() {
var startnum = document.getElementById("inicialnumber").value;
var startnum = Number(startnum);
var endnum = document.getElementById("finalnumber").value;
var endnum = Number(endnum);
var pulosnum = document.getElementById("pulosnumber").value;
var pulosnum = Number(pulosnum);
var exibir = document.getElementById("exibir");

exibir.innerHTML = "";

if(startnum == 0 || endnum == 0 || pulosnum.length == 0  ){alert("Preencha todos os Campos!")}
else if (pulosnum <= 0){alert("Numero de Pulos Negativo!, Considerando Passo Como 1"); pulosnum = 1;
while(startnum<=endnum){exibir.innerHTML += `${startnum} \u{1F449}`; startnum+=pulosnum;}; 
exibir.innerHTML += "Fim";
}
else if (startnum > endnum){
while(startnum>=endnum){exibir.innerHTML += `${startnum} \u{1F449}`; startnum-=pulosnum;}; 
exibir.innerHTML += "Fim";}
else {
    while(startnum<=endnum){exibir.innerHTML += `${startnum} \u{1F449}`; startnum+=pulosnum;}; 
exibir.innerHTML += "Fim";}




}