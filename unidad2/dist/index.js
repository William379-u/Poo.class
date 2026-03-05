"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Ejercicio1
class Animal {
    constructor(nombre, categoria, raza) {
        this.nombre = nombre;
        this.categoria = categoria;
        this.raza = raza;
    }
    mostrar() {
        console.log(`El animal es un ${this.categoria}. Su nombre es ${this.nombre}. La raza es ${this.raza}.`);
    }
}
class Encargado extends Animal {
    constructor(nombre, categoria, raza, dueño) {
        super(nombre, categoria, raza);
        this.nombre = nombre;
        this.categoria = categoria;
        this.raza = raza;
        this.dueño = dueño;
    }
}
class Venta extends Animal {
    constructor(nombre, categoria, raza, dueño, venta) {
        super(nombre, categoria, raza, venta);
        this.nombre = nombre;
        this.categoria = categoria;
        this.raza = raza;
        this.dueño = dueño;
        this.venta = venta;
    }
}
const ob = new Encargado('killer', 'perro', 'pitubull', 'chepe');
ob.mostrar();
//Ejercicio2
//# sourceMappingURL=index.js.map