"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class vehiculo {
    constructor(tipo) {
        this.tipo = tipo;
    }
}
class Carro extends vehiculo {
    mover() {
        console.log("El carro avanza a 40 km/h");
    }
}
class Moto extends vehiculo {
    mover() {
        console.log("La moto avanza a 20 km/h");
    }
}
const carrito = new Carro("Mazda");
carrito.mover();
const motito = new Moto("Yamaha");
motito.mover();
//# sourceMappingURL=Vehiculo.js.map