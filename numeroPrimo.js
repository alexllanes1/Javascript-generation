//Escribe un programa que pida al usuario un numero entero, y muestre en pantalla si es un numero primo o no


//que es un numero primo? es un numero mayor que 1, que solo se puede divir entre 1 y entre si mismo.

//Ejemplos de numeros primos: 2, 3, 5, 7, 11, 13, 17, 19, etc.


//Operaciones: dvision, comparacion, residuo


//1. Le pido el dato al usuario
var numeroIngresado = prompt("Ingresa un numero entero");


//2. Evaluamos los dos posibles escenarios: sea o no primo (estado inicial de mis numeros)
var esNumeroPrimo = true;


//3. Operacion para demostrar si es o no es primo
if (numeroIngresado <=1) {
    esNumeroPrimo = false; //demuestro que no es primo, y cambio el estado inicial a false


} else {
    let divisor = 2;
    while (divisor <= numeroIngresado/2 && esNumeroPrimo){
        if (numeroIngresado % divisor === 0){
            esNumeroPrimo = false; //no es primo
        }
        divisor ++;
    }
}