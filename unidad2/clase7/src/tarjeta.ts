import * as readline from 'node:readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
abstract class Tarjeta {
    protected saldo: number;
    protected puntos: number; 
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
        this.puntos = 0; 
    }

    abstract iniciar(): void;
}

class TarjetaCredito extends Tarjeta {
    constructor() {
        super(3000);
    }

    iniciar(): void {
        console.log(`\n--- Bienvenido ---`);
        console.log(`Saldo inicial: $${this.saldo}`);
        console.log(`Puntos iniciales: ${this.puntos}`);
        this.procesarTransaccion();
    }

    private procesarTransaccion(): void {
        if (this.saldo <= 0) {
            console.log("\nSaldo agotado. Cuenta cerrada.");
            rl.close();
            return;
        }

        rl.question("\nDigite el monto de la transacción (0 para salir): ", (datoMonto) => {
            const monto = parseFloat(datoMonto);

            if (monto === 0) {
                console.log("Operación finalizada por el cliente.");
                rl.close();
                return;
            }

            if (isNaN(monto) || monto < 0) {
                console.log("Ingrese un monto válido.");
                return this.procesarTransaccion();
            }

            if (monto > this.saldo) {
                console.log("Saldo insuficiente para esta transacción.");
                return this.procesarTransaccion();
            }

            console.log("\nSeleccione el POS:");
            console.log("1. BAC");
            console.log("2. Banco Agrícola");
            console.log("3. Otros");
            
            rl.question("Opción: ", (opcion) => {
                let puntosGanados = 0;

                switch (opcion) {
                    case '1': 
                        puntosGanados = monto * 3;
                        break;
                    case '2': 
                        puntosGanados = monto * 5;
                        break;
                    default:
                        puntosGanados = 0;
                        break;
                }

                this.saldo -= monto;
                this.puntos += puntosGanados;

                console.log(`\nTransacción aprobada.`);
                console.log(`Monto: $${monto}`);
                console.log(`Puntos ganados en esta compra: ${puntosGanados}`);
                console.log(`-----------------------------------`);
                console.log(`Saldo restante: $${this.saldo.toFixed(2)}`);
                console.log(`Total puntos acumulados: ${this.puntos}`);
                console.log(`-----------------------------------`);

                this.procesarTransaccion();
            });
        });
    }
}

const tarjeta = new TarjetaCredito();
tarjeta.iniciar();