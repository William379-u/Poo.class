"use strict";
// class POO {
// codigo: string;
// nombre: string
// edad: number;
// laboratorio: number;
// parcial: number;
Object.defineProperty(exports, "__esModule", { value: true });
// constructor(codigo: string, nombre: string, edad: number, laboratorio: number, parcial: number){
//     this.codigo = codigo;
//     this.nombre = nombre;
//     this.edad = edad;
//     this.laboratorio = laboratorio;
//     this.parcial = parcial;
// }
// public mostrarDatos(): void{
//     console.log("El estudiante: "+this.nombre);
//     console.log("Codigo: "+this.codigo);
//     console.log("Tiene las siguientes notas - Laboratorios: "+this.laboratorio+" Parcial: "+this.parcial)
// }
// public mostrarNotas(): void{
//     console.log("Lab: "+this.laboratorio+" Parcial "+this.parcial);
// }
// }
class Redes {
    constructor(Nombre, Codigo, Laboratorio1, Laboratorio2, Laboratorio3, Parcial1, Parcial2, Parcial3) {
        this.Nombre = Nombre;
        this.Codigo = Codigo;
        this.Laboratorio1 = Laboratorio1;
        this.Laboratorio2 = Laboratorio2;
        this.Laboratorio3 = Laboratorio3;
        this.Parcial1 = Parcial1;
        this.Parcial2 = Parcial2;
        this.Parcial3 = Parcial3;
    }
    mostrar() {
        let prom1 = ((this.Laboratorio1 * 0.60) + (this.Parcial1 * 0.40)) / 3;
        let prom2 = ((this.Laboratorio2 * 0.60) + (this.Parcial2 * 0.40)) / 3;
        let prom3 = ((this.Laboratorio3 * 0.60) + (this.Parcial3 * 0.40)) / 3;
        let notaFinal = prom1 + prom2 + prom3;
        console.log("El estudiante: " + this.Nombre + "Su nota final es: " + notaFinal);
    }
}
// //objeto instanciado a POO
// let estudiante1 = new POO("u20250468","William José Martínez canales", 18,8,8);
// estudiante1.mostrarDatos();
// estudiante1.mostrarNotas();
//objeto instanciado a Redes
let estudiante2 = new Redes("William José Martínez canales", "u20250468", 8, 8, 8, 6, 7, 8);
estudiante2.mostrar();
//# sourceMappingURL=index.js.map