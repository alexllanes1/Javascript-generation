console.log("Inicia Sincrono");
function dosSync() {
    console.log("Se ejecuta la funcion dos");
}

function unoSync() {
    console.log("Se ejecuta la funcion uno")
    dosSync();
    console.log("Se ejecuta el codigo tres");
}

unoSync();
console.log("Fin de Sincrono");

/**
 * 
 * Ejemplo de tareas sincronas
 * 
 * -Ciclos
 * -Invocaciones a funciones
 * -EventListener (especialmente al hacer clic)
 * -Condicionales
 * -Alerts
 * 
 */

//asincrono
console.log("Inicia Asincrono");
function dosAsync() {
    setTimeout(function () {
        console.log("Dos");
    }, 5000);
}

function unoAsync() {
    dosAsync();
    console.log("Tres");
}

unoAsync();
console.log("Fin de Asincrono");

/**
 * 
 * -Function settimeout
 * -Notificaciones de cierre de sesion en apps bancarias
 * -Spotify con su cola de reproduccion
 * -Conexiones a servidores
 * 
 * 
 * Ya que entendemos que la asincronia nos servira para conectarnos a un servidor, y que sin importar la respuesta que este nos de (exitosa o no), o incluso el tiempo que tarde en responder(ms o s), es necesario saber que hay varios mecanismos para maneras operaciones asincronas en JS.
 * 
 * -Callbacks: Forma clasica
 * -Promise: Forma moderna
 * -Async/Await: Forma moderna con una sintaxis mas ligera
 */

/**
 * 
 * Callback
 * 
 * Un callback es una funcion que se pasa como argumento a otra funcion. Esta fucniion se ejecutará despues de que la otra lo haga. Este mecanismo nos ayuda a controlar que cierto código no se ejecute antes de que el otro termine.
 * 
 * Para que lo necesitamos?
 * Sabemos que JS trabaja de forma descendente, entonces habra casos que queramos hacer que un codigo se ejecute despues de que ocurra otra cosa y tambien no sequencial
 */

// function hazClick(){
//     console.log("Le hiciste clic al boton")
// }

// const boton = document.getElementById("boton");
// boton.addEventListener("click", hazClick);

//Ejemplo callback
//Defino una funcion que toma un numero y un callback como parametros

//Creamos una funcion llamada dobleNumero, que toma un numero y un callback como agumentos
function doubleNumero(num, callback) {
    const resultado = num * 2;
    callback(resultado);
}

//definir una funcion para mostrar resultado
function mostrarResultado(resultado) {
    console.log("El resultado es: ", resultado);
}

doubleNumero(5, mostrarResultado);

/**
 * 
 * Promises
 * 
 * Son otro mecanismo para manejar la asincronia. Utilizar promesas hace que el codigo sea mas legible y practico que el usar callbacks, y como su nombre lo indica una promesa es algo que ene un principio no sabemos si se va a cumplir, pero en el futuro pueden pasar varias cosas. La gran ventaja de utilizar promesas es que evitamos anidar muchas funciones, y usamos una sola funcion (metodo) para manejar los callbacks.
 * 
 * NOTA: las promesas son objetos
 * 
 * promise.then
 * 
 * primose.catch
 * 
 * Las promesas tienen estados:
 * 
 * -Pendiente: Es el estado inicial de nuestra promesa, aqui aun no tenemos resultados.
 * -Fullfilled: Cuando la operacion asincrona se completa con exito
 * -Rejected: cuando la operacion falla
 * 
 * Tambien las promesas tienen metodos
 * 
 * -then(fucntion resolve): Ejecuta un callback llamado resolve cuando la promesa se cumple
 * -catch(fucntion reject): Ejecuta un callback llamado rejeck cuando la primesa se rechaza
 * -then(resolve, reject): Puede ejecutar las dos funciones en el mismo metodo then
 * 
 */

function obtenerProducto() {
    //Retorno cuando se ejecute la fucnion quero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funcioens: una cuando se resuelve y otra cuanso se rechaza
    return new Promise(function (resolve, reject) {
        fetch('https://fakestoreapi.com/products')
            .then(function (response) {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Error al obtener los productos. Error 404! Servidor no encontrado");
                }
            })
            .then(function (data) {
                resolve(data);
            })
            .catch(function (error) {
                reject(error);
            });
    })
}

obtenerProducto()
    .then(function (resultado) {
        console.log(resultado);
    })

    .catch(function (error) {
        console.log(error);
    })

//Otro ejemplo de promesa para validar un nombre, Si el nombre que estoy evaluando coincide con un valor ya guardado previamente entonces la promesa se regresa correctamente. Si no, la promesa se rechaza
let nombre = "Felipe";
const promesaNombre = new Promise(function (resolve, reject) {
    if (nombre !== "Felipe") { //Si es distinto
        reject(console.log("Error. No es el nombre")); //Rechazar
    } else {
        resolve("Que bien, el nombre es correcto: " + nombre); //Aceptar
    }
})

console.log(promesaNombre);

///Pokemon API


//Primer bloque para la conexion al servidor
const obtenerPokemon = new Promise((resolve, reject) => {
    fetch('https://pokeapi.co/api/v2/pokemon/10')
        .then(respuesta => {
            if (respuesta.ok) {
                return respuesta.json();
            } else {
                throw new Error("Error 404");
            }
        })

        //segundo bloque (cuando encuentre la info)
        .then(datos => {
            resolve(datos);
        })

        //tercer bloque(cuando no encuentra la info)
        .catch(error => {
            reject("Mensaje de error, no encontramos tu Pokemon" + error);
        })

})

obtenerPokemon
    .then(pokemon => {
        console.log("Pokemon obtenido", pokemon.name);
    })
    .catch(error => {
        console.log(error);
    })

function pokemon(datos, callback) {
    datos = respuesta.json;
    callback(datos);
}

function error(error, callback) {
    error = "Error, no encontramos al pokemon"
    callback(error);
}

/*

Fetch API

Es una interfaz de JS, que nos da un metodo llamado fetch, el cual nos permite manejar solicitudes HTTP (GET, POST, PUT, DELETE).

Cuando usamos Fetch API sabemos que de forma implicita estamos usando promesas, tambien de forma implicita sabemos que esa promesa se puede resolver o rechazar.

El metodo fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeto llamado "response", que incluye la respuesta de la solicitud (a parte de decirnos que la conexiion es ok, "pega" la informacion de lo que estamos consultado).

Ya que tenemos el objeto llamado "response", vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc.

*/

fetch('https://pokeapi.co/api/v2/pokemon/100')
    .then(pokeInfo => {
        return pokeInfo.json();
    })
    .then(pokeInfo => {//Cuando la promesa de la conexion se resuelve entonces ejecutamos esta otra funcion. Esta funcion guarda la informacion de la respuesta y lo guarda en una nueva variable llamada pokeInfo

        console.log("El nombre del pokemon es: ", pokeInfo.name, "su numero de la pokedex es: ", pokeInfo.id);
    })

    .catch(pokeError => {
        console.log("No encontramos nada de informacion", + pokeError);
    })


const input = document.getElementById("inputPokemon");
const button = document.getElementById("botonPokemon");
const pokemonContainer = document.querySelector("#pokemonContainer");

button.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    traerPokemon(input.value); //ejecuta la funcion traerPokemon
});


//Manipulacion del dom + fetch api
function traerPokemon(nombrePokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        //guardo la respuesta en .json
        .then(respuesta => respuesta.json())
        //ese .json lo asigno a una variable llamada datos, que usaré para alimentar una funcion llamada 
        .then((datos) => {
            crearPokemon(datos);
        });
}


function crearPokemon(nombrePokemon) {
    const pokeImg = document.createElement("img");
    pokeImg.src = nombrePokemon.sprites.front_default;


    const h2 = document.createElement("h2");
    h2.innerHTML = nombrePokemon.name;

    const pokeDiv = document.createElement("div");

    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);

    pokemonContainer.appendChild(pokeDiv);
}