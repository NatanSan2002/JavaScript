function tabuada() {
var num = document.getElementById("number").value;
var multnum = document.getElementById("multiplicador").value;
var print = document.getElementById("exibir");

var alert = document.getElementById("alert");

print.innerHTML = ``;

if(num.length == 0 || multnum.length == 0){alert.innerHTML = `Campos Vazios!`}
else{ 
    alert.innerHTML = ``
    Number(num); Number(multnum);

for(i=1;i<=multnum;++i){print.innerHTML += `${num} x  ${i} = ${num * i} <br>`}



}
}
