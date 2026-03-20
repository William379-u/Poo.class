abstract class Pago{
    total:string;
    constructor(total:string){
        this.total=total;
    }
    abstract procesarPago(a:string): void;
}

class Fichero extends Pago{
    procesarPago(efectivo:string): void {
        const cantidadEfectivo = parseFloat(efectivo)-parseFloat(this.total);
        console.log(`El usuario solto la cantidad de $${cantidadEfectivo} en fichitas`);
    }
}

class Tarjetaso extends Pago{
    procesarPago(saldo:string): void {
        if(saldo >= this.total){
            const cantidadTarjeta = parseFloat(saldo)-parseFloat(this.total);
            console.log(`El usuario es tan fino que pago la cantidad de $${cantidadTarjeta} con tarjeta de crédito`);
        }
    }
}

class Transferencia extends Pago{
    procesarPago(transferencia:string): void {
        const cantidadTransferencia = parseFloat(transferencia)-parseFloat(this.total);
        console.log(`El usuario te transfirio una cantidad de $${cantidadTransferencia} mediante una transferencia Banca en linea`);
    }
}

const efectivo = new Fichero("150");
const tarjeta = new Tarjetaso("200");
const transferencia = new Transferencia("300");
efectivo.procesarPago("250");
tarjeta.procesarPago("250");
transferencia.procesarPago("350");