"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const animal_1 = require("./animal");
class Gato extends animal_1.Animal {
    // construtor
    constructor(nome, idade, raca, corPelo) {
        super(nome, idade, raca);
        this.corPelo = corPelo;
    }
    getCorPelo() {
        return this.corPelo;
    }
    setCorPelo(cor) {
        this.corPelo = cor;
    }
    // polimorfismo
    fazerSom() {
        console.log(`${this.getNome()} diz: Miau!`);
    }
}
exports.Gato = Gato;
