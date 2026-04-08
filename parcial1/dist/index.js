"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Cliente {
    constructor(nombre, edad, estado, sueldo) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.estado = estado.toLowerCase();
        this.sueldo = parseFloat(sueldo);
    }
}
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function question(query) {
    return new Promise(resolve => rl.question(query, resolve));
}
function evaluar() {
    return __awaiter(this, void 0, void 0, function* () {
        // Entradas rápidas
        const nombre = yield question("Nombre:");
        const edad = yield question("Edad:");
        const estado = yield question("Estado (soltero/casado/viudo):");
        const sueldo = yield question("Sueldo:");
        const c = new Cliente(nombre, edad, estado, sueldo);
        let prestamo = 0;
        // Lógica de la tabla
        if (c.estado === 'casado' && c.edad > 32 && c.sueldo >= 601 && c.sueldo <= 1000)
            prestamo = 3000;
        else if (c.estado === 'casado' && c.edad > 22 && c.sueldo >= 450 && c.sueldo <= 600)
            prestamo = 2000;
        else if (c.estado === 'soltero' && c.edad > 30 && c.sueldo >= 601 && c.sueldo <= 1000)
            prestamo = 3500;
        else if (c.estado === 'soltero' && c.edad > 22 && c.sueldo >= 400 && c.sueldo <= 600)
            prestamo = 2500;
        else if (c.estado === 'viudo' && c.edad > 35 && c.sueldo >= 600 && c.sueldo <= 1500)
            prestamo = 4000;
        console.log(`${c.nombre}, ${c.estado} de ${c.edad} años con sueldo de $${c.sueldo}`);
        console.log(prestamo > 0 ? `Préstamo permitido: $${prestamo}` : "No aplica");
        rl.close();
    });
}
evaluar();
//# sourceMappingURL=index.js.map