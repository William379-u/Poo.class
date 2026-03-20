"use strict";
// Crear una clase abstracta llamada Animal con un método abstracto hacerSonido(). El
// programa debe pedir al usuario qué animal desea crear (Perro, Gato o Vaca) utilizando
// readline. Cada clase hija debe implementar el método hacerSonido mostrando el sonido
// correspondiente.
Object.defineProperty(exports, "__esModule", { value: true });
// abstract class Animal {
//     tipo: string;
//     constructor(tipo: string) {
//         this.tipo = tipo;
//     }
//     abstract hacerSonido(): void;
// }
// import * as readline from 'readline';
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// rl.question('Ingresa el tipo de animal: ', (answer) => {
//     let animal: Animal;
//     switch (answer.toLowerCase()) {
//         case 'perro':
//             animal = new Perro("Perro");
//             break;
//         case 'gato':
//             animal = new Gato("Gato");
//             break;
//         case 'vaca':
//             animal = new Vaca("Vaca");
//             break;
//         default:
//             console.log("Animal no reconocido");
//             rl.close();
//             return;
//     }
//     animal.hacerSonido();
//     rl.close();
// });
// class Perro extends Animal {
//     hacerSonido(): void {
//         console.log("El perro hace: ¡Guau!");
//     }
// }
// class Gato extends Animal {
//     hacerSonido(): void {
//         console.log("El gato hace: ¡Miau!");
//     }
// }
// class Vaca extends Animal {
//     hacerSonido(): void {
//         console.log("La vaca hace: ¡Muu!");
//     }
// }   
//# sourceMappingURL=Animales.js.map