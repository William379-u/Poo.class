"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    constructor(Salario) {
        this.Salario = Salario;
    }
}
class EmpleadoFijo extends Empleado {
    CalcularSalario(a) {
        let sueldo = parseFloat(this.Salario) * parseFloat(a);
        console.log(sueldo);
    }
}
class EmpleadoTemporal extends Empleado {
    CalcularSalario(a) {
        let sueldo = parseFloat(this.Salario) * parseFloat(a);
        console.log(sueldo);
    }
}
const fijo = new EmpleadoFijo("1000");
fijo.CalcularSalario("1.5");
const temporal = new EmpleadoTemporal("1000");
temporal.CalcularSalario("1.2");
//# sourceMappingURL=Empleados.js.map