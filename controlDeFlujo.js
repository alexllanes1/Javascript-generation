/*

Control de FLujo


Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).

Condicionales

Son estructuras o condiciones que nos permiten modifical el orden natural de ejecucion de nuestro programa. Son sentencias especificas que nos ayudara a decidir si una condicion se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones.

/////////////Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.

Estructura basica de un if

if (condicion){
    //Ejecuto este bloque de codigo
}

/////////////Ejemplo

Tengo limpia mi playera de la suerte?   //pregunta o instruccion que denota la condicion
    true                                //respuesta a posible instruccion
    false                               //respuesta a posible instruccion

    Felipe tiene 17 años y quiere ir a una fiesta. Discha fiesta solo es para personas adultas (mayores de 18). Ayuda a Felipe decidir si puede ir o no.

    Evaluamos solo una expresion (si Felipe tiene menos de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque nuestro programa no esta preparado para esa situacion (incertidumbre).
*/

/*

let edadDeFelipe = prompt("Ingresa tu edad");
let edadPermitida = 18;
if (edadDeFelipe <= edadPermitida) {
    console.log("Lo siento, no puedes ir a la fiesta");
}
else {
    console.log("Felicidades, puedes ir a la fiesta");
}

*/

/*
Else (de otro modo - si no)

Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutara si la condicion es verdadera, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa.

Estructura basica del Else

if (condicion) {
    //Este bloque se ejecuta si la condicion es verdadera
} 
else 
{
    //Este bloque se ejecuta si la condicion es falsa
}

Test de nuestro programa 
-"false"
-NaN
-false
*/

/* 
Else if

Esta condicional nos ayuda a ejecutar una nueva en caso que la primera sea falsa. Se pueden usar las estructuras else if que sean necesarias teminando la estuctura con un else.

if (condicion 1) {
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo se ejecuta si la condicon 1 es falsa, y si la condicon 2 tambien es falsa
}

Se pueden anidar x cantidad de else if entre el if que evalua la condicion inicial y el else que termina toda la expresion.
*/
/*
edadDeDavid = 19;
edadPermitidaDelAntro = 18;
dineroDeDavid = 100;
coverDelAntro = 150;

if (edadDeDavid < edadPermitidaDelAntro) {
    console.log("Muy bien, tienes edad para poder ir al antro");
} else if (dineroDeDavid > coverDelAntro) {
    console.log("Tienes dinero suficiente para pagar el cover");
} else {
    console.log("No tienes suficiente dinero para pagar el cover");

}

let hora = prompt("Ingrese la hora actual");
if (hora <= 12) {
    console.log("Buenos dias");
} else if (hora <= 19) {
    console.log("Buenas tardes");
} else {
    console.log("Buenas noches");
}
*/

/*Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables. 
Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.


 - case: Evalua el caso o condicion asociado que dispara un bloque de codigo
 - break: Termina el proceso sin que tengamos que pasar por todas las iteraciones o casos.
 - default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else)



switch (expresion o condicion){
    case valor1:
        //Codigo que se ejecuta si la condicion es igual a valor1
    break;

    case valor2:
        //Codigo que se ejecuta si la condicion es igual a valor2
    break;

    case valor3:
        //Codigo que se ejecuta si la condicion es igual a valor3
    break;

    case valor4:
        //Codigo que se ejecuta si la condicion es igual a valor4
    break;

    case valor5:
        //Codigo que se ejecuta si la condicion es igual a valor5
    break;

    default:
        //Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}
*/

/*
let pisoDestino = prompt("Ingresa el piso al que quieras ir (1 al 5)");

switch(pisoDestino){
    case "1":
    console.log("Vamos al piso 1");
    break;

    case "2":
        console.log("Vamos al piso 2");
        break;

    case "3":
        console.log("Vamos al piso 3");
        break;

    case "4":
        console.log("Vamos al piso 4");
        break;

    case "5":
        console.log("Vamos al piso 5");
        break;
    default:
        console.log("Ingresaste un piso que no es valido");
        break;

}
 */
//Ejercicio de Eevee

var elementoEvolucion = prompt("Ingresa el elemento con el que evolucionaras a tu pokémon (Piedra [elemento], Amistad)");


switch (elementoEvolucion) {

    case "piedraFuego": case "piedra fuego": case "Piedra fuego": case "Piedra Fuego": case "piedra Fuego":
        console.log("Tu Eevee ha evolucionado a Flareon");
        break;

    case "piedraTrueno": case "piedra trueno": case "Piedra trueno": case "Piedra Trueno": case "piedra Trueno":
        console.log("Tu Eevee ha evolucionado a Jolteon");
        break;

    case "piedraAgua": case "piedra agua": case "Piedra agua": case "Piedra Agua": case "piedra Agua":
        console.log("Tu Eevee ha evolucionado a Vaporeon");
        break;

    case "piedraHielo": case "piedra hielo": case "Piedra hielo": case "Piedra Hielo": case "piedra Hielo":
        console.log("Tu Eevee ha evolucionado a Glaceon");
        break;

    case "piedrahoja": case "piedra hoja": case "Piedra hoja": case "Piedra Hoja": case "piedra Hoja":
        console.log("Tu Eevee ha evolucionado a Leafeon");
        break;

    case "amistad": case "Amistad":
        var tiempDia = prompt("Ingresa si es de día o noche");
        switch (tiempoDia) {
            case "dia": case "Dia": case "día": case "Día":
                console.log("Tu Eevee ha evolucionado a Espeon");
                break;
            case "noche": case "Noche":
                var felicidad = prompt("Ingresa la cantidad de felicidad");
                if(felicidad<3){
                    console.log("Tu Eevee ha evolucionado a Umbreon");
                }
                else {
                    console.log("Tu Eevee ha evolucionado a Sylveon");
                }
                break;
        }
        break;

    default:
        console.log("Ingresa un un valor correcto");
        break;

}


/*
var horscopos = prompt("Ingresa tu horoscopo");

switch (horscopos) {

    case "aries": case "Aries": case "ARIES":
        console.log("ARIES: Empieza a preparar hoy mismo tu estrategia para avanzar en tu vida profesional, Aries. Esto te dará un aliciente porque verás todo lo que puedes llegar a conseguir si te esfuerzas a diario. Hoy será un día importante en el amor si estás en pareja desde hace relativamente poco. En un momento de sinceridad total, él te hablará de cómo piensa, de sus proyectos para el futuro.");
        break;

    case "tauro": case "Tauro": case "TAURO":
        console.log("TAURO: Estás de lunes subido, Tauro, y a tu desánimo se une hoy que no te salen las cosas como esperas, claro que la causa-efecto quizá sea a la inversa. Te quedan muchas cosas por hacer a diario y podrías aplicar tu energía a ello, por lo menos te sentirías mejor que adoptando una actitud negativa.");
        break;

    case "geminis": case "Geminis": case "GEMINIS": case "géminis": case "Géminis": case "GéMINIS":
        console.log("GEMINIS: Te espera hoy un momento magnífico en el trabajo, Géminis. Estás brillando en tu vida profesional a diario y un superior te dará una buena noticia, algo muy positivo y que significa ingresos extra en el futuro. Aunque ahora el dinero no te hace sufrir y has conseguido ahorrar, no es buen momento para lanzarse a compras importantes, como por ejemplo un piso o un coche.");
        break;

    case "cancer": case "Cancer": case "CANCER": case "cáncer": case "Cáncer": case "CÁNCER":
        console.log("CANCER: Profesionalmente hoy puede llegarte un momento destacado y ser reconocida por algo que has hecho muy bien, Cáncer. Recuerda cuántas veces ansiaste que esto ocurriera y cómo te sentías cuando a diario eran otras personas las que recibían los elogios o el reconocimiento de los superiores. Sin embargo, no te crezcas ni alimentes tu vanidad.");
        break;

    case "leo": case "Leo": case "LEO":
        console.log("LEO: Hoy podría salirte la oportunidad que esperabas para cambiar de trabajo, Leo. Las rencillas que mantienes a diario con uno de tus jefes son la causa de que quieras marchar a otra parte. Sin embargo, lo que te proponen tal vez no te permita la estabilidad económica de la que ahora gozas.");
        break;

    case "virgo": case "Virgo": case "VIRGO":
        console.log("VIRGO: No se te presenta mal el día, Virgo, al contrario, hoy tendrás muchos motivos de satisfacción durante la jornada laboral, más de los que sueles tener a diario. A la salida, procura reunirte con tu gente, con tu familia. Hoy que quizá no tengas otros planes, dedícales algún tiempo y lo agradecerán.");
        break;

    case "libra": case "Libra": case "LIBRA":
        console.log("LIBRA: Te cuesta mucho enfrentarte los lunes a un  exceso de trabajo, Libra, mucha responsabilidad y un montón de cargas, como te pasa hoy. Te las has buscado solita. Has de aprender a delegar a diario y no comerte tú sola el marrón. No por ello serás menos valiosa profesionalmente. Tu mente organizadora es tu mejor tarjeta de presentación, no tienes por qué llevar a cabo personalmente el trabajo hasta el último paso.");
        break;

    case "escorpio": case "Escorpio": case "ESCORPIO":
        console.log("ESCORPIO: Tendrás hoy un encuentro, o recibirás una llamada, quizá un mensaje, de un antiguo compañero de estudios, Escorpio. Si tú ahora no trabajas en aquello para lo que has estudiado te dará qué pensar. Soñabas con un futuro que no has alcanzado por la vía que hubiese sido lógica. Has de plantearte si estás satisfecha de cómo te han ido a diario las cosas por otro camino.");
        break;

    case "sagitario": case "Sagitario": case "SAGITARIO":
        console.log("SAGITARIO: Tu trabajo y tu bolsillo están en un buen momento, Sagitario. Hoy tendrás tentaciones de salir de compras quizá para equiparte de cara al verano. Sal con el dinero justo de tu presupuesto y la lista de lo que necesitarás a diario. Recuerda que no es tan importante a donde vayas como lo que hagas y con quien lo hagas.");
        break;

    case "capricornio": case "Capricornio": case "CAPRICORNIO":
        console.log("CAPRICORNIO: Estás hoy “de lunes”, Capricornio, con los ánimos por los suelos y pensando que en realidad el trabajo que haces a diario es un aburrimiento. Te ayudará mucho ser más positiva y recuperar el gusto por estas tareas que antes te parecían interesantes, piensa en qué aspectos te llenaban y tómalo como un reto, como un juego.");
        break;

    case "acuario": case "Acuario": case "ACUARIO":
        console.log("ACUARIO: Hoy será un lunes nada corriente, Acuario. Seguramente crees que te espera un montón de trabajo y que no podrás con él, pero no es así. No se trata de que tengas pereza de comenzar la semana, es que te sientes algo insegura, a diario tienes pensamientos negativos. No hagas esfuerzos extras porque tu estado anímico podría bajar más todavía.");
        break;

    case "picis": case "Picis": case "PICIS":
        console.log("PICIS: Te ha llegado el momento de brillar de nuevo en tu trabajo, Piscis. Pero no hagas como en el cuento de la lechera, no planifiques anticipadamente otras etapas que aún están por llegar y menos pienses en cómo invertir el dinero que vas a ganar a diario.");
        break;

    default:
        console.log("Ingresa un horoscopo valido");
        break;
}
*/