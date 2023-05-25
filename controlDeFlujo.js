/*

Control de FLujo


Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

Condicionales

Son estructuras o condiciones que nos permiten modifical el orden natural de ejecucion de nuestro programa. Son sentencias especificas que nos ayudara a decidir si una condicion se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones.

/////////////Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.

Estructura basica de un if

if (condicion){
    //Ejecuto este bloque de codigo
}

/////////////Ejemplo

Tengo limpia mi playera de la suerte?   //pregunta o instruccion que denota la condicion
    true                                //respuesta a posible instruccion
    false                               //respuesta a posible instruccion

    Felipe tiene 17 años y quiere ir a una fiesta. Discha fiesta solo es para personas adultas (mayores de 18). Ayuda a Felipe decidir si puede ir o no.

    Evaluamos solo una expresion (si Felipe tiene menos de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).
*/

let edadDeFelipe = prompt("Ingresa tu edad");
let edadPermitida = 18;
if(edadDeFelipe <= edadPermitida){
    console.log("Lo siento, no puedes ir a la fiesta");
}
else{
    console.log("Felicidades, puedes ir a la fiesta");
}

/*
Else (de otro modo - si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.

Estructura basica del Else

if (condicion) {
    //Este bloque se ejecuta si la condicion es verdadera
} 
else 
{
    //Este bloque se ejecuta si la condicion es falsa
}

Test de nuestro programa 
-"false"
-NaN
-false
*/

/* 
Else if

Esta condicional nos ayuda a ejecutar una nueva en caso que la primera sea falsa. Se pueden usar las estructuras else if que sean necesarias teminando la estuctura con un else.

if (condicion 1) {
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo se ejecuta si la condicon 1 es falsa, y si la condicon 2 tambien es falsa
}

Se pueden anidar x cantidad de else if entre el if que evalua la condicion inicial y el else que termina toda la expresion.
*/

edadDeDavid = 19;
edadPermitidaDelAntro = 18;
dineroDeDavid = 100;
coverDelAntro = 150;

if(edadDeDavid<edadPermitidaDelAntro){
    console.log("Muy bien, tienes edad para poder ir al antro");
} else if (dineroDeDavid>coverDelAntro){
    console.log("Tienes dinero suficiente para pagar el cover");
}else{
    console.log("No tienes suficiente dinero para pagar el cover");

}

let hora = prompt("Ingrese la hora actual");
if (hora <= 12){
    console.log("Buenos dias");
} else if(hora<=19){
    console.log("Buenas tardes");
} else{
    console.log("Buenas noches");
}