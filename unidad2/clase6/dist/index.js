"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Banco {
    constructor(cliente, saldo) {
        this.cliente = cliente;
        this.saldo = saldo;
    }
    get Nuevosaldo() {
        return this.saldo;
    }
    set Nuevosaldo(valor) {
        if (valor >= 0)
            this.saldo = valor;
        else
            console.log("El valor debe ser cero o mayor a cero");
    }
    mostrar() {
        console.log(" Saldo: " + this.saldo);
    }
}
class movimientos extends Banco {
    constructor(nombre, saldo, deposito) {
        super(nombre, saldo); //
        this.deposito = deposito;
    }
    procesodeposito() {
        const nuevomonto = this.Nuevosaldo + this.deposito;
        console.log("Nuevo Saldo $" + nuevomonto);
        this.comision(nuevomonto);
    }
    comision(nuevomonto) {
        let salida = nuevomonto - 1;
        console.log("Te cobre por la transfer nuevo saldo $" + salida);
    }
}
let Movimientos = new movimientos(`Ortiz`, 200, 25);
Movimientos.procesodeposito();
// procesodeposito():void{
//     if(this.deposito > 0){
//         this.saldo += this.deposito
//         console.log(this.saldo)
//     }else{
//         console.log(`Ingrese un valor valido para el deposito`)
//     } 
// }
//# sourceMappingURL=index.js.map