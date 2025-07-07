"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
class Circulo {
    constructor(raio) {
        this.raio = raio;
    }
    calcularArea() {
        return Math.PI * this.raio ** 2;
    }
    calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
    exibirValores() {
        console.log(`Círculo -> Raio: ${this.raio}`);
        console.log(`Área: ${this.calcularArea().toFixed(2)}`);
        console.log(`Perímetro: ${this.calcularPerimetro().toFixed(2)}`);
        console.log('---------------------------');
    }
}
exports.Circulo = Circulo;
