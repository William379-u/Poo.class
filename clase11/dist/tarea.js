// //ejercicio 1:
// import * as readline from "readline";
// class Estudiante {
//  private rl: readline.Interface;
//  constructor() {
//     this.rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout
//     });
//  }
//  iniciar(): void {
//     this.pedirNota();
//  }
//  pedirNota(): void {
//     this.rl.question("Ingrese su nota: ", (respuesta: string) => {
//         const numero = Number(respuesta);
//         this.evaluarNota(numero);
//         this.cerrar();
//     });
//  }
//  evaluarNota(nota: number): void {
//     if (nota >= 9 && nota <= 10) {
//         console.log("Excelente");
//     } else if (nota >= 7 && nota <= 8.9) {
//         console.log("Bueno");
//     } else if (nota >= 6 && nota <= 6.9){
//         console.log("Regular");
//     }if (nota < 6){
//         console.log("Reprobado");
//     }
//     }
//     cerrar(): void {    
//     this.rl.close();
//  }
// }
// const estudiante = new Estudiante();
// estudiante.iniciar();
//ejercicio 2: 2. Desarrollar un sistema de autenticación que valide usuario, contraseña.
// Si el login es correcto, mostrar el rol al que pertenece el usuario:
// • 1 = Administrador
// • 2 = Cliente
// • 3 =1 Invitado
// Si el usuario no existe, mostrar mensaje de usuario incorrecto.
import readline from "readline";
class Trabajador {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }
    iniciar() {
        this.pedirDatos();
    }
    pedirDatos() {
        this.rl.question("Ingrese el usuario: ", (user) => {
            this.rl.question('Ingrese la contraseña: ', (password) => {
                this.rl.question('Ingrese el número que corresponda a su rol (1 = Administrador, 2 = Cliente, 3 = Inivitado): ', (rol) => {
                    const numeroRol = Number(rol);
                    this.validarDatos(user, password, numeroRol);
                });
            });
        });
    }
    validarDatos(user, password, rol) {
        if (user !== 'Chepe') {
            console.log('Usuario incorrecto');
            return this.cerrar();
        }
        if (password !== '1234') {
            console.log('Contraseña incorrecta');
            return this.cerrar();
        }
        if (rol === 1) {
            console.log('Es adminin');
        }
        else if (rol === 2) {
            console.log('Es un cliente');
        }
        else if (rol === 3) {
            console.log('Es un invitado');
        }
        else {
            console.log(' Usuario no existente');
        }
        this.cerrar();
    }
    cerrar() {
        this.rl.close();
    }
}
const usuario = new Trabajador();
usuario.iniciar();
//# sourceMappingURL=tarea.js.map