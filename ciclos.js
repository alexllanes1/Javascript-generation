/**
 * 
 * Bucles e iteración
 * 
 * En JS un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetur una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas
 * 
 * - While
 * - Do While
 * - For
 * 
 * While
 * 
 * Este bucle nos sirve para realizar una tarea repetitiva, mientras una condicion sea verdadera. a diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condición y ejecuta el bloque de código hasta que la condicion sea FALSE.
 * 
 * 
 * Estructura Básica de una while
 * 
 *while(tenerSueño){
 *   //Dormir
 *}
 * 
 * 
 * let rolDeUsuario = "registrado"; //esto ya esta definido
 *
 *
 *while (!"registrado") { //la evaluacion es sobre el rol
 *  
 *  function registrarUsuario(){
 *      console.log("Usuario Registrado");
 *   }
 *
 *}
 *
 *dejaloComprar();
 * 
 */
//Codigo de sopa de verduras

var ingredientes = ["Zanahoria", "Cebollas", "Apio", "Papa", "Espinacas", "Pollito"];

var i=0;

while(i<ingredientes.length){
    console.log("Se agregó", ingredientes[i]);
    i++
}
console.log("La sopa se terminó");

/**
 * 
 * Casos de uso
 * 
 * - verificar si un usuario esta registrado
 * - Verificar la disponibilidad de un producto
 * - Realizar acciones sobre un carrito de compras
 * - Recorrer publicaciones de usuario
 * - contador de likes
 * 
 * 

let Felipe = "listaDeAmigos";
let Fernanda = "block"

while("listaDeAmigos"){
    console.log("Mostrar publicación")
}
 */

/**
 * 
 * Do while
 * 
 * Es similar al while, con la diferencia de que la condicion se evalua despues de cada iteracion. Esto garantiza que el bloque de código se ejecute al menos una vez, incluso si la condicion inicial es falsa
 * 
 * do{
 * //bloque de codigo que vamos a ejecutar
 * }while (condición)
 */

console.log("Ejemplo de galletas con Do-While");

var tiempoDeCoccion = 0;

do{
    console.log("Horneando galletas")
    tiempoDeCoccion+=5;
} while (tiempoDeCoccion<30);

console.log("Las galletas estan listas");

/*For (para)
 *
 *Se utiliza cuandos se conoce el numero exacto de iteraciones que se realizaran. Consiste en tres partes: inicializacion, condicion y expresion final.
 *El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.
 *
 *
 *for (inicializacion; condicion ; expresion de iteracion){
 *   //Bloque de codigo a ejecutar
 *}
 *
 *
 * - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable * de control (contador)
 *
 * - condicion: se verificar antes de cada iteracion, y si se evalua como verdadera, el bucle se ejcuta. 
 *
 * - expresion de iteracion: se ejecuta al final de cada iteaciones, y se utiliza para actualizar o modificar la variable de control.
 *
 *
*/


console.log("Ejemplo de la pizza con for");

//definir mi lista de pasos

var pasosDeReceta = ["Preparar la masa", "Agregar los ingredientes", "Hornear la pizza"];

//Definir el tiempo por paso
var tiempoPorPasos = [15, 10, 20];

//Dciclo de for

for(i = 0; i < pasosDeReceta.length; i++){

    console.log("Realizar paso " + pasosDeReceta[i]);
    console.log("Esperando " + tiempoPorPasos[i] + " minutos");

}

console.log("Disfruta tu pizza");

//Ejemplo contador con FOR
for(let i = 10; i>0;i--){
    console.log("Faltan " + i + " segundos para el despegue");

}

//Ejemplo con cupones
for(let cupones = 10; cupones>0; cupones--){
    console.log("Tienes un cupon de descuento, te quedan " + (cupones-1))
}

