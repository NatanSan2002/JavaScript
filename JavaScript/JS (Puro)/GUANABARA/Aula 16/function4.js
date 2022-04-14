function fatorial(n){
    let fat = 1;
    for(n; n>1; --n){
     fat *= n;
    }
    return fat; 
}

var exibir = fatorial(5)
console.log(exibir)