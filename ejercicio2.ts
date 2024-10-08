class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    }

    restar(a: number, b: number): number {
        return a - b;
    }

    multiplicar(a: number, b: number): number {
        return a * b;
    }

    dividir(a: number, b: number): number {
        if (b === 0) {
            throw new Error("No se puede dividir por cero");
            console.error();
        }
        return a / b;
    }

    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }

    factorial(n: number): number {
        if (n < 0) {
            throw new Error("El factorial no está definido para números negativos");
            console.error();
        }
        if (n === 0 || n === 1) {
            return 1;
        }
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

/* uso */
const calc = new Calculadora();

console.log("Suma: ", calc.sumar(5, 3));
console.log("Resta: ", calc.restar(10, 4));
console.log("Multiplicación: ", calc.multiplicar(6, 7));
console.log("División: ", calc.dividir(20, 5));
console.log("Potencia: ", calc.potencia(2, 3));
console.log("Factorial: ", calc.factorial(5));