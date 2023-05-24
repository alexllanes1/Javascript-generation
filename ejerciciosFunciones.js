//Ejercicio de formula general
console.log("Formula general");
function formulaGeneral (a,b,c){
    inside=(b*b)-(4*a*c);
    if (inside<0){
        console.log("No hay solucion real");
    }
    else{
        resultNeg=(-b-Math.sqrt(inside))/(2*a);
        resultPos=(-b+Math.sqrt(inside))/(2*a);
        console.log("Resultado 1", resultNeg);
        console.log("Resultado 2", resultPos);
    }
}

var a=prompt("Ingresa el primer valor");
var b=prompt("Ingresa el segundo valor");
var c=prompt("Ingresa el tercer valor");

formulaGeneral(a,b,c);




//ejercicio de velocidad

//tipo 3
function velocidad (distancia,tiempo){
    operacion = distancia/tiempo;
    console.log("La velocidad es ", operacion, "m/s");
    }

    console.log("ingresa los valores de distancia y tiempo.");
    velocidad(3,15);

