// Ejercicio 1
let persona = {
    Nombre: "Pedrito",
    Edad: 18,
    Activo: true
}

console.log("Hola soy: " + persona.Nombre);
console.log("Tengo " + persona.Edad + " años");

// Ejercicio 2
let producto: {
    Nombre: string;
    Precio: number; 
    Disponible: boolean;

} = {
Nombre: "Telefono Galaxy A56 5G",
Precio: 369,
Disponible: true
};

console.log("El producto es: " + producto.Nombre);
console.log("El precio es: " + producto.Precio);
console.log("¿Está disponible?: " + producto.Disponible);

// Ejercicio 3

let cuentaBancaria = {
    NombreB: "Cuenta de ahorro",
    Saldo: 1.50,
    Activo: true,
    depositar(): void{
        this.Saldo += 1; 
    },
    retirar(): void{
        this.Saldo -= 1; 
    }
};
console.log("El saldo inicial es: " + cuentaBancaria.Saldo);

cuentaBancaria.retirar();
console.log("El saldo después del retiro es: " + cuentaBancaria.Saldo);

cuentaBancaria.depositar();
console.log("El saldo después del depósito es: " + cuentaBancaria.Saldo);
