"use strict";
// abstract class ProcesadorArchivos{
//     public nombreArchivo: string;
//     public estadoArchivo: string;
Object.defineProperty(exports, "__esModule", { value: true });
//     constructor(nombreArchivo: string, estadoArchivo: string){
//         this.nombreArchivo = nombreArchivo;
//         this.estadoArchivo = estadoArchivo;
//     }
//     abstract convertir(archivo: string): string;
// }
// //convertidor de PNG a JPG
// class ProcesarImagenPNJ extends ProcesadorArchivos{
//     public nombreArchivoImg: string;
//     constructor(nombreArchivo:string, estadoArchivo:string){
//         super(nombreArchivo, estadoArchivo);
//         this.nombreArchivoImg = "";
//         this.validacion(nombreArchivo);
//     }
//     convertir(archivo: string): string {
//         let nombreArchivo: string[] = archivo.split(".");
//         this.nombreArchivoImg = nombreArchivo[0] + ".JPG";
//         return this.nombreArchivoImg;
//     }
//     private validacion(nombreArchivo: string){
//     let formato: string[] = nombreArchivo.split(".");
//     if (formato[-1] === "png" || formato[-1] === "PNG"){
//         throw new Error( "El archivo no es un PNG");
//     }
//    }
//     }
//     const imagenPNG = new ProcesarImagenPNJ("imagen.png", "");
//     console.log(imagenPNG.convertir("captura.png"));
// Se requiere desarrollar un sistema que transforme datos ingresados por el usuario. Cada transformación modifica el valor original de una manera distinta.
class Transformacion {
    constructor(TextoOriginal) {
        this.TextoOriginal = TextoOriginal;
    }
}
//Convertir a mayúsculas
class Mayus extends Transformacion {
    constructor(TextoOriginal) {
        super(TextoOriginal);
        this.TextoMayus = "";
    }
    transformar(texto) {
        this.TextoMayus = texto.toUpperCase();
        return this.TextoMayus;
    }
}
// Convertir a minúsculas
class Minus extends Transformacion {
    constructor(TextoOriginal) {
        super(TextoOriginal);
        this.TextoMinus = "";
    }
    transformar(texto) {
        this.TextoMinus = texto.toLowerCase();
        return this.TextoMinus;
    }
}
const mayusculas = new Mayus("hola mundo");
console.log(mayusculas.transformar("hola mundo"));
const minusculas = new Minus("HOLA MUNDO");
console.log(minusculas.transformar("HOLA MUNDO"));
//# sourceMappingURL=index.js.map