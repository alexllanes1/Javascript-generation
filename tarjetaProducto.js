//Tarjeta de publicación de producto

//1.- Obtener los elementos del html
const container = document.getElementById("product-container");

//Almaceno el lugar de destino de mi tarjeta en una constante
const botonAgregarProducto = document.getElementById("agregarProducto")

//Almacenar elementos del formulario en variables de JS
var nombreProducto = document.getElementById("nombreProducto");
var descripcionProducto = document.getElementById("descripcionProducto");
var imagenProducto = document.getElementById("imagenProducto");


function agregarProducto(){

    //guarda los valores de mis inputs

    let valorInputProducto = nombreProducto.value;
    let valorInputDescripcion = descripcionProducto.value;
    let valorInputImagen = imagenProducto.value;

    console.log(valorInputDescripcion);
    console.log(valorInputDescripcion);

    //Cada tarjeta tendrá su contenedor
    const productCard = document.createElement("div");

    productCard.innerHTML = `
    <img src="${valorInputImagen}" alt="Producto">
    <h3> ${valorInputProducto} </h3>
    <p> Descripcion: ${valorInputDescripcion}</p>
    <p> Precio: $9.99 </p>
    <button class="btn"> Agregar al carrito </button>
    <br>
    <br>
    <br>
`;

//Agregar tarjeta de producto al contianer especificado
container.appendChild(productCard);
}

//Creamos el evento
botonAgregarProducto.addEventListener("click", agregarProducto);