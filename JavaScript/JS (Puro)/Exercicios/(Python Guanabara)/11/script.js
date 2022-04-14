var Tres = document.getElementById("tres");
var res = document.getElementById("res");

function calcular() {
var largura = document.getElementById("largura").value;
var altura = document.getElementById("altura").value;

if(largura == "" || altura == ""){
Tres.innerHTML = "Um dos campos esta vazio!";
if(altura == "" && largura == ""){
largura = document.getElementById("largura");
altura = document.getElementById("altura");
altura.focus();
largura.focus();
}else if(altura == ""){
var altura = document.getElementById("altura");
altura.focus()
}else if ( largura == ""){
largura= document.getElementById("largura");
largura.focus(); 
}
}else{
largura = Number(largura);
altura = Number(altura);

var raizq = raizquad(largura,altura);
Tres.innerHTML = `Sua Parede tem as Dimensoes de: ${largura} por ${altura}`;
res.innerHTML = `Sua raiz quadrada é de: <span id="red">${raizq}m2 </span>`;
res.innerHTML += `<br> Precisara de: ${color(raizq)} de tinta para pinta-la `;

}

}

function raizquad (lar=0,alt=0) {
return lar*alt;
}

function color(rqd){
var pintar = rqd/2;
return pintar.toFixed(4)+"m2";    
}