let num = [3,8,2,9,3];
console.log(num);
num.sort(); // Organiza os vetores por ordem crescente 
num.push(1); // Acrescenta mais um  valor no ultimo Vetor

//(reparem que os anteriores estão em ordem mas o colocado dps do Sort não)
console.log(num);
console.log(`o Vetor tem: ${num.length} Posiçoes`);
console.log(`O Primeiro Valor do Vetor é: ${num[0]}`);

let pos = num.indexOf(9);
console.log(`O Valor 9 esta na posição `+pos);



