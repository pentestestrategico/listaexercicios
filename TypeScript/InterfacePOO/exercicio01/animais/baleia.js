"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = __importDefault(require("./animal"));
// Classe Baleia estende Animal e implementa o método comer
class Baleia extends animal_1.default {
    constructor(nome, raca, cor) {
        super(nome, raca, cor);
    }
    // Implementação específica do método abstrato
    comer() {
        console.log(`${this.nome} (baleia) está comendo krill e pequenos peixes.`);
    }
}
exports.default = Baleia;
