abstract class Persona {
    constructor(
        public nombre: string,
        public apellido: string,
        public direccion: string,
        public telefono: string,
        public edad: number
    ) { }

    verificarMayoriaEdad(): void {
        if (this.edad >= 18) {
            console.log(`${this.nombre} ${this.apellido} es mayor de edad.`);
        } else {
            console.log(`${this.nombre} ${this.apellido} es menor de edad.`);
        }
    }

    abstract mostrarDatosPersonales(): void;
}

class Empleado extends Persona {
    private sueldo: number = 0;

    constructor(
        nombre: string,
        apellido: string,
        direccion: string,
        telefono: string,
        edad: number
    ) {
        super(nombre, apellido, direccion, telefono, edad);
    }

    cargarSueldo(sueldo: number): void {
        this.sueldo = sueldo;
        console.log(`Sueldo cargado: $${this.sueldo.toFixed(2)}`);
    }

    imprimirSueldo(): void {
        console.log(`Sueldo actual: $${this.sueldo.toFixed(2)}`);
    }

    mostrarDatosPersonales(): void {
        console.log("Datos del empleado:");
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Apellido: ${this.apellido}`);
        console.log(`Dirección: ${this.direccion}`);
        console.log(`Teléfono: ${this.telefono}`);
        console.log(`Edad: ${this.edad}`);
        this.imprimirSueldo();
    }
}

/* Ejemplo de uso */
const empleado = new Empleado("Mateo", "Canales", "Calle Principal 123", "5678-1234", 19);

empleado.verificarMayoriaEdad();
empleado.cargarSueldo(800);
empleado.mostrarDatosPersonales();