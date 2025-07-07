"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
const veiculos_1 = require("./veiculos");
class Carro extends veiculos_1.Veiculos {
    ligar() {
        console.log(`${this.marca}, ${this.modelo} Está ligado com motor silencioso`);
    }
}
exports.Carro = Carro;
