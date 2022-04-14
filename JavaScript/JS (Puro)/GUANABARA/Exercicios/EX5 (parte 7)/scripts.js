var all_num = [];



function adicionar() {

    var num = document.getElementById("number").value;
    var janela = document.getElementById("dados_janela");
    var resultado = document.getElementById("exibir");


resultado.innerHTML = "";


if(num==""){resultado.innerHTML = "Valor em Branco"} 
else if (num>100 || num<=0){ resultado.innerHTML = "Valores entre 1 e 100"}
else if (all_num.indexOf(Number(num)) != -1 ){
resultado.innerHTML = "Numero Ja Digitado";    
}else{
num = Number(num);
all_num.push(num);
janela.innerHTML += num+"<br>"; 
resultado.innerHTML = "Numero "+num+" Adicionado";

}

}

function Finalizar(){
    var num = document.getElementById("number").value;
    var janela = document.getElementById("dados_janela");
    var resultado = document.getElementById("exibir");

    let total = all_num.length;
    let maior = all_num[0];
    let menor = all_num[0];
    let soma = 0;
    let media = 0;

    
    for(vetor=0;vetor<total;++vetor){
      soma += all_num[vetor];
      media = soma/all_num.length;

     if(all_num[vetor]>maior){
    maior = all_num[vetor]
     }else if (all_num[vetor]<menor){
         menor = all_num[vetor];
     }
    }

    resultado.innerHTML =`Ao Todo Temos ${all_num.length} Numeros Cadastrados
    <br> O Maior Valor Informado foi: ${maior} o Menor: ${menor} <br>
    A Soma de todos os Valores foi : ${soma} e a Média: ${media}
    `
    ;

}

