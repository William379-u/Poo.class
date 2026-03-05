"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ejercicio 1:
class GYM {
    constructor(peso, altura) {
        this.peso = peso;
        this.altura = altura;
    }
    IMC() {
        let estado;
        let imc = (this.peso / (this.altura * this.altura));
        if (imc < 18.5) {
            estado = "Bajo peso";
        }
        else if (imc >= 18.5 && imc < 24.99) {
            estado = "Normal";
        }
        else if (imc >= 25 && imc < 29.99) {
            estado = "Sobrepeso";
        }
        else {
            estado = "Obesidad";
        }
        console.log("El IMC es de: " + imc + " y su estado es: " + estado);
        //Interpretacion (Adultos):
        //    Bajo peso: Menos 18.5.
        //      Normal: 18.5 - 24.9.
        //      sobrepeso: 25 - 29.9.
        //      Obesidad: 30 o más.
    }
}
let cliente = new GYM(105, 1.76);
cliente.IMC();
// Ejercicio 2:
class conversor {
    constructor(temp) {
        this.temp = temp;
    }
    FC() {
        let resultado = (this.temp - 32) / 1.8;
        console.log(resultado.toFixed(2));
    }
    CF() {
        let resultado = (this.temp * 1.8) + 32;
        console.log(resultado.toFixed(2));
    }
    KF() {
        let resultado = (this.temp - 273.15) * 1.8 + 32;
        console.log(resultado.toFixed(2));
    }
    KC() {
        let resultado = this.temp - 273.15;
        console.log(resultado.toFixed(2));
    }
}
let aire = new conversor(45);
aire.FC();
aire.CF();
aire.KF();
aire.KC();
// //Ejercicio 3:
class instituto {
    constructor(nombre, falta) {
        this.nombre = nombre;
        this.falta = falta;
    }
    seleccion() {
        if (this.falta == 1) {
            console.log(this.nombre + this.falta + " Su falta es de $1 por la llegada tardia.");
        }
        else if (this.falta == 2) {
            console.log(this.nombre + this.falta + " Caminar por los pasillos en horas de clase, su falta es de $3.");
        }
        else if (this.falta == 3) {
            console.log(this.nombre + this.falta + " No andar vestimenta apropiada en la instituccioón, su falta es de $5.");
        }
        else if (this.falta == 4) {
            console.log(this.nombre + this.falta + " No hacer un uso adecuado de las instalaciones, su falta es de $10.");
        }
    }
}
let estudiante = new instituto("Juan Perez", 1);
;
estudiante.seleccion();
//# sourceMappingURL=index.js.map