"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = __importDefault(require("./animal"));
// Classe Morcego estende Animal e implementa o método comer
class Morcego extends animal_1.default {
    constructor(nome, raca, cor) {
        super(nome, raca, cor);
    }
    // Implementação específica do método abstrato
    comer() {
        console.log(`${this.nome} (morcego) está comendo frutas e insetos.`);
    }
}
exports.default = Morcego;
