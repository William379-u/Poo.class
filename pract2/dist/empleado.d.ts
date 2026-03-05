type generoEmpleado = 'M' | 'F';
export declare class Empleado {
    nombre: string;
    genero: generoEmpleado;
    edad: number;
    numeroEmpleado: number;
    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number);
    trabajar(): void;
    private ValidarDatos;
}
export declare class EmpleadoTiempoCompleto extends Empleado {
    salarioBase: number;
    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number, salarioBase: number);
    private validarSalarioBase;
    calcularSalario(): number;
}
export declare class EmpleadoPorHoras extends Empleado {
    horasTrabajadas: number;
    tarifaPorHora: number;
    constructor(nombre: string, genero: generoEmpleado, edad: number, numeroEmpleado: number, horasTrabajadas: number, tarifaPorHora: number);
    private validarHorasTrabajadas;
    private validarTarifaPorHora;
    calcularSalario(): number;
}
export {};
//# sourceMappingURL=empleado.d.ts.map