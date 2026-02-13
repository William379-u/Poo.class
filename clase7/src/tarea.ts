// //Ejercicio1
// class Usuario {
//     public username: string;
//     private password: string;

//     constructor(username: string, password: string){
//         this.username = username;
//         this.password = password;   
//     }

//   login(pass: string): string {
//     if (pass === this.password) {
//       return "Acceso concedido";
//     } else {
//       return "Contraseña incorrecta";
//     }
// }
// }

// const usuario1 = new Usuario("juan", "1234");
// console.log(usuario1.login("123"));


// const usuario2 = new Usuario("pedro", "1234");
// console.log(usuario2.login("1234"));

//Ejercicio2
// class Producto {
//     public nombre: string;
//     private precio: number;

//     constructor(nombre: string, precio: number){
//         this.nombre = nombre;
//         this.precio = precio;   
//     }

//   evaluarPrecio(): string {
//     if (this.precio < 10) {
//       return "Producto barato";
//     } else if (this.precio <= 50) {
//       return "Precio normal";
//     } else {
//       return "Producto caro";
//     }
//   }
// }

// const Producto1 = new Producto("Carne de Bufalo", 20);
// console.log(Producto1.evaluarPrecio());
// const Producto2 = new Producto("Galletas", 5);
// console.log(Producto2.evaluarPrecio());
// const Producto3 = new Producto("Caviar", 100);
// console.log(Producto3.evaluarPrecio());

//Ejercicio3
class Empleado {
public nombre: string;
protected salario: number;

constructor(nombre: string, salario: number){
    this.nombre = nombre;
    this.salario = salario;   
}
}
class Gerente extends Empleado {
  bono(): number {
    if (this.salario > 1000) {
      return this.salario * 0.2;
    } else {
      return this.salario * 0.1;
    }
  }
}
