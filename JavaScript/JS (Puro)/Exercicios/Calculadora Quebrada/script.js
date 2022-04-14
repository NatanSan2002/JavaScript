var startvalue = 10* Math.random() ;
startvalue =  Math.round(startvalue);
var target;

var startview = document.getElementById("start");

var result = document.getElementById("resultado");





startview.innerHTML = "Start Value: "+startvalue;


function m2x() {
startview.innerHTML = "Start Value: "+startvalue;
startx2 = startvalue * 2; target =  startx2; console.log(target);
startview.innerHTML += "x2 = "+ startx2;

}

function menosUm () {
startview.innerHTML = "Start Value: "+startvalue;
var startmenos = --startvalue; 
startview.innerHTML += "-1 = "+startmenos; target = startmenos; console.log(target);
startvalue++;

}

function Operations() {
if(startvalue==target){
    result.innerHTML = "Target Alcançado! <br> Numero de Operaões Necessarias: 0";
}else{for(i=0;startvalue!=target;++i){
    ++startvalue;
if(startvalue==target){
result.innerHTML = `Target Alcançado! <br> Numero de Operaçoes Necessarias: ${i}`  
}
}
}


}



