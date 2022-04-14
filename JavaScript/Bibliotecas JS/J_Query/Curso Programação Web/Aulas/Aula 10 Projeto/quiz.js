$(document).ready(function () {

  function reset_buttons () {
    $(".resposta").each(function () {
      if ($(this).hasClass("selecionada")){
        $(this).removeClass("selecionada");   
      }   
     })
  }

const quests_doit = [];


const quests = [
    {
        pergunta: "What these languages is NOT a Programing language of fact? ",
        resposta: ["Javascript" , "C++", "PHP", "HTML"],
        correta: "resposta3",
    },
    {
      pergunta: "What Year that the Brazil as found?",
      resposta: ["1650","1500","1621","1480"],
      correta: "resposta1",
    },
    {
     pergunta: "What know the HTML? ",
     resposta: ["Based","Cringe","Redpill","Hyper Text Moldeling Language"],
     correta: "resposta3",
    },
    {
        pergunta:"What these Languages IS considering a Programing Langueage of fact?",
        resposta:["JAVASCRIPT","CSS","CSS3","HTML5"],
        correta: "resposta0",
    
    }

]

var questsnum = quests.length - 1;

gerarPerguntas(questsnum);

function gerarPerguntas(maxPerguntas) {
 let random = (Math.random() * maxPerguntas).toFixed();
 random = Number(random);
 
 console.log("A Pergunta Sorteada foi: "+random);

 if(!quests_doit.includes(random)){
     quests_doit.push(random);

     var p_select = quests[random].pergunta;


     $("#pergunta").html(p_select)
     $("#pergunta").attr("data-indice",random);

for(i=0;i<=quests[random].resposta.length -1 ;i++){
    $("#resposta"+i).html(quests[random].resposta[i])
}

var pai = $("#divrespostas");
var botoes = pai.children();

for(var i = 0;i<botoes.length;i++){
 pai.append(botoes.eq(Math.floor(Math.random() * botoes.length) ))  
}

 }else {
  console.log("Pergunta ja feita! Sorteando denovo ");
  if (quests_doit.length < questsnum +1)  {
      return gerarPerguntas(maxPerguntas);
  }else {console.log("Acabaram as perguntas!!!"); alert("Game Over!!!")} 
 }
 
}

$(".resposta").click(function () {
  reset_buttons();
$(this).addClass("selecionada");    
})

$("#bconfirm").click(function () {
//pergunta da vez
var indice = $("#pergunta").attr("data-indice");

// resposta correta
var resposta_certa = quests[indice].correta;

// resposta selecionada

 $(".resposta").each(function () {
 if($(this).hasClass("selecionada")){
   var resposta_select  = $(this).attr("id");

   if (resposta_certa == resposta_select){
     alert("Acertou!!!");
      NextQuest() 
   }else{
    $("#"+resposta_certa).addClass("certa");
    $("#"+resposta_select).removeClass("selecionada");
    $("#"+resposta_select).addClass("errada");

  
   }
 }   
})
function newGame() {
  quests_doit = [];
}


function NextQuest() {

  reset_buttons();
   gerarPerguntas(questsnum);

}




})



})