//1.- Creamos un arreglo de objetos para nuestras tareas, estas tareas tendrán atributos como id, titulo, estados completado o no completado.

let tareas = [
    {
        id : 1,
        titulo : "Bañar al perro",
        estatus : true,
    },
    {
        id : 2,
        titulo : "Preparar la comida",
        estatus : false,
    }
]

//Enviar ese arreglo al servidor
let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON);

///Carito de compras
let carritoDeCompras = [];

let producto ={
    id: 1,
    nombre: "Camisa",
    precio: 299.99,
    cantidad: 1
};

//Mostrar información del carrito de compras
console.log("Tienes: ", carritoDeCompras.length, "producto(s) en tu carrito");

//agregar un nuevo producto a mi carrito
carritoDeCompras.push(producto);

//Mostrar información del carrito de compras

console.log("Tienes: ", carritoDeCompras.length, "producto(s) en tu carrito");

//Actualizar la cantidad del carrito
let productID = 1; //Producto a actualizar
let nuevaCantidad = 3; //catidad nueva de productos

let productoExiste = carritoDeCompras.find(producto => productID === producto.id);
if(productoExiste){
    productoExiste.cantidad = nuevaCantidad;
}
console.log("Tienes: ", carritoDeCompras.length, "producto(s) en tu carrito");


/*
//Con funcion flecha 
carritoDeCompras.find(producto => producto.id === productoId);


//Sin funcion flecha

carritoDeCompras.find(function(producto){
    return producto.id === productoID; //true or false
})

*/


//Eliminar un producto del carrito

let productoAEliminar = 1;
let indiceProductoAEliminar = carritoDeCompras.findIndex(function(producto){

    return producto.id === productoAEliminar;
});

if(indiceProductoAEliminar !== -1){
    carritoDeCompras.splice(indiceProductoAEliminar, 1);
}
console.log("Tienes : ", carritoDeCompras.length, " producto(s) en el carrito");


//Comprar productos (pagar carrito de compras)

/*

El metodo forEach es un metodo de array de JS, que nos va a ayudar a poder ejercutar una función en cada elemento de nuestro array.

Sintaxis de un forEach
array.forEach(function(elemento, indice, arreglo))
*/

let total = 0; 

//Oye JS, en mi carrito de compras, para cada producto que encuentres, ejecuta una funcion donde tomes un producto con parametros, y al encontrar lo vas a multiplicar el precio de ese producto por su cantidad. Ya que lo hayas echo, vas a tomar ese valor y lo vas a sumar y a reasignar a la variable total que declare alla arribita

//Agregar un nuevo producto para mi carrito de compras
carritoDeCompras.push(producto);

carritoDeCompras.forEach(function(producto){
    total += producto.precio * producto.cantidad;
})

//Reviso el total de mi carrito de compras

console.log("El total de su carrito de compras es de: ", total);