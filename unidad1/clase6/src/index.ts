class Usuario {
    public nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }
}

const u = new Usuario("Juan");
console.log(u.nombre);

class Usuario2 {
    private password: string;

    constructor(password: string){
        this.password = password;
    }


validar(pass: string): boolean {
    return this.password === pass;
}
}

const u2 = new Usuario2("1234");
console.log(u2.validar("1234"));