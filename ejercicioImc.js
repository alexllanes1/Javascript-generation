
console.log("Calcular IMC");

///////////////////////////Function
function resultadoIMC(peso, altura) {
    //    console.log(peso);
    //    console.log(altura);
    peso = peso * 0.453592;
    //    console.log(peso);
    altura = altura / 100;
    //    console.log(altura);
    operacion = (peso / (altura * altura));
    //    console.log(operacion);
    return operacion;
}

///////////////////////////Variables

let peso = prompt("Ingresa tu peso en libras");
let altura = prompt("Ingresa tu altura en cm");

///////////////////////////Pedir Funcion

const resultado = resultadoIMC(peso, altura);

///////////////////////////If
if (resultado < 16) {
    estadoImc = "Criterio de ingreso";
} if (resultado > 16 && resultado < 16.9) {
    estadoImc = "esta en infrapeso";
} else if (resultado > 17 && resultado < 18.4) {
    estadoImc = "esta en bajo peso";
} else if (resultado > 18.5 && resultado < 24.9) {
    estadoImc = "esta en peso normal";
} else if (resultado > 25 && resultado < 29.9) {
    estadoImc = "esta en sobrepeso";
} else if (resultado > 30 && resultado < 34.9) {
    estadoImc = "esta en obesidad premorbida";
} else if (resultado > 40 && resultado < 45) {
    estadoImc = "esta en obesidad morbida";
} else if (45 < resultado) {
    estadoImc = "esta en obesidad hipermorbida";
}
console.log("Su IMC es de ", resultado, estadoImc);