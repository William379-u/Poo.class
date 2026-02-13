"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
const u = new Usuario("Juan");
console.log(u.nombre);
class Usuario2 {
    constructor(password) {
        this.password = password;
    }
    validar(pass) {
        return this.password === pass;
    }
}
const u2 = new Usuario2("1234");
console.log(u2.validar("1234"));
//# sourceMappingURL=index.js.map