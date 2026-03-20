"use strict";
// Crear una clase abstracta llamada Animal con un método abstracto hacerSonido(). El
// programa debe pedir al usuario qué animal desea crear (Perro, Gato o Vaca) utilizando
// readline. Cada clase hija debe implementar el método hacerSonido mostrando el sonido
// correspondiente.
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(tipo) {
        this.tipo = tipo;
    }
}
console.log("¿Qué animal deseas crear? (Perro, Gato o Vaca)");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Ingresa el tipo de animal: ', (answer) => {
    let animal;
    switch (answer.toLowerCase()) {
        case 'perro':
            animal = new Perro("Perro");
            break;
        case 'gato':
            animal = new Gato("Gato");
            break;
        case 'vaca':
            animal = new Vaca("Vaca");
            break;
        default:
            console.log("Animal no reconocido");
            rl.close();
            return;
    }
    animal.hacerSonido();
    rl.close();
});
class Perro extends Animal {
    hacerSonido() {
        console.log("El perro hace: ¡Guau!");
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log("El gato hace: ¡Miau!");
    }
}
class Vaca extends Animal {
    hacerSonido() {
        console.log("La vaca hace: ¡Muu!");
    }
}
//# sourceMappingURL=Tarea.js.map