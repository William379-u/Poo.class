class Banco {
    cliente: string;
    protected saldo: number; 
    
    constructor(cliente: string, saldo: number){
        this.cliente = cliente;
        this.saldo = saldo;
    }
    get Nuevosaldo():number{
        return this.saldo;
    }

    set Nuevosaldo(valor:number){
        if(valor >=0)
        this.saldo= valor;
        else
            console.log("El valor debe ser cero o mayor a cero")
    }

    mostrar(): void{
        console.log(" Saldo: "+ this.saldo)
    }

}
class movimientos extends Banco {
    deposito: number;
    constructor(nombre:string, saldo:number, deposito:number){
        super(nombre, saldo) //
        this.deposito=deposito;
    }

    procesodeposito(): void{
        const nuevomonto= this.Nuevosaldo+this.deposito;
        console.log("Nuevo Saldo $"+nuevomonto);
        this.comision(nuevomonto);
    }

    comision(nuevomonto:number){
        let salida = nuevomonto-1;
        console.log("Te cobre por la transfer nuevo saldo $"+salida)
    
    }
}

let Movimientos = new movimientos(`Ortiz`,200, 25)
Movimientos.procesodeposito()

   // procesodeposito():void{
    //     if(this.deposito > 0){
    //         this.saldo += this.deposito
    //         console.log(this.saldo)
    //     }else{
    //         console.log(`Ingrese un valor valido para el deposito`)
    //     } 
    // }