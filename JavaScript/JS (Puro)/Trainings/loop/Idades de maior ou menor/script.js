var i = 1
while (i<=3){
var p1= prompt("Digite A Idade");
var idade = parseInt(p1);
var p2= prompt("Digite Outra Idade");
var idade2 = parseInt(p2);
if (idade<18){document.write(idade+" é Menor de Idade<br>");
}else {document.write(idade+" é Maior de Idade<br>");
}
if (idade2<18){document.write(idade2+" é Menor de Idade<br>");
}else {document.write(idade2+" é Maior de Idade<br>");
}

i++;
}

// Deu certo mas pode aprimorar a parte da primeira msg do prompt com todos os outros dando "Digite Outra Idade" em seguida e não alterando entre o prompt 1 e 2 