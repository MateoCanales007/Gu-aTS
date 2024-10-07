var Cuenta = /** @class */ (function () {
    function Cuenta(nombre, cantidad, tipoCuenta, numeroCuenta) {
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.tipoCuenta = tipoCuenta;
        this.numeroCuenta = numeroCuenta;
    }
    Cuenta.prototype.depositar = function (monto) {
        if (monto < 5) {
            console.log("El valor a depositar debe ser mayor a $5.00");
        }
        else {
            this.cantidad += monto;
            console.log("Se ha depositado correctamente $".concat(monto.toFixed(2)));
        }
    };
    Cuenta.prototype.retirar = function (valor) {
        if (this.cantidad < 5) {
            console.log("No hay suficiente efectivo en la cuenta");
        }
        else if (valor < 5) {
            console.log("El valor a retirar debe ser mayor a $5.00");
        }
        else if (valor > this.cantidad) {
            console.log("No hay suficiente saldo para realizar este retiro");
        }
        else {
            this.cantidad -= valor;
            console.log("Ha retirado $".concat(valor.toFixed(2), ". Su nuevo saldo es $").concat(this.cantidad.toFixed(2)));
        }
    };
    Cuenta.prototype.mostrarDatos = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Tipo de cuenta: ".concat(this.tipoCuenta));
        console.log("N\u00FAmero de cuenta: ".concat(this.numeroCuenta));
        console.log("Saldo: $".concat(this.cantidad.toFixed(2)));
    };
    return Cuenta;
}());
/* Uso, cambiar el numero de dolares en el console y en los métodos */
var miCuenta = new Cuenta("Mateo Canales", 1000, "Ahorro", "123456789");
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
