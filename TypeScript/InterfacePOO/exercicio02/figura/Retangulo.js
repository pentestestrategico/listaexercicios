"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Retangulo = void 0;
class Retangulo {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }
    calcularArea() {
        return this.altura * this.largura;
    }
    calcularPerimetro() {
        return 2 * (this.altura + this.largura);
    }
    exibirValores() {
        console.log(`Retângulo -> Altura: ${this.altura}, Largura: ${this.largura}`);
        console.log(`Área: ${this.calcularArea()}`);
        console.log(`Perímetro: ${this.calcularPerimetro()}`);
        console.log('---------------------------');
    }
}
exports.Retangulo = Retangulo;
