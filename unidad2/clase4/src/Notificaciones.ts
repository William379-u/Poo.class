abstract class Notificacion {
    protected destinatario: string;

    constructor(destinatario: string) {
        this.destinatario = destinatario;
    }

    abstract enviar(): void;
}

class Email extends Notificacion {
    enviar(): void {
        console.log(`Enviando Email a [${this.destinatario}]: "¡Que ondas mi brot! Tienes un nuevo correo."`);
    }
}

class SMS extends Notificacion {
    enviar(): void {
        console.log(`Enviando SMS al número [${this.destinatario}]: "Tu código de verificación es 9874."`);
    }
}

class WhatsApp extends Notificacion {
    enviar(): void {
        console.log(`Enviando WhatsApp a [${this.destinatario}]: "Ya se entrego el mensaje, problema tuyo si no te responde."`);
    }
}

const listaNotificaciones: Notificacion[] = [
    new Email("usuario@ejemplo.com"),
    new SMS("+541122334455"),
    new WhatsApp("+50377889900"),
    new Email("soporte@empresa.com")
];

console.log("--- Iniciando envío masivo ---");

listaNotificaciones.forEach(notif => {
    notif.enviar();
});

