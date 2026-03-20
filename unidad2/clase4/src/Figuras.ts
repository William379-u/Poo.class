// import { parse } from "node:path";

abstract class Figura {
abstract area(a: string, b: string): void;
}
class Renctangulo extends Figura {
    area(base:string, altura:string): void {
        const area = parseFloat(base) * parseFloat(altura);
        console.log(area);
    }
}
class Circulo extends Figura {
    area(pi:string, r:string): void {
        const area = parseFloat(pi)*parseFloat(r)*parseFloat(r);
        console.log(area);
    }
}

class Cuadrado extends Figura {
    area(l:string): void {
        const area = parseFloat(l)*parseFloat(l);
        console.log(area);
    }
}

const rectangulo = new Renctangulo();
rectangulo.area("5", "10");

const circulo = new Circulo();
circulo.area("3.14", "5");

const cuadrado = new Cuadrado();
cuadrado.area("5");