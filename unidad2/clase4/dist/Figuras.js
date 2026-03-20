"use strict";
// import { parse } from "node:path";
Object.defineProperty(exports, "__esModule", { value: true });
class Figura {
}
class Renctangulo extends Figura {
    area(base, altura) {
        const area = parseFloat(base) * parseFloat(altura);
        console.log(area);
    }
}
class Circulo extends Figura {
    area(pi, r) {
        const area = parseFloat(pi) * parseFloat(r) * parseFloat(r);
        console.log(area);
    }
}
class Cuadrado extends Figura {
    area(l) {
        const area = parseFloat(l) * parseFloat(l);
        console.log(area);
    }
}
const rectangulo = new Renctangulo();
rectangulo.area("5", "10");
const circulo = new Circulo();
circulo.area("3.14", "5");
const cuadrado = new Cuadrado();
cuadrado.area("5");
//# sourceMappingURL=Figuras.js.map