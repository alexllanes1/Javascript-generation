//comentario alert("Estoy vivo");

/*
Variables: Es un elemento el cual su valor cambia dependiendo de la circunstancia. Esta variable ocupa un espacio de memoria y dependiendo de su valor o del elemento que este dentro de el es el tipo de variable que tenemos.

Variable = recipiente donde pondremos el valor
Valor = la informacion con la que llenamos el recipente

Declarar = Ponerle nombre a nuestro recipiente
Inicializar = Llenar ese recipiente


Tipos de datos (Primitivos y no primitivos)

Se llaman lenguajes primitivos porque son datos que no pueden ser modificados, ya vienen con el lenguaje y se consideran el dato más simple y básico que hay.

String: Sirve para agregar valores en forma de texto. Para que se considere así, el valor debe estar dentro de comillas simples (' '), dobles (" ") y backstrip (` `)

Number: Sirve para agregar valores en formato numérico (para poder usarlos en operaciones aritmeticas) estos valores no usan comillas.

Boolean: Sirven para representar valores del tipo true o false (encendido o apagado, 0 y 1, si y no)



Undefined: Sirve para representar un tipo de dato que no tiene valor. Una variable sin inicializar es indefinida.

Null: Sirve para definir que un valor es nulo.

- NaN (Not at Number): Sirve para representar un valor que no es un numero. Lo obtenemos si hacemos una operacion con una variable que no es un numero o con una operacion que no es posible.

Symbol:

Object(no es primitivo)

*/

recipiente = "agua";
recipiente = "cafe";
recipiente = "colores y lapices";
recipiente = "leche";

console.log(recipiente);

//Declarar vs Inicializar

//edad;
//altura;
//peso;
//genero;

//Ejemplo de concatenacion
apodoDeFelipe='El "amante numero uno" de los chilaquiles';
console.log(apodoDeFelipe);


//Ejemplo de valores númericos
edadDeFelipe = 31;
precioGancito = 18.50;
cuentaDeFelipe = -156.35;

console.log(edadDeFelipe);
console.log(precioGancito);
console.log(cuentaDeFelipe);

//Ejemplos de valores booleanos
esAdministrador = true;
contraseñaCorrecta = true;
cuentaPremium = false;

//Ejemplos de valores undefined
//respuestaDeMiCrush;
//console.log(respuestaDeMiCrush);

//Ejemplos de valores nulos
respuestaDeMiCrush = null;
console.log(respuestaDeMiCrush);

//Ejemplos de valores NaN
operacionMatematica = 0/0;
console.log(operacionMatematica);

/* TypeOf 

Es una expresion que nos ayuda a saber que tipo de dato es el que estamos evaluando

typeof(elDatoAvaluar);

Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando.
*/

console.log(typeof(esAdministrador));
console.log(typeof(edadDeFelipe));
console.log(typeof(operacionMatematica));

