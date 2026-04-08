abstract class Personaje {
  constructor(public nickName: string, private salud: number = 100) {}

  protected recibirDanio(puntos: number): void {
    this.salud = Math.max(0, this.salud - puntos);
    console.log(`[Daño -${puntos}%] ${this.nickName} ahora tiene ${this.salud}% de vida.`);
  }

  protected recuperarVida(puntos: number): void {
    this.salud += puntos;
    console.log(`[Cura +${puntos}%] ${this.nickName} ahora tiene ${this.salud}% de vida.`);
  }

  get vidaActual(): number {
    return this.salud;
  }
}

class Mundo1 extends Personaje {
  constructor(nickName: string, saludInicial: number = 100) {
    super(nickName, saludInicial);
  }

  aventura(): void {
    console.log("Una nueva Chepe aventura");
    this.recibirDanio(30);
  }

  acuatico(): void {
    console.log("Mundo BobEsponja");
    this.recibirDanio(50);
    this.recuperarVida(10);
  }

  endgame(): void {
    console.log("Aprender a bailar con el jefe final");
    this.recibirDanio(50);
  }
}

const jugador1 = new Mundo1('Chepe',100);

jugador1.aventura();  
jugador1.acuatico();  
jugador1.endgame();   