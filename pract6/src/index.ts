abstract class Suscripcion {
    private precioBase: number;
    constructor(){
        this.precioBase = 8;
    }

    getPrecioBase(): number {
        return this.precioBase;
    }
abstract CalcularCosto(): number;
abstract MostrarBeneficios(): void;
}

class SuscripcionBasica extends Suscripcion {
    constructor(){
        super();
    }
    CalcularCosto(): number {
        return this.getPrecioBase() * 0.8; 
    }
    MostrarBeneficios(): void {
        console.log("Beneficios de la suscripción básica: No incluye anuncios :) ");
    }

}
class SuscripcionPremium extends Suscripcion {
    constructor(){
        super();
    }
    CalcularCosto(): number {
        return this.getPrecioBase() * 1.5;
    }
    MostrarBeneficios(): void {
        console.log("Beneficios de la suscripción premium: No incluye anuncios, acceso a contenido exclusivo y calidad de video mejorada.");

        }
    }
class Usuario {
    nombre: string;
    private suscripcion: Array<Suscripcion>
    constructor(nombre: string) {
        this.nombre = nombre
        this.suscripcion = []
    }

    asignarSuscripcion(suscripcion: Suscripcion): void {
    this.suscripcion.push(suscripcion)
    console.log(`Costo de la suscripción asignada a ${this.nombre}: $${suscripcion.CalcularCosto()}`)

}

    mostrarEstado(): void {
    this.suscripcion.forEach(s => {
        s.CalcularCosto()
        s.MostrarBeneficios()
    })
}
}
    
const usuario1 = new Usuario("Juan");
const suscripcionPremium = new SuscripcionPremium();
usuario1.asignarSuscripcion(suscripcionPremium);
usuario1.mostrarEstado();

const usuario2 = new Usuario("Maria");
const suscripcionBasica = new SuscripcionBasica();
usuario2.asignarSuscripcion(suscripcionBasica);
usuario2.mostrarEstado();

    
    














