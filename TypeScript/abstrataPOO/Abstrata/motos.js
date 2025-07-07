"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Moto = void 0;
const veiculos_1 = require("./veiculos");
class Moto extends veiculos_1.Veiculos {
    ligar() {
        console.log(`${this.marca}, ${this.modelo} Está ligada com ronco alto.`);
    }
}
exports.Moto = Moto;
