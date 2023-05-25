/* 

Operadores

Los operadores nos permiten realizar una operación en uno o varios operandos (variables o datos)

 - Operadores de asignacion
 - Operadores de cadena
 - Operadores logicos
 - Operadoes de comparacion
 - Operadores aritmeticos

Operadores de asignacion (=)

Los operadores de asignacion (=) se utilizan para asignarle valor a una variable. Signa un valor al operando de la izquierda basado en el valor del operando de la derecha

*/

//Asignacion
let edadDeFelipe = 31;
var recipiente = "cafe";

/*
Operadores de comparacion (>, <, >=, <=, ==, ===, !=, !==)

Los operadores de comparacion nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representa la relacion de sus valores.
*/

let numero1 = 13;
let numero2 = 25;
let numero3 = "25";
//Menor que
console.log("El valor 13 es menor que el valor 25? " + (numero1 < numero2));
//Mayor que
console.log("El valor 13 es menor que el valor 25? " + (numero1 > numero2));
//Mayor o igual a que
console.log("El valor 25 es mayor o igual que el valor 25? " + (numero2 >= numero3));
//Operador de igualdad (Evalua el valor)
console.log("El valor 25 es igual que el valor 25? " + (numero2 == numero3));
//Operador de igualdad estricta (Evalua el tipo de dato y valor)
console.log("El valor 25 es igual que el valor 25? " + (numero2 === numero3));
console.log("El valor 25 es igual que el valor 25? " + (numero2 === 25));
console.log("El valor 25 es igual que el valor 25? " + (numero2 === "Veinticinco"));
//Operador not
console.log("El valor 13 no es igual al valor 25? " + (numero1 != numero2));
//desigualdad estricta
console.log("El valor 13 no es igual al valor 25? " + (numero2 !== numero3));

/*
Operadores logicos (&& (and),|| (or),!(not))

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion. El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (los podemos combinar, y ,los podemos poner en un orden especifico).

AND(&&)
Sirve para determinar si dos expresiones son verdaderas
-si ambas son verdaderas el resultado es verdadero
-si alguna es falsa el resultado es falso

OR (||)

Sirve para determinar si dos expresiones son falsas
-Si cualquiera de las dos expresiones son verdaderas el resultado es verdadero
-Si las dos afirmaciones son falsas todo es falso

NOT (!)

Sirve para mostrar lo contrario a lo que estamos devolviendo
*/

/* Ejemplos con AND */
var num1=12;
var num2=24;

afirmacion1 = (num1 > num2); //false
afirmacion2 = (num1 != num2); //Verdadero

console.log(afirmacion1 && afirmacion2); //Imprime true porque ambas son verdaderas

/* Ejemplos con OR */

afirmacion3 = (num1 < num2); //Verdadero
afirmacion4 = (num1 !== num2); //Verdadero

console.log(afirmacion3 || afirmacion4); 

/* Ejemplos con OR */

console.log(!afirmacion3); //falso
console.log(!afirmacion4); //falso

//Ejercicio de combinacion de operaciones

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);
console.log(op); 

//!Combinando operaciones2

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op2 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);
//         True     |     False     |     False -> True  |      False
//                False             |                  True
//                                True

// num5 es mayor que num2 = True
// num4 es mayor que num3 = False
// Invertir(num1 no es igual que num2) = True
// Invertir (num3 es igual que num3) = False

// True AND False = False
// True OR False = True

// False OR True = True
console.log(op2);

/* Operadores aritmeticos (+,-,*,/,%,**,++,--) 
 + (suma): suma dos o mas valores numericos
 - (resta): resta dos o mas valores numericos
 * (multiplicacion): multiplica dos o mas valores numericos
 / (division): divide dos o mas valores numericos
 % (modulo o residuo) : retorna el residuo de una division
 ** (exponenciacion) : retorna el resultado de una potencia. Se escribe la base antes de los asteriscos, y el exponente despues de los asteriscos
 ++ (incremento) : incrementa un valor de uno en uno
 -- (decremento) : decrementa un valor de uno en uno
*/

let valor1 = 55;
let valor2 = 17;
console.log("Suma; ", (valor1 + valor2));
console.log("Resta; ", (valor1 - valor2));
console.log("Multiplicacion; ", (valor1 * 17));
console.log("Division: ", (valor1/valor2));
console.log("Residuo: ", (valor1%valor2));
console.log("Exponente: ", (valor1*valor2));
console.log("Incremento: ", (valor1++));
console.log("Decremento: ", (valor1--));


