"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class persona {
    constructor(nombre, edad, telefono) {
        this.nombre = nombre;
        this.edad = edad;
        this.telefono = telefono;
    }
    mostrar() {
        alert("El nombre es: " + this.nombre);
    }
}
let nombre = prompt("Ingrese su nombre") || "";
let edad = parseInt(prompt("Ingrese su edad") || "0");
let telefono = parseInt(prompt("Ingrese su telefono") || "0");
let people = new persona(nombre, edad, telefono);
people.mostrar();
//# sourceMappingURL=index.js.map