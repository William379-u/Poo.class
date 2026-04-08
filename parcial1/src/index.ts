class Cliente {
    nombre: string;
    edad: number;
    estado: string;
    sueldo: number;

    constructor(nombre: string, edad: string, estado: string, sueldo: string) {
        this.nombre = nombre;
        this.edad = parseInt(edad);
        this.estado = estado.toLowerCase();
        this.sueldo = parseFloat(sueldo);
    }
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(query: string): Promise<string> {
    return new Promise(resolve => rl.question(query, resolve));
}

async function evaluar() {
    // Entradas rápidas
    const nombre = await question("Nombre:");
    const edad = await question("Edad:");
    const estado = await question("Estado (soltero/casado/viudo):");
    const sueldo = await question("Sueldo:");

    const c = new Cliente(nombre, edad, estado, sueldo);
    let prestamo = 0;

    // Lógica de la tabla
    if (c.estado === 'casado' && c.edad > 32 && c.sueldo >= 601 && c.sueldo <= 1000) prestamo = 3000;
    else if (c.estado === 'casado' && c.edad > 22 && c.sueldo >= 450 && c.sueldo <= 600) prestamo = 2000;
    else if (c.estado === 'soltero' && c.edad > 30 && c.sueldo >= 601 && c.sueldo <= 1000) prestamo = 3500;
    else if (c.estado === 'soltero' && c.edad > 22 && c.sueldo >= 400 && c.sueldo <= 600) prestamo = 2500;
    else if (c.estado === 'viudo' && c.edad > 35 && c.sueldo >= 600 && c.sueldo <= 1500) prestamo = 4000;

    console.log(`${c.nombre}, ${c.estado} de ${c.edad} años con sueldo de $${c.sueldo}`);
    console.log(prestamo > 0 ? `Préstamo permitido: $${prestamo}` : "No aplica");

    rl.close();
}

evaluar();