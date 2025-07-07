"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const animal_1 = require("./animal");
class Cachorro extends animal_1.Animal {
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
    // subscrita de métodos - fazerSom (poliformismo)
    fazerSom() {
        console.log(`${this.getNome()} diz: Au Au!`);
    }
}
exports.Cachorro = Cachorro;
