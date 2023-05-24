//payasos y muñecas

console.log("Ejercicio 2: Jugueteria");

//Prompts
var payasos=prompt("Ingresa la cantidad de payasos");
var muñecas=prompt("Ingresa la cantidad de muñecas");
//número de items
//payasos = 27;
//muñecas = 14;

//peso de items
const pesoPayaso = 112;
const pesoMuñeca = 75;

//operaciones
pesoPayasoTotal = payasos*pesoPayaso;
pesoMuñecaTotal = muñecas*pesoMuñeca;

/*
Calculo del peso total
pesoTotal = pesoPayasoTotal+pesoMuñecaTotal;
*/

//funcion del peso total
function pesoTotal (pesoPayasoTotal,pesoMuñecaTotal){
    operacion = pesoPayasoTotal+pesoMuñecaTotal;
    return operacion;
}

//print
const resultado = pesoTotal(pesoPayasoTotal, pesoMuñecaTotal);
console.log("El peso total del paquete es " + resultado + " gramos");