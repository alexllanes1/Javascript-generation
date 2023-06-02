let elementoContador = document.getElementById("numeroContador");
let botonIncremento = document.getElementById("botonIncrementar");
let botonDecremento = document.getElementById("botonDecrementar");
let botonReset = document.querySelector("#botonReset");
let memeRandom = document.querySelector("#memeRandom");

//Variables

let valorContador = 0;

//Logica

function incrementar(){
    valorContador++;
    numeroContador.innerHTML = valorContador;

    //si el valor es 10 se ejecuta mostras imagen
    if (valorContador>=10){
        mostrarImagen();
    }
    else{
        ocultarImagen();
    }
}

incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();
incrementar();

function decrementar(){
valorContador--;
numeroContador.innerHTML = valorContador;
}

function reset(){
    valorContador=0;
    numeroContador.innerHTML = valorContador;
}

//funcion para mostrar imagen

//la intencion de esta funcion es que cuando sea invocada, recorra el arreglo y tome uno de los elementos de foma aleatoria (index)
function mostrarImagen(){
    var coleccionImagenes = ["./img/meme1.jpg", "./img/meme2.jpg", "./img/meme3.jpg", "./img/meme4.jpg"];

    //generar indice aleatorio
    let indexRandom = Math.floor(Math.random()*coleccionImagenes.length);

    //obtener la url

    let urlAleatoria = coleccionImagenes[indexRandom];
    //agrega la url al atributo vacio en html
    memeRandom.src=urlAleatoria;
    //cambio la propiedad de visualización 
    memeRandom.style.display = "block";
    console.log(memeRandom);

}

function ocultarImagen(){

    memeRandom.style.display = "none";

}

//evento en botones
botonIncremento.addEventListener("click", incrementar);
botonDecremento.addEventListener("click", decrementar);
botonReset.addEventListener("click", reset);