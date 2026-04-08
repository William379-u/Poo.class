// class CuentaBancaria{
//     public titular: string;
//     private saldo: number;

//     constructor(titular: string, saldo: number){
//         this.titular = titular;
//         this.saldo = saldo;
//     }

// getSaldo(usuario: {nombre: string, role: string}){
//     if (usuario.role =="Cliente"){
//         throw new Error(`Los clientes no pueden modificar el saldo`)
//     }
//     return this.saldo
// }

// setSaldo(
//     usuario: {nombre: string, role: string},
//     saldo: number
// ) {
//     if (usuario.role =="Cliente"){
//         throw new Error(`Los clientes no pueden ver el saldo.`)
//     }

//     if (saldo <= 0){
//         throw new Error(`El saldo no puede ser menor a 0`)
//     }
//     this.saldo +- saldo;
//     }
// }

// const usuarioAdmin = {
//     nombre: "admin",
//     role: "admin"
// }
// const usuario = {
//     nombre: "usuario",
//     role: "cliente"
// }

// const CuentaAhorro = new CuentaBancaria("Juancho", 125)
// console.log(CuentaAhorro.titular);
// console.log(CuentaAhorro.getSaldo(usuarioAdmin));
// CuentaAhorro.setSaldo(usuarioAdmin, 100);
// console.log(CuentaAhorro.getSaldo(usuario));

class producto {
    nombre: string;
    precio: number;
    private stock: number;

    constructor(nombre: string, precio: number, stock: number){
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

getStock(usuario: {nombre: string, precio: number, role: string}){
    if (usuario.role == "Cliente"){
        throw new Error(`Los clientes no pueden modificar el precio`)
    }
    return this.precio
}

setStock(
usuario: {nombre: string, precio: number, role: string},
stock: number
){
    if (usuario.role == "Cliente"){
        throw new Error(`Los clientes no pueden ver el stock`)
    }
    this.precio +- this.precio;
}
}