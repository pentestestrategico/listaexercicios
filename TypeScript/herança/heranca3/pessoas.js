"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoas = void 0;
class Pessoas {
    constructor() {
        this.id = 0;
        this.nome = '';
        this.idade = 0;
    }
    // metodos get
    getId() {
        return this.id;
    }
    getNome() {
        return this.nome;
    }
    getIdade() {
        return this.idade;
    }
    // metodos set
    setId(id) {
        this.id = id;
    }
    setNome(nome) {
        this.nome = nome;
    }
    // permitir inserir caso a idade seja maior que 18
    setIdade(idade) {
        if (idade <= 18) {
            return false;
        }
        else {
            this.idade = idade;
            return true;
        }
    }
}
exports.Pessoas = Pessoas;
