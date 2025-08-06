let p = 63
let a = 1.69
const imc = p / (a*a);

if (imc < 18.5){
    consol.lo('Classificação: Abaixo do peso!');
}
else if ( imc < 25){
    console.log("Classificação: Peso normal!");
}
else if(imc < 30 ){
    console.log("Classificação: Acima do peso!")
}
else {
    console.log("Classificação: Obsidade!")
}

