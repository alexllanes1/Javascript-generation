/*En JS tenemos 3 tipos de variables
- var: Era la forma principal de declarar variables. Es una variable muy flexible, tiene un scope global, esto es, que el valor de esta variable esta disponible en el programa.

- let:  Lo usamos para limitar el alcance de nuestras variables (scope), y se limita a un bloque de codigo o expresion (meter a la mama de Bambi en una caja).

- const: Para declarar una variable con un valor constante o inmutable (que no cambie).

*/


//En este caso, la mama de bambi esta visible desde cualquier lugar del programa
console.log("Estatus de la mama de Bambi",mamaDeBambiViva);

var mamaDeBambiViva = "false";

var cazador = "Listo para disparar";

//let nombre = "Manuel Torres";

const pi = 3.1416;

let descuentoDelEcomerce = 10;

/*console.log(recipiente);
let recipiente = agua;*/

/*

Funciones

Una funcion es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.


Parametros = variables que necesitamos para alimentar mi funcion (todas las  variables se tienen que utilizar)
Ejemplo: limon, azucar, vasito de agua, cucharita, hielos, egua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)
Ejemplo: prepararAguitaDeLimon


Operaciones: Conjunto de instrucciones (en orden especifico).
Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.


Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limon


*/

//1.- Creamos la funcion con la palabra reservada function y le ponemos un nombre. Abrimos y cerramos un parentesis y luego unas llaves {}

//3.- Poner las instrucciones dentro de las llaves usando los parametros o argumentos

//4.- Invocar la funcion escribiendo su nombre y abrimos parentesis.

//Let: Entre parentesis o dentro de la funcion
//var: entre parentesis y desntro de la funcion (reasignacion)

//formas
//definir parametros dentro del ()
//definir parametros dentro del {}
//definir parametros en la invocacion


function prepararAguitaDeLimon(limon, agua, hielos, azucar, vaso, cuchara){

    var limon = "limon";
    var agua = "agua";
    var hielos = "hielos";
    var azucar = "azucar";
    var vaso = "vaso";
    var cuchara = "cuchara";

    console.log("Cortar el limon " + limon);
    console.log("Expriir el limon ");
    console.log("Agregar el jugo de limon al vaso " + vaso);
    console.log("agregamos los hielos al vaso " + hielos);
    console.log("Agregamos agua al vaso " + agua);
    console.log("Endulzamos al gusto " + azucar);
    console.log("mezclar " + cuchara);
    console.log("Que rica aguita de limon")

    var cuchara = "tenedor";
    console.log(cuchara);
}

//console.log(cuchara);

prepararAguitaDeLimon();

//var recipiente = "chocomilk";
console.log(recipiente);

//ejemplo de las 3 formas de agregar parametros

//primera forma: usando parametros dentro de parentesis

function suma(a,b){//valores undefined
    var a=5; //cambio de undefined
    var b=7; //cambio de undefined
    operacion = a+b; //hago la suma usando los valores
    console.log(operacion); //imprimir operacion
}
suma() //invocar funcion

//Segunda forma: usando los valores dentro de parentesis e inicializandolos dentro de ellos

function resta( a=8, b=5){
    operacion = a-b;
    console.log(operacion);
}
resta();

//Tercera forma: inicializando valores dentro de la invocacion

function multiplicacion (a,b){
operacion = a*b;
console.log(operacion);
}

multiplicacion(3,9);
multiplicacion(3,); //Se imprimen NaN porque nos faltan parametros

//funciones anonimas

let funcionAnonima = function(a,b){
    operacion = a/b;
    console.log(operacion);
}
funcionAnonima(10,5);

//return
//La senstencia return finaliza la ejecucion de la funcion y especifica un valor para ser devuelto a quien lo llama o lo que es mismo, usar returns para finaliar y tambien para asignar un resultado a una variable.

//Funcion para dar un saludo personalizado

//definir mi funcion
function saludo(){ 
    //declaro el valor de mi nombre
    let nombre="Manuel Torres";
    //uso ese nombre para personalizar mi saludo
    console.log("Hola " + nombre);
    //Finalizo la ejecucion de mi funcion y toma el dato de la bariable llamada nombre para poder verla en un contexto local y para poder usarla despues en otras operaciones
    return nombre; //limbo de variables
}
//para poder usar esa variable que hasta el momento sacamos de la funcion pero que no sabemos donde esta (limbo de funciones). Y en esta nueva variable ponemos la invocacion de la funcion.
saludo();
const valor=saludo();

console.log("Estas son las personas que han iniciado sesion en mi aplicación: " + valor);

var nombreIngresadoDesdeElNavegador = prompt("Introduce tu nombre");
console.log("Gracias por entrar a mi página " + nombreIngresadoDesdeElNavegador);
