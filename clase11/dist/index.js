import * as readline from "readline";
class Programa {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar() {
        this.pedirNumero();
    }
    pedirNumero() {
        this.rl.question("Ingrese un número: ", (respuesta) => {
            const numero = Number(respuesta);
            this.evaluarNumero(numero);
            this.cerrar();
        });
    }
    evaluarparaoinpar(numero) {
        if (numero % 2 === 0) {
            console.log("El número es par.");
        }
        else {
            console.log("El número es impar.");
        }
    }
    evaluarNumero(numero) {
        if (numero > 10) {
            console.log("El número es mayor que 10.");
        }
        else if (numero === 10) {
            console.log("El número es igual a 10.");
        }
        else {
            console.log("El número es menor que 10.");
        }
    }
    cerrar() {
        this.rl.close();
    }
}
const programa = new Programa();
programa.iniciar();
//# sourceMappingURL=index.js.map