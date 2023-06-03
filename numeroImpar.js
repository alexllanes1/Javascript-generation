//Numeros impares

var numeroIngresado = prompt("Ingresa un numero entero");

if(numeroIngresado>1){
    console.log("Todos los números impares hasta el número", numeroIngresado, "son: \n")
    for(var i=0; i<numeroIngresado; i++)
    if(i%2==0){
        console.log(i+1);
    }
}