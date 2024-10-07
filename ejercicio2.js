var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    Calculadora.prototype.dividir = function (a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
            console.error();
        }
        return a / b;
    };
    Calculadora.prototype.potencia = function (base, exponente) {
        return Math.pow(base, exponente);
    };
    Calculadora.prototype.factorial = function (n) {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos");
            console.error();
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        var resultado = 1;
        for (var i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    };
    return Calculadora;
}());
/* uso */
var calc = new Calculadora();
console.log("Suma: ", calc.sumar(5, 3));
console.log("Resta: ", calc.restar(10, 4));
console.log("Multiplicación: ", calc.multiplicar(6, 7));
console.log("División: ", calc.dividir(20, 5));
console.log("Potencia: ", calc.potencia(2, 3));
console.log("Factorial: ", calc.factorial(5));
