var carrera = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofía"];
console.log(carrera);

console.log("Tercera vueta");

console.log("Jorge se adelanta a Roberto");
carrera.unshift("Jorge");
carrera.splice(3, 1);
console.log(carrera);

console.log("Ramiro se adelanta a Jorge");
carrera.unshift("Ramiro");
carrera.splice(4, 1);
console.log(carrera);

console.log("Roberto queda lesionado, tendrá que dejar la carrera");
carrera.splice(2, 1);
console.log(carrera);

console.log("Andrea baja una posición");
carrera.push("Andrea");
carrera.splice(2, 1);
console.log(carrera);

console.log("Ramiro mantiene su lugar y entra José a la carrera");
carrera.push("José");
console.log(carrera);

console.log("El primer lugar lo tiene", carrera[0], "el segundo lugar se lo lleva", carrera[1], "y finalmente el tercer lugar es para",carrera[2]);

