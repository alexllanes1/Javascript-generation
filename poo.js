/*

Programacion Orientada a Objetos en Javascript

Paradigma de programacion que nos permite crear soluciones a problemas que se nos presentan, tomando como ejemplo los objetos del mundo real. 

Otras formas de programar:

- Programacion funcional
- Programacion imperativa
- Programacion declarativa


*/

// const casa = {

//     numHabitaciones : 0,,
//     numPisos : 0,
//     numBanios : 0,
//     color : "",

// };

class casaPlantilla{

    //1- Definir mis propiedades como variables, para posteriormente agregarle valores (este valor se lo vamos a dar cuando instanciemos el objeto)
    numHabitaciones = 0;
    numPisos = 0;
    numBanios =0;
    color = "";

    //3.- Definid una funcion constructora. Esta funcion es una funcion especial que se dedica unica y exclusivamente para tomar los datos que definimos como variables, para usarlas como parametros de contruccion y asi poder instanciar nuestro objeto.

    //Los parametros se pasan en el orden en el que fueron declarados, para que cada valor que se use, se asigne a la variable
    
    constructor(numHabitaciones, numPisos, numBanios, color){
        this.numHabitaciones = numHabitaciones;
        this.numPisos = numPisos;
        this.numBanios = numBanios;
        this.color = color;
    }

    //2.- definimos los metoods como funciones, porque estas funciones nos dicen que es lo que hace mi objeto

    encenderLuces(){
        console.log("Click, luces encendidas");
    }

    abrirVentanas(){
        console.log("Ventanas abiertas");

    }

    guardarmeDelFresquito(){
        console.log("Que agusticidad");
    }

};

//casa[indice]; Normalmente se hace con arreglos

//console.log("El color de mi casa es: ", casa.color);

//En la clase definimos todo de forma "normal" (declaran las variables como normalmente las usamos = y ;, pero cuando el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor)

/**
 * Inicializar objetos
 * 
 * Variable con nombre = palabraReservadaNew referenciaDeLaClase (parametors de contruccion);
 * 
 * let objeto = new claseObjeto(parametros)
 */

let casa1 = new casaPlantilla(6,3,3,"Azul");
casa1.encenderLuces();
casa1.abrirVentanas();
casa1.guardarmeDelFresquito();
console.log(casa1);

let casaManuel = new casaPlantilla(2,3,3,"Gris");
let casaDesu = new casaPlantilla(7,4,2,"Rojo");
let casaAnnie = new casaPlantilla(9,7,6,"Verde");
console.log(casaManuel);
console.log(casaDesu);
console.log(casaAnnie);

///////////////// Ejemplo de POO con Gatitos

class gatitos{

    nombre = "";
    edad = 0;
    tamaño = "";
    caracter = "";
    numeroVidas = 0;
    color = "";
    raza = "";
    vacunas = false;

    constructor(nombre, edad, tamaño, caracter,numeroVidas, color, raza, vacunas){
        this.nombre = nombre;
        this.edad = edad;
        this.tamaño = tamaño;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;
    }

    imprimirInfo(){
        console.log("El nombre de mi gato es: ", this.nombre);
        console.log("La edad de mi gato es: ", this.edad);
        console.log("El tamaño de mi gato es: ", this.tamaño);
        console.log("El número de vidas de mi gato es: ", this.numeroVidas);
        console.log("La raza de mi gato es: ", this.raza);
        console.log("Mi gato tiene vacunas: ", this.vacunas);

    };
    maullar(){
        console.log("Meow");
    };
    rasguñar(){
        console.log("El gato ha arañado el sillon");
    };
    ronronear(){
        console.log("PRRRRR");
    };

    cuidarGato(){
        if(this.numeroVidas<3){
            console.log("Cuida a tu gatito, tiene pocas vidas");
        }
    }

}

let gatito = new gatitos("Juancho", 5, "Grande", "Tranquilo", "8", "Amarillo", "Agora", true);
console.log(gatito);
let Niboshi = new gatitos("Niboshi", 2, "Mediano", "Jugueton", "8", "Gris", "ND", true);
console.log(Niboshi);
let Dodger = new gatitos("Dodger", 9, "Grande", "Tranquilo", "4", "Naraja", "ND", true);
console.log(Dodger);
let Felix = new gatitos("Felix", 100, "Pequeño", "Travieso", "9", "Negro", "ND", true);
console.log(Felix);
let Gucky = new gatitos("Gucky", 5, "Grande", "Tranquilo", "3", "Gris", "Siames", true);
console.log(Gucky);

/**
 * 
 * JSON (JavaScript Object Notation)
 * 
 * Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})
 * 
 * JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia este que estos datos se guardan en un formato de texto, para poder hacer la comunicacion con nuestro servidor.
 * 
 * Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado.
 */

objeto = {
    nombre: "Felipe",
    edad: 15,
}

console.log("Este es un objeto normal", objeto);

//Como nuestro servidor no interpreta objetos "puros" se necesita serializar en cadenas de texto.
//La sintaxis para pasar de objeto normal de JS a JSON es:
//JSON.stringify(objeto que quiero serializar)


let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombre);

//Para deserealizar los objetos se usa el JSON.parse
let objetoDeserializado=(JSON.parse(objetoSerializado));
console.log(objetoDeserializado.nombre);