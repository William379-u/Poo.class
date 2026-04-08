"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Personaje {
    constructor(nickName, salud = 100) {
        this.nickName = nickName;
        this.salud = salud;
    }
    recibirDanio(puntos) {
        this.salud = Math.max(0, this.salud - puntos);
        console.log(`[Daño -${puntos}%] ${this.nickName} ahora tiene ${this.salud}% de vida.`);
    }
    recuperarVida(puntos) {
        this.salud += puntos;
        console.log(`[Cura +${puntos}%] ${this.nickName} ahora tiene ${this.salud}% de vida.`);
    }
    get vidaActual() {
        return this.salud;
    }
}
class Mundo1 extends Personaje {
    constructor(nickName, saludInicial = 100) {
        super(nickName, saludInicial);
    }
    aventura() {
        console.log("Una nueva Chepe aventura");
        this.recibirDanio(30);
    }
    acuatico() {
        console.log("Mundo BobEsponja");
        this.recibirDanio(50);
        this.recuperarVida(10);
    }
    endgame() {
        console.log("Aprender a bailar con el jefe final");
        this.recibirDanio(50);
    }
}
const jugador1 = new Mundo1('Chepe', 100);
jugador1.aventura();
jugador1.acuatico();
jugador1.endgame();
//# sourceMappingURL=Videojuego.js.map