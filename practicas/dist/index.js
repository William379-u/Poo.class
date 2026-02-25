"use strict";
//  Ejercicio2
// class Estudiante {
// private nombre: string;
// private carnet: string;
// public notafinal: number = 0;
Object.defineProperty(exports, "__esModule", { value: true });
// constructor(nombre: string, carnet: string, notafinal: number){
//     this.nombre = nombre;
//     this.carnet = carnet;
//     this.notafinal = notafinal;
// }
// mostrarInformacion(): void{
// console.log("Nombre: " + this.nombre);
// console.log("Carnet: " + this.carnet);
// console.log("Nota final:" + this.notafinal);
// }
// actualizarNota(nota: number){
//     this.notafinal = nota;
// }
// actualizarCarnet(carnet: string){
//     this.carnet = carnet;
// }
// actualizarNombre(nombre: string){
//     this.nombre = nombre;
// }
// }
// let estudiante1 = new Estudiante("Juan Perez", "20210001", 85);
// estudiante1.mostrarInformacion();
// estudiante1.actualizarNota(90);
// estudiante1.actualizarNombre("Carlos López");
// estudiante1.actualizarCarnet("20210002");
// estudiante1.mostrarInformacion();
//  Ejercicio2
class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    mostrarInformacion() {
        console.log("Nombre del prodcuto: " + this.nombre);
        console.log("Precio del producto: $" + this.precio);
        console.log("Cuantos producto lleva? " + this.cantidad);
    }
    calcularTotal() {
        const total = this.cantidad * this.precio;
        console.log(`Total : $${total}`);
    }
}
let producto1 = new Producto("Pizza", 8, 2);
producto1.mostrarInformacion();
producto1.calcularTotal();
//# sourceMappingURL=index.js.map