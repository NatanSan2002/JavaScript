 let valores = [8,3,7,4,2,9,1,10,30,2,3];

 /*console.log("Exibição Vetor em um While Tradicional");



for(i=0;i<valores.length;++i){
console.log(`Vetor ${i} Tem o Valor =  ${valores[i]}`)

}
*/

//console.log(" For Especifico pra Arrays:");

let total = valores.length;
let max = valores[0];
let min = valores[0];

console.log(valores)

for(let vetor in valores){
if(valores[vetor]>max){
    console.log(` ${vetor}: min:${min} max:${max} valor vetor = ${valores[vetor]} 
    CONDIÇÃO VERDADEIRA: ${valores[vetor]} é MAIOR que ${max}`); max= valores[vetor]; console.log(` MAX = ${max}`)  
}
else if (valores[vetor]<min){
    console.log(`${vetor}: min:${min} max:${max} valor vetor = ${valores[vetor]}
     CONDIÇÃO VERDADEIRA: ${valores[vetor]} é Menor que ${min}`); min = valores[vetor]; console.log(`MIN = ${min}`)
}else {
    console.log(`${vetor}: min:${min} max:${max} valor vetor = ${valores[vetor]}
     NENHUMA, AMBAS FALSAS: ${valores[vetor]} não é nem MAIOR que ${max} nem Menor que ${min} (PROXIMO LOOP)`)
}
}

console.log(`FINAL: Menor ${min} Maior ${max}`)


