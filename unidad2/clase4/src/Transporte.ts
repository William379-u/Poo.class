abstract class Transporte {
    protected distancia: number;

    constructor(distancia: number) {
        this.distancia = distancia;
    }

    abstract calcularCosto(): void;
}

class Taxi extends Transporte {
    private tarifaPorKm = 0.50;

    calcularCosto(): void {
        const total = this.distancia * this.tarifaPorKm;
        console.log(`Irte en Taxi: $${total.toFixed(2)} por ${this.distancia}km`);
    }
}

class Autobus extends Transporte {
    private tarifaFija = 0.25;

    calcularCosto(): void {
        console.log(`Irte en Autobús: $${this.tarifaFija.toFixed(2)} (Tarifa única)`);
    }
}

class Uber extends Transporte {
    private tarifaBase = 1.00;
    private tarifaPorKm = 0.70;

    calcularCosto(): void {
        const total = this.tarifaBase + (this.distancia * this.tarifaPorKm);
        console.log(`Irte en Uber: $${total.toFixed(2)} por ${this.distancia}km`);
    }
}

const distanciaRecorrida = 10;

const viajes: Transporte[] = [
    new Taxi(distanciaRecorrida),
    new Autobus(distanciaRecorrida),
    new Uber(distanciaRecorrida)
];

viajes.forEach(transporte => {
    transporte.calcularCosto();
});