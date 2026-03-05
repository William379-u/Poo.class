//Ejercicio1
class Animal {
 constructor(
 public nombre: string,
 public categoria: string,
 public raza: string,
 ) {}

mostrar() {
 console.log(
 `El animal es un ${this.categoria}. Su nombre es ${this.nombre}. La raza es ${this.raza}.`,
);
}}

class Encargado extends Animal {
 constructor(
 public nombre: string,
 public categoria: string,
 public raza: string,
 public dueño: string,
 ) {
 super(nombre, categoria, raza);
 }
}
class Venta extends Animal{
 constructor(
 public nombre: string,
 public categoria: string,
 public raza: string,
 public dueño: string,
 public venta: string,
){
super(nombre, categoria, raza,);
}
}

const ob = new Encargado('killer','perro', 'pitubull', 'chepe' )
ob.mostrar()

//Ejercicio2

