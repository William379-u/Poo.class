export class Empleado {
    constructor(nombre, genero, edad, numeroEmpleado) {
        this.nombre = nombre;
        this.genero = genero;
        this.edad = edad;
        this.numeroEmpleado = numeroEmpleado;
    }
    trabajar() {
        console.log('El empleado trabaja');
    }
    ValidarDatos(nombre, genero, edad, numeroEmpleado) {
        if (nombre.trim().length < 3)
            throw new Error('El nombre tiene que tener al enos 3 caractere');
        if (genero !== 'F' && genero !== 'M')
            throw new Error('EL genero dee ser M o F');
        if (edad < 10)
            throw new Error('El empleado debe ser mayor de edad');
        if (numeroEmpleado < 10000000)
            throw new Error('El numero de empleado debe ser mayor a 10000000');
    }
}
export class EmpleadoTiempoCompleto extends Empleado {
    constructor(nombre, genero, edad, numeroEmpleado, salarioBase) {
        super(nombre, genero, edad, numeroEmpleado);
        this.validarSalarioBase(salarioBase);
        this.salarioBase = salarioBase;
    }
    validarSalarioBase(salarioBase) {
        if (salarioBase < 0) {
            throw new Error("El salario base no puede ser negativo.");
        }
    }
    calcularSalario() {
        return this.salarioBase;
    }
}
export class EmpleadoPorHoras extends Empleado {
    constructor(nombre, genero, edad, numeroEmpleado, horasTrabajadas, tarifaPorHora) {
        super(nombre, genero, edad, numeroEmpleado);
        this.validarHorasTrabajadas(horasTrabajadas);
        this.validarTarifaPorHora(tarifaPorHora);
        this.horasTrabajadas = horasTrabajadas;
        this.tarifaPorHora = tarifaPorHora;
    }
    validarHorasTrabajadas(horasTrabajadas) {
        if (horasTrabajadas < 0) {
            throw new Error("Las horas trabajadas no pueden ser negativas.");
        }
    }
    validarTarifaPorHora(tarifaPorHora) {
        if (tarifaPorHora <= 0) {
            throw new Error("La tarifa por hora debe ser mayor que 0.");
        }
    }
    calcularSalario() {
        return this.horasTrabajadas * this.tarifaPorHora;
    }
}
//# sourceMappingURL=empleado.js.map