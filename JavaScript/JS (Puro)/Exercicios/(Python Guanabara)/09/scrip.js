var restitle = document.getElementById("restitle");
var res = document.getElementById("res");

function tabuada() {
num = document.getElementById("num").value;
numX = document.getElementById("numX").value;
vezes = document.getElementById("vezes").value; // Numero de vezes que sera multiplicado continuamente

restitle.style.color = "black";
if(num == "" || numX == "" || vezes == ""){
restitle.innerHTML = `Valor de um dos Campos NULO!!!`; 
restitle.style.color = "red";
res.innerHTML = "";  
}else{
restitle.innerHTML = `As Multiplicaçoes de <strong>${num}</strong> x <strong>${numX}</strong> é = <br>
=========================`; 
 num = Number(num); numX = Number(numX);
res.innerHTML = "";
for(i=0;i<vezes;++i){
res.innerHTML += `${num} x ${numX+i} = ${num*(numX+i)} <br> ` 
}

}

}
