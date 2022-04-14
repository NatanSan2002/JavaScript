var tview = document.getElementById("titleview");
var view= document.getElementById("view");

function Converter() {
var ini_coin = document.getElementById("ini_coin").value;
var for_coin = document.getElementById("for_coin").value;

var ini_coin2 = document.getElementById("ini_coin").value;
var for_coin2 = document.getElementById("for_coin").value;

var valor = document.getElementById("valor").value;

if(valor==""){
tview.innerHTML = "Campo de Valor De Conversão está vazio"
}else{
valor = Number(valor);
}

if(ini_coin == "Real"){
ini_coin = 0.21; //em DOLAR   
}else if(ini_coin=="Yene"){
ini_coin = 0.0081;
}else if(ini_coin=="Euro"){
ini_coin = 1.5 ;  
}else if(ini_coin=="Dolar"){
 ini_coin = 1.0;   
}

if(for_coin == "Real"){
  for_coin = 0.21; //em real   
  }else if(for_coin=="Yene"){
  for_coin = 0.0081;
  }else if(for_coin=="Euro"){
  for_coin = 1.09 ;  
  }else if(for_coin=="Dolar"){
   for_coin = 1.0;   
  }

    if(ini_coin<for_coin){
      var emaior = 0;
      console.log(`${ini_coin2} é menor que ${for_coin2}` ) 
    }else if(ini_coin>for_coin){
        var emaior = 1;
        console.log(`${ini_coin2} é maior que ${for_coin2}`)
    }



    


    // O problema da Conversão esta na logica de 0.25 exemplo: 1 real tem que ser dividio por 5 dolar, não 1 divido por 1.0 (vai dar o msm)
   


 tview.innerHTML = `${valor} ${ini_coin2} Convertidos para ${for_coin2} é`;
 view.innerHTML = conversion(emaior,valor,for_coin,ini_coin);
 
 function conversion(maior,valor,moeda,ini) //maior 0 = não maior 1 = sim 
{
if(maior==0){

var convert = valor*ini/moeda;
return  convert.toFixed(2);
}else if(maior==1){
var convert = valor*ini/moeda;
return convert.toFixed(2);
}
}
}