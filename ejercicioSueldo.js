class trabajador{

    nombre = "";
    edad = 0;
    rfc = "";
    díasTrabajados = 0;

    sueldoDia = 156.78;
    isr = 31;
    sueldoMesBruto = 0;
    sueldoMesNeto = 0;
    sueldoQuincenaBruto = 0;
    sueldoQuincenaNeto = 0;
    sueldoDiaTrabajado = 0;

    constructor(nombre, edad, rfc, díasTrabajados){
        this.nombre = nombre;
        this.edad = edad;
        this.rfc = rfc;
        this.díasTrabajados = díasTrabajados;

    }

    imprimirInfo(){
        console.log("El nombre es", this.nombre);
        console.log("La edad es", this.edad);
        console.log("Su RFC es", this.rfc);
        console.log("Su sueldo por día es", this.sueldoDia);

    }

    sueldoPorDiaTrabajadoN(){
        this.sueldoDiaTrabajado = this.sueldoDia*this.díasTrabajados;
        console.log("El sueldo de días trabajados en bruto es de= ", this.sueldoDiaTrabajado);
    }

    sueldoMesBrutoF(){
        this.sueldoMesBruto = ((this.sueldoDia*this.díasTrabajados)*4);
        console.log("El sueldo mensual bruto es de= ", this.sueldoMesBruto);
    };

    sueldoMesNetoF(){
        this.sueldoMesNeto = ((this.sueldoDia*this.díasTrabajados)*4)*(1 - this.isr / 100);
        console.log("El sueldo mensual Neto es de= ", this.sueldoMesNeto);
    };

    sueldoQuincenaBrutoF(){
        this.sueldoQuincenaBruto = ((this.sueldoDia*this.díasTrabajados)*2);
        console.log("El sueldo quincenal bruto es de= ", this.sueldoQuincenaBruto);  
    };

    sueldoQuincenaNetoF(){
        this.sueldoQuincenaNeto = ((this.sueldoDia*this.díasTrabajados)*2)*(1 - this.isr / 100);
        console.log("El sueldo quincenal Neto es de= ", this.sueldoQuincenaNeto);
    };
}

let Ernesto = new trabajador("Ernesto", 31, "EOLS219", 29);
console.log(Ernesto);

Ernesto.imprimirInfo();

// Ernesto.sueldoPorDiaTrabajadoN();
// Ernesto.sueldoMesBrutoF();
// Ernesto.sueldoMesNetoF();
// Ernesto.sueldoQuincenaBrutoF();
// Ernesto.sueldoQuincenaNetoF();

let Ramirez = new trabajador("Ramirez", 29, "JNDOE", 3);
let Juancho = new trabajador("Juancho", 22, "92NNDI0", 4);
let David = new trabajador("Dadiv", 29, "JSNKF99", 5);
let Felipe = new trabajador("Felipe", 27, "939j3", 7);

console.log(Ramirez);
console.log(Juancho);
console.log(David);
console.log(Felipe);

