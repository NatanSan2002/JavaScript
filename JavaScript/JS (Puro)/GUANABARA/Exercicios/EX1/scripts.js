function carregar(){
var msg = document.getElementById("msg");
var msg2 = document.getElementById("msg2");
var img= document.getElementById("imagem");
var data = new Date();
var hora =  data.getHours();
msg.innerHTML = `Agora São ${hora} horas!! `;
if(hora>=18 || hora<=6){msg2.innerHTML = ` Boa Noite `; img.src = "imgs/noite.jpg"; document.body.style.background = "rgb(1, 3, 46)"}
else if(hora >= 7 && hora <= 12){
    msg2.innerHTML = `     Bom Dia`;  img.src = "imgs/manha.jpg"; document.body.style.background = "rgb(0,172,238)";
}else if(hora >=13 && hora <=17)
{msg2.innerHTML = ` Boa Tarde`; img.src= "imgs/tarde.jpg"; document.body.style.background = "orange";}
else{msg2.innerHTML = `Error Ao Detectar Horario Atual`}
}