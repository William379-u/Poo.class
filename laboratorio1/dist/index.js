"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ejercicio 1:
class estudiante {
    constructor(nombre, apellido, telefono, correo, codigoIndentificacion) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.codigoIndentificacion = codigoIndentificacion;
    }
}
const estudiante1 = new estudiante("Hugo", "Gomez", 75763358, "hugo.gomez@example.com", 20250486);
console.log(estudiante1);
//Ejercicio 2
class producto {
    constructor(cantidad_de_producto, precio, descuento, iva, total_a_pagar) {
        this.cantidad_de_producto = cantidad_de_producto;
        this.precio = precio;
        this.descuento = descuento;
        this.iva = iva;
        this.total_a_pagar = total_a_pagar;
    }
}
const producto1 = new producto(3, 150, 0.55, 0.16, 0);
console.log("Descuento:", producto1.descuento = producto1.cantidad_de_producto * producto1.precio * producto1.descuento);
console.log("IVA:", producto1.iva = (producto1.cantidad_de_producto * producto1.precio - producto1.descuento) * producto1.iva);
console.log("Total a pagar:", producto1.total_a_pagar = (producto1.cantidad_de_producto * producto1.precio) - producto1.descuento + producto1.iva);
const producto2 = new producto(5, 15, 0.55, 0.16, 0);
console.log("Descuento:", producto2.descuento = producto2.cantidad_de_producto * producto2.precio * producto2.descuento);
console.log("IVA:", producto2.iva = (producto2.cantidad_de_producto * producto2.precio - producto2.descuento) * producto2.iva);
console.log("Total a pagar:", producto2.total_a_pagar = (producto2.cantidad_de_producto * producto2.precio) - producto2.descuento + producto2.iva);
//Ejercicio 3 
class Persona {
    constructor(Nombre, Fecha_de_nacimiento) {
        this.Nombre = Nombre;
        this.Fecha_de_nacimiento = Fecha_de_nacimiento;
    }
}
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    const mes = hoy.getMonth() - fechaNacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }
    return edad;
}
function determinarEstado(edad) {
    if (edad >= 0 && edad <= 2) {
        return "Bebé";
    }
    else if (edad > 2 && edad <= 10) {
        return "Niño/Niña";
    }
    else if (edad > 10 && edad <= 14) {
        return "Pre adolescente";
    }
    else if (edad > 14 && edad <= 17) {
        return "Adolescente";
    }
    else if (edad >= 18 && edad <= 30) {
        return "Joven";
    }
    else if (edad > 30 && edad <= 50) {
        return "Adulto";
    }
    else {
        return "Adulto mayor";
    }
}
const persona1 = new Persona("Carlos", new Date(1990, 5, 15));
const edadPersona1 = calcularEdad(persona1.Fecha_de_nacimiento);
const estadoPersona1 = determinarEstado(edadPersona1);
console.log(`La edad de ${persona1.Nombre} es ${edadPersona1} años y su estado es: ${estadoPersona1}.`);
const persona2 = new Persona("María", new Date(2007, 12, 6));
const edadPersona2 = calcularEdad(persona2.Fecha_de_nacimiento);
const estadoPersona2 = determinarEstado(edadPersona2);
console.log(`La edad de ${persona2.Nombre} es ${edadPersona2} años y su estado es: ${estadoPersona2}.`);
//# sourceMappingURL=index.js.map