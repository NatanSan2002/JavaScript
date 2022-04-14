function random (max=1,min=0) {
    if (max == 1){var valor = Math.random() * max;  }else
{var  valor = Math.floor(Math.random() * (max - min +1) +min );
var valor2 = 50;}
return ""+valor+valor2;

} 

console.log(random(8))


