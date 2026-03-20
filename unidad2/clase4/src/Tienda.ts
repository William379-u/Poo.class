abstract class Producto {
    protected nombre: string;
    protected precioBase: number;

    constructor(nombre: string, precioBase: number) {
        this.nombre = nombre;
        this.precioBase = precioBase;
    }

    abstract calcularPrecioFinal(): number;
    abstract mostrarInformacion(): void;
}

class Electronico extends Producto {
    private impuestoIVA = 0.13;

    calcularPrecioFinal(): number {
        return this.precioBase + (this.precioBase * this.impuestoIVA);
    }

    mostrarInformacion(): void {
        console.log(`Electrónico ${this.nombre} - Precio Base: $${this.precioBase} | Total con IVA: $${this.calcularPrecioFinal().toFixed(2)}`);
    }
}

class Ropa extends Producto {
    private descuentoRopa = 0.15;

    calcularPrecioFinal(): number {
        return this.precioBase - (this.precioBase * this.descuentoRopa);
    }

    mostrarInformacion(): void {
        console.log(`Ropa ${this.nombre} - Precio Base: $${this.precioBase} | Total con Descuento (15%): $${this.calcularPrecioFinal().toFixed(2)}`);
    }
}

class Alimento extends Producto {
    calcularPrecioFinal(): number {
        return this.precioBase;
    }

    mostrarInformacion(): void {
        console.log(`Alimento ${this.nombre} - Precio Final: $${this.calcularPrecioFinal().toFixed(2)} (Sin impuestos)`);
    }
}

const inventario: Producto[] = [
    new Electronico("Laptop Gamer para estudios", 1200),
    new Ropa("Chaqueta de Cuero para tirar flow bien facha", 80),
    new Alimento("Canasta Básica para los basicos :V", 45),
    new Electronico("Un chaifon 14+", 500)
];

console.log("--- Inventario de la Tienda ---");

inventario.forEach(producto => {
    producto.mostrarInformacion();
});