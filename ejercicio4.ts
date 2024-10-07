class Cuenta {
    constructor(
        private nombre: string,
        private cantidad: number,
        private tipoCuenta: string,
        private numeroCuenta: string
    ) { }

    depositar(monto: number): void {
        if (monto < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        } else {
            this.cantidad += monto;
            console.log(`Se ha depositado correctamente $${monto.toFixed(2)}`);
        }
    }

    retirar(valor: number): void {
        if (this.cantidad < 5) {
            console.log("No hay suficiente efectivo en la cuenta");
        } else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        } else if (valor > this.cantidad) {
            console.log("No hay suficiente saldo para realizar este retiro");
        } else {
            this.cantidad -= valor;
            console.log(`Ha retirado $${valor.toFixed(2)}. Su nuevo saldo es $${this.cantidad.toFixed(2)}`);
        }
    }

    mostrarDatos(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Tipo de cuenta: ${this.tipoCuenta}`);
        console.log(`Número de cuenta: ${this.numeroCuenta}`);
        console.log(`Saldo: $${this.cantidad.toFixed(2)}`);
    }
}

/* Uso, cambiar el numero de dolares en el console y en los métodos */
const miCuenta = new Cuenta("Mateo Canales", 1000, "Ahorro", "123456789");

console.log("Datos de la cuenta:");
miCuenta.mostrarDatos();

console.log("\nIntentando depositar $3:");
miCuenta.depositar(3);

console.log("\nDepositando $50:");
miCuenta.depositar(50);

console.log("\nIntentando retirar $3:");
miCuenta.retirar(3);

console.log("\nRetirando $100:");
miCuenta.retirar(100);

console.log("\nIntentando retirar más de lo que hay en la cuenta:");
miCuenta.retirar(2000);

console.log("\nVaciando la cuenta:");
miCuenta.retirar(950);

console.log("\nIntentando retirar de una cuenta vacía:");
miCuenta.retirar(10);