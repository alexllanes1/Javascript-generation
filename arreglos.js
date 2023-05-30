/*

Arreglos (arrays, matrices, colección de datos)

En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.



*/

//Cada asignatura esta asociada a una variable individual

var asignatura1 = "Matematicas";
var asignatura2 = "Literatura";
var asignatura3 = "Física";

//array
var asignaturas = ["Matemáticas", "Literatura", "Física"];

console.log(asignaturas);


//Formas de declarar un array

//1.- Usando corchetes []
var miArray = [1,2,3,4,5,6];

//2.- Varuable sin inicializar
var colores;

//arreglo sin asignar una variable
["Azul", "Rojo", "Naranja", "Verde"];

//variable declarada e inicializada
var colores = ["Azul", "Rojo", "Naranja", "Verde"];

//Podemos tener distintos tipos de datos
var datosFelipe = ["Felipe", 31, "Guadalajara", "Nikky", true, undefined, null];

//Acceso a elementos de un arreglo

console.log("El elemento en la posicion 2 de mis asignaturas es: ", asignaturas[2]);

//Si accedemos a un elemento que no existe, nos mostrará un undefined porque el espacio existe pero no tiene valor.
console.log("El elemento en la posicion 2 de mis asignaturas es: ", asignaturas[10]);

//mostrar la longitud de mi arreglo
console.log(asignaturas.length);

//Ejemplos de arrays

//Array carrito de compras

var carrito = ["Pantalon", "Camisa", "Corbata"];

var publicacion = ["Felipe", 137, "29-Mayo-2023"];

console.log(publicacion);

//Modificar los elementos dentro del array
//Reasignamos el valor a un elemento de nuestro arreglo por medio de su index

publicacion[1]=138;

console.log(publicacion);

//No teniamos un elemento en la posicion (index) 5 (indefinido = 150)
publicacion[5]=150;

//metodo para agregar elementos al final de un arreglo
asignaturas.push("Biologia");

console.log(asignaturas);

asignaturas.push("Inglés");

console.log(asignaturas);

//metodo para eliminar elementos al final de un arreglo

asignaturas.pop();
console.log(asignaturas);

//metodo para agregar elementos al principio de un arreglo

asignaturas.unshift("Español");
console.log(asignaturas);

//metodo para eliminar elementos al principio de un arreglo

asignaturas.shift("Español");
console.log(asignaturas);

//Metodo para saber si mi arreglo incluye un elemento en especifico
let carritoDeWalmart = ["Gansito", "Coca-Cola", "Galletas Maria", "Mazapan"];

regalo = carritoDeWalmart.includes("Gansito");

if(regalo === true){
    console.log("The ofrecemos un descuento del 10%");
}

//Metodo para concatenar arreglos

let golosinas = ["Gansito", "Coca-Cola", "Galletas Maria", "Mazapan"];
let frutas = ["Manzana", "Mangos", "Platanos", "Toronjas", "Fresas"];

var listaDeCompras = golosinas.concat(frutas);

console.log(listaDeCompras);
console.log(golosinas, frutas); //Usar , no + para concatenar, + devuelve el texto

//Metodo para buscar un elemento en un arreglo y devolver el indice de su primera aparicion. Si el elemento no se encuentra, retorna -1

console.log(listaDeCompras.indexOf("Chicharrones"))

//Metodo para unir elementos de un arreglo en una cadena de texto

console.log(listaDeCompras.join("****"))

//Metodo reverse invierte el array 
console.log(listaDeCompras.reverse());


//Metodo sort ordena el array de menor a mayor o en ordel alfabetico
console.log(listaDeCompras.sort());


//Metodo Splice cambia un elemento en una posicion de memoria especifica (agregar, eliminar o reemplazar elementos)
var abecedario = ["A", "B", "C", "D", "E", "F"];
console.log(abecedario);
//array.splice(iniciamos, numeroElementosABorrar, elementoAInsertar)
abecedario.splice(2, 2);
console.log(abecedario);

//Metodo toString regresa el array en forma de string
console.log(listaDeCompras.toString());

//Modificaciones del arreglo (push, pop, shift, unshift, splice)

//Acceso y busqueda de elementos (indexOf, lastIndexOf, includes)

//Transformacion de elementos (sort, reverse, map, forEach)

//Operaciones logicas (every, some)

//Creacion de nuevos arreglos (slice, concat, join, reverse)

