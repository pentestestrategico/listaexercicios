"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculadoraSimples = void 0;
class CalculadoraSimples {
    somar(a, b) {
        return a + b;
    }
    subtrair(a, b) {
        return a - b;
    }
    multiplicar(a, b) {
        return a * b;
    }
    dividir(a, b) {
        if (b === 0) {
            throw new Error("Não é possível dividir por zero.");
        }
        return a / b;
    }
    potencia(base, expoente) {
        return Math.pow(base, expoente);
    }
    gerarMensagem(resultado) {
        return `Resultado: ${resultado}`;
    }
    exibirMensagem(mensagem) {
        console.log(mensagem);
    }
}
exports.CalculadoraSimples = CalculadoraSimples;
