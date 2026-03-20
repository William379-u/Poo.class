abstract class vehiculo {
    tipo: string;
    constructor(tipo: string) {
        this.tipo = tipo;
    }
    abstract mover(): void;
}
class Carro extends vehiculo {
    mover(): void {
        console.log("El carro avanza a 40 km/h");
    }
}
class Moto extends vehiculo {
    mover(): void {
        console.log("La moto avanza a 20 km/h");
    }
}
const carrito = new Carro("Mazda");
carrito.mover();

const motito = new Moto("Yamaha");
motito.mover();